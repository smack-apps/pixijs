// Create the application helper and add its render target to the page
let app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
});
document.body.appendChild(app.view);

const dots = [];

for (let i = 0; i < 10; i++) {
  const myGraphic = new PIXI.Graphics();

  myGraphic.x = (Math.random() * app.renderer.width) / 1.5 + 225;
  myGraphic.y = (Math.random() * app.renderer.height) / 1.5 + 140;

  app.stage.addChild(myGraphic);

  myGraphic.beginFill(0xbbbbbc);
  myGraphic.drawCircle(100, 100, 30);
  myGraphic.endFill();
  app.stage.addChild(myGraphic);
  dots.push(myGraphic);
}

app.ticker.add((delta) => {
  for (let i = 0; i < dots.length; i++) {
    randomNumber = Math.random() * 0.05;
    dots[i].rotation += randomNumber * delta;
  }
});
