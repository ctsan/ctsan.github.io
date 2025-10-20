// Name Data
let namesgirls =[
"Maria", "Katerina", "Christina", "Anastasia", "Dimitra", "Mary", "Alexandra", "Irene", "Helen", "Anna", "Georgia", "Elena", "Konstantina", "Joanna", "Eva", "Eleni", "Zoe", "Olga", "Sofia", "Marianna", "Marina", "Christine		", "Sophie", "Nicole	", "Athina", "Danae		", "Agnes", "Melina		", "Eleftheria", "Efi	", "Kate", "Theodora", "Ioanna", "Catherine", "Nefeli", "Lydia", "Myrto", "Sophia", "Chrysa", "Evi", "Demi", "Stella", "Artemis", "Vasiliki", "Aggeliki", "Fotini", "Katherine", "Angela", "Vicky", "Marilina", "Nikoletta", "Angeliki", "Athena", "Despina", "Debbie", "Elpida", "Afrodite", "Natalia", "Alexia", "Alice", "Chrisa", "Demy", "Angie", "Claire", "Elizabeth", "Giota", "Rafaela", "Dora", "Michaela", "Thalia", "Connie", "Lina", "Fenia", "Dina", "Theano", "Angelika", "Iro", "Vivi", "Vassiliki", "Mariza", "Vasia", "Vagia", "Jenny", "Stefania", "Iliana", "Ria", "Marialena", "Lia", "Vera", "Ariadne", "Alex", "Eve", "Nasia", "Aspa", "Kona", "Thania", "Daphne", "Angèlie", "Eua", "Nastia", "Aimilia", "Sandy"
]
let namesboys=[
"George", "Nick", "John", "Stelios", "Konstantinos", "Kostas", "Chris", "Thanos", "Alex", "Dimitris", "Christos", "Manos", "Tasos", "Panagiotis", "Bill", "Peter", "Aris", "Jim", "Andrew", "Marios", "Apostolis", "Giorgos", "Alexandros", "Pantelis", "Angelos", "Giannis", "Antonis", "Steven", "Manolis", "Lefteris", "Aggelos", "Andreas", "Evangelos", "Nikos", "Spiros", "Panos", "Angel", "Mike", "Alexander", "Thanasis", "Petros", "Nicolas", "Michael", "Gregory", "Stavros", "Nikolas", "Vaggelis", "Mihalis", "Achilleas", "Vasilhs", "Thomas", "Steve", "Serafim", "Lambros", "Christopher", "Joseph", "Vasilia", "Haris", "Angelo", "Vasilis", "Harris", "Anastasis", "Minas", "Alkinoos", "Con", "Billy", "Vassilis", "Greg", "Agim", "Elias", "Constantine", "Kostantinos", "Philip", "Sotiris", "Paul", "Vagelis", "Anthony", "Kyriakos", "Babis", "Vlassios", "Aposs", "Ioakeim", "Panayiotis", "Antis", "Hamidou", "Theodore", "Andy", "Giorgio", "Neimar", "Taxiarchis", "Anastase", "Gangi", "Alex", "Evmorfia", "Markos", "Dinos", "Lykourgos", "Sakis", "Demonon", "Labros", "Raffael", "Kevin", "Bah", "Jordan", "Percey", "Vlassis", "Ioannis", "Anton", "Hans", "Ody", "Giorgios"
]
//

function randomName(sex){
  if (sex!="male")
    return namesgirls[ Math.floor(Math.random()*namesgirls.length)]
  else 
    return namesboys[ Math.floor(Math.random()*namesboys.length)]
}

const HOUSE  = "house"
const PARK   = "park"
const HOSPITAL = "hospital"
const GROCERY = "grocery"


const DEFAULT_TOTAL_COLS    = 35
const DEFAULT_TOTAL_ROWS    = 35
const DEFAULT_DENSITY       = 1.0
const DEFAULT_INFECT_CHANCE = 0.14

let SICK_MIN = 14
let SICK_MAX = 25

let CAN_YOU_GET_REINFECTED = false 
let IMMUNE_MIN = Math.floor(0.9*25)
let IMMUNE_MAX = Math.floor(1.1*25)

let INTERACTION_PERIOD = 20
let INFECTION_PERIOD   = 20
let INFECT_CHANCE = DEFAULT_INFECT_CHANCE
let CONNECTION_PROBABILITY = 0.3

let TOTAL_HOUSE_COLS = DEFAULT_TOTAL_COLS
let TOTAL_HOUSE_ROWS = DEFAULT_TOTAL_ROWS
let PEOPLE = TOTAL_HOUSE_COLS*TOTAL_HOUSE_ROWS*DEFAULT_DENSITY
let HOSPITAL_CAPACITY_RATE = 0.05 
let VIEW_HOUSE_COLS  = 23
let VIEW_HOUSE_ROWS  = 16


let current_col_view = 0
let current_row_view = 0
function update_col_view(newval) { current_col_view = bounded(0, newval, TOTAL_HOUSE_COLS-VIEW_HOUSE_COLS) }
function update_row_view(newval) { current_row_view = bounded(0, newval, TOTAL_HOUSE_ROWS-VIEW_HOUSE_ROWS) }

let X_JUMP_HOUSE = 34
let Y_JUMP_HOUSE = 35
let HOUSE_DRAW_OFFSET_X = X_JUMP_HOUSE
let HOUSE_DRAW_OFFSET_Y = Y_JUMP_HOUSE
let PLOT_HEIGHT = 200
let PLOT_WIDTH  = 200

let TOTAL_USERS = 500
let MARGIN = 10
let MARGIN_VER = 10
let MARGIN_HOR = 10
let RADIUS_LIM = 40
let MINIMUM_DISTANCE = 10
let W=0,H=1050 // Width is Initialized Below

let MAXIMUM_HOUSE_WIDTH  = 25
let MAXIMUM_HOUSE_HEIGHT = 25

let HOSPITALS = 10
let PARKS                = 10
let GROCERIES            = 15

let NORMAL_HOUSE_PRICE = 200000

