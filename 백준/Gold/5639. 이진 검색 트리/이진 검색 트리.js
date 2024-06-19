const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let index = 0;

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  postorder(callback) {
    if (this.left) {
      this.left.postorder(callback);
    }
    if (this.right) {
      this.right.postorder(callback);
    }
    callback(this.data);
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    if (this.root === null) {
      this.root = new Node(data);
      return;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = new Node(data);
            return;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = new Node(data);
            return;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

const bst = new BST();

while (input[index]) {
  bst.add(+input[index]);
  index++;
}

let res = "";
bst.root.postorder((data) => {
  res += data + "\n";
});
console.log(res);
