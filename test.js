function inverser_Chaine(str) {
  return str.split("").reverse().join("");
}

console.log(inverser_Chaine("azerty"));

function compter_Caracteres(str) {
  return str.length;
}
console.log(compter_Caracteres("azerty"));

function mettre_En_Majuscule(str) {
  return str
    .split(" ")
    .map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(" ");
}

console.log(mettre_En_Majuscule("azertyand azerty and azerty "));

var tab = [100, 1, 2, 1];
function trouverMaximum(tab) {
  return Math.max(...tab);
}
console.log(trouverMaximum(tab));

function sommeTableau(tab) {
  return tab.reduce((somme, valeur) => somme + valeur, 0);
}

console.log(sommeTableau([1, 2, 3, 4, 5]));

function filtrerTableau(tab, condition) {
  return tab.filter(condition);
}

console.log(filtrerTableau([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0));

function filtrerTableau(tab, condition) {
  return tab.filter(condition);
}
function factorielle(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorielle(n - 1);
}

console.log(factorielle(55));
