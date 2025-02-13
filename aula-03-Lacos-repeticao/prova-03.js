let nomes = [];

while (true) {
    let entrada = prompt('Digite um nome (ou sair para encerrar): ');

    if (entrada.toLowerCase() === 'sair') {
        break; 
    }

    nomes.push(entrada); // Adiciona o nome a lista dos nomes.
}

console.log('Lista de nomes com índices: ');
for (let i = 0; i < nomes.length; i++) {
    console.log(`${i + 1}: ${nomes[i]}`);
}

console.log('Mensagens personalizadas: ');
for(let nome of nomes) {
    console.log(`Bem-vindos(a), ${nome}!`);
}