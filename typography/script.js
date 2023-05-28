const hero = document.querySelector(".hero");

const text = document.querySelector("h1");

hero.addEventListener("mousemove", function (event) {
  //   const width = hero.offsetWidth;
  //   const height = hero.offsetHeight;

  //   const x = event.offsetX; مکا ن قرارگیری موس
  //   const y = event.offsetY;
  //  OR Object distructring
  let { offsetWidth: width, offsetHeight: height } = hero;

  let { offsetX: x, offsetY: y } = event;
  x = x + event.target.offsetLeft;
  y = y + event.target.offsetTop;
  console.log("x=" + x, "y=" + y);
});
