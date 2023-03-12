haystack = [11, 5, 37, 23, 19, 12, 2, 9, 6, 4]
size = len(haystack)
for i in range(0, size - 1):
    for j in range(i+1, size):
        if haystack[i] > haystack[j]:
            tmp = haystack[i]
            haystack[i] = haystack[j]
            haystack[j] = tmp
print(haystack)

# i 0 0 0 0 0 1
# j 1 2 3 4 5 2
