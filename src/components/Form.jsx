import React from 'react';
import { Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';

const isRequired = 'Обязательное поле';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(isRequired)
    .max(50, 'Не более 50 символов'),
  password: Yup.string()
    .matches(/[0-9a-zA-Z]/, 'Пароль должен содержать латинские буквы')
    .matches(/(?=.*[A-Z])/, 'Парольно должен содержать заглавную букву')
    .matches(/(?=.*[0-9])/, 'Парольно должен содержать одну цифру')
    .min(8, 'Не меньше 8')
    .max(40, 'Не больше 40')
    .required(isRequired),
  repeatedPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required(isRequired),
  email: Yup.string()
    .required(isRequired)
    .email('Неправильный email адрес'),
  website: Yup.string().url('Неправильная ссылка'),
  age: Yup.number()
    .required(isRequired)
    .min(18, 'Не младше 18 лет')
    .max(65, 'Не старше 65'),
  accept: Yup.bool().oneOf([true], isRequired),
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      password: null,
      repeatedPassword: null,
      email: null,
      website: null,
      age: null,
      accept: null,
      successful: null,
    };
  }

  getResponse = async data => {
    // отправка данных на сервер
    const response = await fetch('http://localhost:5000/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data, null, 2),
    });
    const result = await response.json();
    return result;
  };

  errorPointer = (elem, message) => {
    const newState = {
      name: null,
      password: null,
      repeatedPassword: null,
      email: null,
      website: null,
      age: null,
      accept: null,
    };
    newState[elem] = message;
    this.setState({ ...newState });
  };

  render() {
    const {
      name,
      password,
      repeatedPassword,
      email,
      website,
      age,
      accept,
      successful,
    } = this.state;

    return (
      <Formik
        initialValues={{
          name: '',
          password: '',
          repeatedPassword: '',
          email: '',
          website: '',
          skills: [''],
          accept: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          const newValues = values;
          newValues.skills = newValues.skills.filter(el => el !== '');
          this.getResponse(newValues).then(({ errorElem, message }) => {
            if (errorElem) {
              this.errorPointer(errorElem, message);
              setSubmitting(false);
              return;
            }
            setSubmitting(false);
            this.errorPointer('name', null);
            this.setState({ successful: message });
          });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className="form" onSubmit={handleSubmit}>
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
                className={`form__input ${
                  (touched.name && errors.name) || name ? 'has-error' : null
                }`}
              />
            </div>
            {(touched.name && errors.name) || name ? (
              <div className="input__error">{errors.name || name}</div>
            ) : null}
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
                className={`form__input ${
                  (touched.password && errors.password) || password ? 'has-error' : null
                }`}
              />
            </div>
            {(touched.password && errors.password) || password ? (
              <div className="input__error">{errors.password || password}</div>
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
                  (touched.repeatedPassword && errors.repeatedPassword) || repeatedPassword
                    ? 'has-error'
                    : null
                }`}
              />
            </div>
            {(touched.repeatedPassword && errors.repeatedPassword) || repeatedPassword ? (
              <div className="input__error">{errors.repeatedPassword || repeatedPassword}</div>
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
                className={`form__input ${
                  (touched.email && errors.email) || email ? 'has-error' : null
                }`}
              />
            </div>
            {(touched.email && errors.email) || email ? (
              <div className="input__error">{errors.email || email}</div>
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
                className={`form__input ${
                  (touched.website && errors.website) || website ? 'has-error' : null
                }`}
              />
            </div>
            {(touched.website && errors.website) || website ? (
              <div className="input__error">{errors.website || website}</div>
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
                className={`form__input ${(touched.age && errors.age) || age ? 'has-error' : null}`}
              />
            </div>
            {(touched.age && errors.age) || age ? (
              <div className="input__error">{errors.age || age}</div>
            ) : null}
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
            {(touched.accept && errors.accept) || accept ? (
              <div className="input__error">{errors.accept || accept}</div>
            ) : null}
            <div>{successful}</div>
            <Button
              loading={isSubmitting}
              className="form__submit-btn"
              htmlType="submit"
              type="primary"
            >
              Зарегистрироваться
            </Button>
          </form>
        )}
      </Formik>
    );
  }
}

export default Form;
