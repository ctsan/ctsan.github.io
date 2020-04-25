const model = tf.sequential();


model.add(
  tf.layers.dense({
    inputShape: [2],
    units: 3,
    activation: "relu"
  })
);


model.add(
  tf.layers.dense({
    units: 2,
    activation: "softmax"
  })
);

model.compile({
  optimizer: tf.train.adam(0.1),
  loss: "binaryCrossentropy",
  metrics: ["accuracy"]
});

let MARGIN = 10
let RADIUS_LIM = 40
let MINIMUM_DISTANCE = 10
let W=750,H=620

function setup() {
  let myCanvas = createCanvas(W, H);
  let random_coord = function(val){ return random(val-2*MARGIN)+MARGIN}
  let BUILDING_TYPES = {"house": color(255,255,255), "park": color(0,133,0), "police": color(0,0,133)} 

  myCanvas.parent("tester");


  class Hunter{
    constructor(x,y, radius){
      this.x = x
      this.y = y
      this.radius = radius
    }
    draw(){

      push()

      let f = 0
      fill(color(255*f,0,255*(1-f)))
      ellipse(this.x,this.y,this.radius,this.radius)
      pop()
    }
  }
  class Prey{
    constructor(x,y, radius){
      this.x = x
      this.y = y
      this.radius = radius
    }
    draw(){
      push()

      let f = 0
      fill(color(255*f,0,255*(1-f)))
      ellipse(this.x,this.y,this.radius,this.radius)
      pop()
    }
  }


  population=[
    new Hunter(100,100,15),
    new Prey(200,200,15),
  ]

  stroke(255); 
  frameRate(10);
}

function draw() {
  background(190); 

  for (const person of population){
    person.draw() 
  }
}

