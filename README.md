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

Will print out: ![this image](http://ralt.github.com/img/blog/xpmjs.png)

