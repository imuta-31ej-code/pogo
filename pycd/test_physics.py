from player import Player
from physics import Physics

player = Player()
physics = Physics()

print("=== Physics Test ===")

print("開始位置 :", player.get_position())
print("開始速度 :", player.get_velocity())

for i in range(10):
    physics.update(player, 1)

print("更新後位置 :", player.get_position())
print("更新後速度 :", player.get_velocity())

print("=== Test End ===")