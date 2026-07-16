class Stage:

    def __init__(self):

        # 地面の高さ
        self.ground_y = 500

    def check_ground(self, player):

        """
        地面との衝突判定
        """

        if player.y + player.height >= self.ground_y:

            player.y = self.ground_y - player.height
            player.vy = 0
            player.on_ground = True

        else:
            player.on_ground = False

    def update(self, player):
        self.check_ground(player)