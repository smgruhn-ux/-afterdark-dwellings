import { Link } from 'react-router-dom';
import { BRAND, CONTACT_EMAIL } from '../config/site';
import { useSeo } from '../components/useSeo';
import { FollowButton } from '../components/Pinterest';

export default function About() {
  useSeo('/about');
  return (
    <div className="container section prose-page">
      <header className="page-head">
        <p className="label">ABOUT</p>
        <h1>{BRAND}</h1>
        <p className="lead muted">An independent interiors publication.</p>
      </header>
      <p>{BRAND} focuses on:</p>
      <ul>
        <li>dark modern interiors</li>
        <li>architectural lighting</li>
        <li>material depth</li>
        <li>considered home products</li>
        <li>practical design guidance</li>
      </ul>
      <h2>OUR STANDARDS</h2>
      <ul>
        <li>Editorial content is original.</li>
        <li>Products are selected for editorial fit.</li>
        <li>Affiliate relationships may support the publication.</li>
        <li>Affiliate relationships do not guarantee inclusion.</li>
        <li>Fake reviews are not used.</li>
        <li>Invented product listings are not used.</li>
        <li>Invented pricing is not used.</li>
      </ul>
      <p>Read the <Link to="/editorial-policy">Editorial Policy</Link> and <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>.</p>
      <p>Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
      <FollowButton />
    </div>
  );
}
