require.config({
    baseUrl:'jam/jam/'
});
require(['jam'], function(jam){

    var config = {
        canvasHeight: 300,
        canvasWidth: 500
    };

    var game = jam.Game(500, 300, document.body);
    var block = jam.Sprite(10, 100);

    var createSquare = function(fillStyle) {
        var canvas = document.createElement('canvas');
        canvas.width = 25;
        canvas.height = 25;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = fillStyle;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return canvas;
    };
    var redCanvas = createSquare('rgb(200,0,0)');

    var createBlock = function() {
        var block = jam.Sprite(10, 100);
        block.setImage(redCanvas.toDataURL(), 25, 25);
        return block;
    };


    window.game = game;

    game.run();

    var Column = function(x) {
        this.x = x;
        this.blocks = [];
    };

    Column.prototype.pushBlock = function(block) {
        var column = this;
        var top = this.top();
        game.root.scene.add(block);
        block.velocity.y = 60;
        block.x = column.x;
        block.y = -25;
        block.on('update', function(dt) {
            if (top) {
                var collide = jam.Rect.collide(block, top);
            }
            if (collide || block.y >=  (config.canvasHeight - block.height)) {
                block.velocity.y = 0;
            }
            // ensures some columns do not be come 'sunken'
            if (block.y >=  (config.canvasHeight - block.height)) {
                block.y = (config.canvasHeight - block.height);
            }
        });
        this.blocks.push(block);
    };

    Column.prototype.top = function() {
        var length = this.blocks.length;
        if (length) {
            return this.blocks[length - 1];
        }
        return null;
    };

    var columns = [new Column(0), new Column(25), new Column(50), new Column(75), new Column(100)];

    var getRanCol = function() {
        var num = (Math.floor(Math.random() * 100)) % columns.length;
        return columns[num];
    };
    
    setInterval(function() {
            var col = getRanCol();
            col.pushBlock(createBlock());
    }, 750);    

});
