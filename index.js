const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.width);

const image = new Image();
image.src = "./img/pokemon.png";

const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}
const background = new Sprite({
  position: {
    x: -1030,
    y: -750,
  },
  image: image,
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );
  if (keys.w.pressed) background.position.y += 3;
  else if (keys.a.pressed) background.position.x += 3;
  else if (keys.s.pressed) background.position.y -= 3;
  else if (keys.d.pressed) background.position.x -= 3;
}
animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      console.log("pressed w key");
      break;

    case "a":
      keys.a.pressed = true;
      console.log("pressed a key");
      break;

    case "s":
      keys.s.pressed = true;
      console.log("pressed s key");
      break;

    case "d":
      keys.d.pressed = true;
      console.log("pressed d key");
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      console.log("pressed w key");
      break;

    case "a":
      keys.a.pressed = false;
      console.log("pressed a key");
      break;

    case "s":
      keys.s.pressed = false;
      console.log("pressed s key");
      break;

    case "d":
      keys.d.pressed = false;
      console.log("pressed d key");
      break;
  }
});
