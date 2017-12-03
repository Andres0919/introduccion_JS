// ============== CICLOS ==============
// ============== FOR ==============
var cajas = document.querySelectorAll(".cajas");
for (let c = 0; c < cajas.length; c++) {
    
    cajas[c].style.width = "50px";
    cajas[c].style.height = "50px";
    cajas[c].style.background = "green";
    cajas[c].style.margin = "10px";
    cajas[c].style.display = "inline-block";
}
    

for (let i = 0; i < 5; i++) {
    
    console.log("i: ", i);
}

// ============== WHILE ==============
var n = 1;
while (n <= 5) {
    
    console.log("n: ", n);
    n++;    
}

// ============== DO WHILE ==============
var p = 1;
do {

    console.log("p: ", p);
    p++;

} while (p <= 5);