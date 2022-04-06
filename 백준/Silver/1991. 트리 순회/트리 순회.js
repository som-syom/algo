const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input.shift();
let res = "";

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  preorder(callback) {
    callback(this.data); //this를 먼저 방문한다.
    if (this.left) {
      //왼쪽 노드가 있으면 내려가서 방문한다.
      this.left.preorder(callback); //왼쪽 노드의 왼쪽 노드로 내려간다.
    } //전부 방문하면 왼쪽 노드가 더 이상 없다.
    if (this.right) {
      //오른쪽 노드가 있으면 방문한다.
      this.right.preorder(callback); //재귀 시작점인 root(this)로 돌아간다.
    } //다시 반복한다.
  }

  inorder(callback) {
    if (this.left) {
      //왼쪽 노드를 확인한다.
      this.left.inorder(callback); //왼쪽이 있으면 더 내려간다.
    }
    callback(this.data); //더이상 왼쪽이 없으면 이전 root를 탐색한다.
    if (this.right) {
      //왼쪽과 루트가 끝났으니 오른쪽을 찾기 시작한다. 다시 왼쪽이 있으면 내려간다.
      this.right.inorder(callback);
    }
  }

  postorder(callback) {
    if (this.left) {
      //왼쪽이 있으면 확인한다. 끝까지 간다. 못찾으면 시작점으로 돌아온다.
      this.left.postorder(callback);
    }
    if (this.right) {
      //오른쪽이 있으면 끝까지 확인한다. 못찾으면 시작점으로 돌아온다.
      this.right.postorder(callback);
    }
    callback(this.data); //시작점을 탐색한다.
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  addChild(parentData, leftData = null, rightData = null) {
    const node = this.root;
    if (node.data === parentData) {
      if (leftData !== null) {
        node.left = new Node(leftData);
      }
      if (rightData !== null) {
        node.right = new Node(rightData);
      }
    } else {
      const findNode = function (node) {
        if (node.data == parentData) {
          if (leftData !== null) {
            node.left = new Node(leftData);
          }
          if (rightData !== null) {
            node.right = new Node(rightData);
          }
        } else {
          if (node.left) {
            findNode(node.left);
          }
          if (node.right) {
            findNode(node.right);
          }
        }
      };
      findNode(this.root);
    }
  }
}

const bst = new BST();
bst.add(input[0].split(" ")[0]);

for (let i = 0; i < N; i++) {
  let [data, leftData, rightData] = input[i].split(" ");
  if (leftData === ".") {
    leftData = null;
  }
  if (rightData === ".") {
    rightData = null;
  }
  if (!(leftData === null && rightData === null)) {
    bst.addChild(data, leftData, rightData);
  }
}

const record = (data) => {
  res += data;
};

bst.root.preorder(record);
res += "\n";
bst.root.inorder(record);
res += "\n";
bst.root.postorder(record);

// console.log(bst);
console.log(res);
