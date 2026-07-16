class Player:
    def __init__(self):

        # ========= 位置 =========
        self.x = 250
        self.y = 200

        # ========= 速度 =========
        self.vx = 0.0
        self.vy = 0.0

        # ========= 当たり判定 =========
        self.width = 42
        self.height = 72

        # ========= 向き =========
        self.direction = 1      # 1=右  -1=左

        # ========= ポゴ =========
        self.angle = 0          # ポゴ棒の角度
        self.pogo_length = 60

        # ========= 状態 =========
        self.on_ground = False
        self.alive = True

    def update(self, dt):
        """
        プレイヤーを更新
        """
        self.x += self.vx * dt
        self.y += self.vy * dt

    def set_velocity(self, vx, vy):
        self.vx = vx
        self.vy = vy

    def move(self, dx, dy):
        self.x += dx
        self.y += dy

    def stop_x(self):
        self.vx = 0

    def stop_y(self):
        self.vy = 0

    def get_position(self):
        return self.x, self.y

    def get_velocity(self):
        return self.vx, self.vy