//let EGO_NET_MAX_RAD = 4

let JOBS = {"AverageWage": 35000, "MinimumWage": 20000, "Unemployed": 0}

let death_chance = [0.006,0.004,0.0002,0.0002, // 0 to 3
                    0.0001,0.0001,0.0001,0.0001,0.0001,0.0001, // 4 to 9
                    0,0,0.0001,0.0002,0.0003,0.0004, 0.0005,0.0007,0.0008, // up to 18
                    0.001,0.0011,0.0013,0.0014,0.0015,0.0015,0.0016,0.0016, // 28
                    0.0017,0.0017,0.0017,0.0018,0.0018,0.0019,0.0019,0.0020, //35
                    0.0021,0.0021,0.0022,0.0023,0.0024,0.0025,0.0026,0.0028, //43
                    0.0030,0.0032,0.0034,0.0037,0.0041,0.0041,0.0045,0.005, //50
                    0.0055,0.0060,0.0065,0.0071,0.0078,0.0084,0.0091,0.099, //58
                    0.0106,0.0115,0.0124,0.0133,0.0141,0.0149,0.0158,0.0168, //66
                    0.0181,0.0195,0.0212,0.0231,0.0252,0.0275,0.0300,0.0327, //74
                    0.0359,0.0395,0.0435,0.0477,0.0523,0.0577,0.0638,0.0707,
                    0.0784,0.0869,0.0966,0.1073,0.1194,0.1328,0.1475,0.1637,
                    0.1811,0.1998,0.2197,0.2409,0.2618,1.0 ].map( x => x*2)


function bounded(a,x,b){
  // bound x by [a,b]
  return max(a, min(x,b))
}

