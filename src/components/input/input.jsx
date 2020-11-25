import React, { useState } from 'react';
import InputStyle from './input-style';
import { ReactSVG } from 'react-svg';
import classnames from 'classnames';

const Input = (props) => {
  const {
    search,
    onChange,
    placeholder,
    leftIconFunction,
    rightIconFunction,
    leftIcon,
    rightIcon,
    home,
  } = props;
  const [focus, setFocus] = useState(false);

  return (
    <InputStyle className={classnames({ focus: !!focus, home: !!home })}>
      {leftIcon && (
        <div
          className="input-icon left"
          onClick={leftIconFunction && leftIconFunction}
        >
          <ReactSVG src={leftIcon} />
        </div>
      )}
      <input
        className="input-body"
        type="text"
        placeholder={placeholder ? placeholder : ''}
        value={search}
        onChange={onChange ? (e) => onChange(e.target.value) : null}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {rightIcon && (
        <div
          className="input-icon right"
          onClick={rightIconFunction && rightIconFunction}
        >
          <ReactSVG src={rightIcon} />
        </div>
      )}
    </InputStyle>
  );
};

export default Input;
