
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Ansi = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    const colors = {
            red: { r: 255, g: 0, b: 0 },
            orange: { r: 255, g: 128, b: 0 },
            yellow: { r: 255, g: 255, b: 0 },
            lime: { r: 128, g: 255, b: 0 },
            green: { r: 0, g: 255, b: 0 },
            cyan: { r: 0, g: 255, b: 128 },
            skyBlue: { r: 0, g: 255, b: 255 },
            lightBlue: { r: 0, g: 128, b: 255 },
            blue: { r: 0, g: 0, b: 255 },
            purple: { r: 128, g: 0, b: 255 },
            magenta: { r: 255, g: 0, b: 255 },
            pink: { r: 255, g: 0, b: 128 },
            white: { r: 255, g: 255, b: 255 },
            black: { r: 0, g: 0, b: 0 },
            navy: { r: 0, g: 0, b: 128 },
            darkBlue: { r: 0, g: 0, b: 139 },
            mediumBlue: { r: 0, g: 0, b: 205 },
            royalBlue: { r: 65, g: 105, b: 225 },
            steelBlue: { r: 70, g: 130, b: 180 },
            lightSteelBlue: { r: 176, g: 224, b: 230 },
            lightBlue: { r: 173, g: 216, b: 230 },
            powderBlue: { r: 176, g: 224, b: 230 },
            paleTurquoise: { r: 175, g: 238, b: 238 },
            darkTurquoise: { r: 0, g: 206, b: 209 },
            mediumTurquoise: { r: 72, g: 209, b: 204 },
            turquoise: { r: 64, g: 224, b: 208 },
            aqua: { r: 0, g: 255, b: 255 },
            darkGreen: { r: 0, g: 100, b: 0 },
            green: { r: 0, g: 128, b: 0 },
            darkOliveGreen: { r: 85, g: 107, b: 47 },
            oliveDrab: { r: 107, g: 142, b: 35 },
            yellowGreen: { r: 154, g: 205, b: 50 },
            limeGreen: { r: 50, g: 205, b: 50 },
            lawnGreen: { r: 124, g: 252, b: 0 },
            chartreuse: { r: 127, g: 255, b: 0 },
            gold: { r: 255, g: 215, b: 0 },
            khaki: { r: 240, g: 230, b: 140 },
            peachPuff: { r: 255, g: 218, b: 185 },
            moccasin: { r: 255, g: 228, b: 181 },
            bisque: { r: 255, g: 228, b: 196 },
            mistyRose: { r: 255, g: 228, b: 225 },
            blanchedAlmond: { r: 255, g: 235, b: 205 },
            papayaWhip: { r: 255, g: 239, b: 213 },
            lavenderBlush: { r: 255, g: 240, b: 245 },
            seashell: { r: 255, g: 245, b: 238 },
            cornsilk: { r: 255, g: 248, b: 220 },
            lemonChiffon: { r: 255, g: 250, b: 205 },
            floralWhite: { r: 255, g: 250, b: 240 },
            snow: { r: 255, g: 250, b: 250 },
            lightYellow: { r: 255, g: 255, b: 224 },
            darkOliveGreen: { r: 85, g: 107, b: 47 },
            oliveDrab: { r: 107, g: 142, b: 35 },
            yellowGreen: { r: 154, g: 205, b: 50 },
            limeGreen: { r: 50, g: 205, b: 50 },
            lawnGreen: { r: 124, g: 252, b: 0 },
            chartreuse: { r: 127, g: 255, b: 0 },
            gold: { r: 255, g: 215, b: 0 },
            khaki: { r: 240, g: 230, b: 140 },
            peachPuff: { r: 255, g: 218, b: 185 },
            moccasin: { r: 255, g: 228, b: 181 },
            bisque: { r: 255, g: 228, b: 196 },
            mistyRose: { r: 255, g: 228, b: 225 },
            blanchedAlmond: { r: 255, g: 235, b: 205 },
            papayaWhip: { r: 255, g: 239, b: 213 },
            lavenderBlush: { r: 255, g: 240, b: 245 },
            seashell: { r: 255, g: 245, b: 238 },
            cornsilk: { r: 255, g: 248, b: 220 },
            lemonChiffon: { r: 255, g: 250, b: 205 },
            floralWhite: { r: 255, g: 250, b: 240 },
            snow: { r: 255, g: 250, b: 250 },
            lightYellow: { r: 255, g: 255, b: 224 },
            ivory: { r: 255, g: 255, b: 240 },
            white: { r: 255, g: 255, b: 255 },
            gray: { r: 128, g: 128, b: 128 },
            silver: { r: 192, g: 192, b: 192 },
            darkGray: { r: 169, g: 169, b: 169 },
             dimGray: { r: 105, g: 105, b: 105 },
            bronze: { r: 205, g: 127, b: 50 },
            tan: { r: 210, g: 180, b: 140 },
            ruby: { r: 224, g: 17, b: 95 },
            brown: { r: 165, g: 42, b: 42 },

    };

     const styles = {
            bold: '1',
            dim: '2',
            italic: '3',
            underline: '4',
            blink: '5',
            invert: '7',
            hide: '8',
            slowBlink: '5',
            rapidBlink: '6',
            strikethroughOn: '9',
            strikethroughOff: '29',
             overline: '53',//: Overlined text
            doubleUnderline: '21',//: Double underlined text
            fraktur: '20',//: Fraktur (gothic) text
            encircled: '52',//: Encircled text
            framed: '51',//: Framed text
        };
    // Your existing Ansi class definition here
      class Ansi {
            constructor() {
                    if (typeof window === 'undefined') { // Check if it's a Node.js environment
                        this.readline = require('readline');
                    }
                this.str = '';
                this.pending = '';
                this.autoReset = true; // Add a flag for automatic reset

                 // Add color functions
                for (let color in colors) {
                    this[color] = function() {
                        return this.rgb(colors[color].r, colors[color].g, colors[color].b);
                    }
                    this['bg' + color.charAt(0).toUpperCase() + color.slice(1)] = function() {
                        return this.bgRGB(colors[color].r, colors[color].g, colors[color].b);
                    }
                }

                // Add style functions
                for (let style in styles) {
                    this[style] = function() {
                        this.pending += `\x1B[${styles[style]}m`;
                        return this;
                    }
                }
            }


            text(str) {
                this.str += this.pending + str;
                this.pending = '';
                return this;
            }





             rgb(r, g, b) {
                this.pending += `\x1B[38;2;${r};${g};${b}m`;
                return this;
              }

          bgRGB(r, g, b) {
            this.pending += `\x1B[48;2;${r};${g};${b}m`;
            return this;
           }





                // Modify the reset method to also set the autoReset flag
                resetText() {
                    this.str = `\x1B[0m${this.str}\x1B[0m`;
                    this.autoReset = true;
                    return this;
                }

                // Add a method to disable automatic reset
                disableAutoReset() {
                    this.autoReset = false;
                    return this;
                }


            getText() {
                const result = this.autoReset ? `${this.str}${this.pending}\x1B[0m` : `${this.str}${this.pending}`;
                this.str = '';
                return result;
            }

               getLine() {
                    const result = this.autoReset ? `${this.str}${this.pending}\x1B[0m` : `${this.str}${this.pending}`;
                    this.str = '';
                    this.pending = '';
                    return result + '\n';
                }
               print() {
                    const result = this.autoReset ? `${this.str}${this.pending}\x1B[0m` : `${this.str}${this.pending}`;
                    this.str = '';
                    this.pending = '';
                    console.log(result);
                    return result;
                }

                resetString() {
                    this.str = '';

                    return this;
                }
                //reset all to default
                resetAnsi() {
                    this.str = '';
                    this.pending = '';
                    this.autoReset = true;
                    console.log('\x1b[0m');
                    return this;
                }




              randomColorText(message, bgR = null, bgG = null, bgB = null) {
                    let temp = '';
                    for (let i = 0; i < message.length; i++) {
                        const r = Math.floor(Math.random() * 256);
                        const g = Math.floor(Math.random() * 256);
                        const b = Math.floor(Math.random() * 256);
                        if (bgR !== null && bgG !== null && bgB !== null) {
                            // If a background color is provided, include it in the ANSI escape code
                            temp += `\x1B[38;2;${r};${g};${b};48;2;${bgR};${bgG};${bgB}m${message[i]}`;
                        } else {
                            temp += `\x1B[38;2;${r};${g};${b}m${message[i]}`;
                        }
                    }
                    this.str += temp;
                    return this;
                }


                animateRandomColorText(message, rgbOrDuration = [null, null, null], duration = 500) {
                   if (typeof process !== 'undefined' && process.stdout && this.readline) { // Check if it's a Node.js environment
                        let rgb;
                        if (Array.isArray(rgbOrDuration)) {
                            rgb = rgbOrDuration;
                        } else if (typeof rgbOrDuration === 'number') {
                            rgb = [null, null, null];
                            duration = rgbOrDuration;
                        } else {
                            throw new Error('Second argument must be an array or a number');
                        }
                        const [r, g, b] = rgb;

                        let intervalId = setInterval(() => {
                            let temp = '';
                            for (let i = 0; i < message.length; i++) {
                                const rText = Math.floor(Math.random() * 256);
                                const gText = Math.floor(Math.random() * 256);
                                const bText = Math.floor(Math.random() * 256);
                                if (r !== null && g !== null && b !== null) {
                                    temp += `\x1B[38;2;${rText};${gText};${bText};48;2;${r};${g};${b}m${message[i]}`;
                                } else {
                                    temp += `\x1B[38;2;${rText};${gText};${bText}m${message[i]}`;
                                }
                            }
                            this.str += temp;
                            process.stdout.write('\x1Bc'); // Clear console
                            process.stdout.write(this.str); // Write to console
                            this.str = '';
                        }, duration); // Change color every duration milliseconds


                    const resetAndExit = () => {
                        clearInterval(intervalId);
                        this.resetAnsi();
                        process.stdin.setRawMode(false); // Reset terminal mode
                        console.log('Interval cleared and text reset to default');
                        process.exit(0); // Exit process
                    };

                    this.readline.emitKeypressEvents(process.stdin);
                    process.stdin.setRawMode(true);
                    process.stdin.on('keypress', (str, key) => {
                        if (key.name === 'return') {
                            clearInterval(intervalId);

                            this.resetAnsi();
                            process.stdin.setRawMode(false); // Reset terminal mode
                            console.log('Interval cleared and text reset to default');
                                this.red().bgBlack().text('This should be red text on a black background').print();
                                this.cyan().bgBlack().text('This should be cyan text on a black background').print();
                                this.green().bgBlack().text('This should be green text on a black background').print();
                                this.blue().bgBlack().text('This should be blue text on a black background').print();
                                this.yellow().bgBlack().text('This should be yellow text on a black background').print();

                        }else if (key.ctrl && key.name === 'c') { //or:  key.sequence === '\u0003') { // '\u0003' is the sequence for Ctrl+C
                            resetAndExit();

                        }
                    });
                        // Handle 'SIGINT' event
                        process.on('SIGINT', () => {
                            clearInterval(intervalId);
                            this.resetAnsi();
                            process.stdin.setRawMode(false); // Reset terminal mode
                            console.log('Interval cleared and text reset to default due to SIGINT');
                            process.exit(0); // Exit process
                        });
                } else {
                    console.warn('animateRandomColorText is not supported in this environment');
                }
                return this;
            }//end animateRandomColorText


              //test methods:
               test(){
                       this.testAnsi(this);
                       this.testRandomColorText(this);
                }
                testAnimation(){
                      this.testAnimatedRandomColorText(this, "hello world!!!!", [255, 255, 255], 200);
                }


                 //functions testing new code:
                   testAnsi(ansi){
                         // Example 1: Red text with green background

                    // Red text on blue background, bold
                    ansi.red().bgBlue().bold().text("Hello World").print();

                    // Underline and bold
                    ansi.bold().underline().text("bold and underlined").print();

                    // Blue text with yellow background, bold and underlined
                    ansi.blue().bgYellow().bold().underline().text("Hello World").print();

                    // Magenta text with cyan background, dim and italic
                    ansi.magenta().bgCyan().dim().italic().text("Hello World").print();

                    // Chaining multiple text color functions
                    ansi.red().text("and this is red text").green().text("This is green text ").print();

                    // Chaining text color and background color functions
                    ansi.red().bgGreen().text("This is red text on a green background").print();

                    // Chaining text color, background color, and style functions
                    ansi.red().bgGreen().bold().text("This is bold red text on a green background").print();

                    // Using disableAutoReset to keep the style for subsequent text
                    ansi.disableAutoReset().red().text("This is red ").text("and this is also red").print();

                    // Using reset to clear the style
                    ansi.yellow().text("This is yellow ").resetText().text("and this is default").print();

                    // Chaining multiple style functions
                    ansi.bold().underline().text("This is bold and underlined").print();

                    // Using rgb and bgRGB for custom colors
                    ansi.rgb(128, 128, 128).bgRGB(255, 255, 255).text("This is gray text on a white background").print();

                    // White text on black background
                    ansi.white().bgBlack().text("This is white text on a black background").print();

                    // Black text on white background
                    ansi.black().bgWhite().text("This is black text on a white background").print();

                    // Red text on white background
                    ansi.red().bgWhite().text("This is red text on a white background").print();

                    // White text on red background
                    ansi.white().bgRed().text("This is white text on a red background").print();

                    // Underlined
                    ansi.underline().text("This is underlined text").print();

                    // Bold orange text on cyan background with strikethrough and italic
                    ansi.rgb(255, 165, 0).bgCyan().strikethroughOn().italic().bold().underline().text("This is bold orange text on a cyan background with strikethrough ,italic and underlined").print();

                    // Plain strike through text
                    ansi.strikethroughOn().text("This is strikethrough text").print();

                    // Rapid blinking text
                    ansi.rapidBlink().text("This is rapidly blinking text").print();

                    // Slow blinking text
                    ansi.slowBlink().text("This is slowly blinking text").print();
                         ansi.pink().bgWhite().bold().underline().text("This is pink text on a white background").yellow().bgRed().bold().underline().text("This is yellow text on a red background").print();
                        //    ansi.randomColorText("This is random color text");

                         // Overlined text
                    ansi.overline().text("This is overlined text").print();

                    // Double underlined text
                    ansi.doubleUnderline().text("This is double underlined text").print();

                    // Fraktur (gothic) text
                    ansi.fraktur().text("This is fraktur text").print();

                    // Encircled text
                    ansi.encircled().text("This is encircled text").print();

                    // Framed text
                    ansi.framed().text("This is framed text").print();

                    // Test new colors
                    ansi.navy().text("This is navy text").print();
                    ansi.darkBlue().text("This is dark blue text").print();
                    ansi.mediumBlue().text("This is medium blue text").print();
                    ansi.royalBlue().text("This is royal blue text").print();
                    ansi.steelBlue().text("This is steel blue text").print();
                    ansi.lightSteelBlue().text("This is light steel blue text").print();
                    ansi.lightBlue().text("This is light blue text").print();
                    ansi.powderBlue().text("This is powder blue text").print();
                    ansi.paleTurquoise().text("This is pale turquoise text").print();
                    ansi.darkTurquoise().text("This is dark turquoise text").print();
                    ansi.mediumTurquoise().text("This is medium turquoise text").print();
                    ansi.turquoise().text("This is turquoise text").print();
                    ansi.aqua().text("This is aqua text").print();
                    ansi.darkGreen().text("This is dark green text").print();
                    ansi.green().text("This is green text").print();
                    ansi.darkOliveGreen().text("This is dark olive green text").print();
                    ansi.oliveDrab().text("This is olive drab text").print();
                    ansi.yellowGreen().text("This is yellow green text").print();
                    ansi.limeGreen().text("This is lime green text").print();
                    ansi.lawnGreen().text("This is lawn green text").print();
                    ansi.chartreuse().text("This is chartreuse text").print();
                    ansi.gold().text("This is gold text").print();
                    ansi.khaki().text("This is khaki text").print();
                    ansi.peachPuff().text("This is peach puff text").print();
                    ansi.moccasin().text("This is moccasin text").print();
                    ansi.bisque().text("This is bisque text").print();
                    ansi.mistyRose().text("This is misty rose text").print();
                    ansi.blanchedAlmond().text("This is blanched almond text").print();
                    ansi.papayaWhip().text("This is papaya whip text").print();
                    ansi.lavenderBlush().text("This is lavender blush text").print();
                    ansi.seashell().text("This is seashell text").print();
                    ansi.cornsilk().text("This is cornsilk text").print();
                    ansi.lemonChiffon().text("This is lemon chiffon text").print();
                    ansi.floralWhite().text("This is floral white text").print();
                    ansi.snow().text("This is snow text").print();
                    ansi.lightYellow().text("This is light yellow text").print();
                    ansi.ivory().text("This is ivory text").print();
                    ansi.white().text("This is white text").print();

                         //test new background colors
                    ansi.bgNavy().text("This is navy background").print();
                    ansi.bgDarkBlue().text("This is dark blue background").print();
                    ansi.bgMediumBlue().text("This is medium blue background").print();
                    ansi.bgRoyalBlue().text("This is royal blue background").print();
                    ansi.bgSteelBlue().text("This is steel blue background").print();
                    ansi.bgLightSteelBlue().text("This is light steel blue background").print();
                    ansi.bgLightBlue().text("This is light blue background").print();
                    ansi.bgPowderBlue().text("This is powder blue background").print();
                    ansi.bgPaleTurquoise().text("This is pale turquoise background").print();
                    ansi.bgDarkTurquoise().text("This is dark turquoise background").print();
                    ansi.bgMediumTurquoise().text("This is medium turquoise background").print();
                    ansi.bgTurquoise().text("This is turquoise background").print();
                    ansi.bgAqua().text("This is aqua background").print();
                    ansi.bgDarkGreen().text("This is dark green background").print();
                    ansi.bgGreen().text("This is green background").print();
                    ansi.bgDarkOliveGreen().text("This is dark olive green background").print();
                    ansi.bgOliveDrab().text("This is olive drab background").print();
                    ansi.bgYellowGreen().text("This is yellow green background").print();
                    ansi.bgLimeGreen().text("This is lime green background").print();
                    ansi.bgLawnGreen().text("This is lawn green background").print();
                    ansi.bgChartreuse().text("This is chartreuse background").print();
                    ansi.bgGold().text("This is gold background").print();
                    ansi.bgKhaki().text("This is khaki background").print();
                    ansi.bgPeachPuff().text("This is peach puff background").print();
                    ansi.bgMoccasin().text("This is moccasin background").print();
                    ansi.bgBisque().text("This is bisque background").print();
                    ansi.bgMistyRose().text("This is misty rose background").print();
                    ansi.bgBlanchedAlmond().text("This is blanched almond background").print();
                    ansi.bgPapayaWhip().text("This is papaya whip background").print();
                    ansi.bgLavenderBlush().text("This is lavender blush background").print();
                    ansi.bgSeashell().text("This is seashell background").print();
                    ansi.bgCornsilk().text("This is cornsilk background").print();
                    ansi.bgLemonChiffon().text("This is lemon chiffon background").print();
                    ansi.bgFloralWhite().text("This is floral white background").print();
                    ansi.bgSnow().text("This is snow background").print();
                    ansi.bgLightYellow().text("This is light yellow background").print();
                    let str = ansi.bgIvory().text("This is ivory background").getLine();
                    str+= ansi.bgWhite().text("This is white background").getLine();
                    str+= ansi.bgBlack().text("This is black background").getLine();
                    str+= ansi.bgGray().text("This is gray background").getLine();
                    str+= ansi.bgSilver().text("This is silver background").getLine();
                    str+= ansi.bgDarkGray().text("This is dark gray background").getLine();
                    str+= ansi.bgDimGray().text("This is dim gray background").getLine();
                     console.log(str);


                    str = ansi.bronze().text("This is bronze text").getText();
                    str+= ansi.tan().text("This is tan text").getText();
                    str+= ansi.ruby().text("This is ruby text").getText();

                    console.log(str);


                 } //end testAnsi



                  //a function that tests random color text
                  testRandomColorText(ansi){
                        //random color text
//                         console.log(ansi.randomColorText("This is random color text").getLine());
//
//
//                      console.log(ansi.randomColorText("This is MORE random color text").getLine());
//
//                       console.log(ansi.randomColorText("This is MORE random color text", 255, 0, 255).getLine());
                              ansi.randomColorText("This is random color text").print();

                    //      console.log(ansi.randomColorText("This is MORE random color text").getLine());
                            ansi.randomColorText("This is MORE random color text").print();

                        //   console.log(ansi.randomColorText("This is MORE random color text", 255, 0, 255).getLine());
                            ansi.randomColorText("This is MORE random color text", 255, 0, 255).print();
                        //light green background
                          ansi.randomColorText("This is MORE random color text", 0, 255, 0).print();

                } //end testRandomColorText

                testAnimatedRandomColorText(ansi, text, rgb = [null, null, null], duration = 500){
                    // animated random color text
                    ansi.animateRandomColorText(text, rgb, duration);
                }




        }

    // Return the Ansi class as the exported value
    return Ansi;
 }));





