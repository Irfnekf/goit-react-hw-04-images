import css from './image-galleryItem.module.css';
import PropTypes from 'prop-types';
import { memo } from 'react';

const ImageGalleryItem = ({ item, onClick }) => {
  return (
    <li
      onClick={() => onClick(item.largeImageURL)}
      className={css.ImageGalleryItem}
    >
      <img
        className={css.ImageGalleryItem_image}
        src={item.webformatURL}
        alt={item.tags}
      />
    </li>
  );
};

export default memo(ImageGalleryItem);

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
