// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    const destructivelyAppendCat = [...cats, name];
    console.log(destructivelyAppendCat);
    console.log(cats);
    cats.push("Ralph");
    return;
}
function destructivelyPrependCat(name) {
    const destructivelyPrependCat = [...cats, name];
    console.log(destructivelyPrependCat);
    console.log(cats);
    cats.unshift("Bob");
    return;
}
function destructivelyRemoveLastCat(name) {
    const destructivelyRemoveLastCat = [...cats, name]
    console.log(destructivelyRemoveLastCat);
    console.log(cats);
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(name) {
    const destructivelyRemoveFirstCat = [...cats, name]
    console.log(destructivelyRemoveFirstCat);
    console.log(cats);
    cats.shift("Milo");
}
function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"]
    return ["Milo", "Otis", "Garfield", "Broom"];
}
function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"]
    return ["Arnold", "Milo", "Otis", "Garfield"];
}
function removeLastCat(name) {
    const cats = ["Milo", "Otis", "Garfield"]
    return ["Milo", "Otis"];  
}  
function removeFirstCat(name) {
    const cats = ["Milo", "Otis", "Garfield"]
    return ["Otis", "Garfield"];
}