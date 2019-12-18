import React from 'react';
import { Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Обязательное поле')
    .max(50, 'Не более 50 символов'),
  age: Yup.number()
    .required('Обязательное поле')
    .min(18, 'Не младше 18 лет')
    .max(65, 'Не старше 65'),
  email: Yup.string()
    .required('Обязательное поле')
    .email('Неправильный email адрес'),
  website: Yup.string().url('Неправильная ссылка'),
  accept: Yup.bool().required('Обязательное поле'),
});

const Form = ({ skills }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
        repeatedPassword: '',
        email: '',
        website: '',
      }}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form className="form" onSubmit={handleSubmit}>
          <>{skills}</>
          <div className="form__row">
            <span htmlFor="name" className="form__label">
              Имя:
            </span>
            <Input
              placeholder="Введите имя"
              onChange={handleChange}
              id="name"
              name="name"
              onBlur={handleBlur}
              value={values.name}
              className={`form__input ${touched.name && errors.name ? 'has-error' : null}`}
            />
          </div>
          {touched.name && errors.name ? <div className="input__error">{errors.name}</div> : null}
          <div className="form__row">
            <span htmlFor="password" className="form__label">
              Пароль:
            </span>
            <Input
              placeholder="Введите пароль"
              onChange={handleChange}
              id="password"
              name="password"
              onBlur={handleBlur}
              value={values.password}
              className={`form__input ${touched.password && errors.password ? 'has-error' : null}`}
            />
          </div>
          {touched.password && errors.password ? (
            <div className="input__error">{errors.password}</div>
          ) : null}
          <div className="form__row">
            <span htmlFor="repeatedPassword" className="form__label">
              Еще раз:
            </span>
            <Input
              placeholder="Повторите пароль"
              onChange={handleChange}
              id="repeatedPassword"
              name="repeatedPassword"
              onBlur={handleBlur}
              value={values.repeatedPassword}
              className={`form__input ${
                touched.repeatedPassword && errors.repeatedPassword ? 'has-error' : null
              }`}
            />
          </div>
          {touched.repeatedPassword && errors.repeatedPassword ? (
            <div className="input__error">{errors.repeatedPassword}</div>
          ) : null}
          <div className="form__row">
            <span htmlFor="email" className="form__label">
              Email:
            </span>
            <Input
              id="email"
              name="email"
              placeholder="Введите email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={`form__input ${touched.email && errors.email ? 'has-error' : null}`}
            />
          </div>
          {touched.email && errors.email ? (
            <div className="input__error">{errors.email}</div>
          ) : null}
          <div className="form__row">
            <span htmlFor="website" className="form__label">
              Website:
            </span>
            <Input
              placeholder="Введите website"
              onChange={handleChange}
              id="website"
              name="website"
              onBlur={handleBlur}
              value={values.website}
              className={`form__input ${touched.website && errors.website ? 'has-error' : null}`}
            />
          </div>
          {touched.website && errors.website ? (
            <div className="input__error">{errors.website}</div>
          ) : null}
          <div className="form__row">
            <span htmlFor="age" className="form__label">
              Возраст:
            </span>
            <Input
              placeholder="Укажите возраст"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              id="age"
              name="age"
              className={`form__input ${touched.age && errors.age ? 'has-error' : null}`}
            />
          </div>
          {touched.age && errors.age ? <div className="input__error">{errors.age}</div> : null}
          <div className="form__row">
            <span htmlFor="age" className="form__label label__skills">
              Навыки:
            </span>
            <div className="form__skills">
              <Input
                placeholder="Укажите навык"
                onChange={handleChange}
                id="skills"
                value={values.skills}
                className="form__input"
              />
              <Button htmlType="button" type="dashed">
                Добавить навык
              </Button>
            </div>
          </div>
          <Checkbox
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.accept}
            name="accept"
            id="accept"
            className="form__accept"
          >
            Я принимаю условия
          </Checkbox>
          <Button className="form__submit-btn" htmlType="submit" type="primary">
            Зарегистрироваться
          </Button>
        </form>
      )}
    </Formik>
  );
};

Form.defaultProps = {
  skills: [0],
};

Form.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.number),
};

export default Form;
