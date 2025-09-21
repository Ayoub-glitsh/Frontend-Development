// la creation des objets en utlisant les classes
class Student{
  school = "ISTA"
  myGrades = []
  #secret = 'hitman'
  // le constructeur de notre class 
  constructor( fisrtname , lastname ){
    this.fname = fisrtname
    this.lname = lastname 
  }

  // la fonction qui affiche le nom complet de l'etudiant
  get displayFullname(){
    return (`My full name is ${this.fname} ${this.lname}`)
  } 

  // la fonction qui permet de recuperer ls notes 
   set Notes(notes){
    if(Array.isArray(notes)){
      this.myGrades = notes 
    }
   } 
  
  // la fonction ou la methode qui permet d'afficher les notes  
  getNotes(){
    for(let note of this.myGrades){
      console.log(note)
    }
  }
  // la fonction qui peremt de calculer la moyenne 
  isPassed(){
    let S = 0 
    for(let note of this.myGrades){
      S = note + S
    }
    if( (S / Ayoub.myGrades.length ) >= 10){
      return "Pass"
    }
    return "Not Passing"
  }
  kilo = 12 
  static moyenne = 10
  static  hello() {
    console.log("Hello")
  }
}
// la definiton de la classe superStudent 
class superStudent extends Student{
  // la constructeur dans la classe fille 
  constructor(fisrtname, lastname, balance){
    super(fisrtname, lastname)
    this.money = balance 
  }
  isPassed(){
    return true
  }
  get name(){
    return "Super "+ super.displayFullname
  }
  static moyenne = 1000000
  
}
// la creation de l'instance Ayoub 
const Ayoub = new superStudent("Ayoub","Aguezar", 100000) 
const hichem = new Student("","")







