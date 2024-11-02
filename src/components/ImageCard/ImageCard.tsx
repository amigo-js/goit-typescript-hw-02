import css from "./ImageCard.module.css";

type ImageCardProps = {
  src: string;
  alt: string;
  onClick: () => void;
};

export default function ImageCard({ src, alt, onClick }: ImageCardProps) {
  return (
    <div className={css.card} onClick={onClick}>
      <img src={src} alt={alt} className={css.image} />
    </div>
  );
}
