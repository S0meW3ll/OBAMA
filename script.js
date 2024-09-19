let arr = [
  "Перший президент України",
  "Яке місто відоме своїми фонтанами",
  "Художник-авангардист, засновник супрематизму, один з фундаторів кубофутуризму, що народився в Києві",
  "Перший космонавт в історії незалежної України",
  "Яка область в Україні найбільша за площею"
];
let arr2 = ["кравчук", "вінниця", "малевич", "каденюк", "одеська"];
let random = Math.trunc(Math.random() * 5);
const q = document.querySelector(".q");
const a = document.querySelector(".box1");

q.textContent = arr[random];
for (let i = 0; i < arr2[random].length; i++) {
  let el = document.createElement("div");
  a.appendChild(el);
}

const letters = document.querySelectorAll(".a");

letters.forEach((letter) => {
  letter.addEventListener("click", function () {
    const clickedLetter = this.textContent;

    for (let i = 0; i < arr2[random].length; i++) {
      if (arr2[random][i] === clickedLetter) {
        a.children[i].textContent = clickedLetter;
      }
    }
  });
});
