var XPM = {
    /**
     * Only method of this scope: render
     * Takes multiple parameters... here is the list:
     *   - width: width of the image
     *   - height: height of the image
     *   - nbColors: number of colors used
     *   - nbCharactersPerColor: number of characters per color
     *   - "<character used> c <color>" <- for each color used
     *   - Drawing of the XPM.
     *
     * @see here for the inspiration: http://en.wikipedia.org/wiki/X_PixMap
     */
    render: function() {
        var width = arguments[0]
        var height = arguments[1]
        var nbColors = arguments[2]
        var nbCharactersPerColor = arguments[3]
        var canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        var ctx = canvas.getContext('2d')
        var map = []
        for (var i = 0; i < nbColors; ++i) {
            var character = arguments[4 + i].substring(0, nbCharactersPerColor)
            var color = arguments[4 + i].substring(nbCharactersPerColor + 3)
            map.push({
                character: character,
                color: color
            })
        }
        for (var i = 0, l = map.length; i < l; ++i) {
        }
        return canvas
    }
}

