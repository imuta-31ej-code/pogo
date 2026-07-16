class Renderer:

    def __init__(self):
        pass

    def draw_player(self, ctx, player):
        """
        プレイヤーを描画
        ctxはCanvasの描画オブジェクト
        """

        ctx.fillStyle = "#ff4444"

        ctx.fillRect(
            player.x,
            player.y,
            player.width,
            player.height
        )

    def draw_ground(self, ctx, stage):

        ctx.fillStyle = "#44aa44"

        ctx.fillRect(
            0,
            stage.ground_y,
            2000,
            200
        )