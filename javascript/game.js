class Game {

    constructor() {

        // Canvas取得
        this.canvas = document.getElementById("gameCanvas");

        // 各クラス生成
        this.player = new Player();
        this.physics = new Physics();
        this.stage = new Stage();
        this.renderer = new Renderer(this.canvas);

        // FPS設定
        this.fps = 60;
        this.dt = 1;
    }

    update() {

        // 物理更新
        this.physics.update(this.player, this.dt);

        // 地面判定
        this.stage.update(this.player);

    }

    draw() {

        this.renderer.render(
            this.player,
            this.stage
        );

    }

    loop() {

        this.update();

        this.draw();

    }

    start() {

        this.loop();

        setInterval(() => {

            this.loop();

        }, 1000 / this.fps);

    }

}

// ゲーム開始
const game = new Game();

game.start();