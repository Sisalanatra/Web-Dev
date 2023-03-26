n = int(input())
cnt = 0
s = list(map(int,input().split()))
for i in s:
    if i>0: cnt += 1
print(cnt)