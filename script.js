"use strict";

const data = [
  "Apple",
  "Banana",
  "Blueberry",
  "Cherry",
  "Date",
  "Fig",
  "Grapes",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Pineapple",
  "Pomegranate",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Watermelon",
  "Guava",
  "Lychee",
  "Peach",
  "Plum",
  "Apricot",
  "Coconut",
  "Cranberry",
];
const input = document.getElementById("searchBox");
const suggestionsBox = document.getElementById("suggestionsBox");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  suggestionsBox.innerHTML = "";
  if (value === "") return;

  const filtered = data.filter((item) => item.toLowerCase().includes(value));
  filtered.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item;
    div.onclick = () => {
      input.value = item;
      suggestionsBox.innerHTML = "";
    };
    suggestionsBox.appendChild(div);
  });
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    input.value = "";
    suggestionsBox.innerHTML = "";
  }
});
