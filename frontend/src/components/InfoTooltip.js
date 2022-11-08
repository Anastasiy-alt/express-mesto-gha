import yes from '../images/yes.svg';
import no from '../images/no.svg';

function InfoTooltip({ isOpen, onClose, loggedIn }) {

    return (
        <div className={`popup popup_for_tooltip ${isOpen && "popup_opened"}`}>
            <div className="popup__container popup__container_for_tooltip">
                <button className="button popup__close popup__close_for_tooltip" type="button" onClick={onClose}></button>
                <img src={loggedIn ? yes : no} alt={loggedIn ? "Галочка." : "Крестик."} className="popup__icon" />
                <h3 className="popup__heading popup__heading_for_tooltip">{loggedIn ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз"}</h3>
            </div>
        </div>
    )
}

export default InfoTooltip;