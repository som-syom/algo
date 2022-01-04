const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
let res = "";

class Node {
  constructor(data = null, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

const addNewNode = (current, data) => {
  let newNode = new Node(data, current);

  if (current !== null) {
    if (current.next !== null) {
      newNode.next = current.next;
      current.next.prev = newNode;
    }
    current.next = newNode;
  }
  return newNode;
};

const deleteNode = (current) => {
  if (current.prev !== null) current.prev.next = current.next;
  if (current.next !== null) current.next.prev = current.prev;
  current = current.prev;
  return current;
};

const printAll = (list) => {
  if (list) {
    console.log("current list : ", list.data);
    if (list.prev) console.log("prev data : ", list.prev.data);
    if (list.next) console.log("next data: ", list.next.data);
  }

  console.log(list);
};

for (let i = 1; i <= N; i += 1) {
  const str = input[i];
  const len = str.length;

  let list = new Node(null);
  for (let j = 0; j < len; j += 1) {
    // console.log("j : ", str[j]);
    if (str[j] === "<") {
      if (list !== null && list.data !== null) {
        list = list.prev;
      }
    } else if (str[j] === ">") {
      if (list !== null && list.next !== null) {
        list = list.next;
      }
    } else if (str[j] === "-") {
      if (list !== null && list.data !== null && list.prev !== null) {
        if (list.next === null && list.prev === null) list = new Node();
        else list = deleteNode(list);
      }
    } else {
      list = addNewNode(list, str[j]);
    }
    // printAll(list);
  }

  if (list) {
    while (list.prev) {
      list = list.prev;
    }
    while (list) {
      if (list.data) res += list.data;
      list = list.next;
    }
  }
  res += "\n";
}

console.log(res);
