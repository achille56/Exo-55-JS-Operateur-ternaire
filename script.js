//*les variables*//

let para1 = document.getElementById("para1")
let span1 = 5;
let span2 = 12;
let result = document.getElementById("resultat");

//* addition des deux variables qui vont apparaitre dans le fichier HTML (span = resultat) *//

result.innerHTML = (span1 + span2).toString();

if (-10 < 0) {
    para1.innerHTML = "-10 est inférieur à 0";
}

document.body.style.backgroundColor = "tomato";
document.body.style.fontSize = "30px";



