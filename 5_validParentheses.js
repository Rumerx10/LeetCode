let s = "}";
let a = [];
for (let i = 0; i < s.length; i++) {
  if (a.length == 0 && (s[i] == ")" || s[i] == "]" || s[i] == "]")) {
    return console.log(false);
  } else if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
    a.push(s[i]);
  } else if (
    (s[i] == ")" && a[a.length - 1] == "(") ||
    (s[i] == "]" && a[a.length - 1] == "[") ||
    (s[i] == "}" && a[a.length - 1] == "{")
  ) {
    a.pop();
  } else {
    return console.log(false);
  }
}

{
  a.length == 0 ? ture : false;
}

// Another Idea____________________________________

// let s = "[{(({[]]}))}]";
// let a = [];

// if (s.length % 2 === 1) return console.log(false);
// if (s[0] == ")" || s[0] == "]" || s[0] == "}") return console.log(false);
// if (s[s.length - 1] == "(" || s[s.length - 1] == "[" || s[s.length - 1] == "{")
//   return console.log(false);

// for (let i = 0; i < s.length; i++) {
//   if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
//     a.push(s[i]);
//   } else if (
//     (s[i] == ")" && a[a.length - 1] == "(") ||
//     (s[i] == "]" && a[a.length - 1] == "[") ||
//     (s[i] == "}" && a[a.length - 1] == "{")
//   ) {
//     a.pop();
//   }
// }

// {
//   a.length == 0 ? console.log(true) : console.log(false);
// }
