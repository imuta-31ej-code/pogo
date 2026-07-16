class Player {

    constructor() {

        // 座標
        this.x = 250;
        this.y = 100;

        // 速度
        this.vx = 0;
        this.vy = 0;

        // サイズ
        this.width = 40;
        this.height = 70;

        // 向き
        this.direction = 1;

        // 地面についているか
        this.onGround = false;

        // 生存状態
        this.alive = true;
    }

    update(dt) {

        this.x += this.vx * dt;
        this.y += this.vy * dt;

    }

}