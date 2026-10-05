import { Link } from 'react-router-dom';
import { BRAND, TAGLINE } from '../config/site';
import { guides } from '../data/guides';
import { spaces } from '../data/spaces';
import { useSeo } from '../components/useSeo';
import Picture from '../components/Picture';
import { GuideCard } from '../components/Cards';
import { PinterestCta } from '../components/Pinterest';
import { ShopTheIdea } from '../components/Products';

const principles = [
  ['Material', 'Stone, steel, glass and timber chosen for surface depth rather than colour.'],
  ['Light', 'Low, layered and directional. Never a single bright ceiling.'],
  ['Texture', 'Matte against honed, woven against polished, so dark surfaces separate.'],
  ['Scale', 'Fewer, larger pieces with confident proportions.'],
  ['Contrast', 'Controlled differences in tone, finish and brightness.'],
  ['Negative space', 'Empty surfaces that let a composition breathe.'],
  ['Architectural composition', 'Lines, edges and alignments that give a room structure.'],
];

export default function Home() {
  useSeo('/');
  return (
    <>
      <section className="hero">
        <Picture label="Dark architectural interior" ratio="hero" className="hero-image" eager />
        <div className="hero-copy container">
          <p className="label">{TAGLINE}</p>
          <h1>{BRAND}</h1>
          <p className="hero-statement">Dark interiors, considered objects, and home upgrades worth bringing inside.</p>
          <div className="btn-row">
            <Link className="btn btn-solid" to="/guides">EXPLORE THE EDIT</Link>
            <Link className="text-link" to="/guides">LATEST GUIDES →</Link>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="latest">
        <header className="section-head">
          <p className="label">01</p>
          <h2 id="latest">THE LATEST</h2>
        </header>
        <div className="guide-grid">
          {guides.map((g, i) => <GuideCard key={g.slug} guide={g} index={i} large={i === 0} />)}
        </div>
      </section>

      <section className="section container" aria-labelledby="explore">
        <header className="section-head">
          <p className="label">02</p>
          <h2 id="explore">EXPLORE BY SPACE</h2>
        </header>
        <ul className="space-grid plain">
          {spaces.map((s, i) => (
            <li key={s.slug}>
              <Link to={`/spaces/${s.slug}`} className="space-tile">
                <Picture image={s.image} label={s.name} ratio="tall" />
                <span className="space-name"><span className="label">{String(i + 1).padStart(2, '0')}</span>{s.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section container philosophy" aria-labelledby="philosophy">
        <header className="section-head">
          <p className="label">03</p>
          <h2 id="philosophy">DESIGN AFTER DARK</h2>
        </header>
        <div className="philosophy-grid">
          <p className="lead">{BRAND} is an independent interiors publication. We believe a dark room is not an absence of light but a composition of it: surfaces, shadows and a few considered objects, arranged with restraint.</p>
          <ol className="principles">
            {principles.map(([t, d], i) => (
              <li key={t}>
                <span className="label">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t}</h3>
                <p className="muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container" aria-labelledby="idea">
        <header className="section-head">
          <p className="label">04</p>
          <h2 id="idea">SHOP THE IDEA</h2>
        </header>
        <div className="idea-feature">
          <div>
            <p className="label">01</p>
            <h3 className="idea-title">START WITH AMBIENT LIGHT</h3>
            <p className="muted">Low, indirect light gives a dark room its base layer and keeps depth intact. Keep it dimmable and warm.</p>
            <Link className="text-link" to="/guides/layered-lighting-for-dark-interiors">READ THE GUIDE →</Link>
          </div>
          <ShopTheIdea guide="layered-lighting-for-dark-interiors" types={['Wall sconce', 'Warm LED lighting', 'Dimmable lamp']} category="Lighting" />
        </div>
      </section>

      <section className="section container" aria-labelledby="more">
        <h2 id="more" className="sr-only">Pinterest</h2>
        <PinterestCta />
      </section>
    </>
  );
}