var hospital_availability = 0
let setups = 0
function setup() {
  setups += 1

  let myCanvas
  let BUILDING_TYPES = {"house": color(255,255,255), "park": color(0,133,0), "hospital": color(155,0,0), "grocery": color(100,0,255) } 
  let random_coord = function(val){ return random(val-2*MARGIN)+MARGIN}
  clock = 0

	hospital_availability = floor(HOSPITAL_CAPACITY_RATE*PEOPLE)
	new_slider = function(startval,endval,def,step,parent){
		let newslider = createSlider(startval,endval,def,step);
		newslider.parent(parent)
		newslider.style("position","relative")
		newslider.changed(updateParams)
		return newslider
	}

  if (setups==1) {
		W = select("#tester").width
		console.log(W)
		if (W>=860) {
			VIEW_HOUSE_COLS = 23
		} else if (W>=800) {
			VIEW_HOUSE_COLS = 22
		} else {
			VIEW_HOUSE_COLS = 22-ceil((800-W)/X_JUMP_HOUSE)
		}

    myCanvas = createCanvas(W, H);
    myCanvas.parent("tester");

    inspector = createElement('p', '');
    inspector.position(20, 5);
    inspector.parent("inspecter");
    inspector.style("position","relative")

		updateParams = function(){
			//EGO_NET_MAX_RAD = connectionRadius.value()
			INFECT_CHANCE = infectionChance.value()
			CONNECTION_PROBABILITY = connectivityChance.value()
			TOTAL_HOUSE_COLS = townSize.value()
			TOTAL_HOUSE_ROWS = townSize.value()
			PEOPLE = floor(TOTAL_HOUSE_COLS*TOTAL_HOUSE_ROWS* populationDensity.value())
			SICK_MIN = floor( meanDaysSick.value()*0.75)
			SICK_MAX = floor( meanDaysSick.value()*1.25)

			IMMUNE_MIN = floor( daysBeforeReinfection.value()*0.7 )
			IMMUNE_MAX = floor( daysBeforeReinfection.value()*1.3 )
			CAN_YOU_GET_REINFECTED = (reinfection.value()=="yes")?true:false;
			setup()                                        
		}

    populationDensity  = new_slider(0.2, 2.5, DEFAULT_DENSITY,0.1,"populationDensity");
    townSize           = new_slider(30, 70, DEFAULT_TOTAL_COLS,1,"townSize");
    connectionRadius   = new_slider(1, 8, 3,1,"connectionRadius");
    connectivityChance = new_slider(0.05, 1.0, 0.2,0.05,"connectivityChance");
    infectionChance    = new_slider(0.01, 1.0, DEFAULT_INFECT_CHANCE,0.01,"infectionChance");
    meanDaysSick       = new_slider(10, 30, 20,1,"meanDaysSick");

    reinfection        = createSelect();
		reinfection.option('no');
		reinfection.option('yes');
		reinfection.parent("reinfectionQ")
		reinfection.changed(updateParams)

		daysBeforeReinfection = new_slider(10, 40, 25,1,"daysbeforereinf");
  }

  color_sickness = function(status_){
    if (status_==0) { return color(0,0,255) }
    else if (status_==1) { return color(255,0,0) }
    else if (status_==2) { return color(150,100,0,200) }
    else if (status_ ==3) { return  color(0,0,0,150)}
  }

  parks_around = function(building_grid,i,j,radius){
    let x_length = building_grid[0].length
    let lowerx = max(0,j-radius)
    let upperx = min(x_length-1,j+radius)

    let y_length = building_grid.length-1
    let lowery = max(0,i-radius)
    let uppery = min(y_length,i+radius)
    let total_parks = 0

    for (let r=lowery; r<=uppery; r+=1){
      for (let c=lowerx; c<=upperx; c+=1){
        if (building_grid[r][c].type=="park") total_parks += 1
      }
    }
    return total_parks
  }

	Quarantine = class Quarantine{
    constructor(orderx,ordery,total_x,total_y){
			this.orderx  = orderx  
			this.ordery  = ordery   
      this.total_x = total_x 
      this.total_y = total_y 

			for (const person of population){
				let house = person.house
				if (house.orderx>=this.orderx && house.orderx<this.orderx+this.total_x && 
						house.ordery>=this.ordery && house.ordery<this.ordery+this.total_y
				) {
					console.log("added person",person)
					person.quarantine.add(this)
					console.log("q:",person.quarantine)
				}
			}
    }
		draw(){
			let start_building = buildings[this.ordery][this.orderx]
			let end_building   = buildings[this.ordery+this.total_y][this.orderx+this.total_x]

			push()
			stroke(color(0,0,0))
			fill(color(255,255,0))
			
      //ellipse( start_building.v_x() , start_building.v_y() ,10,10)
			fill(color(255,255,0,50))
			
			let temp_start_v_x
			let temp_start_v_y
			let temp_end_v_x
			let temp_end_v_y
			temp_start_v_x = bounded(  Building.x_ending() - Building.x_width(), start_building.v_x(), Building.x_ending())
			temp_start_v_y = bounded(  Building.y_ending() - Building.y_width(), start_building.v_y(), Building.y_ending())
			temp_end_v_x = bounded(  Building.x_ending() - Building.x_width(), end_building.v_x(), Building.x_ending())
			temp_end_v_y = bounded(  Building.y_ending() - Building.y_width(), end_building.v_y(), Building.y_ending())
			rect( temp_start_v_x - 5 , temp_start_v_y -5, temp_end_v_x - temp_start_v_x , temp_end_v_y -temp_start_v_y)
			pop()
		}

	}
  class PlotHeat{
    constructor(x,y,height,maxwidth){
      this.startx = x
      this.starty = y
      this.height = height
      this.width  = maxwidth
    	
    }
		moused(mx,my){
			return mx > this.startx && mx < this.startx +this.width && my > this.starty && my < this.starty +this.height
		}
		set_house_on_coords(mx,my) {
      let per_house_width  = this.width/TOTAL_HOUSE_COLS
      let per_house_height = this.height/TOTAL_HOUSE_ROWS 
		  update_col_view(floor((mx-this.startx)/per_house_width - VIEW_HOUSE_COLS/2))
			update_row_view(floor((my-this.starty)/per_house_height - VIEW_HOUSE_ROWS/2))
		}
    draw(){
      let per_house_width  = this.width/TOTAL_HOUSE_COLS
      let per_house_height = this.height/TOTAL_HOUSE_ROWS 

      push()

      for (let i=0; i<TOTAL_HOUSE_COLS; i++) {
				for (let j=0; j<TOTAL_HOUSE_ROWS; j++){
					stroke(color(30,30,30))
	  
					let im1, ip1, jm1, jp1

					im1 = bounded(0,i-1, TOTAL_HOUSE_COLS-1)
					ip1 = bounded(0,i+1, TOTAL_HOUSE_COLS-1)
					jm1 = bounded(0,j-1, TOTAL_HOUSE_ROWS-1)
					jp1 = bounded(0,j+1, TOTAL_HOUSE_ROWS-1)

					let weight = (2*buildings[j][i].sick_this_house()+
									buildings[j][im1].sick_this_house()+
									buildings[jm1][i].sick_this_house()+
									buildings[j][ip1].sick_this_house()+
									buildings[jp1][i].sick_this_house()+
								0.5* buildings[jm1][im1].sick_this_house()+
								0.5* buildings[jp1][ip1].sick_this_house()+
								0.5*  buildings[jp1][im1].sick_this_house()+
								0.5* buildings[jm1][ip1].sick_this_house())/(2*3+3*4+3*4*0.5)

					let weightbr = (2*buildings[j][i].imm_this_house()+
									buildings[j][im1].imm_this_house()+
									buildings[jm1][i].imm_this_house()+
									buildings[j][ip1].imm_this_house()+
									buildings[jp1][i].imm_this_house()+
								0.5* buildings[jm1][im1].imm_this_house()+
								0.5* buildings[jp1][ip1].imm_this_house()+
								0.5*  buildings[jp1][im1].imm_this_house()+
								0.5* buildings[jm1][ip1].imm_this_house())/(2*3+3*4+3*4*0.5)

					
					weight = bounded(0,weight*1.3,1)
					weightbr = bounded(0,weightbr*1.3,1)
					fill(color(Math.floor(weight*255), Math.floor(weightbr*255),0,250))
					rect(this.startx+i*per_house_width,this.starty+j*per_house_height,
							per_house_width-0, per_house_height-0)
				}
			}

      strokeWeight(4)
      stroke(color(255,255,150,150))
      fill(color(0,0,0,0))
      rect(
	this.startx+per_house_width*current_col_view, 
	this.starty+per_house_height*current_row_view,
	VIEW_HOUSE_COLS*per_house_width,
	VIEW_HOUSE_ROWS*per_house_height
      )
      strokeWeight(1)
      stroke(color(255,255,255))
      rect(this.startx,this.starty,
	   this.width,this.height)
      pop()

    }
  }
	class Button{

	}
	class TextBox{
    constructor(bgcolor,x,y,height,width,text,size){
			this.startx = x 
			this.starty = y 
			this.bgcolor = bgcolor
			this.width = width
			this.height = height
			this.text = text
			this.size = size
			this.text_margin  = 2
		}
		draw(){
			push()
			fill(this.bgcolor)
			rect(this.startx, this.starty,this.width,this.height) 
			fill("black")
			textAlign(CENTER,CENTER)
			textSize(this.size)
			text(this.text, this.startx+this.width/2, this.starty+this.height/2)
			pop()
		}
		
	}
	class PlotContainer{
    constructor(bgcolor,x,y,height,width){
			this.startx = x 
			this.starty = y 
			this.bgcolor = bgcolor
			this.plots = {}
			this.width = width
			this.height = height
		}
		addPlotter(key,maxval,color) {
			this.plots[key] = new Plot(color, this.startx, this.starty, this.height, this.width, maxval)
		}
		draw() {
			push()
			fill(this.bgcolor)
			rect(this.startx, this.starty,this.width,this.height) 
			pop()
			for (var key in this.plots) {
				this.plots[key].draw()
			}
		}
	}
  class Plot{
    constructor(color,x,y,height,maxwidth,maxval){
      this.color = color
      this.lineseq = []
      this.startx   = x
      this.starty   = y	
      this.height   = height
      this.maxwidth = maxwidth
      this.maxval   = maxval

			this.actual_max_val_so_far = 0
    }
    //pushline(x,y,x2,y2) {
    // this.lineseq.push([x,y,x2,y2])
    //}
    pushline(x,y) {
      this.lineseq.push([x,y])
			this.actual_max_val_so_far = max(this.actual_max_val_so_far, y)
    }
    draw(){
      push()
      stroke(this.color)
      //for (const linecords of this.lineseq){
      //  line(linecords[0],linecords[1],linecords[2],linecords[3])
      //}
      
      let start_point = max(this.lineseq.length-this.maxwidth, 0)+1
      for (let i=start_point; i< this.lineseq.length; i++){
				let currpoint = this.lineseq[i]
				let prevpoint = this.lineseq[i-1]
				line(this.startx+i-start_point,this.starty + this.height - prevpoint[1]*this.height/this.maxval,
				this.startx+i+1-start_point,  this.starty + this.height - currpoint[1]*this.height/this.maxval)
      }
      pop()
    }
  }

  Building = class Building{
    constructor(id,orderx,ordery,x,y,width,height, type){
      this.id     = id; 
      this.x      = x;
      this.orderx = orderx;
      this.ordery = ordery;
      this.y      = y;
      this.width  = width;
      this.height = height;
      this.type   = type;
      this.owner  = null;
      this.family = [];
    } 
		static buildings_moused(mx,my){
      if (mx > Building.x_ending()-Building.x_width() && mx < Building.x_ending() &&
          my > Building.y_ending()-Building.y_width() && my < Building.y_ending())
        return true
			else return false
		}
		static closest_building(mx,my) {
				if (Building.buildings_moused(mx,my)) {
					let startx = Building.x_ending()-Building.x_width()
					let starty = Building.y_ending()-Building.y_width()
					let retx = bounded(0, round((mx-startx)/X_JUMP_HOUSE + current_col_view), TOTAL_HOUSE_COLS-1)
					let rety = bounded(0, round((my-starty)/Y_JUMP_HOUSE + current_row_view), TOTAL_HOUSE_ROWS-1)
					return [rety,retx]
				} 
				else return null
		}
		static y_width(){
			return min(buildings.length, VIEW_HOUSE_ROWS)* Y_JUMP_HOUSE 
		}
		static y_ending(){
			return HOUSE_DRAW_OFFSET_Y + Building.y_width() 
		}
		static x_width(){
			return min(buildings[0].length, VIEW_HOUSE_COLS)* X_JUMP_HOUSE 
		}
		static x_ending(){
			return HOUSE_DRAW_OFFSET_X + Building.x_width()
		}
    inview() {
      return (bounded(current_col_view,this.orderx, current_col_view+VIEW_HOUSE_COLS-1) == this.orderx) &&
	     (bounded(current_row_view,this.ordery, current_row_view+VIEW_HOUSE_ROWS-1) == this.ordery) 
    }
    sick_this_house(){
      return this.family.filter(person=>person.sick==1).length
    }
    imm_this_house(){
      return this.family.filter(person=>person.sick==2).length
    }
		static offset_x(){
			return HOUSE_DRAW_OFFSET_X - current_col_view * X_JUMP_HOUSE   
		}
    v_x() { // view x 
      return HOUSE_DRAW_OFFSET_X + this.x - current_col_view * X_JUMP_HOUSE   
    }
    v_y() { // view y
      return HOUSE_DRAW_OFFSET_Y + this.y - current_row_view * Y_JUMP_HOUSE
    }
    draw(){
      if (!this.inview() ) return
      // || (this.type=="house" && this.family.length==0)
      push()
      if (this.type=="house" && this.family.length==0) {
	fill(color(255,255,255,70))
      } else {
	fill(BUILDING_TYPES[this.type])
      }
      rect(this.v_x(),this.v_y(),this.width,this.height)
      for (const person of this.family) {
        person.draw()
      }
      pop()
    }
    moused(mx,my){
      if (this.inview() && mx > this.v_x() && mx < this.v_x() +this.width &&
         my > this.v_y() && my < this.v_y() +this.height)
        return true
      else return false
    }
    inspect(){  // TODO Fix with VIEW
      switch(this.type){
        case HOUSE:
          inspector.html("Inspected Building "+ this.id+". Building Worth "+ this.dollar_value(),false) 
          for (const person of this.family){
            inspector.html("<br/>"+ person.whoami(), true)
						//console.log("inspected people", person)
          }
          break;
        case HOSPITAL:
          inspector.html("Hospital",false) 
          break;
        case PARK:
          inspector.html("Park.",false) 
        case GROCERY:
          inspector.html("Grocery.",false) 
      }
    }
    value(){
      return Math.pow(this.width/MAXIMUM_HOUSE_WIDTH * this.height/MAXIMUM_HOUSE_HEIGHT, 2)
             + parks_around(buildings,this.ordery,this.orderx,3)/3 //+ (1-crime_rate())
    }
    dollar_value(){
      return "$"+ Math.floor(NORMAL_HOUSE_PRICE*this.value())
    }
    block_distance(house){
      return Math.abs(this.ordery-house.ordery)+Math.abs(this.orderx-house.orderx)
    }
  }
	Building.quarantine_selection = false
	Building.quarantine_point1   =  null
  class Citizen{
    constructor(id,name,sex,age,house,balance,job,race){
      // Identity
      this.id    = id
      this.name  = name
      this.sex   = sex
      this.age_m = age*12 
      // Properties 
      this.house = house

      this.tested_positive = 0
      this.sick      = 0 // 0 = Healthy, 1 = Sick, 2 = Immune, 3 = Dead
      this.days_sick = 0
      this.days_sick_max = 0
      this.symptoms  = 0 // 0 = NO, 1 = MILD, 2 = SERIOUS, 3 = CRITICAL
			this.hospitalized = 0 // 0 NO 1 Yes

      this.social_distancing_serious = random(0.3,0.5)
      this.social_distancing_mild = random(0.5,0.8)
      this.social_distancing_state = random(0.85,1.0)
      this.social_distancing_state_minimum = random(0.0,0.4)
			this.social_distancing_bias = 0.005

      this.property = []
      this.ego_net = []
      this.current_interactions = {}

			if (house) { 
				this.property.push(house);
				house.owner = this;
				house.family.push(this);
			}
      // Finance
      this.bank_balance = balance
      this.job            = job
      //this.passive_income = 0
      // Social
      this.race      = race // 0 to 1
      // Cosmetic
      this.xloc_inhouse = random(1)
      this.yloc_inhouse = random(1)
      // 
      this.in_building = true 
      this.current_activity = HOUSE
      this.closest_grocery = [3,4]
      this.j = 0
			//
			this.quarantine = new Set()
    }
		same_quarantine_as(neighbor) {
			if (neighbor.quarantine.size==this.quarantine.size) {
				for (const current_quarantine of this.quarantine) {
					if (!neighbor.quarantine.has(current_quarantine)){
						return false
					}
				}
			}
			else return false

			return true

		}
    infected() {
			if (this.sick==0) {
				this.days_sick_max = random(SICK_MIN,SICK_MAX)
				this.sick = 1
				this.days_sick = 0 
				this.symptoms = 0
				this.tested_positive = 0
			}
    }
		leave_hospital() {
			if (this.hospitalized==1) {
				hospital_availability += 1
				this.hospitalized = 0
			}
		}
		enter_hospital() {
			if (this.hospitalized==0 && this.symptoms==3 && hospital_availability>0) {
				console.log(this.name+" is now hospitalized. Availabiltiy hospital:"+ hospital_availability)
				hospital_availability -= 1
				this.hospitalized = 1
			} else {
				console.log(this.name+" couldnt be hospitalized. Availabiltiy hospital:"+ hospital_availability)
			}
		}
		condition_becomes_critical(){
			this.symptoms=3
			this.enter_hospital()
			console.log("condition critical of "+this.name)
		}
    recover() {
      this.sick        = 2
      this.days_sick   = 0 
			this.days_immune = 0
			this.days_immune_max = random(IMMUNE_MIN,IMMUNE_MAX)

      this.symptoms    = 0
			this.leave_hospital()
    }
		lose_immunity(){
			this.sick = 0
			this.days_immune = 0
		}
		social_distancing_bias_update(increase) {
			this.social_distancing_bias  = bounded(-0.008,this.social_distancing_bias+increase,0.008)
		}
    social_distancing_markov() {
      // TODO Improve this MC to depend on sick people
      this.social_distancing_state = bounded(this.social_distancing_state_minimum, this.social_distancing_state+random(-0.01,0.01+this.social_distancing_bias) ,1)
    }
    social_distancing(){
      // return 0 to 1 - chance of regular interaction happening
      if (this.symptoms==3) return 0 // Critical = No interactions
      else if (this.symptoms==2) return this.social_distancing_state * this.social_distancing_serious
      else if (this.symptoms==1) return this.social_distancing_state * this.social_distancing_mild
      else return this.social_distancing_state
    }
		sickness_evolution() {
			if (this.sick==1) {
				this.days_sick += 1
				if (this.days_sick>this.days_sick_max) this.recover()
				if (this.symptoms==0) {
					if (random()<0.2) this.symptoms+= 1	
				}
				if (this.symptoms==1) {
					if (random()<0.1) this.symptoms+= 1	
				}
				if (this.symptoms==2) {
					if (random()<0.1) this.condition_becomes_critical()
				}
			}
		}
		immunity_evolution(){
			if (this.sick==2){
				this.days_immune += 1
				if (CAN_YOU_GET_REINFECTED && this.days_immune>this.days_immune_max) this.lose_immunity()
			}
		}
    is_dead() {
      return this.sick==3 
    }
    walk_to(coords) {
      //if (this.in_building)
      //goal_building = this.buildings[coords[0]][coords[1]]
      //if Math.abs( X_JUMP_HOUSE )
    }
    change_activity(new_activity) {
      this.current_activity = new_activity
      walk_to(this.closest_grocery)
    }
    live_month(clock){
			if (this.is_dead()) return
			if (this.current_activity==GROCERY) {}

			if ( (clock+this.id)% 12 == 0 ) {

				this.social_distancing_markov() // Update MC 

				// Mobility
				let move = 0.20
				this.xloc_inhouse = min(max(0,this.xloc_inhouse+random(-move, move)),1.0)
				this.yloc_inhouse = min(max(0,this.yloc_inhouse+random(-move, move)),1.0)

				//if (this.sick==1 && death_chance[Math.floor(this.age_m/12)]>random(1.0)) this.death()

				if (this.sick==1 && this.symptoms == 3 ){
					if (this.hospitalized==1)	{ if(0.02>random(1.0)) this.death() }
					if (this.hospitalized==0)	{ if(0.15>random(1.0)) this.death() }
				}

				// Count Day
				this.sickness_evolution()
				this.immunity_evolution()
				// 
			}
			//this.age_m += 1
		}
    death(){
			this.days_sick = 0
			this.symptoms = 0
      this.sick = 3
			this.leave_hospital()
      //console.log(this.name + " passed away. Died so young. Age "+ Math.floor(this.age_m/12))
    }
    active_income(){
      return JOBS[this.job];
    }
    passive_income(){
      return 0;
    }
    total_income(){
      return this.passive_income()+this.active_income()	 
    }
    status_to_text() {
      switch(this.sick){
	case 0: 
	  return "healthy"
	case 1:
	  return "sick"
	case 2:
	  return "immune"
	case 3: 
	  return "dead"
      }
    }
    whoami(){ 
      let health = ""
      switch(this.sick){
	case 0: 
	  health= "<span style='color:green; font-weight:bold'>Healthy :)</span>";
	  break
	case 1:
	  health = "<span style='color:red; font-weight:bold'>Sick :(</span>. Days Sick: " + this.days_sick+ ". Condition:"+ this.symptoms;
	  break
	case 2:
	  health = "Immune"
      }
      return "Name:"+ this.name +". "+"Sex:"+ this.sex+ ". Age "+ Math.floor(this.age_m/12)+". State: "+health;
    }
    whoami2() {
      let health = this.status_to_text()
      return ""+this.name +" is "+ this.sex+", "+ Math.floor(this.age_m/12)+" y.o., and "+(this.sick==1? ("" + this.days_sick+ " days sick in condition:"+ this.symptoms + ""): health) ;
    }
    adult(){ return this.age>=18 }

    draw_coordinates(){
      return [this.house.v_x()+this.house.width*this.xloc_inhouse
	      , this.house.v_y()+this.house.height*this.yloc_inhouse] 
    }
    draw(){
      let f = this.sick
      let radius = 9;

      push()
      stroke(this.sex=="male"?0:255)
      fill(color_sickness(this.sick) )
			let extrarad = 0
			if (this.sick == 1 && this.days_sick<2) {
				extrarad = 3*Math.cos(clock)	
			}
      ellipse(this.draw_coordinates()[0],this.draw_coordinates()[1],radius+extrarad,radius+extrarad )
      pop()
    }
  }

  function pickRandomBuilding(building_grid){
    let rows = building_grid.length
    let cols = building_grid[0].length
    let random_row = Math.floor(random(rows))
    let random_col = Math.floor(random(cols))
    return building_grid[random_row][random_col]
  }
  function randomHouse(ids,orderx,ordery,startingx,startingy){
    return new Building(ids, orderx,ordery,
                         startingx+random(0.0,4.0),
                         startingy+random(0.0,4.0),
                         MAXIMUM_HOUSE_WIDTH*random(0.7,1.0),
                         MAXIMUM_HOUSE_HEIGHT*random(0.7,1.0), type="house")
  }
  function randomUnoccupiedHouse(){
    while( (b=pickRandomBuilding(buildings,10000000)).owner != null || b.type != HOUSE);
    return b 
  }
  function randomMaybeOccHouse(){
    while( (b=pickRandomBuilding(buildings,10000000)).family.length >= 3 || b.type != HOUSE);
    return b 
  }
  function randomPerson(id){
    sex = random(2)<1 ? "male":"female"
    return new Citizen(id, randomName(sex), sex, 
                       Math.floor(random(20,70)),
                       randomMaybeOccHouse(), 
                       100000, Object.keys(JOBS)[Math.floor(random(2.0))],Math.floor(random(2))) 
  }
  function randomCity(){
    buildings = []
    let ids   = 0
    for (let j=0; j<TOTAL_HOUSE_ROWS;j+=1){
      buildings.push([])
      for (let i=0; i<TOTAL_HOUSE_COLS;i+=1){
        ids += 1
        buildings[j].push(randomHouse(ids,i,j,i*X_JUMP_HOUSE,j*Y_JUMP_HOUSE))
      }
    }
    total_rows      = buildings.length; total_cols = buildings[0].length; total_buildings = total_rows*total_cols
    for (let j=1; j<= HOSPITALS; j+=1){ pickRandomBuilding(buildings).type = HOSPITAL }
    for (let j=1; j<= PARKS; j+=1){ pickRandomBuilding(buildings).type = PARK }
    for (let j=1; j<= GROCERIES; j+=1){ pickRandomBuilding(buildings).type = GROCERY }
  }
  function randomPopulation(){
    population = [] 
    let ids = 0
    for (let i=1; i<=PEOPLE; i+=1) {
      ids += 1
      population.push(randomPerson(ids))
    }

		let connection_probability = CONNECTION_PROBABILITY
		for (let i=0; i<PEOPLE-1; i+=1){
			for (let j=i+1; j<PEOPLE; j+=1){
				if (population[i].house.block_distance(population[j].house) <= connectionRadius.value() ) {
					if (random(1)<connection_probability || population[i].house == population[j].house ) {
						population[i].ego_net.push(population[j])
						population[j].ego_net.push(population[i])
					}
				}
			}
		}

  }

	quarantines = []
  randomCity()
  randomPopulation()

  let patient0 = population[floor(random(PEOPLE))]
  patient0.infected()
  console.log("patient 0")
  //console.log(patient0.house.orderx, patient0.house.ordery)

  update_col_view(patient0.house.orderx - floor(VIEW_HOUSE_COLS/2))
  update_row_view(patient0.house.ordery - floor(VIEW_HOUSE_ROWS/2))
  

  total_buildings = buildings.length * buildings[0].length

  let rows = min(buildings.length, VIEW_HOUSE_ROWS)

	plot_contnr_width = floor(Building.x_width()*0.55)
	plot_contnr  = new PlotContainer(color(205,205,205),HOUSE_DRAW_OFFSET_X, Building.y_ending()+MARGIN_VER, PLOT_HEIGHT, plot_contnr_width )
	plot_contnr.addPlotter("infected", PEOPLE, color(255,0,0))
	plot_contnr.addPlotter("dead"    , PEOPLE, color(0,0,0))
	plot_contnr.addPlotter("healthy" , PEOPLE, color(0,0,255))
	plot_contnr.addPlotter("immune"  , PEOPLE, color(150,100,0))
	
	plot_socdist = new PlotContainer(color(205,205,205),HOUSE_DRAW_OFFSET_X, Building.y_ending()+PLOT_HEIGHT+2*MARGIN_VER, PLOT_HEIGHT, plot_contnr_width )
	plot_socdist.addPlotter("all"  , 1.0, color(0,0,0))
	plot_socdist.addPlotter("sick"  , 1.0, color(255,100,0))

	plot_hospitalization = new PlotContainer(color(205,205,205),HOUSE_DRAW_OFFSET_X, Building.y_ending()+PLOT_HEIGHT+2*MARGIN_VER, PLOT_HEIGHT, plot_contnr_width )
	plot_hospitalization.addPlotter("capacity"  , PEOPLE*0.35, color(0,0,0))
	plot_hospitalization.addPlotter("critically ill"  , PEOPLE*0.35, color(255,0,0))

  plot_heat    = new PlotHeat(HOUSE_DRAW_OFFSET_X+ plot_contnr_width+MARGIN_HOR, Building.y_ending()+MARGIN_VER, PLOT_HEIGHT, Building.x_width()-plot_contnr_width - MARGIN_VER )


	let width_sbc = 350
	stats_basic_counters  = new TextBox(color(205,205,205,0.2), HOUSE_DRAW_OFFSET_X+plot_contnr_width-width_sbc, Building.y_ending()+20, 20, width_sbc, "Basic Counters", 15)

	let width_sdb = 400
	social_distancing_box = new TextBox(color(205,205,205,0.2), HOUSE_DRAW_OFFSET_X+plot_contnr_width - width_sdb, Building.y_ending()+PLOT_HEIGHT+2*MARGIN_VER+20, 20, width_sdb, "Social Distancing Degree for Everyone (Black) and Sick (Orange)", 13)

	hospitalization_box = new TextBox(color(205,205,205,0.2), HOUSE_DRAW_OFFSET_X+plot_contnr_width - width_sdb, Building.y_ending()+PLOT_HEIGHT+2*MARGIN_VER+20, 20, width_sdb, 
		"Hospital Capacity (Black), and People Needing Hospitalization (Red)", 13)
	


  console.log("total buildings", total_buildings)
   
  //toleranceSlider = createSlider(0.0, 1.0, 0.5,0.1);
  //toleranceSlider.parent("tester");
  //toleranceSlider.position(0, 0);
  //toleranceSlider.style("position","relative")
  //prev_tolerance = toleranceSlider.value()

  let races = [color(255,0,0),color(0,0,255)]
  let races_ac = 2

  stroke(255); 
  frameRate(10);
}


