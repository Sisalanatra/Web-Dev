n = int(input())
s = list(map(int,input().split()))
print(['NO', 'YES'][any([[0, 1][x < 0] == [0, 1][y < 0] for x, y in zip(s, s[1:])])])