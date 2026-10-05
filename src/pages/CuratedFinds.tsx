import { Link } from 'react-router-dom';
import { useState } from 'react';
import { categories, verifiedProducts } from '../data/productUtils';
import type { ProductCategory } from '../data/types';
import { useSeo } from '../components/useSeo';
import { ComingSoonCard, ProductCard } from '../components/Products';

export default function CuratedFinds() {
  useSeo('/curated-finds');
  const [active, setActive] = useState<ProductCategory | 'All'>('All');
  const all = verifiedProducts();
  const shown = categories.filter((c) => active === 'All' || c.name === active);

  return (
    <div className="container section">
      <header className="page-head">
        <p className="label">CURATED FINDS</p>
        <h1>Considered objects for dark interiors</h1>
        <p className="lead muted">Products appear here only when they are real, verified and linked to a real merchant. Until then each category shows “VERIFIED RECOMMENDATION COMING SOON”.</p>
      </header>

      <div className="filters" role="group" aria-label="Filter by category">
        {(['All', ...categories.map((c) => c.name)] as const).map((c) => (
          <button key={c} type="button" className="chip" aria-pressed={active === c} onClick={() => setActive(c)}>
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      {shown.map((c, i) => {
        const items = all.filter((p) => p.category === c.name);
        return (
          <section key={c.name} className="finds-section" aria-labelledby={`c-${i}`}>
            <p className="label">{String(categories.indexOf(c) + 1).padStart(2, '0')}</p>
            <h2 id={`c-${i}`}>{c.name.toUpperCase()}</h2>
            <p className="muted">{c.blurb}</p>
            <div className="product-grid">
              {items.length > 0
                ? items.map((p) => <ProductCard key={p.id} product={p} />)
                : <ComingSoonCard title={c.name} category="Category" />}
            </div>
          </section>
        );
      })}
      <p className="small muted">Pricing and inventory can change. Merchant pages are the final source for current purchase information. See the <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>.</p>
    </div>
  );
}
