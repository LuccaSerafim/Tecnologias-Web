import './DashboardCard.css';

export default function DashboardCard({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      <article>{children}</article>
    </section>
  );
}