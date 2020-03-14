const test = require('ava');
const { solution2 } = require('./solution1-2')

test('1-2a', t => {
	t.deepEqual(solution2([3,7,5,6,9]), [1,3])
})

test('1-2b', t => {
	t.deepEqual(solution2([3,7,1,6,9]), [0,3])
})

test('1-2c', t => {
	t.deepEqual(solution2([-5, -3, -1, 5, 3, 2, 6, 7]), [3,5])
})
