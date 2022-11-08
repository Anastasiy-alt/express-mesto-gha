import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, button }) {

    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    useEffect(() => {
        avatarRef.current.value = '';
    }, [isOpen]);

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} popupAvatar={true} onSubmit={handleSubmit}>
            <fieldset className="popup__input" >
                <label className="popup__label">
                    <input ref={avatarRef} type="url" className="popup__item popup__item_input_link-avatar" name="avatar"
                        placeholder="Ссылка на аватар" required id="avatar" />
                    <span className="popup__input-error avatar-error"></span>
                </label>
                <button className={`button popup__button popup__button_for_avatar`} type="submit">{button || 'Сохранить'}</button>
            </fieldset>
        </PopupWithForm>
    )
};

export default EditAvatarPopup;