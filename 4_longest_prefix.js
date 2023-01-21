let a = ["flower", "flow", "flight"];

let prefix = a[0];

for (let i = 1; i < a.length; i++) {
  while (a[i].indexOf(prefix) !== 0) {
    prefix = prefix.substring(0, prefix.length - 1);
  }
}

console.log(prefix);
