class Game {

    constructor() {

        // Canvas
        this.canvas = document.getElementById("gameCanvas");

        // ゲームオブジェクト
        this.player = new Player();
        this.physics = new Physics();
        this.stage = new Stage();
        this.renderer = new Renderer(this.canvas);

        // 新しく追加
        this.camera = new Camera();
        this.input = new Input();

        // FPS
        this.fps = 60;

        // 前回の時間
        this.lastTime = performance.now();

        // ゲーム開始
        requestAnimationFrame(this.loop.bind(this));

    }

    update(dt) {

        // 物理更新
       this.physics.update(
    this.player,
    this.input,
    dt
);

        // 地面判定
        this.stage.update(this.player);

        // カメラ更新
        this.camera.update(this.player);

    }

    draw() {

        this.renderer.render(
            this.player,
            this.stage
        );

    }

    loop(currentTime) {

        const dt = (currentTime - this.lastTime) / 16.666;

        this.lastTime = currentTime;

        this.update(dt);

        this.draw();

        requestAnimationFrame(this.loop.bind(this));

    }

}

window.onload = () => {

    new Game();

};