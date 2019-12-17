import React from 'react';
import { Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

const Form = ({ skills, incSkills }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      repeatedPassword: '',
      email: '',
      website: '',
      age: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="form__row">
        <span htmlFor="name" className="form__label">
          Имя:
        </span>
        <Input
          placeholder="Введите имя"
          onChange={formik.handleChange}
          id="name"
          value={formik.values.name}
          className="form__input"
        />
      </div>
      <div className="form__row">
        <span htmlFor="password" className="form__label">
          Пароль:
        </span>
        <Input
          placeholder="Введите пароль"
          onChange={formik.handleChange}
          id="password"
          value={formik.values.password}
          className="form__input"
        />
      </div>
      <div className="form__row">
        <span htmlFor="repeatedPassword" className="form__label">
          Еще раз:
        </span>
        <Input
          placeholder="Повторите пароль"
          onChange={formik.handleChange}
          id="repeatedPassword"
          value={formik.values.repeatedPassword}
          className="form__input"
        />
      </div>
      <div className="form__row">
        <span htmlFor="email" className="form__label">
          Email:
        </span>
        <Input
          id="email"
          placeholder="Введите email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="form__input"
        />
      </div>
      <div className="form__row">
        <span htmlFor="website" className="form__label">
          Website:
        </span>
        <Input
          placeholder="Введите website"
          onChange={formik.handleChange}
          id="website"
          value={formik.values.website}
          className="form__input"
        />
      </div>
      <div className="form__row">
        <span htmlFor="age" className="form__label">
          Возраст:
        </span>
        <Input
          placeholder="Укажите возраст"
          onChange={formik.handleChange}
          id="age"
          value={formik.values.age}
          className="form__input"
        />
      </div>
      <div className="form__row">
        <span htmlFor="age" className="form__label label__skills">
          Навыки:
        </span>
        <div className="form__skills">
          {skills.map((el, i) => (
            <Input
              placeholder="Укажите навык"
              onChange={formik.handleChange}
              id={`skills${i}`}
              value={formik.values[`skills${i}`]}
              className="form__input"
            />
          ))}
          <Button htmlType="button" onClick={incSkills} type="dashed">
            Добавить навык
          </Button>
        </div>
      </div>
      <Checkbox className="form__accept">Я принимаю условия</Checkbox>
      <Button className="form__submit-btn" htmlType="submit" type="primary">
        Зарегистрироваться
      </Button>
    </form>
  );
};

Form.defaultProps = {
  skills: [0],
  incSkills: null,
};

Form.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.array),
  incSkills: PropTypes.func,
};

export default Form;
