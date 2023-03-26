x = int(input())
cnt = 2
if x == 1:
    print(1)
    exit
else:
    if x**0.5 % 1 == 0:
        cnt += 1
        q = int(x**0.5) - 1
    else:
        q = int(x**0.5)
    for i in range(2, q+1):
        if x % i == 0:
            cnt += 2
    print(cnt)