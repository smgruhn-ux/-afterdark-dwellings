import { Link } from 'react-router-dom';
import { useSeo } from '../components/useSeo';

export default function NotFound() {
  useSeo('notfound');
  return (
    <div className="container section prose-page">
      <header className="page-head">
        <p className="label">404</p>
        <h1>Page not found</h1>
        <p className="lead muted">This page has moved or does not exist.</p>
      </header>
      <div className="btn-row">
        <Link className="btn btn-solid" to="/">BACK HOME</Link>
        <Link className="btn btn-ghost" to="/guides">BROWSE GUIDES</Link>
      </div>
    </div>
  );
}
