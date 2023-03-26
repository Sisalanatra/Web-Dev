x = int(input())
if x == 2:
    print(x)
else:
    for i in range(2,x+1):
        if x % i == 0:
            print(i)
            break