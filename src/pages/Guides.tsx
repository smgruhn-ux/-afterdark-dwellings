import { guides } from '../data/guides';
import { useSeo } from '../components/useSeo';
import { GuideCard } from '../components/Cards';

export default function Guides() {
  useSeo('/guides');
  return (
    <div className="container section">
      <header className="page-head">
        <p className="label">GUIDES</p>
        <h1>Dark interior design guides</h1>
        <p className="lead muted">Practical, original guidance on light, material and composition, organised by the problems dark rooms actually have.</p>
      </header>
      <div className="guide-grid">
        {guides.map((g, i) => <GuideCard key={g.slug} guide={g} index={i} />)}
      </div>
    </div>
  );
}
