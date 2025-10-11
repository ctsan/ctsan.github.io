let MARGIN = 10
let RADIUS_LIM = 40
let RADIUS = 15
let MINIMUM_DISTANCE = 10
let W=750,H=420
let GRIDW=35
let GRIDH=Math.round(GRIDW*H/W)
var hunt,prey;
function bound(low,num,high){
    return max(min(high,num),low)
}
function tensacc(tensor,coords){
    return tf.gatherND(tensor,coords).dataSync()[0]
}
function next_states(action_prey,posprey,poshunt){
}
class Agent{
    constructor(row,col, radius, color){		 
      this.initrow = row
      this.initcol = col
      this.row = row
      this.col = col
      this.radius = radius
	  this.color = color
	  this.adv = null 
	  this.time = 0
    }
	reset_state(){
		this.row = this.initrow
		this.col = this.initcol
	}
    draw(){
        push()
        fill(color(255*this.color,0,255*(1-this.color)))
        let loc = grid(this.row,this.col)
        ellipse(loc[0],loc[1],this.radius,this.radius)
        pop()
    }
	set_adversary(who){ this.adv = who }
	delta_from_target(trow,tcol){
		return [this.row - trow, this.col-tcol]
	}
	delta_from_adv(){
		return this.delta_from_target(this.adv.row,this.adv.col)
        //[this.row - this.adv.row, this.col-this.adv.col]
	}
	dist_from_adv(){ return Agent.dist(this, this.adv) }
    ifmoved(vec) {
        let crow = this.row
        let ccol = this.col
        crow += vec[0]
        crow = bound(0,crow,GRIDH-1)
        ccol += vec[1]
        ccol = bound(0,ccol,GRIDW-1)
        return [crow,ccol]
    }
    move(vec){
        this.row += vec[0]
        this.row = bound(0,this.row,GRIDH-1)
        this.col += vec[1]
        this.col = bound(0,this.col,GRIDW-1)
    }
    static dist(ag1,ag2){
        return dist(ag1.row,ag1.col,ag2.row,ag2.col)
    }
}
class Hunter extends Agent{
    constructor(row,col, speed, memory){
        super(row,col,RADIUS, 0) 
        this.memory = memory
        this.reset_state()
        this.tot_score = 0
    }
    reset_state(){				
        super.reset_state()
        this.tot_score += this.score // This is resetted 
        this.score = 0
        this.distance_history = new Array(this.memory).fill(0);
        this.action_history   = new Array(this.memory).fill(0);
        this.current_delta    = createVector(2.5,0).rotate(Math.random()*365)
    }
    score_update() { 		
        this.score += this.dist_from_adv()
    }
    potential_next_for_target(targetrow,targetcol) {
        let delta = this.delta_from_target(targetrow,targetcol)
        let chr = - Math.sign(delta[0]) 
        let chc = - Math.sign(delta[1])     
        let choices = []
        if (chr!=0) {
            choices.push(self.ifmoved([crow,0]))
        }
        if (chc!=0) {
            choices.push(self.ifmoved([0,ccol]))
        }
        if (chc==0 && chr==0) {                
            choices.push(self.ifmoved([0,0]))
        }
        return choices
    }
    move_towards_adv(){
        let delta = this.delta_from_adv()
        let chr = - Math.sign(delta[0]) 
        let chc = - Math.sign(delta[1])     
        if (chr!=0 && chc!=0) {
            if (random([0,1])==0) {                    
                chr = - Math.sign(delta[0])
                chc = 0
            } else {                    
                chc = - Math.sign(delta[1])     
                chr = 0
            }
        }
        let d = [chr,chc]
        return [d,this.move(d)]
    }
}
class Prey extends Agent{
    constructor(x,y, speed){
        super(x,y,RADIUS, 1); 
        this.speed=speed 
        this.V      = tf.randomNormal([GRIDH,GRIDW,GRIDH,GRIDW])
        this.policy = tf.multinomial([1/4,1/4,1/4,1/4],GRIDH*GRIDW*GRIDH*GRIDW)
                        .reshape([GRIDH,GRIDW,GRIDH,GRIDW])
        this.gamma  = 0.95
    }
    reward() {            
        return -10/(this.dist_from_adv()**2+0.01)
    }
    state() {
        return [this.adv.row,this.adv.col,this.row,this.col]
    }
    vec_action_on_state(state) {
        let vec = []
        switch(tensacc(this.policy,state)) {
            case 0: vec=[1,0]; break
            case 1: vec=[-1,0]; break
            case 2: vec=[0,1]; break
            case 3: vec=[0,-1]; break
        }
        return vec
    }
    policy_move(){
        let vec = vec_action_on_state(this.state())
        this.move(vec)
    }
    policy_eval(){
        //this.V = this.gamma*(1/2 * this.V(next state1) + this.V(next state2) )            
        function(state) {                
            let prrow = state[2]
            let prcol = state[3]
            let nexts = self.adv.potential_next_for_target(prrow,prcol)
            if (nexts.length==1) {                    

            } else if (nexts.length==2) {

            } else {
                console.log('shoudnt happen')
            }
        }
        var old_tensor_vals = this.V.dataSync()
        var new_tensor_vals = old_tensor_vals.map(state =>                 
            state[0],state[1]
        )
    }
    policy_improv(){
    }
    policy_iter() {
    }
    move_away_from_adv(){
        let delta = this.delta_from_adv()
        let dist  = this.dist_from_adv()
        let d = [Math.sign(delta[0]),Math.sign(delta[1])]
        this.move(d)
    }
}

function setup() {
  let myCanvas = createCanvas(W, H);
  let random_coord = function(val){ return random(val-2*MARGIN)+MARGIN}
  myCanvas.parent("tester");
  [hunt,prey] = createPlayers()
  stroke(255); 
  frameRate(5);
}
function grid(row,col){    
    pix_w = W/GRIDW
    pix_h = H/GRIDH
    return [(col+1/2)*pix_w,(row+1/2)*pix_h]
}
function createPlayers() {
  tot_hist = 3
  middle_layer = 5

  h = new Hunter(1,1,1,tot_hist)
  p = new Prey( int(GRIDH*0.3), int(GRIDW*0.5),1.3),
  h.set_adversary(p); p.set_adversary(h);  
  return [h,p]
}
function draw() {
	function playStep(hunt,prey) {
		//prey.move_away_from_adv()
		hunt.move_towards_adv()
        prey.policy_move()
	}
	function playEpoch(hunt,prey) {
		hunt.reset_state()
		prey.reset_state()
		for (let j=0; j<simulation_time; j++) {
			playStep(hunt,prey)
		}
	}
	background(190); 
	hunt.draw(); prey.draw() 
	playStep(hunt,prey)
    //console.log(prey.reward())
    //prey.state()
}
