from player import Player

player = Player()

print("=== Player Test ===")

print("初期位置:", player.get_position())
print("初期速度:", player.get_velocity())

player.move(100, 50)

print("移動後:", player.get_position())

player.set_velocity(5, -8)

print("速度変更:", player.get_velocity())

print("=== Test End ===")