let nombre =number(prompt("Entrer un nombre"));

if(nombre<0){
console.log("Nombre négatif"); 
}
else if(nombre>=0 && nombre<=10){
    console.log("Petit");
}
else if(nombre>=11 && nombre<=50){
console.log("Moyen");
} 
else if(nombre>50 && nombre<=100){
console.log("Grand");
}
else 
console.log("Tres Grand");