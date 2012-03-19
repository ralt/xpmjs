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
        var firstArgument = arguments[0].split(' '),
            width = firstArgument[0],
            height = firstArgument[1],
            nbColors = firstArgument[2],
            nbCharactersPerColor = firstArgument[3],
            imgCharacters = [].slice.call(arguments, parseInt(nbColors) + 1),
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            map = [],
            characters,
            color
        canvas.width = width
        canvas.height = height
        for (var i = 0; i < nbColors; ++i) {
            characters = arguments[1 + i].substring(0, parseInt(nbCharactersPerColor))
            color = arguments[1 + i].substring(parseInt(nbCharactersPerColor) + 3)
            map.push({characters: characters, color: color})
        }
        for (var i = 0; i < height; ++i) {
            for (var j = 0; j < width; ++j) {
                for (var k = 0, l = map.length; k < l; ++k) {
                    if (map[k].characters === imgCharacters[i][j]) {
                        ctx.fillStyle = map[k].color
                        ctx.fillRect(j, i, 1, 1)
                    }
                }
            }
        }
        return canvas
    }
}

