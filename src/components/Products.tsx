import { Link } from 'react-router-dom';
import { COMING_SOON } from '../config/site';
import { getProductUrl, productsFor } from '../data/productUtils';
import type { Product, ProductCategory } from '../data/types';
import Picture from './Picture';

export function ProductCard({ product }: { product: Product }) {
  const sponsored = Boolean(product.affiliateUrl) || product.disclosureRequired;
  return (
    <article className="product-card">
      <Picture
        image={product.image ? { src: product.image, alt: product.imageAlt || product.productName } : undefined}
        label={product.productName}
        ratio="square"
      />
      <div className="product-body">
        <p className="label">{product.category}{product.useCase ? ` / ${product.useCase}` : ''}</p>
        <h3>{product.productName}</h3>
        <p className="small muted">{product.merchant}{product.price ? ` · ${product.price}` : ''}</p>
        <p className="small">{product.editorialNote}</p>
        <a
          className="btn btn-solid"
          href={getProductUrl(product)}
          target="_blank"
          rel={`noopener noreferrer${sponsored ? ' sponsored nofollow' : ''}`}
        >
          SHOP <span className="sr-only">{product.productName} at {product.merchant}</span>
        </a>
        {product.disclosureRequired && (
          <p className="tiny muted">Affiliate link. <Link to="/affiliate-disclosure">Disclosure</Link>. Merchant page is the final source for price and availability.</p>
        )}
      </div>
    </article>
  );
}

export function ComingSoonCard({ title, category }: { title: string; category?: string }) {
  return (
    <article className="product-card is-pending">
      <div className="product-body">
        <p className="label">{category ?? 'Recommendation'}</p>
        <h3>{title}</h3>
        <p className="coming-soon">{COMING_SOON}</p>
      </div>
    </article>
  );
}

export function ShopTheIdea({
  guide,
  types,
  category,
}: {
  guide?: string;
  types: string[];
  category: ProductCategory;
}) {
  const found = productsFor({ guide, category });
  return (
    <aside className="shop-idea" aria-label="Shop the idea">
      <p className="label">SHOP THE IDEA</p>
      {found.length > 0 ? (
        <>
          <div className="product-grid">
            {found.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
          {found.some((p) => p.disclosureRequired) && (
            <p className="tiny muted">Some links may be affiliate links; AFTERDARK DWELLINGS may earn a commission at no additional cost to you.</p>
          )}
        </>
      ) : (
        <>
          <ul className="idea-types">
            {types.map((t) => (
              <li key={t}>
                <span>{t}</span>
                <span className="coming-soon small">{COMING_SOON}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
}
