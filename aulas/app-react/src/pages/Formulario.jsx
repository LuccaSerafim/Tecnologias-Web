import { useEffect, useState } from "react";
import {useNavigate, Link, useParams} from "react-router";
import {atualizar, criar, obter} from "../../../api-rest/client";

function Formulario() {
    const {id} = useParams();
    const [nome, setNome] = useState();
    const [preco, setPreco] = useState();
    const [unidade, setUnidade] = useState();
    const navigate = useNavigate();
    const trataSalvar = async (e) => {
        e.preventDefault();

        if (id) {
            await atualizar({id, nome, preco, unidade})
        }
        else {
            await criar ({nome, preco, unidade});
            
        }
        navigate("/produtos")
    }

useEffect (() => {
    const disparar = async() => {
        const produto = await obter({id});
        setNome(produto.nome);
        setPreco(produto.preco)
        setUnidade(produto.unidade);
    }
    if (id) disparar();
}, [id])

    return <>
        <h1>Cadastro de Produto</h1>
        <input 
        type ="text" 
        placeholder="Nome do produto" 
        value = {nome}
        onChange={(e) => setNome(e.target.value)}
        />

        <input 
        type ="text"
         placeholder="Preço 0,00"
         value = {preco}
        onChange={(e) => setPreco(e.target.value)} 
        />

        <input 
        type ="text" 
        placeholder="Unidade"
        value = {unidade}
        onChange={(e) => setUnidade(e.target.value)} 
        />

        <Link to ="/produtos">Cancelar</Link>
        <button type ="submit" onClick={trataSalvar}>Salvar</button>
    
    </>
}

export default Formulario;