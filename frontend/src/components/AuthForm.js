import { Link } from 'react-router-dom';

function AuthForm({name, className, buttonName, register, userData, handleSubmit, handleChange }) {
    return (
        <div className={`sign ${className}`}>
            <p className="sign__welcome">
                {name}
            </p>
            <form className="sign__form" onSubmit={handleSubmit}>
                <input className="sign__input popup__item" id="email" name="email" type="email" placeholder="Email" value={userData.email || ''} onChange={handleChange} required />
                <input className="sign__input popup__item" id="password" name="password" type="password" placeholder="Пароль" value={userData.password || ''} onChange={handleChange} required />
                <div className="sign__button-container">
                    <button type="submit" className="button popup__button sign__link" onSubmit={register && handleSubmit}>{buttonName}</button>
                </div>
            </form>
            {register && (<div className="sign__signin">
                <p className="sign__signin-text">Уже зарегистрированы?</p>&nbsp;
                <Link to="/sign-in" className="sign__login-link">Войти</Link>
            </div>)}
            
        </div>
    )
};

export default AuthForm;