import { Link } from 'react-router-dom';
import type { Guide } from '../data/types';
import Picture from './Picture';

export function GuideCard({ guide, index, large }: { guide: Guide; index?: number; large?: boolean }) {
  return (
    <article className={`guide-card${large ? ' is-large' : ''}`}>
      <Link to={`/guides/${guide.slug}`} className="card-media" tabIndex={-1} aria-hidden="true">
        <Picture image={guide.heroImage} label={guide.title} ratio={large ? 'hero' : 'wide'} />
      </Link>
      <div className="card-body">
        <p className="label">{index !== undefined ? `${String(index + 1).padStart(2, '0')} / ` : ''}{guide.category} · {guide.readTime}</p>
        <h3><Link to={`/guides/${guide.slug}`}>{guide.title}</Link></h3>
        <p className="muted">{guide.deck}</p>
        <Link className="text-link" to={`/guides/${guide.slug}`}>READ GUIDE →</Link>
      </div>
    </article>
  );
}
