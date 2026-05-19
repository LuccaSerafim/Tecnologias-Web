import {criar, obter, listar, atualizar, remover} from './client.js';

async function main() {
    let resposta = await criar({nome: "banana", preco: 15.0});
    console.log("Criei o produto: ", resposta);

    resposta = await listar();
    console.log("Listar produtos: ", resposta);

    resposta = await obter(resposta[0]);
    console.log("Obtive o produto: ", resposta);

    resposta.nome = "banana nanica";
    resposta.preco = 20.5;
    resposta = await atualizar(resposta);
    console.log("Atualize o produto: ", resposta);

    resposta = await remover(resposta);
    console.log("Removi o produto: ", resposta);
}

main()