import React from 'react';
import { Input } from 'antd';

import PropTypes from 'prop-types';

const Field = ({ label, change, idName, blur, value, touched, errors, elem }) => {
  return (
    <>
      <div className="form__row">
        <span htmlFor="name" className="form__label">
          {label}:
        </span>
        <Input.Password
          placeholder={label}
          onChange={change}
          id={idName}
          name={idName}
          onBlur={blur}
          value={value}
          className={`form__input ${(touched && errors) || elem ? 'has-error' : null}`}
        />
      </div>
      {(touched && errors) || elem ? <div className="input__error">{errors || elem}</div> : null}
    </>
  );
};

Field.defaultProps = {
  label: '',
  idName: '',
  value: '',
  change: null,
  blur: null,
  touched: null,
  errors: '',
  elem: '',
};

Field.propTypes = {
  label: PropTypes.string,
  idName: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func,
  blur: PropTypes.func,
  touched: PropTypes.bool,
  errors: PropTypes.string,
  elem: PropTypes.string,
};

export default Field;
