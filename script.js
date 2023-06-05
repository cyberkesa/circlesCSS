const arr = [...Array(10)].map((_, index) => index + 1);
arr.map((a) => {
  const div = document.createElement("div");
  div.className = `shape shape${a}`;
  document.querySelector(".container").appendChild(div);
});
