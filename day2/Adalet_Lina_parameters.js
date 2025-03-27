function greeting(name, dayTime) {
  if (name.toLowerCase() === "count dooku") {
    return "I'm coming for you Dooku";
  } else {
    return "good " + dayTime + ", " + name;
  }
}
var msg = greeting("Lina", "evening");
console.log(msg);
