import css from './Modal.module.css';
import ReactDOM from 'react-dom';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { open } from 'redux/modal/modalSlice';

const Modal = ({ close, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const backdropRef = useRef();

  const dispatch = useDispatch();

  const closeModalWindow = useCallback(()=> {
    close();
  }, [close]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    dispatch(open(false));
    setTimeout(() => {
      closeModalWindow();
    }, 250);
  }, [dispatch, closeModalWindow]);

  const handleKeyEscape = useCallback((event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  const handleBackdropClick = useCallback(event => {
    if (event.target === backdropRef.current) {
      backdropRef.current.removeEventListener('click', handleBackdropClick);
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    setIsOpen(true);
    dispatch(open(true));
    document.addEventListener('keydown', handleKeyEscape);
    backdropRef.current.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('keydown', handleKeyEscape);
    };
  }, [handleKeyEscape, handleBackdropClick, dispatch]);

  return ReactDOM.createPortal(
    <div
      className={`${css.backdrop} ${!isOpen && css.isHidden}`}
      ref={backdropRef}
    >
      <div className={css.modal}>
        {children}
        <button className={css.closeBtn} onClick={closeModal}></button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
