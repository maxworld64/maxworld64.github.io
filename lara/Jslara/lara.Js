let firstquestion = window.prompt("voulez vous faire une addition, une multiplication, une soustraction ou une division");


let firstNumber =  parseInt(window.prompt ("choisit un nombre"));
let secondNumber = parseInt(window.prompt ("choisit un autre nombre"));
//déclarer une variable 

if (firstquestion == "addition") {
    document.write("<h1> addition: " + (firstNumber + secondNumber) + "</h1>");
}
else if(firstquestion == "multiplication") {
    document.write("<h1> multiplication: " + (firstNumber * secondNumber) + "</h1>");
}
else if(firstquestion == "soustraction") {
    document.write("<h1> soustraction: " + (firstNumber - secondNumber) + "</h1>");
}
else if(firstquestion == "division") {
    if (secondNumber != 0){
        document.write("<h1> division: " + (firstNumber / secondNumber) + "</h1>");
    }
    else{ 
        document.write("<h1> ça ne marche pas avec zéro, fais marcher ton cerveau </h1>");
    }
    
}
else { 
    document.write("<h1> ça n'existe pas t'as dû faire une faute de frappe recommence </h1>");
}