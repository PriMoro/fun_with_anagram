let array = ["code", "doce", "ecod", "framer", "frame"];

function isAnagram(str1, str2) {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}
function funWithAnagram(array) {
  for (let i = 0; i < array.length; i++) {
    for (let x = array.length - 1; x > i; x--) {
      if (isAnagram(array[i], array[x])) {
        array.splice(x, 1);
      }
    }
  }
  console.log(array);
}

funWithAnagram(array);