function interaction_line(person,neighbor){
  if ( !( person.house.inview() && neighbor.house.inview())
       || person.sick==3 ||  neighbor.sick == 3 || neighbor.sick == 2 || person.sick == 2 ) return 
  push()
  if ( (person.sick == 1 && neighbor.sick == 0) || (person.sick == 0 && neighbor.sick == 2)) stroke(color(255,0,0,80) );
  else stroke(color(0,0,0,40) );

  line(person.draw_coordinates()[0], person.draw_coordinates()[1], neighbor.draw_coordinates()[0], neighbor.draw_coordinates()[1]); 
  pop()
}

function infective_link(person,neighbor) {
  return (person.sick==0 && neighbor.sick==1) || (person.sick==1 && neighbor.sick==0)
}
function current_interactions_update(person,neighbor) {
  let interact = 1
  // Chance of interaction not in the same family or in the same fmily
  if (person.house != neighbor.house) {
    if (person.social_distancing() * neighbor.social_distancing() < random(1) ) interact = 0
  }
  else {
    if ( 8*person.social_distancing() * neighbor.social_distancing() < random(1) ) interact = 0
  }

	if (!person.same_quarantine_as(neighbor)) interact=0
  person.current_interactions[neighbor.id] = interact 
  neighbor.current_interactions[person.id] = interact 
}

