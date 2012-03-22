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
            nbColors = parseInt(firstArgument[2], 10),
            nbCharactersPerColor = parseInt(firstArgument[3], 10),

        // Get the end of the argument array (all the characters of the image)
            imgCharacters = [].slice.call(arguments, nbColors + 1),

        // Create a canvas
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),

        // Declare some variables for later use
            map = [],
            characters,
            color,
            i,
            j,
            k,
            l

        // Define the width and height of the canvas
        canvas.width = width
        canvas.height = height

        // Add every mapping of characters and colors to the `map` array
        for (i = 0; i < nbColors; ++i) {
            characters = arguments[1 + i].substring(0, nbCharactersPerColor)
            color = arguments[1 + i].slice(-7)
            map.push({characters: characters, color: color})
        }

        // For every line of the ASCII art
        for (i = 0; i < height - 1; ++i) {

            // For every string of a line
            for (j = 0; j < (width * nbCharactersPerColor); j += nbCharactersPerColor) {

                // Loop to get the correct mapping
                for (k = 0, l = map.length; k < l; ++k) {

                    // If it maps, draw!
                    if (map[k].characters === imgCharacters[i].substr(j, nbCharactersPerColor)) {
                        ctx.fillStyle = map[k].color
                        ctx.fillRect((j * nbCharactersPerColor), i, 1, 1)

                        // Break out of the loop since we hit the nail already
                        break
                    }
                }
            }
        }

        // Return the canvas DOM element already drawn
        return canvas
    }
}

