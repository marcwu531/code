document.getElementById('left').style.display = "none";
document.getElementById('right').style.display = "none";
document.getElementById('up').style.display = "none";
document.getElementById('down').style.display = "none";

function snakegame() {
    if (isornotok != 0) {
      document.getElementById('canvas').style.display = "block";
      isornotok = 0;
  
    document.getElementById('left').style.display = "block";
    document.getElementById('right').style.display = "block";
    document.getElementById('up').style.display = "block";
    document.getElementById('down').style.display = "block";
  
    window.spd = 2500;
    spd = prompt("Friction? (Smaller the value, faster the snake. 500-4500)","2500");
    loopask();
  
    this.snake = new Snake();
    this.food = new Food()
  
    this.ctx = canvas.getContext('2d');
    this.scale = 20;
    this.nx = Math.floor(canvas.width/this.scale);
    this.ny = Math.floor(canvas.height/this.scale);
  
    this.step = function(){
      this.snake.step(this);
      this.food.step(this);
  
      this.draw();
      this.wait();
    };
    this.draw = function(){
      this.Rect(0, 0, this.nx, this.ny, '#AAAAAA');
  
      this.snake.draw(this);
      this.food.draw(this);
    };
    this.keydown = function(evt){
      this.snake.keydown(evt.key);
    }
  
    this.Rect = function(x,y,w,h,fs){
      this.ctx.fillStyle = fs;
      this.ctx.fillRect(x*this.scale, y*this.scale, w*this.scale-1, h*this.scale-1)
    };
  
    this.wait = function(){
      setTimeout(this.step.bind(this), spd/25);
    };
  
    document.addEventListener('keydown', this.keydown.bind(this));
    this.wait();
      } else {
      alert("Please refresh this page to replay.");
      endgame("snake");
      }
  }
  
  
  function Snake(){
    this.l = 2;
    this.trace = [];
    this.x = 10;
    this.y = 10;
    window.vx = 1;
    window.vy = 0;
    let score = 0;
  
    this.step = function(snakegame){
      this.x = this.x + vx;
      this.y = this.y + vy;
      score = score - 1;
  
      /*if(this.x >= snakegame.nx) this.x = 0;
      if(this.y >= snakegame.ny) this.y = 0;
      if(this.x < 0 ) this.x = snakegame.nx - 1;
      if(this.y < 0 ) this.y = snakegame.ny - 1;*/
  
      if(this.x >= snakegame.nx || this.y >= snakegame.ny || this.x < 0 || this.y < 0 ) {
      //if (isornotok !== 0) {
      this.l = 0;
      this.x = 1;
      this.y = 1;
      vx = 0;
      vy = 0;
      endgame(snake);
          this.mathrandom = Math.random();
          let accuratescore = (((score * (73 / (spd * 100)) * (531 / 411 + this.mathrandom * 2008)) / 612) * 5) ** 1.35;
          score = round((score * (73 / (spd * 100)) * (531 / 411 + this.mathrandom * 2008)) / 612, 3) * 5;
      if (score < 0) {
          score = 0;
      } else if (score > 0) {
      score = round(score ** 1.35, 2);
      console.log(`Accurate score: ${accuratescore}`);
      }
      prompt(`Game Over! Your score is ${score}`,"LOL");
      //}
      }
  
      for(var i=0; i<this.trace.length; i++){
        var pos = this.trace[i];
        if( pos.x == snakegame.food.x && pos.y == snakegame.food.y ){
          this.l = this.l + 1;
      score = score + 1000 * this.trace.length;
          snakegame.food.reset(snakegame);
        }
  
        if(pos.x == this.x && pos.y == this.y) this.l = 2;
      }
  
      this.trace.push({x: this.x, y: this.y});
      while(this.trace.length > this.l) this.trace.shift();
    };
    this.draw = function(snakegame){
      for(var i=0; i<this.trace.length; i++){
        var pos = this.trace[i];
        snakegame.Rect(pos.x, pos.y, 1, 1, 'green');
      }
    };
    this.keydown = function(key){
      if(key == 'ArrowDown'){
        snakedown();
      } else if(key == 'ArrowUp'){    
        snakeup();
      } else if(key == 'ArrowLeft'){
        snakeleft();
      } else if(key == 'ArrowRight'){
        snakeright();
      }
    };
  }
  
  function Food(){
    this.x = 3;
    this.y = 4;
    this.step = function(snakegame){};
    this.draw = function(snakegame){
      snakegame.Rect(this.x, this.y, 1, 1, 'red');
    };
  
    this.reset = function(snakegame){
      this.x = Math.floor(Math.random()*snakegame.nx);
      this.y = Math.floor(Math.random()*snakegame.ny);
    };
  }
  
  function loopask() {	
      if (spd < 500 || spd > 4500) {
          alert("Please enter a proper value.");
          spd = prompt("Friction? (Smaller the value, faster the snake. 500-4500)","2500");
          loopask();
      }
  }
  
if (move = 1) {

  function snakedown() {
  if (vy !== -1) {
        vx = 0;
        vy = 1;
     }
  }
  
  function snakeup() {
  if (vy !== 1) {
        vx = 0;
        vy = -1;
     }
  }
  
  function snakeleft() {
  if (vx !== 1) {
        vx = -1;
        vy = 0;
     }
  }
  
  function snakeright() {
  if (vx !== -1) {
        vx = 1;
        vy = 0;
     }
  }
}
  