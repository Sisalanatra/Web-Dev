x = input()
ind = len(x) - 1
cnt = 0
for i in x:
    if i == '1':
        cnt += int(2**ind)
    ind -= 1
print(cnt)