function periodic_event(clock,offset,every) {
  return (clock+offset)%every == 1
}

people_status = function(){
	statuses = [0,0,0,0]
	for (const person of population){
		statuses[person.sick] += 1 
	}
	return statuses
}
people_symptoms = function(){
	statuses = [0,0,0,0]
	for (const person of population){
		statuses[person.symptoms] += 1 
	}
	return statuses
}
social_distancing_degree = function(){
	let	sickpeeps  = population.filter((person)=>person.sick==1)
	let	alivepeeps = population.filter((person)=>!person.is_dead())
	let all_avg = alivepeeps.reduce((acc,person)=>acc+person.social_distancing(),0 )/alivepeeps.length
	let sick_avg =  sickpeeps.length>0? sickpeeps.reduce((acc,person)=>acc+person.social_distancing(),0 )/sickpeeps.length: undefined
	return [sick_avg,all_avg]
}



function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode == 72) {
    update_col_view(current_col_view - 1)
  } else if (keyCode === RIGHT_ARROW || keyCode == 76) {
    update_col_view(current_col_view + 1)
  } else if (keyCode === 75) {
    update_row_view(current_row_view - 1)
  } else if (keyCode === 74) {
    update_row_view(current_row_view + 1)
  } else if (keyCode === "O".charCodeAt(0)) {
		console.log("People are urged to go out")
		for (const person of population){
			person.social_distancing_bias_update(0.001)
		}
	} else if (keyCode === "I".charCodeAt(0)) {
		console.log("People are urged to stay home")
		for (const person of population){
			person.social_distancing_bias_update(-0.001)
		}
	}


}

