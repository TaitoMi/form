import React from 'react';
import { Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';
import Field from './Field';
import FieldPassword from './FieldPassword';

const isRequired = 'Обязательное поле';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(isRequired)
    .max(50, 'Не более 50 символов'),
  password: Yup.string()
    .matches(/[0-9a-zA-Z]/, 'Пароль должен содержать латинские буквы')
    .matches(/(?=.*[A-Z])/, 'Парольно должен содержать заглавную букву')
    .matches(/(?=.*[0-9])/, 'Парольно должен содержать одну цифру')
    .min(8, 'Не меньше 8 символов')
    .max(40, 'Не больше 40 символов')
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
            <Field
              label="Имя"
              change={handleChange}
              blur={handleBlur}
              idName="name"
              value={values.name}
              touched={touched.name}
              errors={errors.name}
              elem={name}
            />
            <FieldPassword
              label="Введите Пароль"
              change={handleChange}
              blur={handleBlur}
              idName="password"
              value={values.password}
              touched={touched.password}
              errors={errors.password}
              elem={password}
            />
            <FieldPassword
              label="Повторите пароль"
              change={handleChange}
              blur={handleBlur}
              idName="repeatedPassword"
              value={values.repeatedPassword}
              touched={touched.repeatedPassword}
              errors={errors.repeatedPassword}
              elem={repeatedPassword}
            />
            <Field
              label="Введите email"
              change={handleChange}
              blur={handleBlur}
              idName="email"
              value={values.email}
              touched={touched.email}
              errors={errors.email}
              elem={email}
            />
            <Field
              label="Введите website"
              change={handleChange}
              blur={handleBlur}
              idName="website"
              value={values.website}
              touched={touched.website}
              errors={errors.website}
              elem={website}
            />
            <Field
              label="Введите возраст"
              change={handleChange}
              blur={handleBlur}
              idName="age"
              value={values.age}
              touched={touched.age}
              errors={errors.age}
              elem={age}
            />
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
