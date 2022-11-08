import React from 'react';
import AuthForm from './AuthForm';
import '../index.css';

function Login({ onLogin }) {

  const [userData, setUserData] = React.useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((evt) => ({
      ...evt,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userData
    onLogin(email, password)

  }

  return (
<AuthForm
      handleSubmit={handleSubmit}
      userData={userData}
      handleChange={handleChange}
      className="login"
      name="Вход"
      buttonName="Войти" />
  );
}

export default Login;