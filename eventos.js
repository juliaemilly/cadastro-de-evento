// - Se a data do evento for posterior à data atual,permitir o evento; senão, alertar que o cadastro não pode ser concluido
// - se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não pode ser concluido
// - Liatar participantes e palestrantes por evento.
// - Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não pode ser conscluido

let participantes = ["Gabriel", "Marcos", "Junior", "Rebeca"]
let idadeParticipantes = 0;
let palestrante = "Andre";

let hoje = new date();
let diaEvento = prompt("Digite o dia do evento que ira ocorrer (dd)");
let mesEvento = prompt("Digite o mës do evento que ira ocorrer (mm)");
let anoEvento = prompt("Digite o ano do evento que ira ocorrer(aaaa)");
let dataEvento = new date(anoEvento, mesEvento - 1, diaEvento);

if (dataEvento <= hoje) {
    console.log("Data do evento é anterior a data atual");
} else {
    console.log("Evento permitido com sucesso");
}

if (participantes.length < 100){
    console.log("Lista de participantes menor que 100, cadastro liberado. ");
    idadeParticipantes = prompt("informe o nome do participante ");
    if (idadeParticipante >= 18){
        console.log("Idade permitida");
        participantes.push(prompt("Informe o nome do participante")):
    } else {
        console.log("Idade do participante não permitido");
    }
} else {
    console.log ("não permitir cadastro, lista cheia");
}

console.log("O palestrante é o", palestrante);
console.log("A lista de participantes possui", participantes.length, "paraticipantes:")
for (let i = 0; i < participantes.length; i++){
    console.log(participantes[i]);
}