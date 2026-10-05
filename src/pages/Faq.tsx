import { faqs } from '../data/legal';
import { useSeo } from '../components/useSeo';

export default function Faq() {
  useSeo('/faq');
  return (
    <div className="container section prose-page">
      <header className="page-head">
        <p className="label">FAQ</p>
        <h1>Frequently asked questions</h1>
      </header>
      <dl className="faq">
        {faqs.map((f) => (
          <div key={f.q}>
            <dt>{f.q}</dt>
            <dd>{f.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
