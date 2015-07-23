// console.log(process.argv)
var size = process.argv.length;
var sum = 0;
if (size > 2) {
	for (i=2; i<size; i++) {
		sum += parseInt(process.argv[i]);
	}
}
console.log(sum);