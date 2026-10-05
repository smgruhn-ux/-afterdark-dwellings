import { Link, useParams } from 'react-router-dom';
import { spaceBySlug } from '../data/spaces';
import { guideBySlug } from '../data/guides';
import { productsFor } from '../data/productUtils';
import { PINTEREST_URL } from '../config/site';
import type { Space } from '../data/types';
import { useSeo } from '../components/useSeo';
import Picture from '../components/Picture';
import { GuideCard } from '../components/Cards';
import { ProductCard, ComingSoonCard } from '../components/Products';
import NotFound from './NotFound';

export function PinterestBoardLink({ space }: { space: Space }) {
  return (
    <a className="btn btn-quiet" href={space.boardUrl ?? PINTEREST_URL} target="_blank" rel="noopener noreferrer">
      {space.name.toUpperCase()} ON PINTEREST
    </a>
  );
}

export default function SpaceDetail() {
  const { slug = '' } = useParams();
  const space = spaceBySlug(slug);
  useSeo(space ? `/spaces/${space.slug}` : 'notfound');
  if (!space) return <NotFound />;
  const guides = space.guides.map(guideBySlug).filter((g) => g !== undefined);

  return (
    <div className="container section">
      <header className="page-head">
        <p className="label"><Link to="/spaces">Spaces</Link> / {space.name}</p>
        <h1>{space.name}</h1>
        {space.intro.map((p) => <p key={p} className="lead muted">{p}</p>)}
      </header>
      <Picture image={space.image} label={space.name} ratio="hero" eager />

      <section className="section" aria-labelledby="sp-guides">
        <header className="section-head"><h2 id="sp-guides">RELATED GUIDES</h2></header>
        <div className="guide-grid">
          {guides.map((g, i) => <GuideCard key={g.slug} guide={g} index={i} />)}
        </div>
      </section>

      <section className="section" aria-labelledby="sp-products">
        <header className="section-head"><h2 id="sp-products">PRODUCT CATEGORIES</h2></header>
        <div className="product-grid">
          {space.productCategories.flatMap((c) => {
            const found = productsFor({ space: space.slug, category: c });
            return found.length
              ? found.map((p) => <ProductCard key={p.id} product={p} />)
              : [<ComingSoonCard key={c} title={c} category={space.name} />];
          })}
        </div>
        <p className="small muted">Browse all <Link to="/curated-finds">Curated Finds</Link>.</p>
      </section>

      <section className="section" aria-labelledby="sp-pin">
        <header className="section-head"><h2 id="sp-pin">PINTEREST BOARD</h2></header>
        <p className="muted">Save ideas for {space.name.toLowerCase()} on the {space.boardName} board.</p>
        <PinterestBoardLink space={space} />
      </section>
    </div>
  );
}
