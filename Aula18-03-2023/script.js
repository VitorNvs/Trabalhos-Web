let efetuarPotencia = () => {
    let n1 = eval(document.getElementById("n1").value);
    let n2 = eval(document.getElementById("n2").value);
    let res = potencia(n1, n2);

    let resultado = document.getElementById("res");
    resultado.innerHTML = `${n1}<sup>${n2}</sup> = ${res}`;

}

let potencia = (b, e) => {
    return Math.pow(b, e);
}

let validar = () => {
    let c1 = document.getElementById("py");
    let c2 = document.getElementById("java"); 
    
    if(!c1.checked && !c2.checked){
        alert("Selecione uma das opções!");
        return false;
    }
    return true;
} 