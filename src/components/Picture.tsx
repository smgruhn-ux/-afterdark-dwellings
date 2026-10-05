import type { ImageRef } from '../data/types';

interface Props {
  image?: ImageRef;
  /** Used for the placeholder label and its accessible name. */
  label: string;
  ratio?: 'wide' | 'tall' | 'square' | 'hero';
  className?: string;
  eager?: boolean;
}

const assetUrl = (src: string) =>
  /^https?:\/\//.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`;

/** Renders a real image when `image.src` is set, otherwise an obvious, easy-to-replace placeholder. */
export default function Picture({ image, label, ratio = 'wide', className = '', eager }: Props) {
  if (image?.src) {
    return (
      <div className={`picture ratio-${ratio} ${className}`}>
        <img src={assetUrl(image.src)} alt={image.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    );
  }
  return (
    <div className={`picture placeholder ratio-${ratio} ${className}`} role="img" aria-label={`Image placeholder: ${label}`}>
      <span className="placeholder-tag">IMAGE PLACEHOLDER</span>
      <span className="placeholder-label">{label}</span>
    </div>
  );
}
