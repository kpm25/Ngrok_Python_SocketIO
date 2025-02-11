import os
import json
import requests
import random
import string
from flask import Flask, request, jsonify, render_template
from flask_socketio import SocketIO
from flask_cors import CORS
from dotenv import load_dotenv
from colorama import Fore, Style
import threading

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*", max_http_buffer_size=1000000)  # Increase buffer size


# this old route is not needed as i used jinja templating to pass the env variable to the front end instead
# @app.route('/get-env')
# def get_env():
#     flask_server_url = os.getenv('FLASK_SERVER_URL')
#     print(Fore.GREEN + f"FLASK_SERVER_URL: {flask_server_url}" + Style.RESET_ALL)
#     return jsonify({'FLASK_SERVER_URL': flask_server_url})


@app.route('/')
def index():
    flask_server_url = os.getenv('FLASK_SERVER_URL') if os.getenv('USE_NGROK') == 'true' else os.getenv('LOCAL_FLASK_SERVER_URL')
    print(Fore.GREEN + f"FLASK_SERVER_URL: {flask_server_url}" + Style.RESET_ALL)
    return render_template('index.html', flask_server_url=flask_server_url)


@app.route('/save', methods=['POST'])
def save():
    data = request.json
    client_ip = request.remote_addr
    public_ip = client_ip  # Default to local IP

    try:
        # Use an external service to get the public IP address (IPv4 or IPv6)
        response = requests.get('https://api64.ipify.org?format=json', timeout=5)
        if response.status_code == 200:
            public_ip = response.json().get('ip')
    except requests.RequestException as e:
        print(f"Error fetching public IP: {e}")

    print('Received save:', data)
    message = {
        'message': data['message'],
        'datetime': data['datetime'],
        'random_string': data['random_string'],
        'bgColor': data['bgColor'],
        'textColor': data['textColor'],
        'ip': public_ip
    }
    try:
        if os.path.exists('messages.json'):
            with open('messages.json', 'r+') as file:
                file.seek(0, os.SEEK_END)
                if file.tell() == 0:
                    file.write('[')
                else:
                    file.seek(file.tell() - 1, os.SEEK_SET)
                    file.write(',\n')
                file.write(json.dumps(message) + '\n]')
        else:
            with open('messages.json', 'w') as file:
                file.write('[' + json.dumps(message) + '\n]')
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

    # Emit a socket event to refresh the message list
    socketio.emit('refresh-messages', namespace='/')

    return jsonify({'status': 'success'})


@app.route('/messages', methods=['GET'])
def get_messages():
    messages = []
    try:
        with open('messages.json', 'r') as file:
            messages = json.load(file)  # Load the entire JSON content
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error reading messages: {e}")
    print(Fore.LIGHTGREEN_EX + f"Messages: {messages}" + Style.RESET_ALL)
    return jsonify(messages)


@socketio.on('message')
def handle_message(data):
    print('Received message:', data)
    socketio.emit('slider-update', {'data': data['data']})


@socketio.on('slider-update')
def handle_slider_update(data):
    print('Slider update received:', data)
    # Emit to all clients
    # socketio.emit('slider-update-client', {'data': data['data']})
    # Broadcast to all clients except the sender
    socketio.server.manager.emit('slider-update-client', {'data': data['data']}, namespace='/', room=None,
                                 skip_sid=request.sid)


# a route to displat toastr_examples.html
@app.route('/toastr_examples')
def toastr_examples():
    return render_template('toastr_examples.html')


@app.route('/receive-from-node', methods=['GET'])
def receive_from_node():
    data = {
        'message': request.args.get('message'),
        'datetime': request.args.get('datetime'),
        'random_string': request.args.get('random_string'),
        'bgColor': request.args.get('bgColor'),
        'textColor': request.args.get('textColor')
    }
    print('Received from Node.js:', data)
    print(Fore.LIGHTCYAN_EX + '********Received from Node.js:', data, Style.RESET_ALL)
    # send socket event to all clients with the received data
    socketio.emit('receive-from-node', data, namespace='/')
    return jsonify({'status': 'success', 'data': data})


# def communicate_with_node():
#     print(Fore.YELLOW + '********Communicating with Node.js...' + Style.RESET_ALL)
#     try:
#         params = {
#             'message': 'Hello from Flask',
#             'datetime': '2023-10-10T10:10:10Z',
#             'random_string': 'randomString456',
#             'bgColor': '#000000',
#             'textColor': '#ffffff'
#         }
#         response = requests.get('http://localhost:5000/receive-from-flask', params=params)
#         response.raise_for_status()  # Ensure we raise an error for bad status codes
#         print(Fore.LIGHTCYAN_EX + '********Response from Node.js:', response.text + Style.RESET_ALL)
#         response_json = response.json()
#         print(Fore.LIGHTCYAN_EX + '********Response from Node.js (JSON):', response_json + Style.RESET_ALL)
#     except requests.RequestException as e:
#         print(f'Error communicating with Node.js: {e}')
#     except ValueError as e:
#         print(f'Error parsing JSON response from Node.js: {e}')


@app.route('/test-communicate-with-node', methods=['GET'])
def test_communicate_with_node():
    print(Fore.YELLOW + '********Testing communication with Node.js called...' + Style.RESET_ALL)

    try:
        params = {
            'message': 'Hello from Flask ___ ' + random_string(10),
            'datetime': '2023-10-10T10:10:10Z',
            'random_string': 'randomString456 ___ ' + random_string(10),
            'bgColor': '#000000',
            'textColor': '#ffffff'
        }
        print(Fore.LIGHTCYAN_EX + '********Sending to Node.js:', str(params) + Style.RESET_ALL)
        nodejs_server_url = os.getenv('NODEJS_SERVER_URL') if os.getenv('USE_NGROK') == 'true' else os.getenv(
            'LOCAL_NODEJS_SERVER_URL')
        # debug in yellow the Node.js server url
        print(Fore.YELLOW + f"Node.js server URL: {nodejs_server_url}" + Style.RESET_ALL)
        response = requests.get(f"{nodejs_server_url}/receive-from-flask", params=params)
        response.raise_for_status()
        data = response.json()
        print(Fore.LIGHTCYAN_EX + '********Response from Node.js:', str(data) + Style.RESET_ALL)
        return jsonify({'success': True, 'message': 'Communication with Node.js successful', 'data': data})
    except requests.RequestException as e:
        print(Fore.RED + '********Error:', str(e) + Style.RESET_ALL)
        return jsonify({'success': False, 'message': str(e)})
    except ValueError as e:
        print(Fore.RED + '********Error parsing JSON:', str(e) + Style.RESET_ALL)
        return jsonify({'success': False, 'message': 'Error parsing JSON response from Node.js'})


# method to return random string of given length
def random_string(length):
    _str = ''.join(random.choices(string.ascii_letters + string.digits, k=length))
    print(Fore.LIGHTMAGENTA_EX + '********Random String:', _str + Style.RESET_ALL)
    return _str


# def run_after_delay():
#     threading.Timer(5.0, communicate_with_node).start()


if __name__ == '__main__':
    # run_after_delay()
    socketio.run(app, host='0.0.0.0', port=4000)
