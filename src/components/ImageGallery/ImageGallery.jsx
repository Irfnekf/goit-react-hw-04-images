import css from './image-gallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { memo } from 'react';

const ImageGallery = ({ items, showLargeImg }) => {
  return (
    <ul className={css.ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} onClick={showLargeImg} />
      ))}
    </ul>
  );
};

export default memo(ImageGallery);

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  showLargeImg: PropTypes.func.isRequired,
};
