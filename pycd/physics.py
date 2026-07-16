class Physics:

    def __init__(self):

        # 重力
        self.gravity = 0.45

        # 最大落下速度
        self.max_fall_speed = 18

    def apply_gravity(self, player):
        """
        重力を加える
        """

        player.vy += self.gravity

        if player.vy > self.max_fall_speed:
            player.vy = self.max_fall_speed

    def update(self, player, dt):
        """
        プレイヤーを更新
        """

        self.apply_gravity(player)

        player.update(dt)