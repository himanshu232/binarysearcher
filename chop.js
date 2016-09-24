'use strict';

// binary search, divide and conquer is the name of the game
'use strict';

const assert = require('assert');


// is the value greater, less, or equal to the search
// if equal return the index
// if less, create new array from index 0 until middle index and repeat from 1
// if greater, create new array from middle to end and repeat from 1

// version 1
// 1. middle = ar.length / 2
// 2. is val[middle] gt, lt, eq search
// 3. if eq, return middle
// 4. if lt, set ar to subar(ar, 0, middle) : goto 2
// 5. if gt, set ar to subar(ar, middle, ar.length - 1) : goto 2

// version 2
// 1. set min index to 0, max index to end
// 2. set middle to max / 2
// 3. is val[middle] gt, lt, eq search
// 4. if eq, return middle
// 5. if lt, set max to middle : goto 2
// 6. if gt, set min to middle : goto 2


function chop(needle, haystack)
{

	let delta = 0;
	let found = false;

	while(!found) {
		
		let middle = Math.floor(haystack.length / 2);

		let guess = haystack[middle];

		if (!guess) {
			return -1;
		} else if (middle === 0) {
			return needle === guess ? 0 : -1;
		} else if (needle === guess) {
			return middle + delta;
		} else if (needle < guess) {
			haystack = haystack.slice(0, middle);
		} else {
			haystack = haystack.slice(middle, haystack.length);
			delta += middle;

		}

	}

	return middle;

}

// 15 [ 1, 3, 4, 5, 6, 8, 8, 8, 9, 10, 10, 14, 14, 14, 15, 15 ]
// delta = 0
// found === false
// middle = floor(16/2) = 8
// guess = 9
// 15 > 9
// haystack = haystack[8:16] = [ 9, 10, 10, 14, 14, 14, 15, 15 ]
// delta = 8
// found === false
// middle = floor(8/2) = 4
// guess = 14
// 15 > 14
// haystack = haystack[4:8] = [ 14, 14, 15, 15 ]
// delta = 8 + 4
// found === false
// middle = floor(4/2) = 2
// guess = 15
// 15 === 15
// return 12 + 2 = 14


// 7, [1, 3, 5, 7]
// delta = 0
// found === false
// middle = floor(4/2) = 2
// guess = 5
// 7 > 5
// haystack = haystack[2:4] = [5,7]
// delta = 2
// found === false
// middle = floor(2/2) = 1
// guess = 7
// 7 === 7
// return 1 + 2 = 3

// 5, [1, 3, 5, 7]
// delta = 0
// found === false
// middle = floor(4/2) = 2
// guess = 5
// 5 === 5
// return 2 + 0

// 3,[]
// found = false
// middle = 0 / 2 = 0
// guess = undefined;
// return -1

// 3,[1]
// found = false
// middle = floor(1/2) = 0
// guess = 1
// middle === 0
// 3 !== 1
// return -1

// 1, [1]
// found = false
// middle = floor(1/2) = 0
// guess = 1
// middle === 0
// 1 === 1
// return 0

// 1, [1,3,5]
// found === false
// middle = floor(3/2) = 1
// guess = 3
// 1 < 3
// haystack = haystack[0:1] = [1]
// found === false
// middle = floor(1/2) = 0
// guess = 1
// 1 === 1
// return 0

// 3, [1,3,5]
// found = false
// middle = floor(3/2) = 1
// guess = 3
// 3 === 3
// return 1

// 5, [1,3,5]
// delta = 0
// found === false
// middle = floor(3/2) = 1
// guess = 3
// 5 > 3
// haystack = haystack[1:3] = [3,5]
// delta += middle = 1
// found === false
// middle = floor(2/2) = 1
// guess = 5
// 5 === 5
// return 1 + delta = 2


// 2, [1,2]
// found = false
// middle = floor(2/2) = 1
// guess = 2
// 2 === 2
// found = true
// return 1

// 1, [1,2]
// found = false
// middle = floor(2 / 2) = 1
// guess = 2
// 1 < 2
// haystack = haystack[0:1] = [1]
// middle = floor(1 / 2) = 0
// guess = 1
// 1 === 1
// found = true
// return 1



function testChop() 
{
  // assert.equal(-1, chop(3, []))
  // assert.equal(-1, chop(3, [1]))
  // assert.equal(0,  chop(1, [1]))
  // assert.equal(0,  chop(1, [1, 3, 5]))
  // assert.equal(1,  chop(3, [1, 3, 5]))
  // assert.equal(2,  chop(5, [1, 3, 5]))
  // assert.equal(-1, chop(0, [1, 3, 5]))
  // assert.equal(-1, chop(2, [1, 3, 5]))
  // assert.equal(-1, chop(4, [1, 3, 5]))
  // assert.equal(-1, chop(6, [1, 3, 5]))
  // assert.equal(0,  chop(1, [1, 3, 5, 7]))
  // assert.equal(1,  chop(3, [1, 3, 5, 7]))
  // assert.equal(2,  chop(5, [1, 3, 5, 7]))
  // assert.equal(3,  chop(7, [1, 3, 5, 7]))
  // assert.equal(-1, chop(0, [1, 3, 5, 7]))
  // assert.equal(-1, chop(2, [1, 3, 5, 7]))
  // assert.equal(-1, chop(4, [1, 3, 5, 7]))
  // assert.equal(-1, chop(6, [1, 3, 5, 7]))
  // assert.equal(-1, chop(8, [1, 3, 5, 7]))
  assert.equal(14, chop(15, [ 1, 3, 4, 5, 6, 8, 8, 8, 9, 10, 10, 14, 14, 14, 15, 15 ]))

  console.log('OK!')
}

module.exports = chop;


if (require.main === module) {
	testChop();
}