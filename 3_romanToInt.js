function romanToInt(s) {
  let num = 0;
  for (let e = 0; e < s.length; e++) {
    if (s[e] == "M") {
      num += 1000;
    } else if (s[e] + s[e + 1] == "CM") {
      num += 900;
      e++;
    } else if (s[e] == "D") {
      num += 500;
    } else if (s[e] + s[e + 1] == "CD") {
      num += 400;
      e++;
    } else if (s[e] == "C") {
      num += 100;
    } else if (s[e] + s[e + 1] == "XC") {
      num += 90;
      e++;
    } else if (s[e] + s[e + 1] == "XL") {
      num += 40;
      e++;
    } else if (s[e] == "L") {
      num += 50;
    } else if (s[e] + s[e + 1] == "IX") {
      num += 9;
      e++;
    } else if (s[e] == "X") {
      num += 10;
    } else if (s[e] + s[e + 1] == "IV") {
      num += 4;
      e++;
    } else if (s[e] == "V") {
      num += 5;
    } else if (s[e] + s[e + 1] == "IV") {
      num += 4;
      e++;
    } else if (s[e] == "I") {
      num += 1;
    }
  }
  return num;
}

console.log(romanToInt("MCMXCIV"));
