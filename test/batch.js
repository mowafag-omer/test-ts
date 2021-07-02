var chai = require('chai');

var assert = chai.assert,
    expect = chai.expect;

var Batch = require('../index.js').Batch;

describe('Batch class', function() {
  
  describe('addContent', function() {

    it('should set when no existing content', function() {
      let batch = new Batch()
      batch.addContent({'10': 2, '5': 1})
      assert.equal(batch.content['10'], 2)
      assert.equal(batch.content['5'], 1)
    })
    
    it('should add correctly to existing content', function() {
      let batch = new Batch({'10': 2, '5': 1})
      batch.addContent({'10': 2, '5': 1})
      assert.equal(batch.content['10'], 4)
      assert.equal(batch.content['5'], 2)
      batch.addContent({'10': 2, '6': 1})
      assert.equal(batch.content['10'], 6)
      assert.equal(batch.content['5'], 2)
      assert.equal(batch.content['6'], 1)
      
      batch = new Batch()
      batch.addContent({'10': 2, '6': 1})
      batch.addContent({'10': 2, '6': 1})
      assert.equal(batch.content['10'], 4)
      assert.equal(batch.content['6'], 2)
    })
    
    it('should not consider erroneous negative values', function() {
      let batch = new Batch()
      batch.addContent({'10': -2, '6': 1})
      assert.notEqual(batch.content['10'], -2)
      assert.equal(batch.content['6'], 1)
      batch.addContent({'10': 2, '6': 1})
      assert.equal(batch.content['10'], 2)
      assert.equal(batch.content['6'], 2)
    })
  })

  describe('addDeniedContent', function() {
    it('should set when no existing deniedContent', function() {
      let batch = new Batch()
      batch.addDeniedContent({'10': 2, '5': 1})
      assert.equal(batch.deniedContent['10'], 2)
      assert.equal(batch.deniedContent['5'], 1)
    })
    
    it('should add correctly to existing deniedContent', function() {
      let batch = new Batch({'10': 2, '5': 1})
      batch.addDeniedContent({'10': 2, '5': 1})
      assert.equal(batch.deniedContent['10'], 2)
      assert.equal(batch.deniedContent['5'], 1)
      batch.addDeniedContent({'10': 2, '6': 1})
      assert.equal(batch.deniedContent['10'], 4)
      assert.equal(batch.deniedContent['5'], 1)
      assert.equal(batch.deniedContent['6'], 1)
      
      batch = new Batch()
      batch.addDeniedContent({'10': 2, '6': 1})
      batch.addDeniedContent({'10': 2, '6': 1})
      assert.equal(batch.deniedContent['10'], 4)
      assert.equal(batch.deniedContent['6'], 2)
    })
    
    it('should not consider erroneous negative values', function() {
      let batch = new Batch()
      batch.addDeniedContent({'10': -2, '6': 1})
      assert.notEqual(batch.deniedContent['10'], -2)
      assert.equal(batch.deniedContent['6'], 1)
      batch.addDeniedContent({'10': 2, '6': 1})
      assert.equal(batch.deniedContent['10'], 2)
      assert.equal(batch.deniedContent['6'], 2)
    })
  })
  
  describe('setListAcceptedContent', function() {
    it('should return default result for basic test', function() {
      let batch = new Batch()
      batch.addContent({})
      batch.setListAcceptedContent()
      assert.equal(JSON.stringify(batch.listAcceptedContent), JSON.stringify([]))
    })
    
    it('should set correctly with simple batch', function() {
      let batch = new Batch()
      batch.addContent({'10': 2})
      batch.setListAcceptedContent()
      assert.equal(batch.listAcceptedContent[0], 2)
      assert.equal(batch.listAcceptedContent[1], 10)
      
      batch = new Batch()
      batch.addContent({'10': 2, '5': 1})
      batch.setListAcceptedContent()
      assert.equal(batch.listAcceptedContent[0], 1)
      assert.equal(batch.listAcceptedContent[1], 5)
      assert.equal(batch.listAcceptedContent[2], 2)
      assert.equal(batch.listAcceptedContent[3], 10)
    })

    it('should set correctly with complete batch', function() {
      let batch = new Batch()
      batch.addContent({'10': 5, '5': 3})
      batch.addDeniedContent({'10': 2, '5': 2})
      batch.setListAcceptedContent()
      assert.equal(batch.listAcceptedContent[0], 1)
      assert.equal(batch.listAcceptedContent[1], 5)
      assert.equal(batch.listAcceptedContent[2], 3)
      assert.equal(batch.listAcceptedContent[3], 10)
    })

    it('should not set stockId in listAcceptedContent if stockId in deniedContent and not in content', function() {
      let batch = new Batch()
      batch.addContent({'10': 5, '5': 3})
      batch.addDeniedContent({'10': 2, '5': 2, '6': 1})
      batch.setListAcceptedContent()
      assert.equal(batch.listAcceptedContent[0], 1)
      assert.equal(batch.listAcceptedContent[1], 5)
      assert.equal(batch.listAcceptedContent[2], 3)
      assert.equal(batch.listAcceptedContent[3], 10)
    })

    it('should not set stockId in listAcceptedContent if quantity in amount equals 0', function() {
      let batch = new Batch()
      batch.addContent({'10': 0, '5': 3})
      batch.setListAcceptedContent()
      assert.equal(batch.listAcceptedContent[0], 3)
      assert.equal(batch.listAcceptedContent[1], 5)
      assert.equal(batch.listAcceptedContent.length, 2)
    })

    it('should not set stockId in listAcceptedContent if resulting quantity equals 0', function() {
      let batch = new Batch()
      batch.addContent({'10': 5, '5': 3})
      batch.addDeniedContent({'10': 5, '5': 2})
      batch.setListAcceptedContent()
      assert.equal(batch.listAcceptedContent[0], 1)
      assert.equal(batch.listAcceptedContent[1], 5)
      assert.equal(batch.listAcceptedContent.length, 2)
    })

  })
});
