const url = 'http://localhost:3000/produtos';

async function criar(produto) {
    try {
        const response =  await fetch(url, {
            method: 'POST',
            body: JSON.stringify(produto),
            headers: { "content-type": "application/json" }
        });
        const dados = await response.json();
        return dados;
    } catch (error) {
        return { mensagem: `Deu bad, ${error.message}`};


    }

}

async function obter(produto) {
     try {
        const response =  await fetch(`${url}/${produto.id}`, );
        const dados = await response.json();

        return dados;
    } catch (error) {
        return { mensagem: `Deu bad, ${error.message}`};


    }


}

async function listar() {
     try {
        const response =  await fetch(url,);
        const dados = await response.json();

        return dados;
    } catch (error) {
        return { mensagem: `Deu bad, ${error.message}`};


    }

}

async function atualizar(produto) {
     try {
        const response =  await fetch(`${url}/${produto.id}`, {
            method: 'PUT',
            body: JSON.stringify(produto),
            headers: { "content-type": "application/json" }
        });
        const dados = await response.json();
        return dados;
    } catch (error) {
        return { mensagem: `Deu bad, ${error.message}`};


    }
}

async function remover(produto){
     try {
        const response =  await fetch(`${url}/${produto.id}`, {
            method: 'DELETE',
        } );
        const dados = await response.json();

        return dados;
    } catch (error) {
        return { mensagem: `Deu bad, ${error.message}`};


    }
}

export { criar, obter, listar, atualizar, remover }