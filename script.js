function createShapes() {
  const shapeContainer = document.querySelector(".container");

  if (shapeContainer) {
    const numberArray = [...Array(10)].map((_, index) => index + 1);

    numberArray.forEach((number) => {
      const div = document.createElement("div");
      div.className = `shape shape${number}`;
      shapeContainer.appendChild(div);
    });
  } else {
    console.error("Container element not found!");
  }
}

createShapes();
