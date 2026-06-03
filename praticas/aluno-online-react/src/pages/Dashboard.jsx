import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DashboardCard from '../components/DashboardCard';
import './Dashboard.css';

const avisos = [
  'Inscrição para o projeto de extensão',
  'Eleição para representante de turma',
];

const calendario = [
  { data: '23/02', descricao: 'Início do período letivo 2026-1' },
  { data: '25/04', descricao: 'Prazo final para aplicação da P1' },
  { data: '23/06', descricao: 'Prazo final para aplicação da P2' },
  { data: '04/07', descricao: 'Fim do período letivo 2026-1' },
];

const disciplinas = [
  'Bancos de Dados I',
  'Estrutura de Dados',
  'Engenharia de Software',
  'Cálculo II',
];

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <section>
          <DashboardCard title="Mural de Avisos">
            {avisos.map((aviso) => (
              <p key={aviso}>{aviso}</p>
            ))}
          </DashboardCard>

          <DashboardCard title="Calendário Acadêmico">
            {calendario.map((item) => (
              <p key={item.data}>
                <strong>{item.data}</strong> – {item.descricao}
              </p>
            ))}
          </DashboardCard>

          <DashboardCard title="Minhas Disciplinas">
            {disciplinas.map((disc) => (
              <p key={disc}>{disc}</p>
            ))}
          </DashboardCard>
        </section>
      </main>
    </>
  );
}