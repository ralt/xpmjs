XPMJS
===

Very little library to use pseudo-XPM images in javascript.

Usage example:

    <div id="cvs"></div>

    var xpmImage = XPM.create(
        '24 24 2 1',
        '  c #AAA',
        'x c #000',
        '      xxxxxxxxxxxx      ',
        '     xxxxxxxxxxxxxx     ',
        '    xxxxxxxxxxxxxxxx    ',
        '   xxxxxxxxxxxxxxxxxx   ',
        '  xxxxxxxxxxxxxxxxxxxx  ',
        ' xxxxxxxxxxxxxxxxxxxxxx ',
        '  xxxxxxxxxxxxxxxxxxxx  ',
        '   xxxxxxxxxxxxxxxxxx   ',
        '    xxxxxxxxxxxxxxxx    ',
        '     xxxxxxxxxxxxxx     ',
        '      xxxxxxxxxxxx      ',
        '       xxxxxxxxxx       ',
        '        xxxxxxxx        ',
        '         xxxxxx         ',
        '          xxxx          ',
        '           xx           ',
        '          xxxx          ',
        '         xxxxxx         ',
        '        xxxxxxxx        ',
        '       xxxxxxxxxx       ',
        '      xxxxxxxxxxxx      ',
        '     xxxxxxxxxxxxxx     ',
        '    xxxxxxxxxxxxxxxx    ',
        '   xxxxxxxxxxxxxxxxxx'
    )
    document.getElementById('cvs').appendChild(xpmImage)

Will print out: ![this image](https://github.com/Ralt/ralt.github.com/raw/master/img/blog/xpmjs.png)

It is **not** faster than `.drawImage`, check it out by yourself [there](http://jsperf.com/xpmjs-vs-drawimage/2). It may catch up with it after caching for multiple times, but it will always be slower.

However, it may have some use, as you can see [here](http://jsfiddle.net/Ralt/njaeD/). Mainly, bandwidth saving, reuse of the same icon with different colors and quick editing of those icons.

