class Camera {

    constructor() {

        this.x = 0;
        this.y = 0;

    }

    update(player) {

        // プレイヤーを中央付近に映す
        this.x = player.x - 500;
        this.y = player.y - 300;

        // 左や上には行かない
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;

    }

}