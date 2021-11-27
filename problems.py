"""
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
"""

from math import sqrt

def DivisibleBy(this,that):
    if this % that == 0:
        return True
    else:
        return False

def GetDivisors(number):
    d = 2
    divisors = []
    while d <= sqrt(number):
        if DivisibleBy(number,d):
            divisors.append(d)
            d += 1
        else:
            d += 1
    return divisors


og_num = 600851475143
divisorsOfnumber = GetDivisors(og_num)


prime_factors = []
for number in divisorsOfnumber:
    dlist = GetDivisors(number)
    if len(dlist) == 0:
        prime_factors.append(number)

# print("The largest prime factor of {} is {}.".format(og_num,max(prime_factors)))

print(GetDivisors(100))