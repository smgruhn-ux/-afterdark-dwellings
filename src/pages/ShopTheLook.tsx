import { looks } from '../data/looks';
import { productById } from '../data/productUtils';
import { COMING_SOON } from '../config/site';
import { useSeo } from '../components/useSeo';
import Picture from '../components/Picture';
import { ProductCard } from '../components/Products';

export default function ShopTheLook() {
  useSeo('/shop-the-look');
  return (
    <div className="container section">
      <header className="page-head">
        <p className="label">SHOP THE LOOK</p>
        <h1>Visual room edits</h1>
        <p className="lead muted">Each look lists the pieces that make it work. Items are placeholders and not purchasable until a verified merchant link is supplied.</p>
      </header>
      {looks.map((look) => (
        <section key={look.slug} className="look" aria-labelledby={look.slug}>
          <h2 id={look.slug}>{look.title.toUpperCase()}</h2>
          <Picture image={look.image} label={look.imageLabel} ratio="hero" />
          <p className="muted">{look.description}</p>
          <ol className="look-items plain">
            {look.items.map((item, i) => {
              const product = item.productId ? productById(item.productId) : undefined;
              return (
                <li key={item.label}>
                  {product ? (
                    <ProductCard product={product} />
                  ) : (
                    <>
                      <span className="label">{String(i + 1).padStart(2, '0')} /</span>
                      <span className="look-name">{item.label.toUpperCase()}</span>
                      <span className="coming-soon small">PLACEHOLDER · {COMING_SOON}</span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
