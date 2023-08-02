const hero = document.querySelector(".hero");

const text = document.querySelector("h1");
let walk = 500;
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

  let Xwalk = Math.round(x / width * walk - (walk /2));
  let Ywalk = Math.round(y / height * walk - (walk / 2));

  text.style.textShadow = `${Xwalk}px ${Ywalk}px 0 rgba(238,82,83,.7),
                            ${Xwalk * -1}px ${Ywalk}px 0 rgba(300,200,50,.7),
                            ${Ywalk }px ${Xwalk * -1}px 0 rgba(52,200,50,.7),
                            ${Ywalk * -1}px ${Xwalk}px 0 rgb(600,150,25,.7)`;
});


