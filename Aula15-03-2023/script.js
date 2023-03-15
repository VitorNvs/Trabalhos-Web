const listaCor = () => {
    document.write('<ul>');
    let colors = ['red','green','blue'];
    let indexColors = 0;
    for (let i = 1; i <= 100; i++) {
        document.write(`<li style='color:${colors[indexColors]};'>${i}</li>`);
        if(indexColors == 2){
            indexColors = 0;
        }else{
            indexColors++;
        }
    }
    document.write('</ul>');
}

const textoCor = () => {
    for (let i = 0; i <= 255; i++) {
        document.write(`<span style='color: rgb(${i},0,0);'>
        TEXTO</span>`);
    }
}

const tabelaCor = () => {
    let tabela = document.getElementById("tabela");
    for(let i = 1; i<= 255; i+=5){
        let linha = document.createElement("tr");
        for(let j = 1; j<= 255; j+=5){
            let item = document.createElement("td");
            item.style = `background-color:rgb(${i},${j},0)`;
            item.innerHTML = "&nbsp;";
            linha.appendChild(item);
        }
        tabela.appendChild(linha);
    }
}

const getData = () => {
    let data = new Date();
    let dataString = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    document.getElementById("data").innerHTML = dataString;

}

const fatorial = () => {
    let num = eval(prompt("Digite um número:"));
    let fat = 1;
    for(let i = 1;i <= num;i++){
        fat *= i;
    }
    let texto = document.getElementById("fatorialText");
    texto.innerHTML = `O fatorial de ${num} é ${fat}.`;
}

const soma = () => {
    let num1 = document.getElementById("n1");
    let num2 = document.getElementById("n2");
    let soma = num1 + num2;
    document.getElementById("Resultado").innerHTML = `A soma dá ${soma}.`;

}

const funcoes = () => {
    fatorial();
    tabelaCor();
    getData();
    
    
}

