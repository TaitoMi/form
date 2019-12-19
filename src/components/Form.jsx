import React from 'react';
import { Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';
// import PropTypes from 'prop-types';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Обязательное поле')
    .max(50, 'Не более 50 символов'),
  password: Yup.string()
    .matches(
      /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]/,
      'Пароль должен содержать латинские буквы, одну заглавную и цифру'
    )
    .min(8, 'Не меньше 8')
    .max(40, 'Не больше 40')
    .required(),
  repeatedPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Обязательное поле'),
  email: Yup.string()
    .required('Обязательное поле')
    .email('Неправильный email адрес'),
  website: Yup.string().url('Неправильная ссылка'),
  age: Yup.number()
    .required('Обязательное поле')
    .min(18, 'Не младше 18 лет')
    .max(65, 'Не старше 65'),
  accept: Yup.bool('asdasd').required('Обязательное поле'),
});

const Form = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
        repeatedPassword: '',
        email: '',
        website: '',
        skills: [''],
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log('work');
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form className="form" onSubmit={handleSubmit}>
          <>{JSON.stringify(values, null, 2)}</>
          <div className="form__row">
            <span htmlFor="name" className="form__label">
              Имя<span className="form__required">*</span>:
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
              Пароль<span className="form__required">*</span>:
            </span>
            <Input.Password
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
              Еще раз<span className="form__required">*</span>:
            </span>
            <Input.Password
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
              Email<span className="form__required">*</span>:
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
              Возраст<span className="form__required">*</span>:
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
          <FieldArray
            name="skills"
            render={arrayHelpers => (
              <div>
                {values.skills.map((skill, index) => {
                  const newIndex = `skills-${index}`;
                  return (
                    <div key={newIndex} className="form__row">
                      <Input
                        placeholder="Введите навык"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.skills[index]}
                        id={`skills${index}`}
                        name={`skills.${index}`}
                      />
                    </div>
                  );
                })}
                <Button type="button" onClick={() => arrayHelpers.push('')}>
                  Добавить навык
                </Button>
              </div>
            )}
          />
          <Checkbox
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.accept}
            name="accept"
            id="accept"
            className="form__accept"
          >
            Я принимаю условия<span className="form__required">*</span>
          </Checkbox>
          {touched.accept && errors.accept ? (
            <div className="input__error">{errors.accept}</div>
          ) : null}
          <Button className="form__submit-btn" htmlType="submit" type="primary">
            Зарегистрироваться
          </Button>
        </form>
      )}
    </Formik>
  );
};

// Form.defaultProps = {
//   skills: [0],
// };

// Form.propTypes = {
//   skills: PropTypes.arrayOf(PropTypes.number),
// };

export default Form;
