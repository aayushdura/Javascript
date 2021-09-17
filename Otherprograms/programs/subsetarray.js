

// JavaScript implementation of longest continuous increasing
// subsequence


// Function for LIS
function findLIS(A, n) {
	let hash = new Map();

	// Initialize result
	let LIS_size = 1;
	let LIS_index = 0;

	hash.set(A[0], 1);
	// iterate through array and find
	// end index of LIS and its Size
	for (let i = 1; i < n; i++) {
		hash.set(A[i], hash.get(A[i] - 1) == null ?
		1 : hash.get(A[i] - 1) + 1);
		if (LIS_size < hash.get(A[i])) {
			LIS_size = hash.get(A[i]);
			LIS_index = A[i];
		}
	}

	// print LIS size
	console.log("LIS_size = " + LIS_size + "\n");

	// print LIS after setting start element
	console.log("LIS : ");
	let start = LIS_index - LIS_size + 1;
	while (start <= LIS_index) {
		console.log(start + " ");
		start++;
	}
}

// Driver code

let A = [2,3,4,5,6];
let n = A.length;
findLIS(A, n);

// This code is contributed by gfgking


