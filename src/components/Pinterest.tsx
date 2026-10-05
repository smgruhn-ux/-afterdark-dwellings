import { PINTEREST_HANDLE, PINTEREST_URL } from '../config/site';
import { absoluteUrl } from '../config/url';
import type { Guide } from '../data/types';

export function FollowButton({ className = '' }: { className?: string }) {
  return (
    <a className={`btn btn-ghost ${className}`} href={PINTEREST_URL} target="_blank" rel="noopener noreferrer">
      FOLLOW ON PINTEREST
    </a>
  );
}

export function saveGuideUrl(guide: Guide): string {
  const params = new URLSearchParams({
    url: absoluteUrl(`/guides/${guide.slug}`),
    description: `${guide.title} | AFTERDARK DWELLINGS`,
  });
  if (guide.pinImage) params.set('media', absoluteUrl(guide.pinImage));
  return `https://www.pinterest.com/pin/create/button/?${params.toString()}`;
}

export function SaveGuide({ guide }: { guide: Guide }) {
  return (
    <a className="save-callout" href={saveGuideUrl(guide)} target="_blank" rel="noopener noreferrer">
      <span className="label">Pinterest</span>
      <span>SAVE THIS GUIDE</span>
    </a>
  );
}

export function PinterestCta({ guide }: { guide?: Guide }) {
  return (
    <aside className="pinterest-cta" aria-label="Pinterest">
      <p className="label">MORE AFTERDARK</p>
      <p className="cta-text">Follow {PINTEREST_HANDLE} for interiors, objects, materials, lighting, and ideas worth saving.</p>
      <div className="btn-row">
        <FollowButton />
        {guide && (
          <a className="btn btn-quiet" href={saveGuideUrl(guide)} target="_blank" rel="noopener noreferrer">SAVE THIS GUIDE</a>
        )}
      </div>
    </aside>
  );
}
