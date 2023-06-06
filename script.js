function createShapes() {
  const shapeContainer = document.querySelector(".container");

  if (shapeContainer) {
    const numberArray = Array.from({ length: 12 }, (_, index) => index + 1);

    numberArray.forEach((number) => {
      const wrapperElement = document.createElement("div");
      wrapperElement.className = "shape-wrapper";

      const shapeElement = document.createElement("div");
      shapeElement.className = `shape shape${number}`;

      wrapperElement.appendChild(shapeElement);

      shapeContainer.appendChild(wrapperElement);
    });
  } else {
    console.error("Container element not found!");
  }
}

createShapes();
