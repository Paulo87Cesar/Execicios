function mudarTexto(){
    const altera = document.getElementById("demo")
    altera.textContent = "Texto alterado com sucesso!"
}

 // atividade 2
let original = true;
function mudaCor(){
    document.body.style.backgroundColor = original ? "lightblue" : "white";
    original = !original;
}
// atividade 3 
let count = 0 
function incrementar(){
    count++
    document.getElementById("contador").innerHTML = count      
}
function resetar() {
    count = 0; // Volta para zero
    document.getElementById("contador").textContent = count;
}