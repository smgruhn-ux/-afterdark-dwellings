import { Link } from 'react-router-dom';
import { spaces } from '../data/spaces';
import { guideBySlug } from '../data/guides';
import { useSeo } from '../components/useSeo';
import Picture from '../components/Picture';
import { PinterestBoardLink } from './SpaceDetail';

export default function Spaces() {
  useSeo('/spaces');
  return (
    <div className="container section">
      <header className="page-head">
        <p className="label">SPACES</p>
        <h1>Dark interior ideas, room by room</h1>
        <p className="lead muted">Start with the room you are working on.</p>
        <ul className="plain jump-links">
          {spaces.map((s) => <li key={s.slug}><a href={`#${s.slug}`} className="label">{s.name}</a></li>)}
        </ul>
      </header>
      {spaces.map((s, i) => (
        <section key={s.slug} id={s.slug} className="space-section" aria-labelledby={`h-${s.slug}`}>
          <Picture image={s.image} label={s.name} ratio="wide" />
          <div>
            <p className="label">{String(i + 1).padStart(2, '0')}</p>
            <h2 id={`h-${s.slug}`}>{s.name.toUpperCase()}</h2>
            {s.intro.map((p) => <p key={p} className="muted">{p}</p>)}
            <p className="label">Related guides</p>
            <ul className="plain link-list">
              {s.guides.map((g) => {
                const guide = guideBySlug(g);
                return guide && <li key={g}><Link to={`/guides/${g}`}>{guide.title}</Link></li>;
              })}
            </ul>
            <p className="label">Product categories</p>
            <p className="small">{s.productCategories.join(' · ')}</p>
            <div className="btn-row">
              <Link className="btn btn-ghost" to={`/spaces/${s.slug}`}>EXPLORE {s.name.toUpperCase()}</Link>
              <PinterestBoardLink space={s} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
