import React from 'react';
import { ModalStyle } from './modal-style';
import { ReactComponent as CloseIcon } from '../../assets/icons/files/close.svg';
import classnames from 'classnames';

const Modal = ({ active, onClose, title, children }) => {
  return (
    <ModalStyle className={classnames({ active: !!active })}>
      <div className="modal-header">
        <div className="modal-header-title">
          <h1>{title}</h1>
        </div>
        <div className="modal-header-close" onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      {children}
    </ModalStyle>
  );
};

export default Modal;
