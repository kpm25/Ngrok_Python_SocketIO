# Ngrok_Python_SocketIO

## Description
This project demonstrates communication between a Flask server and a Node.js client using Socket.IO and Ngrok for tunneling. It includes both GET and POST requests to the Flask server and provides a simple web interface for testing these communications.

## Installation

### Python Dependencies
1. Create a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    ```
2. Activate the virtual environment:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```
3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

### Node.js Dependencies
1. Install the required npm packages:
    ```bash
    npm install
    ```

## Running the Project
1. Start the Flask server:
    ```bash
    python app.py
    ```
2. Start the Node.js server:
    ```bash
    npm start
    ```
3. Start Ngrok with the specified configuration:
    ```bash
    ngrok start --config C:\Users\Admin\AppData\Local\ngrok\ngrok.yml tunnel1 tunnel2
    ```

## Usage
- Open the web interface in your browser.
- Use the "Test GET Communication with Flask" button to send a GET request to the Flask server.
- Use the "Test POST Communication with Flask" button to send a POST request to the Flask server.
- The responses will be displayed in the console and on the web page.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.