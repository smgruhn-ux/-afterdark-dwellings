import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { BRAND, CONTACT_EMAIL, NAV, PINTEREST_URL } from '../config/site';

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="wordmark" aria-label={`${BRAND} home`}>{BRAND}</Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'CLOSE' : 'MENU'}
          </button>
          <nav id="primary-nav" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Primary">
            <ul>
              {NAV.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} end={n.to === '/'}>{n.label}</NavLink>
                </li>
              ))}
              <li>
                <a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer">PINTEREST</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="wordmark">{BRAND}</p>
            <p className="muted small">An independent interiors publication.</p>
            <p className="small"><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
          <nav aria-label="Explore">
            <p className="label">Explore</p>
            <ul className="plain">
              <li><Link to="/guides">Guides</Link></li>
              <li><Link to="/spaces">Spaces</Link></li>
              <li><Link to="/curated-finds">Curated Finds</Link></li>
              <li><Link to="/shop-the-look">Shop the Look</Link></li>
              <li><a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer">Pinterest</a></li>
            </ul>
          </nav>
          <nav aria-label="Information">
            <p className="label">Information</p>
            <ul className="plain">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/editorial-policy">Editorial Policy</Link></li>
              <li><Link to="/affiliate-disclosure">Affiliate Disclosure</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use">Terms of Use</Link></li>
            </ul>
          </nav>
        </div>
        <div className="container footer-base small muted">
          <p>© {new Date().getFullYear()} {BRAND}. Some links may become affiliate links. See the <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>.</p>
        </div>
      </footer>
    </>
  );
}
