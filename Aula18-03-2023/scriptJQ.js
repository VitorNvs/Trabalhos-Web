let criarUI = () => {
    $("#b1").button();
    $( ".check" ).checkboxradio();
}

let efetuarPotencia = () => {
    let n1 = eval($("#n1").val());
    let n2 = eval($("#n2").val())
    let res = potencia(n1, n2);
    $("#res").html(`${n1}<sup>${n2}</sup> = ${res}`);

}

let potencia = (b, e) => {
    return Math.pow(b, e);
}

let validar = () => {    
    if(!$("#py").prop("checked") && !$("#java").prop("checked")){
        alert("Selecione uma das opções!");
        return false;
    }
    return true;
} 