def calculateit(income):
	tax_slab = [50000, 30000, 20000, 10000]
	tax_val = [0.5, 0.4, 0.2, 0.1]
	tax = 0
	loop_counter = 0
	while loop_counter <= len(tax_slab) - 1:
		if income > tax_slab[loop_counter]:
			taxable_income_slab = income - tax_slab[loop_counter]
			tax += taxable_income_slab * tax_val[loop_counter]
			income -= taxable_income_slab
		loop_counter += 1
	return tax

print(calculateit(12000))
print(calculateit(71000))
