const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Yup = require('yup');

const isRequired = 'Обязательное поле';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(isRequired)
    .max(50, 'Не более 50 символов'),
  password: Yup.string()
    .matches(
      /[0-9a-zA-Z]/,
      'Пароль должен содержать латинские буквы'
		)
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

const app = express();
const port = 5000;

const registeredUsers = new Map();

const addUser = (user) => {
	const correctlyUser = user;
	delete correctlyUser.accept;
	registeredUsers.set(user.email, correctlyUser);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/sign-up', (req, res) => {
	const body = req.body;
	let checkValid = false;
	validationSchema.isValid(body).then(valid => { checkValid = valid });
	console.log(checkValid);
	if (!checkValid) {
		validationSchema.validate(body).catch((err) => {
			res.send(JSON.stringify({ err: err.message, elem: err.params.path }, null, 2));
			res.status(400).end();
			console.log(err);
			return;
		});
	}
	// Ответ сервера
	if (registeredUsers.has(body.email)) {
		res.status(401).send('Пользователь с таким email уже существует');
		return
	} else {
		addUser(body);
		res.status(200).send('Вы успешно зарегистрировались');
		return
	}
});

app.listen(port, () => console.log('worked??????????'));
