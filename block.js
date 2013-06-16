require.config({
    baseUrl:"jam/jam/"
});
require(['jam'], function(jam){

    var game = jam.Game(500, 300, document.body);
    var block = jam.Sprite(10, 100);

    window.game = game;
    window.block = block;
});
