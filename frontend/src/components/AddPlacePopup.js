import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, button, onAddCard }) {


    const [title, setTitle] = useState([]);
    const [link, setLink] = useState([]);

    function handleTitleChange(title) {
        setTitle(title.target.value);
    }

    function handleLinkChange(link) {
        setLink(link.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddCard({
            name: title,
            link: link,
        });
    }

    useEffect(() => {
        setTitle("");
        setLink("");
    }, [isOpen]);

    return (
        <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <fieldset className="popup__input">
                <label className="popup__label">
                    <input
                        onChange={handleTitleChange}
                        value={title || ''}
                        type="text"
                        className="popup__item popup__item_input_name"
                        name="name"
                        placeholder="Название"
                        maxLength="30"
                        minLength="2"
                        required
                        id="title" />
                    <span className="popup__input-error title-error"></span>
                </label>
                <label className="popup__label">
                    <input
                        onChange={handleLinkChange}
                        value={link || ''}
                        type="url"
                        className="popup__item popup__item_input_info"
                        name="link"
                        placeholder="Ссылка на картинку"
                        required
                        id="link" />
                    <span className="popup__input-error link-error"></span>
                </label>
                <button className={`button popup__button popup__button_for_add`} type="submit">{button || 'Сохранить'}</button>
            </fieldset>
        </PopupWithForm>
    )
}

export default AddPlacePopup;