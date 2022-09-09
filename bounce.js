const width = window.innerWidth;
const height = window.innerHeight;

const app = new PIXI.Application({
  width,
  height,
});
document.body.appendChild(app.view);

const ballArray = [];

const totalballs = 20;

for (let i = 0; i < totalballs; i++) {
  const ball = PIXI.Sprite.from("little_bouncy_ball.png");

  ball.anchor.set(0.5);

  ball.scale.set(0.8 + Math.random() * 0.3);

  ball.x = Math.floor(width / 2);
  ball.y = Math.floor(height / 2);

  ball.direction = Math.random() * Math.PI * 2;

  ball.turningSpeed = Math.random() - 0.8;

  ball.speed = 2 + Math.random() * 2;

  ballArray.push(ball);

  app.stage.addChild(ball);
}

const ballBounds = new PIXI.Rectangle(0, 0, width, height);

app.ticker.add(() => {
  for (let i = 0; i < ballArray.length; i++) {
    const ball = ballArray[i];
    ball.direction += ball.turningSpeed * 0.01;
    ball.x += Math.sin(ball.direction) * ball.speed;
    ball.y += Math.cos(ball.direction) * ball.speed;
    ball.rotation = -ball.direction - Math.PI / 2;

    if (ball.x < ballBounds.x) {
      ball.direction = -ball.direction;
    }
    if (ball.x > ballBounds.width) {
      ball.direction = -ball.direction;
    }
    if (ball.y < ballBounds.y) {
      ball.direction -= ball.direction;
    }
    if (ball.y > ballBounds.height) {
      ball.direction += ball.direction;
    }
  }
});
