let MARGIN = 10
let RADIUS_LIM = 40
let RADIUS = 15
let MINIMUM_DISTANCE = 10
let W=750,H=620
var hunt,prey;
class Agent{
    constructor(x,y, radius, color){		 
      this.initx = x
      this.inity = y
      this.x = x
      this.y = y
      this.radius = radius
	  this.color = color
	  this.adv = null 
	  this.time = 0
    }
	reset_state(){
		this.x = this.initx
		this.y = this.inity
	}
    draw(){
      push()
      fill(color(255*this.color,0,255*(1-this.color)))
      ellipse(this.x,this.y,this.radius,this.radius)
      pop()
    }
	set_adversary(who){ this.adv = who }
	delta_from_adv(){
		return [this.x - this.adv.x, this.y-this.adv.y]
	}
	dist_from_adv(){ return Agent.dist(this, this.adv) }
		move(vec){
			this.x += vec[0]
			this.y += vec[1]
		}
		static dist(ag1,ag2){
			return dist(ag1.x,ag1.y,ag2.x,ag2.y)
		}
	}
  class Hunter extends Agent{
    constructor(x,y, speed, memory, params){
			super(x,y,RADIUS, 0) 
			this.memory = memory
			this.params = params // TODO: Assert correct number of items
			this.reset_state()
			this.tot_score = 0
			
			this.policy = tf.sequential({
				layers: [
				  tf.layers.dense({inputShape: [memory*2], units: 10, activation: 'relu'}),
				  tf.layers.dense({units: 10, activation: 'relu'}),
				  tf.layers.dense({units: 1, activation: 'softmax'}),
				]
			});
		}
		reset_state(){				
			super.reset_state()
			this.tot_score += this.score // This is resetted 
			this.score = 0
			this.distance_history = new Array(this.memory).fill(0);
			this.action_history   = new Array(this.memory).fill(0);
			this.current_delta    = createVector(2.5,0).rotate(Math.random()*365)
		}
		predict(){
				let inp = tf.tensor(this.action_history)
							.flatten().concat([tf.tensor(this.distance_history)]).reshape([1,this.memory*2])
				return this.policy.predict(inp)
		}
		score_update() { 		
			this.score += this.dist_from_adv()/100
		}
		behave(){
			this.score_update()
			this.time += 1
			// State Update
			let dist  = this.dist_from_adv()

			dist = min(dist,600)/600

			this.distance_history.shift()  // Drop oldest distance
			this.distance_history.push(dist) // Get Newest distance
			let action_taken = this.move_function() // Take new action

			this.action_history.shift()  // Drop oldest action
			this.action_history.push(action_taken[0]) // update with newest action
		}
		move_function(){
			let innprod  = 0
			let action
			
			if (Math.random()<0.005) console.log(this.predict().dataSync()[0])
			if (innprod >0) {					
				this.current_delta.rotate(0.03)
				action = 1
			} else {
				this.current_delta.rotate(-0.03)
				action = -1
			}
			let d = [this.current_delta.x , this.current_delta.y]								
			//console.log(action,this.distance_history[0])
			return [action,this.move(d)]
		}
		move_towards_adv(){
			let delta = this.delta_from_adv()
			let dist  = this.dist_from_adv()
			let d = [- delta[0]/dist * 1.05,-delta[1]/dist * 1.05]
			return [d,this.move(d)]
		}
  }
  class Prey extends Agent{
    constructor(x,y, speed){ super(x,y,RADIUS, 1); this.speed=speed }
		move_away_from_adv(){
			let delta = this.delta_from_adv()
			let dist  = this.dist_from_adv()
			let d = [delta[0]/dist,delta[1]/dist]
			this.move(d)
		}
  }

function setup() {
  let myCanvas = createCanvas(W, H);
  let random_coord = function(val){ return random(val-2*MARGIN)+MARGIN}

  myCanvas.parent("tester");

  [hunt,prey] = createPlayers()

  //population = 100
  //keeptop    = 15
  //mutatetop  = 50
  //newplayers = population - mutatetop - keeptop

  //players = []
  //for (let i=0; i<population; i++) {
	//let newval = createPlayers()
	//layers.push(newval)
  //}
  //console.log(players)
  stroke(255); 
  frameRate(60);
}
function createPlayers() {
  tot_hist = 3
  middle_layer = 5
  
  pars1 = tf.randomNormal([middle_layer, tot_hist*2]) 
  pars2 = tf.randomNormal([1,middle_layer])
  pars  = [pars1,pars2] 

  h = new Hunter(100,100,1,tot_hist,
		pars // Array.from(Array(tot_hist*2+extras)).map(x=> (Math.random()-0.5)*5)
	),
  p = new Prey(200,200,1),
  h.set_adversary(p); p.set_adversary(h);  
  return [h,p]
}
function draw() {
	function playStep(hunt,prey) {
		prey.move_away_from_adv()
		hunt.behave()
	}
	function playEpoch(hunt,prey) {
		hunt.reset_state()
		prey.reset_state()
		for (let j=0; j<simulation_time; j++) {
			playStep(hunt,prey)
		}
	}
	background(190); 
	let simulation_time = 300
	let total_grads   = 20
	let tot_avg_runs    = 5
	if (frameCount%simulation_time==1){			
		for (let gradi=0; gradi<total_grads; gradi+=1){
			for (let avg_run=0; avg_run<=tot_avg_runs; avg_run++) {
				playEpoch(hunt,prey)
			}
			hunt.reset_state()
			prey.reset_state()
		}
	}
	hunt.draw(); prey.draw() 
	playStep(hunt,prey)
}
