import sys

def calculateIT(income):
	tax = 0
	slabs = {
		10000: 0,
		20000: 0.1,
		30000: 0.2,
		50000: 0.3,
		sys.maxsize: 0.5,
	}
	prevSlab = 0
	for slab, rate in slabs.items():
		currSlab = slab - prevSlab
		if income >= currSlab:
			tax += currSlab * rate
		else:
			tax += income * rate
			return tax
		income = income - currSlab
		prevSlab = slab

print(calculateIT(12000))
print(calculateIT(71000))


# slab   10000 20000 30000
# income 61000 41000 11000
# rate   0   	 0.1   0.2
# tax    0     2000  6000
