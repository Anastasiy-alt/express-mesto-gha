function ImagePopup({ onClose, card }) {
    return (
        <div className={`popup popup_for_img  ${card._id && "popup_opened"}`}>
            <div className="popup__container popup__container_for_img">
                <button className="button popup__close popup__close_for_img" type="button" onClick={onClose}></button>
                <img className="popup__img" src={card.link} alt={card.name} />
                <p className="popup__info-img">{card.name}</p>
            </div>
        </div>)
}

export default ImagePopup;