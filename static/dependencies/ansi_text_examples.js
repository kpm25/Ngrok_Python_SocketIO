 const Ansi = require('./ansi_text.js');



//a function to display the text style in color steps etc..
function testVariousANSI(){
                //#For 256 colors, the code is \033[38;5;#m for foreground and \033[48;5;#m for background, where # is a number from 0 to 255.
            //For 24-bit true color, the code is \033[38;2;R;G;Bm for foreground and \033[48;2;R;G;Bm for background, where R, G, and B
            //are numbers from 0 to 255 representing the red, green, and blue color channels.

            //  256 colors and 24-bit true color in JavaScript:
            console.log('\033[38;5;196m%s\033[0m', 'This is red text');
            console.log('\033[38;5;226m%s\033[0m', 'This is yellow text');
            console.log('\033[38;5;21m%s\033[0m', 'This is blue text');
            console.log('\033[38;5;46m%s\033[0m', 'This is green text');

            // 24-bit true color
            console.log('\033[38;2;255;0;0m%s\033[0m', 'This is red text');
            console.log('\033[38;2;255;255;0m%s\033[0m', 'This is yellow text');
            console.log('\033[38;2;0;0;255m%s\033[0m', 'This is blue text');
            console.log('\033[38;2;0;255;0m%s\033[0m', 'This is green text');
            //a spectrum of colors from red to blue
            console.log('\033[38;2;255;0;0m%s\033[0m', 'This is red text');
            console.log('\033[38;2;255;128;0m%s\033[0m', 'This is orange text');
            console.log('\033[38;2;255;255;0m%s\033[0m', 'This is yellow text');
            console.log('\033[38;2;128;255;0m%s\033[0m', 'This is lime text');
            console.log('\033[38;2;0;255;0m%s\033[0m', 'This is green text');
            console.log('\033[38;2;0;255;128m%s\033[0m', 'This is cyan text');
            console.log('\033[38;2;0;255;255m%s\033[0m', 'This is sky blue text');
            console.log('\033[38;2;0;128;255m%s\033[0m', 'This is light blue text');
            console.log('\033[38;2;0;0;255m%s\033[0m', 'This is blue text');
            console.log('\033[38;2;128;0;255m%s\033[0m', 'This is purple text');
            console.log('\033[38;2;255;0;255m%s\033[0m', 'This is magenta text');
            console.log('\033[38;2;255;0;128m%s\033[0m', 'This is pink text');

            //Complentary color spectrums in steps of 32 one one color to its complement
            //Green to red
            console.log('\033[38;2;0;255;0m%s\033[0m', 'This is green text');
            console.log('\033[38;2;32;223;0m%s\033[0m',  'This is step 1 text');
            console.log('\033[38;2;64;191;0m%s\033[0m',  'This is step 2 text');
            console.log('\033[38;2;96;159;0m%s\033[0m',  'This is step 3 text');
            console.log('\033[38;2;128;127;0m%s\033[0m',  'This is step 4 text');
            console.log('\033[38;2;160;95;0m%s\033[0m',  'This is step 5 text');
            console.log('\033[38;2;192;63;0m%s\033[0m',  'This is step 6 text');
            console.log('\033[38;2;224;31;0m%s\033[0m',  'This is step 7 text');
            console.log('\033[38;2;255;0;0m%s\033[0m',  'This is red text');

            //Blue to yellow
            console.log('\033[38;2;0;0;255m%s\033[0m', 'This is blue text');
            console.log('\033[38;2;32;32;223m%s\033[0m',  'This is step 1 text');
            console.log('\033[38;2;64;64;191m%s\033[0m',  'This is step 2 text');
            console.log('\033[38;2;96;96;159m%s\033[0m',  'This is step 3 text');
            console.log('\033[38;2;128;128;127m%s\033[0m',  'This is step 4 text');
            console.log('\033[38;2;160;160;95m%s\033[0m',  'This is step 5 text');
            console.log('\033[38;2;192;192;63m%s\033[0m',  'This is step 6 text');
            console.log('\033[38;2;224;224;31m%s\033[0m',  'This is step 7 text');
            console.log('\033[38;2;255;255;0m%s\033[0m',  'This is yellow text');

            //Red to cyan
            console.log('\033[38;2;255;0;0m%s\033[0m', 'This is red text');
            console.log('\033[38;2;223;32;32m%s\033[0m',  'This is step 1 text');
            console.log('\033[38;2;191;64;64m%s\033[0m',  'This is step 2 text');
            console.log('\033[38;2;159;96;96m%s\033[0m',  'This is step 3 text');
            console.log('\033[38;2;127;128;128m%s\033[0m',  'This is step 4 text');
            console.log('\033[38;2;95;160;160m%s\033[0m',  'This is step 5 text');
            console.log('\033[38;2;63;192;192m%s\033[0m',  'This is step 6 text');
            console.log('\033[38;2;31;224;224m%s\033[0m',  'This is step 7 text');
            console.log('\033[38;2;0;255;255m%s\033[0m',  'This is cyan text');

            //Yellow to purple
            console.log('\033[38;2;255;255;0m%s\033[0m', 'This is yellow text');
            console.log('\033[38;2;223;223;32m%s\033[0m',  'This is step 1 text');
            console.log('\033[38;2;191;191;64m%s\033[0m',  'This is step 2 text');
            console.log('\033[38;2;159;159;96m%s\033[0m',  'This is step 3 text');
            console.log('\033[38;2;127;127;128m%s\033[0m',  'This is step 4 text');
            console.log('\033[38;2;95;95;160m%s\033[0m',  'This is step 5 text');
            console.log('\033[38;2;63;63;192m%s\033[0m',  'This is step 6 text');
            console.log('\033[38;2;31;31;224m%s\033[0m',  'This is step 7 text');
            console.log('\033[38;2;0;0;255m%s\033[0m',  'This is purple text');

            //Cyan to pink
            console.log('\033[38;2;0;255;255m%s\033[0m', 'This is cyan text');
            console.log('\033[38;2;32;223;223m%s\033[0m',  'This is step 1 text');
            console.log('\033[38;2;64;191;191m%s\033[0m',  'This is step 2 text');
            console.log('\033[38;2;96;159;159m%s\033[0m',  'This is step 3 text');
            console.log('\033[38;2;128;127;127m%s\033[0m',  'This is step 4 text');
            console.log('\033[38;2;160;95;95m%s\033[0m',  'This is step 5 text');
            console.log('\033[38;2;192;63;63m%s\033[0m',  'This is step 6 text');
            console.log('\033[38;2;224;31;31m%s\033[0m',  'This is step 7 text');
            console.log('\033[38;2;255;0;255m%s\033[0m',  'This is pink text');

            //Purple to green
            console.log('\033[38;2;0;0;255m%s\033[0m', 'This is purple text');
            console.log('\033[38;2;32;32;223m%s\033[0m',  'This is step 1 text');
            console.log('\033[38;2;64;64;191m%s\033[0m',  'This is step 2 text');
            console.log('\033[38;2;96;96;159m%s\033[0m',  'This is step 3 text');
            console.log('\033[38;2;128;128;127m%s\033[0m',  'This is step 4 text');
            console.log('\033[38;2;160;160;95m%s\033[0m',  'This is step 5 text');
            console.log('\033[38;2;192;192;63m%s\033[0m',  'This is step 6 text');
            console.log('\033[38;2;224;224;31m%s\033[0m',  'This is step 7 text');
            console.log('\033[38;2;0;255;0m%s\033[0m',  'This is green text');

            //Pink to green
            console.log('\033[38;2;255;0;255m%s\033[0m', 'This is pink text');
            console.log('\033[38;2;223;32;223m%s\033[0m',  'This is step 1 text');
            console.log('\033[38;2;191;64;191m%s\033[0m',  'This is step 2 text');
            console.log('\033[38;2;159;96;159m%s\033[0m',  'This is step 3 text');
            console.log('\033[38;2;127;128;127m%s\033[0m',  'This is step 4 text');
            console.log('\033[38;2;95;160;95m%s\033[0m',  'This is step 5 text');
            console.log('\033[38;2;63;192;63m%s\033[0m',  'This is step 6 text');
            console.log('\033[38;2;31;224;31m%s\033[0m',  'This is step 7 text');
            console.log('\033[38;2;0;255;0m%s\033[0m',   'This is green text');

            //Green to purple
            console.log('\033[38;2;0;255;0m%s\033[0m', 'This is green text');
            console.log('\033[38;2;32;223;32m%s\033[0m',  'This is step 1 text');
            console.log('\033[38;2;64;191;64m%s\033[0m',  'This is step 2 text');
            console.log('\033[38;2;96;159;96m%s\033[0m',  'This is step 3 text');
            console.log('\033[38;2;128;127;128m%s\033[0m',  'This is step 4 text');
            console.log('\033[38;2;160;95;160m%s\033[0m',  'This is step 5 text');
            console.log('\033[38;2;192;63;192m%s\033[0m',  'This is step 6 text');
            console.log('\033[38;2;224;31;224m%s\033[0m',  'This is step 7 text');
            console.log('\033[38;2;0;0;255m%s\033[0m',   'This is purple text');




            //Here are the examples using background colors:

            // 256 colors
            console.log('\033[48;5;196m%s\033[0m', 'This is red background');
            console.log('\033[48;5;226m%s\033[0m', 'This is yellow background');
            console.log('\033[48;5;21m%s\033[0m', 'This is blue background');
            console.log('\033[48;5;46m%s\033[0m', 'This is green background');

            // 24-bit true color
            console.log('\033[48;2;255;0;0m%s\033[0m', 'This is red background');
            console.log('\033[48;2;255;255;0m%s\033[0m', 'This is yellow background');
            console.log('\033[48;2;0;0;255m%s\033[0m', 'This is blue background');
            console.log('\033[48;2;0;255;0m%s\033[0m', 'This is green background');
            //a spectrum of colors from red to blue
            console.log('\033[48;2;255;0;0m%s\033[0m', 'This is red background');
            console.log('\033[48;2;255;128;0m%s\033[0m', 'This is orange background');
            console.log('\033[48;2;255;255;0m%s\033[0m', 'This is yellow background');
            console.log('\033[48;2;128;255;0m%s\033[0m', 'This is lime background');
            console.log('\033[48;2;0;255;0m%s\033[0m', 'This is green background');
            console.log('\033[48;2;0;255;128m%s\033[0m', 'This is cyan background');
            console.log('\033[48;2;0;255;255m%s\033[0m', 'This is sky blue background');

            //Complentary color spectrums in steps of 32 one one color to its complement
            //Green to red
            console.log('\033[48;2;0;255;0m%s\033[0m', 'This is green background');
            console.log('\033[48;2;32;223;0m%s\033[0m',  'This is step 1 background');
            console.log('\033[48;2;64;191;0m%s\033[0m',  'This is step 2 background');
            console.log('\033[48;2;96;159;0m%s\033[0m',  'This is step 3 background');
            console.log('\033[48;2;128;127;0m%s\033[0m',  'This is step 4 background');
            console.log('\033[48;2;160;95;0m%s\033[0m',  'This is step 5 background');
            console.log('\033[48;2;192;63;0m%s\033[0m',  'This is step 6 background');
            console.log('\033[48;2;224;31;0m%s\033[0m',  'This is step 7 background');
            console.log('\033[48;2;255;0;0m%s\033[0m',  'This is red background');

            //Blue to yellow
            console.log('\033[48;2;0;0;255m%s\033[0m', 'This is blue background');
            console.log('\033[48;2;32;32;223m%s\033[0m',  'This is step 1 background');
            console.log('\033[48;2;64;64;191m%s\033[0m',  'This is step 2 background');
            console.log('\033[48;2;96;96;159m%s\033[0m',  'This is step 3 background');
            console.log('\033[48;2;128;128;127m%s\033[0m',  'This is step 4 background');
            console.log('\033[48;2;160;160;95m%s\033[0m',  'This is step 5 background');
            console.log('\033[48;2;192;192;63m%s\033[0m',  'This is step 6 background');
            console.log('\033[48;2;224;224;31m%s\033[0m',  'This is step 7 background');
            console.log('\033[48;2;255;255;0m%s\033[0m',  'This is yellow background');

            //Red to cyan
            console.log('\033[48;2;255;0;0m%s\033[0m', 'This is red background');
            console.log('\033[48;2;223;32;32m%s\033[0m',  'This is step 1 background');
            console.log('\033[48;2;191;64;64m%s\033[0m',  'This is step 2 background');
            console.log('\033[48;2;159;96;96m%s\033[0m',  'This is step 3 background');
            console.log('\033[48;2;127;128;128m%s\033[0m',  'This is step 4 background');
            console.log('\033[48;2;95;160;160m%s\033[0m',  'This is step 5 background');
            console.log('\033[48;2;63;192;192m%s\033[0m',  'This is step 6 background');
            console.log('\033[48;2;31;224;224m%s\033[0m',  'This is step 7 background');
            console.log('\033[48;2;0;255;255m%s\033[0m',  'This is cyan background');

            //Yellow to purple
            console.log('\033[48;2;255;255;0m%s\033[0m', 'This is yellow background');
            console.log('\033[48;2;223;223;32m%s\033[0m',  'This is step 1 background');
            console.log('\033[48;2;191;191;64m%s\033[0m',  'This is step 2 background');
            console.log('\033[48;2;159;159;96m%s\033[0m',  'This is step 3 background');
            console.log('\033[48;2;127;127;128m%s\033[0m',  'This is step 4 background');
            console.log('\033[48;2;95;95;160m%s\033[0m',  'This is step 5 background');
            console.log('\033[48;2;63;63;192m%s\033[0m',  'This is step 6 background');
            console.log('\033[48;2;31;31;224m%s\033[0m',  'This is step 7 background');
            console.log('\033[48;2;0;0;255m%s\033[0m',  'This is purple background');

            //Cyan to pink
            console.log('\033[48;2;0;255;255m%s\033[0m', 'This is cyan background');
            console.log('\033[48;2;32;223;223m%s\033[0m',  'This is step 1 background');
            console.log('\033[48;2;64;191;191m%s\033[0m',  'This is step 2 background');
            console.log('\033[48;2;96;159;159m%s\033[0m',  'This is step 3 background');
            console.log('\033[48;2;128;127;127m%s\033[0m',  'This is step 4 background');
            console.log('\033[48;2;160;95;95m%s\033[0m',  'This is step 5 background');
            console.log('\033[48;2;192;63;63m%s\033[0m',  'This is step 6 background');
            console.log('\033[48;2;224;31;31m%s\033[0m',  'This is step 7 background');
            console.log('\033[48;2;255;0;255m%s\033[0m',  'This is pink background');

            //Purple to green
            console.log('\033[48;2;0;0;255m%s\033[0m', 'This is purple background');
            console.log('\033[48;2;32;32;223m%s\033[0m',  'This is step 1 background');
            console.log('\033[48;2;64;64;191m%s\033[0m',  'This is step 2 background');
            console.log('\033[48;2;96;96;159m%s\033[0m',  'This is step 3 background');
            console.log('\033[48;2;128;128;127m%s\033[0m',  'This is step 4 background');
            console.log('\033[48;2;160;160;95m%s\033[0m',  'This is step 5 background');
            console.log('\033[48;2;192;192;63m%s\033[0m',  'This is step 6 background');
            console.log('\033[48;2;224;224;31m%s\033[0m',  'This is step 7 background');
            console.log('\033[48;2;0;255;0m%s\033[0m',  'This is green background');


            //Pink to green
            console.log('\033[48;2;255;0;255m%s\033[0m', 'This is pink background');
            console.log('\033[48;2;223;32;223m%s\033[0m',  'This is step 1 background');
            console.log('\033[48;2;191;64;191m%s\033[0m',  'This is step 2 background');
            console.log('\033[48;2;159;96;159m%s\033[0m',  'This is step 3 background');
            console.log('\033[48;2;127;128;127m%s\033[0m',  'This is step 4 background');
            console.log('\033[48;2;95;160;95m%s\033[0m',  'This is step 5 background');
            console.log('\033[48;2;63;192;63m%s\033[0m',  'This is step 6 background');
            console.log('\033[48;2;31;224;31m%s\033[0m',  'This is step 7 background');
            console.log('\033[48;2;0;255;0m%s\033[0m',   'This is green background');


            //Green to purple
            console.log('\033[48;2;0;255;0m%s\033[0m', 'This is green background');
            console.log('\033[48;2;32;223;32m%s\033[0m',  'This is step 1 background');
            console.log('\033[48;2;64;191;64m%s\033[0m',  'This is step 2 background');
            console.log('\033[48;2;96;159;96m%s\033[0m',  'This is step 3 background');
            console.log('\033[48;2;128;127;128m%s\033[0m',  'This is step 4 background');
            console.log('\033[48;2;160;95;160m%s\033[0m',  'This is step 5 background');
            console.log('\033[48;2;192;63;192m%s\033[0m',  'This is step 6 background');
            console.log('\033[48;2;224;31;224m%s\033[0m',  'This is step 7 background');
            console.log('\033[48;2;0;0;255m%s\033[0m',   'This is purple background');


                //Formatting style examples
                console.log('\033[1m%s\033[0m', 'This is bold text');
                console.log('\033[3m%s\033[0m', 'This is italic text');
                console.log('\033[4m%s\033[0m', 'This is underlined text');
                console.log('\033[7m%s\033[0m', 'This is inverted text');
                console.log('\033[5m%s\033[0m', 'This is blinking text');
                console.log('\033[2m%s\033[0m', 'This is dim text');
                console.log('\033[8m%s\033[0m', 'This is hidden text');
                console.log('\033[9m%s\033[0m', 'This is strikethrough text');

                //Combining styles
                console.log('\033[1m\033[3m\033[4m\033[7m\033[5m\033[2m\033[8m\033[9m%s\033[0m', 'This is a combination of styles');





}


 //testVariousANSI();

