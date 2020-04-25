let TOTAL_USERS = 500
let MARGIN = 10
let RADIUS_LIM = 40
let MINIMUM_DISTANCE = 10
let W=700,H=500
function setup() {
  //--------------------------------------------------------------------
  let myCanvas = createCanvas(W, H);
  let random_coord = function(val){ return random(val-2*MARGIN)+MARGIN}
  myCanvas.parent("tester");

  random_locations = function(user,users){
    while (true){
      violated_minimum = false
      cand_x=random_coord(width) 
      cand_y=random_coord(height) 
      for (const neighbor of users){
        if (user && user.id == neighbor.id) continue
          distance =  dist(cand_x,cand_y,neighbor.x,neighbor.y)
        if(distance < MINIMUM_DISTANCE){
          violated_minimum = true; break    
        }
      }
      if (!violated_minimum){ break }
    }	
    return {"x": cand_x, "y": cand_y}
  }
  init_users = function(){
    users = []
    for (let u = 0; u< TOTAL_USERS; u+=1){ 
      var point = random_locations(null, users)
      var newuser = { "id": u, "x":point.x, "y":point.y, "race": races[u%races_ac]}
      newuser.draw = function(){
        fill(this.race)
        ellipse(this.x, this.y, 10,10);
      }
      users.push(newuser)
    }
  }

  toleranceSlider = createSlider(0.0, 1.0, 0.5,0.1);
  toleranceSlider.parent("tester");
  toleranceSlider.position(0, 0);
  toleranceSlider.style("position","relative")
  prev_tolerance = toleranceSlider.value()

  let races = [color(255,0,0),color(0,0,255), color(255,0,255)]
  let races_ac = 3
  init_users()

  stroke(255); 
  frameRate(10);
}

function draw() {
  background(140); 
  const tolerance = toleranceSlider.value()	
  if (tolerance != prev_tolerance) init_users();
  prev_tolerance = tolerance;
  

  for (const user of users){
     user.draw()
  }
  for (const user of users){
    let nei = 0
    let same_race = 0
    for (const neighbor of users){
      distance = dist(user.x,user.y,neighbor.x,neighbor.y)
      if( distance < RADIUS_LIM)  {
        nei += 1  
        if(user.race==neighbor.race) { same_race+=1}
      }
    }
    if (nei>0 && same_race/nei<tolerance){
      var point = random_locations(user, users)
      user.x = point.x
      user.y = point.y
    }
  }
}

