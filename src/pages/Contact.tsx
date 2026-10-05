import { CONTACT_EMAIL } from '../config/site';
import { useSeo } from '../components/useSeo';
import { FollowButton } from '../components/Pinterest';

export default function Contact() {
  useSeo('/contact');
  return (
    <div className="container section prose-page">
      <header className="page-head">
        <p className="label">CONTACT</p>
        <h1>Contact</h1>
      </header>
      <p>For editorial enquiries, partnerships or corrections, email:</p>
      <p><a className="big-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
      <FollowButton />
    </div>
  );
}
