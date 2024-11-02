// ImageModal.tsx
import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageData: {
    regular: string;
    alt: string;
    likes: number;
    user: {
      name: string;
    };
  };
}

export default function ImageModal({
  isOpen,
  onRequestClose,
  imageData,
}: ImageModalProps) {
  if (!imageData) return null;

  const { regular, alt, likes, user } = imageData;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={regular} alt={alt} className={css.image} />
      <div className={css.details}>
        <p>
          <strong>Likes:</strong> {likes}
        </p>
        <p>
          <strong>Author:</strong> {user.name}
        </p>
      </div>
    </Modal>
  );
}
