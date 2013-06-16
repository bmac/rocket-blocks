require.config({
    baseUrl:"jam/jam/"
});
require(['jam'], function(jam){

    var game = jam.Game(500, 300, document.body);
    var block = jam.Sprite(10, 100);

    block.setImage('data:image/gif;base64,R0lGODlhAQABAPAAAP8AAP///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==', 100, 100);
    game.root.scene.add(block);
    game.run();
    window.game = game;
    window.block = block;

});
