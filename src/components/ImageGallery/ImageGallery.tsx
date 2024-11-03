import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageData } from "../api-service";
import { SelectedImageData } from "../App/App";

interface ImageGalleryProps {
  images: ImageData[];
  onImageClick: (imageData: SelectedImageData) => void;
}

export default function ImageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.item}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description || "No description"}
            onClick={() =>
              onImageClick({
                regular: image.urls.regular,
                alt: image.alt_description || "No description",
                likes: image.likes,
                user: image.user,
              })
            }
          />
        </li>
      ))}
    </ul>
  );
}
