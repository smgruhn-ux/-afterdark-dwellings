import { legalPages } from '../data/legal';
import { useSeo } from '../components/useSeo';

export default function LegalPage({ page }: { page: keyof typeof legalPages }) {
  const data = legalPages[page];
  useSeo(data.path);
  return (
    <div className="container section prose-page">
      <header className="page-head">
        <p className="label">{data.updated}</p>
        <h1>{data.title}</h1>
        <p className="lead muted">{data.deck}</p>
      </header>
      {data.sections.map((s, i) => (
        <section key={s.heading}>
          <p className="label">{String(i + 1).padStart(2, '0')}</p>
          <h2>{s.heading.toUpperCase()}</h2>
          {s.body.map((p) => <p key={p}>{p}</p>)}
        </section>
      ))}
    </div>
  );
}
