const HOUSE  = "house"
const PARK   = "park"
const POLICE = "police"

function randomName(girl){
  let namesgirls =[
"MARIA","katerina","christina","Anastasia"," dimitra","	Mary	"," Alexandra","	Irene		"," Helen","Anna","	georgia","	Elena	"," Konstantina","	Joanna		"," Eva","Eleni		"," Zoe","	Olga	"," Sofia","	Marianna		"," Marina","Christine		"," sophie","	Nicole	"," Athina","	danae		"," Agnes","Melina		"," eleftheria","	efi	"," Kate","	Theodora		"," Ioanna","Catherine		"," nefeli","	Lydia	"," Myrto","	Sophia		"," CHRYSA","Evi		"," Demi","	Stella	"," Artemis","	vasiliki		"," aggeliki","Fotini		"," Katherine","	Angela	"," Vicky","	Marilina		"," Nikoletta","Angeliki		"," Athena","	despina	"," Debbie","	elpida		"," Afrodite","natalia		"," Alexia","	Alice	"," Chrisa","	Demy		"," Angie","Claire		"," Elizabeth","	Giota	"," Rafaela","	Dora		"," Michaela","thalia		"," Connie","	Lina	"," Fenia","	Dina		"," Theano","Angelika		"," Iro","	Vivi	"," Vassiliki","	Mariza		"," Vasia","Vagia		"," Jenny","	Stefania	"," Iliana","	Ria		"," Marialena","Lia		"," Vera","	Ariadne	"," Alex","	Eve		"," nasia","aspa		"," Kona","	Thania	"," Daphne","	Angèlie		"," eua","Nastia		"," Aimilia","	Sandy"
  ]
  let namesboys=[
"george","Nick","John","Stelios","Konstantinos","KOSTAS","Chris","Thanos","Alex","dimitris","Christos","Manos","TaSoS","Panagiotis","bill","peter","ARIS","Jim","Andrew","Marios","Apostolis","Giorgos","Alexandros","Pantelis","ANGELOS","Giannis","antonis","Steven","Manolis","Lefteris","Aggelos","Andreas","evangelos","Nikos","Spiros","Panos","Angel","mike","Alexander","Thanasis","Petros","Nicolas","Michael","Gregory","Stavros","Nikolas","Vaggelis","Mihalis","achilleas","Vasilhs","Thomas","steve","Serafim","Lambros","CHRISTOPHER","Joseph","vasilia","Haris","Angelo","vasilis","Harris","Anastasis","minas","Alkinoos","Con","Billy","Vassilis","Greg","Agim","Elias","Constantine","Kostantinos","Philip","Sotiris","Paul","vagelis","Anthony","Kyriakos","babis","vlassios","aposs","Ioakeim","Panayiotis","Antis","Hamidou","Theodore","Andy","Giorgio","neimar","Taxiarchis","Anastase","gangi","Alex","evmorfia","Markos","Dinos","Lykourgos","Sakis","Demonon","Labros","Raffael","kevin","Bah","jordan","Percey","vlassis","Ioannis","Anton","hans","Ody","Giorgios"
  ]

let names = [
"Aaberg" , "Aalst" , "Aara" , "Aaren" , "Aarika" , "Aaron"
, "Aaronson" , "Ab" , "Aba" , "Abad" , "Abagael" , "Abagail" , "Abana" , "Abate" , "Abba" , "Abbate" , "Abbe" , "Abbey" , "Abbi" , "Abbie" , "Abbot" , "Abbotsen" , "Abbotson" , "Abbotsun" , "Abbott" , "Abbottson" , "Abby" , "Abbye" , "Abdel" , "Abdella" , "Abdu" , "Abdul" , "Abdulla" , "Abe" , "Abebi" , "Abel" , "Abelard" , "Abell" , "Abercromby" , "Abernathy" , "Abernon" , "Abert" , "Abeu" , "Abey" , "Abie" , "Abigael" , "Abigail" , "Abigale" , "Abijah" , "Abisha" , "Abisia" , "Abixah" , "Abner" , "Aborn" , "Abott" , "Abra" , "Abraham" , "Abrahams" , "Abrahamsen" , "Abrahan" , "Abram" , "Abramo" , "Abrams" , "Abramson" , "Abran" , "Abroms" , "Absa" , "Absalom" , "Abshier" , "Acacia" , "Acalia" , "Accalia" , "Ace" , "Acey" , "Acherman" , "Achilles" , "Achorn" , "Acie" , "Acima" , "Acker" , "Ackerley" , "Ackerman" , "Ackler" , "Ackley" , "Acquah" , "Acus" , "Ad" , "Ada" , "Adabel" , "Adabelle" , "Adachi" , "Adah" , "Adaha" , "Adai" , "Adaiha" , "Adair" , "Adal" , "Adala" , "Adalai" , "Adalard" , "Adalbert" , "Adalheid" , "Adali" , "Adalia" , "Adaliah" , "Adalie" , "Adaline" , "Adall" , "Adallard" , "Adam" , "Adama" , "Adamec" , "Adamek" , "Adamik" , "Adamina" , "Adaminah" , "Adamis" , "Adamo" , "Adamok" , "Adams" , "Adamsen" , "Adamski" , "Adamson" , "Adamsun" , "Adan" , "Adao" , "Adar" , "Adara" , "Adaurd" , "Aday" , "Adda" , "Addam" , "Addi" , "Addia" , "Addie" , "Addiego" , "Addiel" , "Addis" , "Addison" , "Addy" , "Ade" , "Adebayo" , "Adel" , "Adela" , "Adelaida" , "Adelaide" , "Adelaja" , "Adelbert" , "Adele" , "Adelheid" , "Adelia" , "Adelice" , "Adelina" , "Adelind" , "Adeline" , "Adella" , "Adelle" , "Adelpho" , "Adelric" , "Adena" , "Ader" , "Adest" , "Adey" , "Adham" , "Adhamh" , "Adhern" , "Adi" , "Adiana" , "Adiel" , "Adiell" , "Adigun" , "Adila" , "Adim" , "Adin" , "Adina" , "Adine" , "Adis" , "Adkins" , "Adlai" , "Adlar" , "Adlare" , "Adlay" , "Adlee" , "Adlei" , "Adler" , "Adley" , "Adna" , "Adnah" , "Adne" , "Adnopoz" , "Ado" , "Adolf" , "Adolfo" , "Adolph" , "Adolphe" , "Adolpho" , "Adolphus" , "Adon" , "Adonis" , "Adora" , "Adore" , "Adoree" , "Adorl" , "Adorne" , "Adrea" , "Adrell" ,
"Adria" , "Adriaens" , "Adrial" , "Adrian" , "Adriana" , "Adriane" , "Adrianna" , "Adrianne" , "Adriano" , "Adriel" , "Adriell" , "Adrien" , "Adriena" , "Adriene" , "Adrienne" , "Adur" , "Aekerly" , "Aelber" , "Aenea" , "Aeneas" , "Aeneus" , "Aeniah" , "Aenneea" , "Aeriel" , "Aeriela" , "Aeriell" , "Affer" , "Affra" , "Affrica" , "Afra" , "Africa" , "Africah" , "Afrika" , "Afrikah" , "Afton" , "Ag" , "Agace" , "Agamemnon" , "Agan" , "Agata" , "Agate" , "Agatha" , "Agathe" , "Agathy" , "Agbogla" , "Agee" , "Aggappe" , "Aggappera" , "Aggappora" , "Aggarwal" , "Aggi" , "Aggie" , "Aggri" , "Aggy" , "Agle" , "Agler" , "Agna" , "Agnella" , "Agnes" , "Agnese" , "Agnesse" , "Agneta" , "Agnew" , "Agnola" , "Agostino" , "Agosto" , "Agretha" , "Agripina" , "Agrippina" , "Aguayo" , "Agueda" , "Aguie" , "Aguste" , "Agustin" , "Ahab" , "Aharon" , "Ahasuerus" , "Ahders" , "Ahearn" , "Ahern" , "Ahl" , "Ahlgren" , "Ahmad" , "Ahmar" , "Ahmed" , "Ahola" , "Aholah" , "Aholla" , "Ahoufe" , "Ahouh" , "Ahrendt" , "Ahrens" , "Ahron" , "Aia" , "Aida" , "Aidan" , "Aiden" , "Aiello" , "Aigneis" , "Aiken" , "Aila" , "Ailbert" , "Aile" , "Ailee" , "Aileen" , "Ailene" , "Ailey" , "Aili" , "Ailin" , "Ailina" , "Ailis" , "Ailsa" , "Ailssa" , "Ailsun" , "Ailyn" , "Aime" , "Aimee" , "Aimil" , "Aimo" , "Aindrea" , "Ainslee" , "Ainsley" , "Ainslie" , "Ainsworth" , "Airel" , "Aires" , "Airla" , "Airlee" , "Airlia" , "Airliah" , "Airlie" , "Aisha" , "Ajani" , "Ajax" , "Ajay" , "Ajit" , "Akanke" , "Akel" , "Akela" , "Aker" , "Akerboom" , "Akerley" , "Akers" , "Akeyla" , "Akeylah" , "Akili" , "Akim" , "Akin" , "Akins" , "Akira" , "Aklog" , "Aksel" , "Aksoyn" , "Al" , "Alabaster" , "Alage" , "Alain" , "Alaine" , "Alair" , "Alake" , "Alameda" , "Alan" , "Alana" , "Alanah" , "Aland" , "Alane" , "Alanna" , "Alano" , "Alansen" , "Alanson" , "Alard" , "Alaric" , "Alarice" , "Alarick" , "Alarise" , "Alasdair" , "Alastair" , "Alasteir" , "Alaster" , "Alatea" , "Alathia" , "Alayne" , "Alba" , "Alban" , "Albarran" , "Albemarle" , "Alben" , "Alber" , "Alberic" , "Alberik" , "Albers" , "Albert" , "Alberta" , "Albertina" , "Albertine" , "Alberto" , "Albertson" , "Albie" , "Albin" , "Albina" , "Albion" , "Alboran" , "Albrecht" , "Albric" , "Albright" , "Albur" , "Alburg" , "Alburga" , "Alby" , "Alcina" , "Alcine" , "Alcinia" , "Alcock" , "Alcot" , "Alcott" , "Alcus" , "Alda" , "Aldarcie" , "Aldarcy" , "Aldas" , "Alded" , "Alden" , "Aldercy" , "Alderman" , "Alderson" , "Aldin" , "Aldis" , "Aldo" , "Aldon" , "Aldora" , "Aldos" , "Aldous" , "Aldred" , "Aldredge" , "Aldric" , "Aldrich" , "Aldridge" , "Alduino" , "Aldus" , "Aldwin" , "Aldwon" , "Alec" , "Alecia" , "Aleck" , "Aleda" , "Aleece" , "Aleedis" , "Aleen" , "Aleetha" , "Alegre" , "Alejandra" , "Alejandrina" , "Alejandro" , "Alejo" , "Alejoa" , "Alek" , "Aleksandr" , "Alena" , "Alene" , "Alenson" , "Aleras" , "Aleris" , "Aleron" , "Alesandrini" , "Alessandra" , "Alessandro" , "Aleta" , "Aletha" , "Alethea"
]
  return names[ Math.floor(Math.random()*names.length)]
}

