import { Fragment, useContext } from 'react';
import Card from "./Card";
import { CurrentUserContext } from '../context/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onDeleteClick, cards, onCardLike }) {

    const currentUser = useContext(CurrentUserContext);

    return (
        <Fragment>
            <section className="profile">
                <div className="profile__avatar-cover">
                    <button className="profile__cover-hover" type="button" onClick={onEditAvatar}></button>
                    <img alt="Фото профиля." src={currentUser.avatar} className="profile__avatar" />
                </div>
                <div className="profile__info-block">
                    <div className="profile__title">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__info">{currentUser.about}</p>
                </div>
                <button className="profile__add-button button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card card={card}
                        key={card._id}
                        onCardClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onDeleteClick} />
                ))}
            </section>
        </Fragment>
    )
};

export default Main;