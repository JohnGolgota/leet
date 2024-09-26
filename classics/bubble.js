function bubbleSort(arr) {
	var len = arr.length,
		temp,
		i;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

const arr = [9, 3, 8, 4, 2, 1];

console.log(arr);

const sortedArr = bubbleSort(arr);

console.log(sortedArr);
