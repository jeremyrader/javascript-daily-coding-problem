const test = require('ava');
const { solution1a, solution1b } = require('./solution1-1')

test('1-1a', t => {
	t.deepEqual(solution1a([1,2,3,4,5]), [120, 60, 40, 30, 24])
})

test('1-1b', t => {
	t.deepEqual(solution1b([1,2,3,4,5]), [120, 60, 40, 30, 24])
})