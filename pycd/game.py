from player import Player
from physics import Physics
from stage import Stage
from renderer import Renderer


class Game:

    def __init__(self):

        self.player = Player()
        self.physics = Physics()
        self.stage = Stage()
        self.renderer = Renderer()

        # 1フレームの時間
        self.dt = 1

    def update(self):
        """
        ゲームを1フレーム更新
        """

        # 重力・移動
        self.physics.update(
            self.player,
            self.dt
        )

        # 地面との衝突
        self.stage.update(
            self.player
        )

    def draw(self, ctx):
        """
        ゲームを描画
        """

        self.renderer.draw_ground(
            ctx,
            self.stage
        )

        self.renderer.draw_player(
            ctx,
            self.player
        )