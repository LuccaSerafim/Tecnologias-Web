import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Cartao from '../components/Cartao';


function Dashboard () {
    return <div>
        <Sidebar />
        <main>
            <Topbar / >
            <section>
                <h2>Bem vindo ao portal do aluno</h2>
                <Cartao />
                <Cartao />
                <Cartao />


            </section>
        </main>
    </div>
}


export default Dashboard;