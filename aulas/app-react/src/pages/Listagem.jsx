import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { listar, remover } from '../../../api-rest/client'

function Listagem() {
    const [produtos, setProdutos] = useState([]);

    const trataRemover = async (produto) => {
        await remover(produto);
        setProdutos(produtos.filter(item => item.id != produto.id))
    }

    useEffect(() => {
        const disparar = async () => {
            const dados = await listar();
            setProdutos(dados);
        }
        disparar();
    }, []);

    return <>
        <h1>Listagem de Produtos</h1>
        <Link to="/produtos/novo">Adicionar</Link>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Unidade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map(item => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.preco}</td>
                        <td>{item.unidade}</td>
                        <td>
                            <Link to={`/produtos/editar/${item.id}`}>Editar</Link>
                            |
                            <Link to="/produtos" 
                              onClick={() => trataRemover(item)}
                            >Remover</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}
export default Listagem;