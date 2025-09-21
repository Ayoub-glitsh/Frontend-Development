// exercice d'application 

// la creation de la classe Retangle 
class Rectangle{
  // la constructeur de notre classe 
  constructor(longeur,largeur){
    this.largeur = largeur 
    this.longeur = longeur
  }
  // les getteurs 
  get perimetre(){
    if(this.isValide){
      return (this.largeur + this.longeur) * 2 

    }else{
      return `Les donnees saisies sont incorrectes : ${this.longeur} ou ${this.largeur}`
    }
  }

  get surface(){
    if(this.isValide){
      return this.largeur * this.longeur 

    }else{
      return `Les donnees saisies sont incorrectes : ${this.longeur} ou ${this.largeur}`
    }
  }
  


  get isValide(){
    return ( this.longeur > 0 && this.largeur > 0 )   
  }

  // la methode isBiggerThan qui permet de comparer les perimetre de deux forme geometrique 

  isBiggerThan(forme){
    return this.perimetre > forme.perimetre
  }
}


// la creation de la classe square 
class Square extends Rectangle{
  // le constrcteur de la classe Square
  constructor(cote){
    super(cote,cote)
  }
}

// la creation de l'instance rectangle01
const rectangle01 = new Rectangle(4,3)
const square01 = new Square(4)
console.log(square01.isBiggerThan(rectangle01))




