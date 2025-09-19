// la creation de la fonction afficherErreur 
const afficherErreur = (message = "Une erreur est servenue", code = 500 ) => {
  console.log(`Erreur ${code}: ${message}`)
}
 // test de la fonction sans parametre
afficherErreur() 
