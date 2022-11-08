import PopupWithForm from './PopupWithForm';
import React from 'react';

function DeleteCardPopup({ onClose, isOpen, popupDelete, name, title, button, cardId, onCardDelete }) {

    const handleDeleteClick = () => {
        onCardDelete(cardId);
    };

    function handleSubmit(e) {
        e.preventDefault();
        handleDeleteClick();
        onClose();
    }

    return (<PopupWithForm
        name={name}
        onClose={onClose}
        title={title}
        buttonText={button}
        onSubmit={handleSubmit}
        isOpen={isOpen}
        popupDelete={popupDelete}
    >
        <fieldset className="popup__input">
            <button className={`button popup__button popup__button_for_${name}`} type="submit">{button || 'Сохранить'}</button>

        </fieldset>
    </PopupWithForm>)
}

export default DeleteCardPopup;