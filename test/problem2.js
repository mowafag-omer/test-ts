var chai = require('chai');

var assert = chai.assert,
    expect = chai.expect;

var Board = require('../index.js').Board;

describe('Problem 2: Board.class, setMaxHarvest', function() {
    describe('Correct answers', function() {
      it('passes basic tests', function() {
        let board = new Board(0,[[]])
        board.setMaxHarvest()
        assert.equal(board.getMaxHarvest(), 0)
        
        board = new Board(1,[[2]])
        board.setMaxHarvest()
        assert.equal(board.getMaxHarvest(), 2)
      })
      it('computes correctly', function() {      
        let cases = {
          2: [
            [2,5],
            [4,2]
          ],
          3: [
            [4, 0, 0],
            [9, 0, 1],
            [5, 0, 3],
          ],
          4: [
            [4, 3, 4, 5],
            [2, 1, 1, 2],
            [5, 3, 1, 3],
            [1, 1, 2, 1]
          ], 5: [
            [4, 3, 4, 3, 5],
            [2, 5, 1, 1, 2],
            [5, 4, 4, 1, 3],
            [1, 1, 1, 2, 1],
            [4, 0, 2, 3, 2]
          ], 6: [
              [4, 3, 4, 3, 5, 2],
              [2, 5, 1, 6, 2, 3],
              [5, 4, 7, 1, 3, 4],
              [0, 1, 3, 7, 3, 6],
              [3, 0, 4, 3, 2, 3],
              [2, 2, 1, 2, 2, 3]
            ]
        }
  
        let board = new Board(2,cases[2])
        board.setMaxHarvest()
        assert.equal(board.getMaxHarvest(), 9)
  
        board = new Board(3,cases[3])
        board.setMaxHarvest()
        assert.equal(board.getMaxHarvest(), 21)
        
        board = new Board(4,cases[4])
        board.setMaxHarvest()
        assert.equal(board.getMaxHarvest(), 22)
        
        board = new Board(5,cases[5])
        board.setMaxHarvest()
        assert.equal(board.getMaxHarvest(), 28)
        
        board = new Board(6,cases[6])
        board.setMaxHarvest()
        assert.equal(board.getMaxHarvest(), 48)
      })
    })
  })