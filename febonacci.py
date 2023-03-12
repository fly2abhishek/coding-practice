def nthFebonacci(n):
    i = 0
    j = 1
    nth = 0
    if n == 0: return 0
    if n == 1: return 1
    if
    for k in range(0, n):
        nth = i + j
        i = j
        j = nth
    return nth

#nthFebonacci(6)
print(nthFebonacci(0))
print(nthFebonacci(1))
print(nthFebonacci(2))
print(nthFebonacci(3))
print(nthFebonacci(4))
print(nthFebonacci(5))
# print(nthFebonacci(5))
# print(nthFebonacci(6))