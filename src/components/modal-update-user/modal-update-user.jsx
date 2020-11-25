import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../../store/actionCreators';
import { ModalUpdateUserStyle } from './modal-update-user-style';

const ModalUpdateUser = ({ onClose }) => {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();

  return (
    <ModalUpdateUserStyle>
      <div className="modal-form">
        <div className="modal-form-item">
          <span>Name:</span>
          <input
            type="text"
            placeholder="Name..."
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            required
          />
        </div>
        <div className="modal-form-item">
          <span>Email:</span>
          <input
            type="text"
            placeholder="Email..."
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            required
          />
        </div>
        <div className="modal-form-item">
          <span>Password:</span>
          <input
            type="text"
            placeholder="Password..."
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            required
          />
        </div>
        <div className="modal-form-item buttons">
          <button
            onClick={() => {
              dispatch(updateUser(input));
              onClose();
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              dispatch(deleteUser());
              onClose();
            }}
          >
            Delete
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </ModalUpdateUserStyle>
  );
};

export default ModalUpdateUser;