function draw() {


  background(140); 
  clock += 1

  select('#population-density-cv').html(populationDensity.value())
  select('#town-size-cv').html(townSize.value())
  select('#connection-radius-cv').html(connectionRadius.value())
  select('#connectivity-chance-cv').html(connectivityChance.value())
  select('#infection-chance-cv').html(infectionChance.value())
  select('#mean-days-sick-cv').html(meanDaysSick.value())
  select('#days-before-reinfection-cv').html(daysBeforeReinfection.value())

  // if(oldConnectionRadius != connectionRadius.value() ||  oldConnectivityChance != connectivityChance.value() || oldInfectionChance != infectionChance.value() ) {
  //   oldConnectionRadius = connectionRadius.value()
  //   oldConnectivityChance = connectivityChance.value()
  //   oldInfectionChance = infectionChance.value()

  //   EGO_NET_MAX_RAD = oldConnectionRadius
  //   INFECT_CHANCE = oldInfectionChance
  //   CONNECTION_PROBABILITY = oldConnectivityChance

  //   people_status_old = people_status()
  //   setup()
  //   return
  // }


	for (const quarantine of quarantines){
		quarantine.draw()
	}
  let building_mouseover = false
  let building_selected = null 
  for (const building_row of buildings) {
    for (const building of building_row){
      building.draw() 
      if (building.moused(mouseX,mouseY)) {
        //building.inspect()
				building_mouseover = true
				building_selected = building
      }
    }
  }
  if (!building_mouseover) {
    inspector.html("") 
  }

  for (const person of population){
    person.live_month(clock) 

    for (const neighbor of person.ego_net){

      // For What Follows Don't Double Count 
      if (neighbor.id<person.id) continue 

      // If They interact
			if (periodic_event(clock,0,INTERACTION_PERIOD)) {
				current_interactions_update(person,neighbor)
      }
      if (person.current_interactions[neighbor.id]==0) continue


      interaction_line(person,neighbor)
      if (periodic_event(clock, person.id+neighbor.id, INFECTION_PERIOD)  && infective_link(person,neighbor) && INFECT_CHANCE>random(1) ) {
	neighbor.infected()
	person.infected()
      }  
    } 

  }
  
	if (Building.quarantine_selection){
		push()
		stroke(color(0,0,0))
		fill(color(255,255,0))
		let build = buildings[Building.quarantine_point1[0]][Building.quarantine_point1[1]]
		ellipse(build.v_x()-3,build.v_y()-3,10+3*Math.sin(clock),10+3*Math.sin(clock))
		
		fill(color(255,255,0,25))
		let bp = Building.closest_building(mouseX,mouseY), p

		if (bp==null) {
			Building.quarantine_selection = false	
			pop()
			return
		}

		p = buildings[bp[0]][bp[1]]
		ellipse(p.v_x(),p.v_y(),10+3*Math.sin(clock),10+3*Math.sin(clock))

		rect(min(p.v_x(),build.v_x()), min(p.v_y(),build.v_y()), 
		max(p.v_x(),build.v_x())-min(p.v_x(),build.v_x()), 
		max(p.v_y(),build.v_y()) - 	min(p.v_y(),build.v_y()), 
		)
		pop()

	}

  // PLOTTING

  let rows = min(buildings.length, VIEW_HOUSE_ROWS)

	let people_status_st = people_status()

  if (clock%3 == 0 ) {
    plot_contnr.plots["infected"].pushline(clock, people_status_st[1])
    plot_contnr.plots["healthy"].pushline(clock , people_status_st[0])
    plot_contnr.plots["immune"].pushline(clock  , people_status_st[2])
    plot_contnr.plots["dead"].pushline(clock    , people_status_st[3])

		plot_socdist.plots["all"].pushline(clock, 1-social_distancing_degree()[1] )
		plot_socdist.plots["sick"].pushline(clock, 1-social_distancing_degree()[0] )

		plot_hospitalization.plots["capacity"].pushline(clock, HOSPITAL_CAPACITY_RATE*PEOPLE )
		plot_hospitalization.plots["critically ill"].pushline(clock,people_symptoms()[3])

  }

	plot_contnr.draw()
	if (clock%300<150) {
		plot_socdist.draw()

		if (W>770) {
			social_distancing_box.draw()
		}

	} else {

		plot_hospitalization.draw()
		if (W>770) {
			hospitalization_box.draw()
		}
	}

	if (W>660) {
	stats_basic_counters.text = "healthy:"+ people_status_st[0] + "  sick:" + people_status_st[1] +  "  immune:" +people_status_st[2] + "  deaths:" +people_status_st[3] 
	stats_basic_counters.draw()
	}

  push()
  fill(color(205,205,205, 200))
  rect(HOUSE_DRAW_OFFSET_X+plot_contnr.width+MARGIN_HOR,plot_heat.starty+plot_heat.height+MARGIN_VER,
			plot_heat.width,plot_heat.height) 

	let x_starting = HOUSE_DRAW_OFFSET_X+plot_contnr.width+MARGIN_HOR+5
	let y_starting = plot_heat.starty+plot_heat.height+MARGIN_VER+20
	fill(color(0,0,0))
	stroke(color(255,255,255,50))
	textSize(15);
  if(building_mouseover) {
    let counter = 0

		if (building_selected.family.length>0 && W>660){
			text('Residents of Inspected House:'+ building_selected.id+ ':', x_starting, y_starting)
			for (const person of building_selected.family) {
				counter += 1
				textSize(12);
				push()
				fill(color_sickness(person.sick))
				text(person.whoami2() , x_starting,y_starting+20*counter )
				pop()
			}
		}
	} else{
		let decider = clock%150
		if (decider<150){

			if (W>660) {
			text('Press O to urge people to go out',x_starting,y_starting)
			text('Press I to urge people to stay at home',x_starting,y_starting+20)


			let people_bias
			if (population[0].social_distancing_bias>0) {
				people_bias = 'go out'
				fill("purple")
			} else {
				people_bias = 'stay home'
				fill("brown")
			}
			text('Currently People are Biased to '+people_bias, x_starting,y_starting+40)
			}
			text('Current Bias: '+population[0].social_distancing_bias, x_starting,y_starting+60)
		} else if (decider<300){
			text('Message B',x_starting,y_starting)
		}
	}
  pop()
  plot_heat.draw()
  //ENDOFPLOTTING
  //HEAT PLOT
}

function mouseClicked() {
  if (plot_heat.moused(mouseX,mouseY)){
		plot_heat.set_house_on_coords(mouseX,mouseY)
	}
	if (Building.buildings_moused(mouseX,mouseY)){
		if (Building.quarantine_selection) {
			Building.quarantine_selection = false
			console.log("Second Endpoint selected")
			console.log(Building.closest_building(mouseX,mouseY))
			let point2 = Building.closest_building(mouseX,mouseY)
			let startx = min(point2[1], Building.quarantine_point1[1])
			let starty = min(point2[0], Building.quarantine_point1[0])

			let widthx = max(point2[1], Building.quarantine_point1[1]) - startx
			let widthy = max(point2[0], Building.quarantine_point1[0]) - starty
			console.log("width", widthx)
			console.log("width", widthy)
			quarantines.push(new Quarantine(startx,starty,widthx,widthy))
		}
		else {
			Building.quarantine_selection = true
			console.log("Started Quarantine Selection")
			console.log(Building.closest_building(mouseX,mouseY))
			Building.quarantine_point1 = Building.closest_building(mouseX,mouseY)
		}
	}
	
	
  // prevent default
  return true;
}

