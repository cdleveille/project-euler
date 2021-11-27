
const log = (answer) => {
	console.log(`${answer}`);
}

// #1
// let sum = 0;
// for (let i = 1; i < 1000; i++) {
// 	if (i % 3 === 0 || i % 5 === 0) {
// 		sum += i;
// 	}
// }

// log(1, sum);

// #2
// let fib = [1, 2];
// let sum = 2;
// while (true) {
// 	let value = fib[fib.length - 1] + fib[fib.length - 2];
// 	if (value < 4000000) {
// 		fib[0] = fib[1];
// 		fib[1] = value;

// 		if (value % 2 === 0) {
// 			sum += value;
// 		}
// 	} else break;
// }

// log(2, sum);

const isFactor = (bigNum, littleNum) => {
	return bigNum % littleNum === 0;
}

const isPrime = (num) => {
	let factors = []
	for (let i = 2; i < num; i++) {
		if (isFactor(num, i)) {
			factors.push(i);
		}
	}
	return factors.length === 0;
}

let largestFound = 0;
let bigNum = 13195;

for (let i = 1; i < bigNum / 2; i++) {
	if (isFactor(bigNum, i) && i > largestFound) {
		largestFound = i;
	}
}

log(largestFound);