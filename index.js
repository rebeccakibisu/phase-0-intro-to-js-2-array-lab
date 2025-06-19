let cats = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendCat(kitty) {
  cats.push(kitty); // Adds to the end
 }

 function destructivelyPrependCat(Tim) {
  cats.unshift(Tim); // Adds to the beginning
 }
 function destructivelyRemoveLastCat() {
  cats.pop(); 
 }
 function destructivelyRemoveFirstCat() {
   cats.shift()
 }
 function appendCat(kelly) {
    return [...cats, kelly]
 }
 function prependCat(Jey) {
  return [Jey, ...cats];
 }
 function removeLastCat() {
  return cats.slice(0, -1);
 }

 function removeFirstCat() {
  return cats.slice(1);
 }
