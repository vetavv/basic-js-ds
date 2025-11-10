const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    let node = this.getUnderlyingList();

    if (node === null) {
      this.list = { value: value, next: null };
      return;
    }

    while (node.next !== null) {
      node = node.next;
    }
    node.next = { value: value, next: null };
  }

  dequeue() {
    const node = this.getUnderlyingList();
    if (node === null) return undefined;

    if (node.next !== null) {
      this.list = node.next;
    } else {
      this.list = null;
    }
    return node.value;
  }
}

module.exports = {
  Queue
};
