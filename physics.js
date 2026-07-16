class Physics {

    constructor() {

        // 重力
        this.gravity = 0.5;

        // 最大落下速度
        this.maxFallSpeed = 18;

        // 移動速度
        this.moveSpeed = 0.6;

        // 最大横速度
        this.maxMoveSpeed = 6;

        // 摩擦
        this.friction = 0.80;

    }

    update(player, input, dt) {

        // 左移動
        if (input.isDown("ArrowLeft") || input.isDown("KeyA")) {

            player.vx -= this.moveSpeed;

        }

        // 右移動
        if (input.isDown("ArrowRight") || input.isDown("KeyD")) {

            player.vx += this.moveSpeed;

        }

        // 横速度制限
        if (player.vx > this.maxMoveSpeed)
            player.vx = this.maxMoveSpeed;

        if (player.vx < -this.maxMoveSpeed)
            player.vx = -this.maxMoveSpeed;

        // 摩擦
        player.vx *= this.friction;

        // 重力
        player.vy += this.gravity;

        if (player.vy > this.maxFallSpeed)
            player.vy = this.maxFallSpeed;

        player.update(dt);

    }

}