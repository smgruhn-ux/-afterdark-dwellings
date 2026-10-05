import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { guideBySlug } from '../data/guides';
import { spaceBySlug } from '../data/spaces';
import { productsFor } from '../data/productUtils';
import { useSeo } from '../components/useSeo';
import Picture from '../components/Picture';
import { GuideCard } from '../components/Cards';
import { PinterestCta, SaveGuide } from '../components/Pinterest';
import { ProductCard, ShopTheIdea } from '../components/Products';
import NotFound from './NotFound';

export default function GuideArticle() {
  const { slug = '' } = useParams();
  const guide = guideBySlug(slug);
  useSeo(guide ? `/guides/${guide.slug}` : 'notfound');
  if (!guide) return <NotFound />;

  const space = spaceBySlug(guide.spaceSlug);
  const related = guide.related.map(guideBySlug).filter((g) => g !== undefined);
  const relatedProducts = productsFor({ guide: guide.slug });
  const hasAffiliate = relatedProducts.some((p) => p.disclosureRequired);

  return (
    <article>
      <header className="article-hero">
        <Picture image={guide.heroImage} label={guide.title} ratio="hero" eager />
        <div className="container article-head">
          <nav aria-label="Breadcrumb" className="label breadcrumb">
            <Link to="/guides">Guides</Link> / {guide.category}
          </nav>
          <h1>{guide.title}</h1>
          <p className="deck">{guide.deck}</p>
          <p className="label">{guide.readTime}</p>
          <SaveGuide guide={guide} />
        </div>
      </header>

      <div className="container article-body">
        <div className="intro">
          {guide.intro.map((p) => <p key={p}>{p}</p>)}
        </div>

        {guide.sections.map((s, i) => (
          <Fragment key={s.heading}>
            <section className="guide-section" aria-labelledby={`s${i + 1}`}>
              <p className="label">{String(i + 1).padStart(2, '0')}</p>
              <h2 id={`s${i + 1}`}>{s.heading.toUpperCase()}</h2>
              {s.body.map((p) => <p key={p}>{p}</p>)}
              {s.shop && <ShopTheIdea guide={guide.slug} types={s.shop.types} category={s.shop.category} />}
            </section>
            {(s.image || s.imageLabel) && (
              <Picture image={s.image} label={s.imageLabel ?? s.heading} ratio="wide" className="break-image" />
            )}
          </Fragment>
        ))}

        {relatedProducts.length > 0 && (
          <section aria-labelledby="related-products" className="related">
            <h2 id="related-products" className="label">RELATED PRODUCTS</h2>
            <div className="product-grid">
              {relatedProducts.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
        {relatedProducts.length === 0 && (
          <section aria-labelledby="related-products" className="related">
            <h2 id="related-products" className="label">RELATED PRODUCTS</h2>
            <p className="coming-soon">VERIFIED RECOMMENDATION COMING SOON</p>
            <p className="small muted">See <Link to="/curated-finds">Curated Finds</Link> for verified products as they are added.</p>
          </section>
        )}

        {hasAffiliate && (
          <p className="small muted disclosure">
            Some links on this page are affiliate links. {`AFTERDARK DWELLINGS`} may earn a commission at no additional cost to you. <Link to="/affiliate-disclosure">Read the disclosure</Link>.
          </p>
        )}

        <PinterestCta guide={guide} />

        {space && (
          <p className="small"><Link className="text-link" to={`/spaces/${space.slug}`}>MORE IN {space.name.toUpperCase()} →</Link></p>
        )}
      </div>

      <section className="container section" aria-labelledby="related-guides">
        <header className="section-head"><h2 id="related-guides">RELATED GUIDES</h2></header>
        <div className="guide-grid three">
          {related.map((g) => <GuideCard key={g.slug} guide={g} />)}
        </div>
      </section>
    </article>
  );
}
