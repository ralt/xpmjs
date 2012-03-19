var XPM = {
    /**
     * Only method of this scope for now: create()
     * Takes multiple parameters... here is the list:
     *   - "<width> <height> <number of colors> <characters used per color>"
     *   - "<character used> c <color>" <- for each color used
     *   - Drawing of the XPM.
     *
     * @see here for the inspiration: http://fr.wikipedia.org/wiki/X_PixMap
     */
    create: function() {
        // Split the first argument in an array
        var firstArgument = arguments[0].split(' '),

        // Get the width, height, number of colors and number of characters
        // per color with the first argument.
            width = firstArgument[0],
            height = firstArgument[1],
            nbColors = firstArgument[2],
            nbCharactersPerColor = firstArgument[3],

        // Get the end of the argument array (all the characters of the image)
            imgCharacters = [].slice.call(arguments, parseInt(nbColors) + 1),

        // Create a canvas
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),

        // Declare some variables for later use
            map = [],
            characters,
            color

        // Define the width and height of the canvas
        canvas.width = width
        canvas.height = height

        // Add every mapping of characters and colors to the `map` array
        for (var i = 0; i < nbColors; ++i) {
            characters = arguments[1 + i].substring(0, parseInt(nbCharactersPerColor))
            color = arguments[1 + i].substring(parseInt(nbCharactersPerColor) + 3)
            map.push({characters: characters, color: color})
        }

        // For every line of the ASCII art
        for (var i = 0; i < height; ++i) {

            // For every string of a line
            for (var j = 0; j < width; ++j) {

                // Loop to get the correct mapping
                for (var k = 0, l = map.length; k < l; ++k) {

                    // If it maps, draw!
                    if (map[k].characters === imgCharacters[i][j]) {
                        ctx.fillStyle = map[k].color
                        ctx.fillRect(j, i, 1, 1)
                    }
                }
            }
        }

        // Return the canvas DOM element already drawn
        return canvas
    }
}

