class Stage {

    constructor() {

        // 地面の高さ
        this.groundY = 500;

    }

    update(player) {

        // 地面との衝突
        if (player.y + player.height >= this.groundY) {

            player.y = this.groundY - player.height;

            player.vy = 0;

            player.onGround = true;

        }
        else {

            player.onGround = false;

        }

    }

}