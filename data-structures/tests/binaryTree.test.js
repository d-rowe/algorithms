const BinaryTree = require('../binaryTree.js');
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

describe('Binary Tree', function() {

  describe('properties', function() {
    const binaryTree = new BinaryTree();

    it('should have a value property', function() {
      expect(binaryTree).to.have.property('value');
    });

    it('should have a left property', function() {
      expect(binaryTree).to.have.property('left');
    });

    it('should have a right property', function() {
      expect(binaryTree).to.have.property('right');
    });
  });

  describe('add', function() {
    const binaryTree = new BinaryTree();

    it('should set value property on first call to add', function() {
      binaryTree.add(50);
      expect(binaryTree.value).to.equal(50);
    });

    it('should add smaller values to the left', function() {
      binaryTree.add(25);
      expect(binaryTree.left.value).to.be.equal(25);
    });

    it('should add larger values to the right', function() {
      binaryTree.add(75);
      expect(binaryTree.right.value).to.be.equal(75);
    });

    it('should traverse more than one depth if needed', function() {
      binaryTree.add(12);
      expect(binaryTree.left.left.value).to.be.equal(12);
    });
  })
});
