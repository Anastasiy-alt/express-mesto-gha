import React from 'react';
import AuthForm from './AuthForm';
import '../index.css';

function Register({ onRegister }) {
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
    const { email, password } = userData;
    onRegister(email, password)
  }

  return (
<AuthForm
      handleSubmit={handleSubmit}
      userData={userData}
      handleChange={handleChange}
      register={true}
      className="register"
      name="Регистрация"
      buttonName="Зарегистрироваться" />
  );
}

export default Register;