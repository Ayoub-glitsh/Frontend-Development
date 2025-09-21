// la creation de la classe Book
class Book{
  // la propriete actuelPage 
  actuelPage = 1
  // le constucteur de la classe Book
  constructor(name, pages){
    this.name = name
    this.pages = pages
  }
  // la methode page qui nous donne le nombre de la page actuelle 
  get page(){
    return this.actuelPage
  }
  // la methode nextpage qui permet de passer a la page suivante
  nextPage(){
    if(this.actuelPage < this.pages){
      this.actuelPage ++
    }
  }
  // la methode close qui permet fermer le livre de initialiser la variable actuelPage par 1 
  
  close(){
    this.actuelPage = 1
  }
}


// la creation de la classe Library
class Library{
  // la propriete actuelBooks qui contient tous les livres de notre library 
  actuelBooks = [] 

  constructor(){
    // contructeur vide 
  }
 
  // la methode addBook
  addBook(Book){
    this.actuelBooks.push(Book)
  }

  // la methode addBooks 
  addBooks(Books){
    for(let Book of Books){
      this.actuelBooks.push(Book)
    }
  }

  // la methode findBooksByLetter en utilisant la boucle for of et les conditions

  /* findBooksByLetter(letter){
    const Booksfound = []
    for(let Book of this.actuelBooks){
      if(Book.name[0].toLocaleLowerCase() === letter.toLocaleLowerCase()){
        Booksfound.push(Book)
      }
    }
    return Booksfound
  } */
  
  // la methode findBooksByLetter en utilisant la methode filter 

  findBooksByLetter(letter){
    return  this.actuelBooks.filter((Book)=>Book.name[0].toLowerCase() === letter.toLowerCase() ) 
  }



}

const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l.findBooksByLetter('S')) 