//examples using the ansi_text.js library
//let ansi = new Ansi();
//console.log(ansi.text("hello world").bold().underline().toString());

//let ansi = new Ansi();
//console.log(ansi.text("hello world").redText().orangeBackground().underline().toString());


  //function of ansi test commnads that takes an ansi object and returns executes the ansi commands
 function testAnsiCommands(ansi){
             // Example 1: Red text with green background
//        console.log(ansi.text("Hello World").rgbText(255, 0, 0).rgbBackground(0, 255, 0).getLine());
        console.log(ansi.rgbText(255, 0, 0).rgbBackground(0, 255, 0).text("Red Text on a Green background").getLine());
          console.log(ansi.rgbText(255, 0, 0).rgbBackground(0, 255, 0).text("*****Hello World").getLine());

      //underline and bold
        console.log(ansi.bold().underline().text("bold and underlined").getLine());

        // Example 2: Blue text with yellow background, bold and underlined
         console.log(ansi.rgbText(0, 0, 255).rgbBackground(255, 255, 0).bold().underline().text("Hello World").getLine());

        // Example 3: Magenta text with cyan background, dim and italic
        console.log(ansi.rgbText(255, 0, 255).rgbBackground(0, 255, 255).dim().italic().text("Hello World").getLine());

        // Example 1: Chaining multiple text color functions
        console.log(ansi.redText().text("and this is red text").greenText().text("This is green text ").getLine());

        // Example 2: Chaining text color and background color functions
        console.log(ansi.redText().greenBackground().text("This is red text on a green background").getLine());

        // Example 3: Chaining text color, background color, and style functions
        console.log(ansi.redText().greenBackground().bold().text("This is bold red text on a green background").getLine());

        // Example 4: Using disableAutoReset to keep the style for subsequent text
        console.log(ansi.disableAutoReset().redText().text("This is red ").text("and this is also red").getLine());

        console.log("is this red too??");

        // Example 5: Using reset to clear the style
        console.log(ansi.yellowText().text("This is yellow ").resetText().text("and this is default").getLine());

        // Example 6: Chaining multiple style functions
        console.log(ansi.bold().underline().text("This is bold and underlined").getLine());

        // Example 7: Using rgbText and rgbBackground for custom colors
        console.log(ansi.rgbText(128, 128, 128).rgbBackground(255, 255, 255).text("This is gray text on a white background").getLine());

         //white text on black background
        console.log(ansi.rgbText(255, 255, 255).rgbBackground(0, 0, 0).text("This is white text on a black background").getLine());
      //black text on white background
        console.log(ansi.rgbText(0, 0, 0).rgbBackground(255, 255, 255).text("This is black text on a white background").getLine());
        //red text on white background
        console.log(ansi.rgbBackground(255, 255, 255).rgbText(255, 0, 0).text("This is red text on a white background").getLine());
      //white text on red background
        console.log(ansi.rgbBackground(255, 0, 0).rgbText(255, 255, 255).text("This is white text on a red background").getLine());
      //underlined
        console.log(ansi.underline().text("This is underlined text").getLine());
      //bold orange text on cyan background with strikethrough and italic
        console.log(ansi.rgbBackground(0, 255, 255).rgbText(255, 165, 0).strikethroughOn().italic().bold().underline().text("This is bold orange text on a cyan background with strikethrough ,italic and underlined").getLine());

       //plain strike through text
           console.log(ansi.strikethroughOff().strikethroughOn().text("This is strikethrough text").getLine());

      //rapid blinking text
        console.log(ansi.rapidBlink().text("This is rapidly blinking text").getLine());
        //slow blinking text
        console.log(ansi.slowBlink().text("This is slowly blinking text").getLine());

 }



 //functions testing new code:
 function testNewCode(ansi){
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


 }