//in this code, factory is a function that returns the Ansi class. The outer function checks the environment and decides how to expose the Ansi class.
//If define is a function and define.amd is truthy, it uses AMD syntax. If module is an object and module.exports is available, it uses CommonJS syntax.
//Otherwise, it attaches Ansi to the global object (window in a browser).
//
//Now you can use your Ansi class in Node.js with require:
//
//
//const Ansi = require('./ansi_text.js');
//
//And in the browser with a <script> tag:
//
//
//<script src="ansi_text.js"></script>
//<script>
//    var ansi = new Ansi();
//    // ... use the ansi instance ...
//</script>
//
//Or with AMD:
//
//define(['ansi_text'], function(Ansi) {
//    var ansi = new Ansi();
//    // ... use the ansi instance ...
//});
//
//
//
//AMD stands for Asynchronous Module Definition. It's a JavaScript API for defining modules where both the module and its dependencies can be
//asynchronously loaded. It's particularly well suited for the browser environment where synchronous loading of modules can result in
//performance issues.  In AMD, modules are defined with the define function.
//
//Here's an example:
//
//define(['dependency1', 'dependency2'], function(dependency1, dependency2) {
//    // Module code here...
//    return someExportedValue;
//});
//
//
//In this example, dependency1 and dependency2 are dependencies of the module. The function is a callback that gets executed once
//all dependencies are loaded, receiving the exports of the dependencies as its arguments. The return value of the function is
//the exported value of the module.
//
//



