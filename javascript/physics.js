class Physics {

    constructor() {

        // 重力
        this.gravity = 0.5;

        // 最大落下速度
        this.maxFallSpeed = 18;

    }

    update(player, dt) {

        // 重力を加える
        player.vy += this.gravity;

        // 落下速度制限
        if (player.vy > this.maxFallSpeed) {
            player.vy = this.maxFallSpeed;
        }

        // プレイヤー更新
        player.update(dt);

    }

}