/*    //a function that tests animated random color text
    function testAnimatedRandomColorText(ansi, text , red = null,  green = null, blue = null){
        //animated random color text
        ansi.animateRandomColorText(text, red, green  , blue);
    }*/

 // a function that tests animated random color text
/*function testAnimatedRandomColorText(ansi, text, rgb = {r: null, g: null, b: null}, duration = 500){
    // animated random color text
    ansi.animateRandomColorText(text, rgb, duration);
}*/

  //a function that tests random color text
    function testRandomColorText(ansi){
            //random color text
//         console.log(ansi.randomColorText("This is random color text").getLine());
        ansi.randomColorText("This is random color text").print();


//      console.log(ansi.randomColorText("This is MORE random color text").getLine());
        ansi.randomColorText("This is MORE random color text").print();

    //   console.log(ansi.randomColorText("This is MORE random color text", 255, 0, 255).getLine());
        ansi.randomColorText("This is MORE random color text", 255, 0, 255).print();

    }


 function testAnimatedRandomColorText(ansi, text, rgb = [null, null, null], duration = 500){
    // animated random color text
    ansi.animateRandomColorText(text, rgb, duration);
}

 function testAnsiLibrary(testNumber, testString){



         if (testNumber == null){
             console.log("No test number provided");
             return;
        }else if (testNumber < 1 || testNumber > 6){
             console.log("Invalid test number");
             return;
         }

         //const ansi = new Ansi();
        switch(testNumber){
             case 1:
                 testAnsiCommands( new Ansi());
                 break;
                case 2:
                 testRandomColorText( new Ansi());
                 break;
                case 3:
                 testNewCode( new Ansi());
                 break;
                case 4:
                 testAnimatedRandomColorText( new Ansi(), testString, [255, 255, 255], 1000);
                 break;
                case 5:
                  new Ansi().test();
                break;
                case 6:
                  new Ansi().testAnimation();
                default:
                 console.log("Invalid test number");
                 break;

        }//end switch

      console.log('\n\n\n\nnormal text');
    }







    testNumber = parseInt( process.argv[2]);
    testString = process.argv[3];

    console.log("command line arguments provided");
    console.log(`test_number: ${testNumber}, test_string: ${testString}`);


if ((testNumber && testString)) {
    console.log("command line arguments provided.... ");
    console.log(`test_number: ${testNumber}, test_string: ${testString}`);
    testAnsiLibrary(testNumber, testString);
} else if (process.argv.length === 2) {
    console.log("Not run from command line.....");
    testAnsiLibrary(3, "The function was not run from the command line....");
} else {
    console.log("No command line arguments provided");
}




// script.js
function myConsoleTest() {
    console.log('Hello, world From Run from Console!');
}





// script.js
function myFunction() {
    // Check if this script is run directly from the command line
    if (require.main === module) {
        // Check if the function name is provided as a command line argument
        if (process.argv[2] === 'myConsoleTest') {
            myConsoleTest();
        }
        return;
    }

}




