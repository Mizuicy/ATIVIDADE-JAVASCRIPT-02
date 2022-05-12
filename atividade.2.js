let nascimento = prompt("Digite seu ano de nascimento")

if(nascimento <= 2004){
    alert("vc pode votar 😎");
}else{
    alert("volta pra casa criança");
}

///////////////////////////atividade 02
let senha = prompt("Digite sua senha do cartão")

if(senha == 1234){
    alert("ACESSO PERMITIDO😗🥰");
}else{
    alert("ACESSO NEGADO😡🤬");
}
/////////////////////////Atividade 03
let Turno = prompt("Qual turno vc estuda (M)-Matutino (V)-Vespertino (N)-Noturno")


if(Turno == "M"){
    alert("Bom Dia");
}else if (Turno == "V") {
    alert("Boa Tarde");
}else if(Turno == "N"){
    alert("Boa Noite");
}else {
    alert("erro");
}