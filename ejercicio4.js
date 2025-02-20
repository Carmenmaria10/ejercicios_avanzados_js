//4.1
const mainCharacters = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

function findArrayIndex(array, text) {
  return array.indexOf(text);
}

console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(mainCharacters, "Han Solo"));

//4.2
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

console.log(removeItem(mainCharacters, "Leia"));
console.log(removeItem(mainCharacters, "Luke"));
console.log(removeItem(mainCharacters, "Chewbacca"));