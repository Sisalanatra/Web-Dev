x = input()
xx = ""
for i in range(len(x)):
    xx += x[len(x)-i-1]
print(int(xx))