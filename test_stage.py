from player import Player
from physics import Physics
from stage import Stage

player = Player()
physics = Physics()
stage = Stage()

print("=== Stage Test ===")

for i in range(100):

    physics.update(player, 1)
    stage.check_ground(player)

print("位置 :", player.get_position())
print("速度 :", player.get_velocity())
print("地面 :", player.on_ground)

print("=== Test End ===")