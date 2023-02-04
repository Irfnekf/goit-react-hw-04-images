import { useState, useEffect, useCallback } from 'react';
import css from './app.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './shared/components/Modal/Modal';
import ModalImg from './ModalImg/ModalImg';

import { searchImg } from './shared/imageApi';

export const App = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');

  useEffect(() => {
    if (search) {
      const fetchImg = async () => {
        try {
          setLoading(true);
          const data = await searchImg(search, page);
          setItems(prevItems => [...prevItems, ...data.hits]);
          console.log(data.hits);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchImg();
    }
  }, [search, page]);

  const searchPost = useCallback(
    state => {
      if (state !== search) {
        setSearch(state);
        setItems([]);
        setPage(1);
      }
    },
    [search]
  );

  const onLoadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  const showLargeImg = useCallback(largeImageUrl => {
    setLargeImageUrl(largeImageUrl);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setLargeImageUrl('');
    setShowModal(false);
  }, []);

  return (
    <div className={css.App}>
      <Searchbar onSubmit={searchPost} />
      <ImageGallery items={items} showLargeImg={showLargeImg} />
      {error && <p>Error</p>}
      {showModal && (
        <Modal onClose={closeModal}>
          <ModalImg img={largeImageUrl} />
        </Modal>
      )}
      {Boolean(items.length) && <Button onClick={onLoadMore} />}
      {loading && <Loader />}
    </div>
  );
};
