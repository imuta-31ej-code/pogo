class Renderer {

    constructor(canvas) {

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

    }

    clear() {

        // 空色の背景
        this.ctx.fillStyle = "#87CEEB";
        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

    }

    drawStage(stage) {

        this.ctx.fillStyle = "#3CB043";

        this.ctx.fillRect(
            0,
            stage.groundY,
            this.canvas.width,
            this.canvas.height - stage.groundY
        );

    }

    drawPlayer(player) {

        this.ctx.fillStyle = "#ff4444";

        this.ctx.fillRect(
            player.x,
            player.y,
            player.width,
            player.height
        );

    }

    render(player, stage) {

        this.clear();

        this.drawStage(stage);

        this.drawPlayer(player);

    }

}