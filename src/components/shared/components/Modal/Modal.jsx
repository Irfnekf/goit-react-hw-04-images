import { useEffect, useCallback, memo } from 'react';
import { createPortal } from 'react-dom';
import css from './modal.module.css';
import PropTypes from 'prop-types';

const ModalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  return createPortal(
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>{children}</div>
    </div>,
    ModalRoot
  );
};

export default memo(Modal);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
