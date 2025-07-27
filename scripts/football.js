let TOTAL_USERS = 0
let MARGIN = 10
let RADIUS_LIM = 40
let MINIMUM_DISTANCE = 10
let W=0,H=500
let TRUNC_TERM = 50

function define_classes() {
	my_func = function (p_goal_a,p_goal_b) {
		let ratio = p_goal_a/p_goal_b
		let remain = 1-p_goal_a-p_goal_b
		let p_miss_b = remain/(ratio+1)
		let p_miss_a = remain - p_miss_b
		console.log(p_goal_a,p_goal_b,p_miss_a,p_miss_b)
		log(10)
	}
	factorial = function(num){
		var rval=1;
		for (var i = 2; i <= num; i++)
			rval = rval * i;
		return rval;
	}
	logfactorial = function(num){
		var rval=1;
		for (var i = 2; i <= num; i++)
			rval = rval + log(i);
		return rval;
	}
	poisson_probability = function(rate,value) {
		return exp(value*log(rate) - rate- logfactorial(value))
	}
	categorical_single = function(highlights_mean,outof, predict_a,predict_b,goal_a,goal_b) {
		let p1 = poisson_probability(highlights_mean,outof)
		let p2 = predict_a*log(goal_a)+log(goal_b)*predict_b
		let p4 = log(1-goal_a-goal_b)*(outof-predict_a-predict_b)
		let p3 = logfactorial(outof) - logfactorial(predict_a) - logfactorial(predict_b)- logfactorial(outof-predict_a-predict_b)
		//console.log("poisson probability of ", outof, " events", p1) 
		return p1*exp(p2+p3+p4)
	}
	probability = function(highlights_mean, p_goal_a,p_goal_b,goal_a,goal_b) {
		let t = 0
		for (let i=goal_a+goal_b; i<=30; i++){
		  let temp = categorical_single(highlights_mean, i, goal_a,goal_b, p_goal_a, p_goal_b)	
			//console.log("categorical single", temp)
			t += temp
		}
		return t
	}

}

function setup() {
	W = select("#tester").width
  let myCanvas = createCanvas(W, H);
  myCanvas.parent("tester");

	define_classes()

  toleranceSlider = createSlider(0.0, 1.0, 0.5,0.1);
  toleranceSlider.parent("tester");
  toleranceSlider.position(0, 0);
  toleranceSlider.style("position","relative")
  prev_tolerance = toleranceSlider.value()

  stroke(255); 
  frameRate(10);

	total_probability = 0
	for (let gb=0; gb<=20; gb++) {
		for ( let ga_extra=1; ga_extra<=10; ga_extra++ ) {
			total_probability += probability(10,0.9,0.05, ga_extra+gb,gb)
		}
	}
	console.log(probability(5,0.98,0.01,5,0))
	console.log(total_probability)
}

function draw() {
  background(140); 
  const tolerance = toleranceSlider.value()	
}

