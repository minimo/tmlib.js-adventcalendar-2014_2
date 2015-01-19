tm.main(function() {

    var app = tm.display.CanvasApp("#app");
    app.resize(900, 600).fitWindow();

    var loadingScene = tm.scene.LoadingScene({
        width: 900,
        height: 600,
        assets: {
            mainFont: "fonts/Indie_Flower/IndieFlower.ttf",
            subFont:  "fonts/Lobster/Lobster-Regular.ttf",
			testFont: "fonts/07YasashisaAntique.ttf",
        },
        nextScene: MainScene,
    });

    app.replaceScene(loadingScene);
    app.run();

});

tm.define("MainScene", {
    superClass: "tm.app.Scene",

    init: function() {
        this.superInit();
        this.fromJSON({
            children: {
                mainLabel: {
                    type: "tm.display.Label",
                    init: ["This is MAIN label", 90],
                    fontFamily: "mainFont",
                    x: 450,
                    y: 200,
                },
                subLabel: {
                    type: "tm.display.Label",
                    init: ["This is SUB label", 70],
                    fontFamily: "subFont",
                    x: 450,
                    y: 350,
                },
                testLabel: {
                    type: "tm.display.Label",
                    init: ["This is TEST label", 70],
                    fontFamily: "testFont",
                    x: 450,
                    y: 500,
                },
            },
        });
    },
});
