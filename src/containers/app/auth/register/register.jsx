import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { RegisterStyle } from './register-style';
import { BodyDefaultText } from '../../../../typography/typography';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../../../store/actionCreators';
import { toast } from 'react-toastify';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    repeatedPassword: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.userReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.password !== input.repeatedPassword)
      return toast.error(`Password fields don't match`);
    dispatch(register(input));
  };

  useEffect(() => {
    if (user.token) history.push('/login');
  }, [history, user.token]);

  return (
    <RegisterStyle>
      <form onSubmit={handleSubmit}>
        <label>
          <BodyDefaultText>Name:</BodyDefaultText>
          <input
            type="text"
            placeholder="Name"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </label>
        <label>
          <BodyDefaultText>Email:</BodyDefaultText>
          <input
            type="text"
            placeholder="Email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </label>
        <label>
          <BodyDefaultText>Password:</BodyDefaultText>
          <input
            type="password"
            placeholder="Password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </label>
        <label>
          <BodyDefaultText>Repeat password:</BodyDefaultText>
          <input
            type="password"
            placeholder="Password"
            value={input.repeatedPassword}
            onChange={(e) =>
              setInput({ ...input, repeatedPassword: e.target.value })
            }
          />
        </label>
        <input className="button" type="submit" value="Register" />
        <BodyDefaultText className="link">
          <Link to="/login">Are you already registered? Log in.</Link>
        </BodyDefaultText>
      </form>
    </RegisterStyle>
  );
};

export default Register;
