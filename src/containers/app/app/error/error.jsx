import React from 'react';
import { Link } from 'react-router-dom';
import { Heading1Text } from '../../../../typography/typography';
import ErrorStyle from './error-style';

const Error = () => {
  return (
    <ErrorStyle>
      <div className="text">
        <Heading1Text>Error 404</Heading1Text>
      </div>
      <Link to="/">Go Back to Home</Link>
    </ErrorStyle>
  );
};

export default Error;
