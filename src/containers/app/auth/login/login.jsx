import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LoginStyle } from './login-style';
import { BodyDefaultText } from '../../../../typography/typography';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../../../store/actionCreators';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.userReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logIn(input));
  };

  useEffect(() => {
    if (user.token) history.push('/profile');
  }, [history, user.token]);

  return (
    <LoginStyle>
      <form onSubmit={handleSubmit}>
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
        <input className="button" type="submit" value="Log in" />
        <BodyDefaultText className="link">
          <Link to="/register">You don't have an account yet? Sign up</Link>
        </BodyDefaultText>
      </form>
    </LoginStyle>
  );
};

export default Login;
