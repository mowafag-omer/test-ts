var chai = require('chai');

var assert = chai.assert,
    expect = chai.expect;

var countSquareNumbersBetween = require('../index.js').countSquareNumbersBetween;

describe('Problem 1: countSquareNumbersBetween', function() {
    describe('Correct answers', function() {
      it('passes basic tests', function() {
        let result = countSquareNumbersBetween(0, -1)
        assert.equal(result, 1)
        result = countSquareNumbersBetween(0, -10000)
        assert.equal(result, 1)
        result = countSquareNumbersBetween(-10000, 0)
        assert.equal(result, 1)
        result = countSquareNumbersBetween(0, 0)
        assert.equal(result, 1)
        result = countSquareNumbersBetween(-500, -1)
        assert.equal(result, 0)
      });
      it('computes correctly', function() {
        let result = countSquareNumbersBetween(10, -10)
        assert.equal(result, 4)
        result = countSquareNumbersBetween(10, 1)
        assert.equal(result, 3)
        result = countSquareNumbersBetween(8, 9)
        assert.equal(result, 1)
        result = countSquareNumbersBetween(9, 9)
        assert.equal(result, 1)
        result = countSquareNumbersBetween(10, 9)
        assert.equal(result, 1)
        result = countSquareNumbersBetween(10, 0)
        assert.equal(result, 4)
        result = countSquareNumbersBetween(10, 20)
        assert.equal(result, 1)
        result = countSquareNumbersBetween(50, 20)
        assert.equal(result, 3)
        result = countSquareNumbersBetween(50, -100)
        assert.equal(result, 8)
        result = countSquareNumbersBetween(500, 10000)
        assert.equal(result, 78)
        result = countSquareNumbersBetween(-10000, 10000)
        assert.equal(result, 101)
      });
    })
  })
  