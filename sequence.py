def allSeq(n):
	if n == 1:
		print('1')
		return
	if n == 2:
		print('11, 2')
		return
	prevState = [ ['1'] , ['11', '2'] ]
	for num in range (3, n + 1):
			currStateAdd1 = []
			for i in prevState[1]:
				currStateAdd1.append(i + '1')
			currStateAdd2 = []
			for i in prevState[0]:
				currStateAdd2.append(i + '2')
			currState = currStateAdd1 + currStateAdd2
			prevState.append(currState)
			prevState.pop(0)

	print(prevState[1])


allSeq(4)