let TOTAL_USERS = 500
let MARGIN = 10
let RADIUS_LIM = 40
let MINIMUM_DISTANCE = 10
let W=750,H=620

let ADULT_RADIUS_CIRCLE = 10
let KID_RADIUS_CIRCLE = 7


let KID_CHANCE = 0.00
let CHANCE_MEETING = 0.02
let RELATIONSHIP_AGE = 20
let MAXIMUM_HOUSE_WIDTH  = 25
let MAXIMUM_HOUSE_HEIGHT = 25
let POLICE_DEPARTMENTS   = 5
let PARKS                = 5

let PEOPLE = 200
let NORMAL_HOUSE_PRICE = 200000

let JOBS = {"AverageWage": 35000, "MinimumWage": 20000, "Unemployed": 0}

let chance_get_married = [0.01,0.01,0.02,0.02,0.02,0.05,0.05]
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
                    0.1811,0.1998,0.2197,0.2409,0.2618,1.0
]

function setup() {
  let myCanvas = createCanvas(W, H);
  let random_coord = function(val){ return random(val-2*MARGIN)+MARGIN}
  let BUILDING_TYPES = {"house": color(255,255,255), "park": color(0,133,0), "police": color(0,0,133)} 

  myCanvas.parent("tester");

  
  inspector = createElement('p', '');
  inspector.position(20, 5);
  inspector.parent("inspecter");
  inspector.style("position","relative")

  parks_around = function(building_grid,i,j,radius){
    let x_length = building_grid[0].length
    let lowerx = max(0,j-radius)
    let upperx = min(x_length-1,j+radius)

    let y_length = building_grid.length-1
    let lowery = max(0,i-radius)
    let uppery = min(y_length,i+radius)
    let total_parks = 0

    //console.log(lowery,uppery, lowerx,upperx)
    for (let r=lowery; r<=uppery; r+=1){
      for (let c=lowerx; c<=upperx; c+=1){
        if (building_grid[r][c].type=="park") total_parks += 1
      }
    }
    return total_parks
  }
  class Building{
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
    draw(){
      push()
      fill(BUILDING_TYPES[this.type])
      rect(this.x,this.y,this.width,this.height)
      for (const person of this.family) {
        person.draw()
      }
      pop()
    }
    moused(mx,my){
      if (mx > this.x && mx < this.x +this.width &&
         my > this.y && my < this.y +this.height)
        return true
      else return false
    }
    inspect(){ 
      switch(this.type){
        case HOUSE:
          inspector.html("Inspected Building "+ this.id+". Building Worth "+ this.dollar_value(),false) 
          for (const person of this.family){
            inspector.html("<br/>"+ person.whoami(), true)
          }
          break;
        case POLICE:
          inspector.html("Police Department",false) 
          break;
        case PARK:
          inspector.html("Park.",false) 
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
  class Citizen{
    constructor(id,name,sex,age,house,balance,job,race){
      // Identity
      this.id    = id
      this.name  = name
      this.sex   = sex
      this.age_m = age*12 
      // Properties 
      this.house = house
      this.property = []
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
      this.race_bias = random(0.5,1.0)
      // Family
      this.father    = null
      this.mother    = null
      this.spouse    = null
      this.children  = []
      this.kids_wanted = Math.floor(random(6))
      // Cosmetic
      this.xloc_inhouse = random(1)
      this.yloc_inhouse = random(1)
    }
    live_month(){
      if ( (this.age_m+this.id)% 12 == 0 ) {
        let move = 0.20
        this.xloc_inhouse = min(max(0,this.xloc_inhouse+random(-move, move)),1.0)
        this.yloc_inhouse = min(max(0,this.yloc_inhouse+random(-move, move)),1.0)
        
        if ( death_chance[Math.floor(this.age_m/12)]>random(1.0)) this.death()

        if (this.spouse 
            && this.children.length< min(this.kids_wanted, this.spouse.kids_wanted) 
            && KID_CHANCE>random(1.0)){
          birth(this,this.spouse) 

        }

        let lucky_one = this.spouse?null:this.dating_scene()
        if (lucky_one){
          marriage(lucky_one,this)
        }
	this.bank_balance += this.total_income() - this.total_expenses()
      }
      this.age_m += 1
    }
    death(){
      for (const child of this.children){
        if (this.sex=="male")   child.father = null
        if (this.sex=="female") child.mother = null
      }
      if (this.spouse) this.spouse.spouse = null
      for (let i=0; i< this.house.family.length; i++){
        if (this == this.house.family[i]){
          this.house.family.splice(i,1)
        }
      }
      for (let i=0; i< population.length; i++){
        if (this == population[i]){
          population.splice(i,1)
        }
      }
      console.log(this.name + " passed away. Died so young. Age "+ Math.floor(this.age_m/12))
    }
    dating_scene(){
      let selected = null
      if (random(1.0)< CHANCE_MEETING && this.age_m/12>=RELATIONSHIP_AGE){ 
        for (const person of population){
          let prospects = []
          if (person.sex != this.sex && (person.spouse == null) && person.house.block_distance(this.house)<=4) {
            //console.log("Met Someone living "+ person.house.block_distance(this.house))
            prospects.push(person)
          }
          if (prospects.length>0) selected = prospects[Math.floor(random(prospects.length))]
        }
        if (selected && selected.do_i_like(this)*this.do_i_like(selected) > random(1.0)){
            return selected
        }
      }
      return null;
    }
    do_i_like(person) {
      return 0.5;  // TODO ADD
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
    total_expenses(){
      return 500*12
    }
    married_status(){ return this.spouse? ("Married to "+ this.spouse.name): "Single." }
    whoami(){ 
      return "Name:"+ this.name +". "+"Sex:"+ this.sex+ ". Age "+ Math.floor(this.age_m/12)+". "+ this.married_status()+". " +
        "Father is "+ (this.father?this.father.name:"not alive")+ ". Mother is "+ (this.mother?this.mother.name:"not alive")+ 
	"<br/>Bank Account Balance $"+ this.bank_balance+ 
	"<br/>Total Income $"+ this.total_income();
    }
    adult(){ return this.age>=18 }
    draw(){
      let f = this.race 
      let radius = this.adult()?ADULT_RADIUS_CIRCLE:KID_RADIUS_CIRCLE;

      push()
      stroke(this.sex=="male"?0:255)
      fill(color(255*f,0,255*(1-f)))
      ellipse(this.house.x+this.house.width*this.xloc_inhouse,this.house.y+this.house.height*this.yloc_inhouse,radius,radius)
      pop()
    }
  }
  function birth(p1,p2){
    let child = new Citizen(population.length+1, randomName(), Math.floor(random(2))<1 ? "male":"female", 
                       0,
                       p1.house, 
		       "Unemployed",
                       0,(p1.race+p2.race)/2) 

    population.push(child)
    console.log( "New Kid in Town. Named " + child.name +" child of " +p1.name + " and "+ p2.name)
    p1.children.push(child)
    p2.children.push(child)
    if (p1.sex =="male") { child.father = p1; child.mother = p2}
    else { child.father = p2; child.mother = p1}
  }
  function marriage(p1,p2){
    console.log( "They Are Getting Married!..." + p1.name +" and " + p2.name)
    p1.spouse = p2
    p2.spouse = p1
    if (random(2.0)>1){
      old_house = p2.house
      old_house.family = []
      p2.house  = p1.house    
      p1.house.family.push(p2)
    } else {
      old_house = p1.house
      old_house.family = []
      p1.house  = p2.house    
      p2.house.family.push(p1)
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
  function randomPerson(id){
    return new Citizen(id, randomName(), Math.floor(random(2))<1 ? "male":"female", 
                       Math.floor(random(20,35)),
                       randomUnoccupiedHouse(), 
                       100000, Object.keys(JOBS)[Math.floor(random(2.0))],Math.floor(random(2))) 
  }
  function randomCity(){
    buildings = []
    let ids   = 0
    for (let j=1; j<=16;j+=1){
      buildings.push([])
      for (let i=1; i<=20;i+=1){
        ids += 1
        buildings[j-1].push(randomHouse(ids,i-1,j-1,i*34,35*j))
      }
    }
    total_rows      = buildings.length; total_cols = buildings[0].length; total_buildings = total_rows*total_cols
    for (let j=1; j<= POLICE_DEPARTMENTS; j+=1){ pickRandomBuilding(buildings).type = "police" }
    for (let j=1; j<= PARKS; j+=1){ pickRandomBuilding(buildings).type = "park" }
  }
  function randomPopulation(){
    population = [] 
    let ids = 0
    for (let i=1; i<=PEOPLE; i+=1) {
      ids += 1
      population.push(randomPerson(ids))
    }
  }
  randomCity()
  randomPopulation()
  total_buildings = buildings.length * buildings[0].length
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

function draw() {
  background(140); 
  //const tolerance = toleranceSlider.value()	
  //if (tolerance != prev_tolerance) init_users();
  //prev_tolerance = tolerance;

  for (const building_row of buildings) {
    for (const building of building_row){
      building.draw() 
      if (building.moused(mouseX,mouseY)) {
        building.inspect()
      }
    }
  }
  for (const person of population){
    person.live_month() 
  }

  
  
  //for (const user of users){
  //   user.draw()
  //}
  //for (const user of users){
  //  let nei = 0
  //  let same_race = 0
  //  for (const neighbor of users){
  //    distance = dist(user.x,user.y,neighbor.x,neighbor.y)
  //    if( distance < RADIUS_LIM)  {
  //      nei += 1  
  //      if(user.race==neighbor.race) { same_race+=1}
  //    }
  //  }
  //  if (nei>0 && same_race/nei<tolerance){
  //    var point = random_locations(user, users)
  //    user.x = point.x
  //    user.y = point.y
  //  }
  //}
}

