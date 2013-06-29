require.config({
    baseUrl:'jam/jam/'
});
require(['jam'], function(jam){

    var game = jam.Game(500, 300, document.body);
    var block = jam.Sprite(10, 100);

    var createRedSquare = function() {
        var canvas = document.createElement('canvas');
        canvas.width = 10;
        canvas.height = 10;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(0, 0, 10, 10);
        return canvas;
    };
    var redCanvas = createRedSquare();

    block.setImage(redCanvas.toDataURL());
    game.root.scene.add(block);
    window.game = game;
    window.block = block;

//  Ingle:  jam.Rect.collide(guy, tm);

    block.on('update', function(dt) { 
        block.velocity.y = 40;
        if (block.y >= (300 - block.height)) {
            block.velocity.y = 0;
        }
    });

    var block2 = jam.Sprite(10, 30);
    block2.setImage(redCanvas.toDataURL(), 10, 10);
    game.root.scene.add(block2);
    block2.velocity.y = 40;
    block2.on('update', function(dt) { 
        var c = jam.Rect.collide(block2, block);
        if (c || block2.y >= (300 - block2.height)) {
            block2.velocity.y = 0;
        }
    });

    game.run();

});
