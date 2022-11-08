import { CurrentUserContext } from '../context/CurrentUserContext';
import { useContext } from 'react';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardDeleteButtonClassName = (
        `${isOwn ? 'element__delete button' : 'element__delete_hidden'}`
    );
    const cardLikeButtonClassName = `button element__like ${isLiked && 'element__like_click'}`;
    const handleLikeClick = () => {
        onCardLike(card);
    };
    const handleDeleteClick = () => {
        onCardDelete(card._id);
    };

    const handleClick = () => {
        onCardClick(card);
      };

    return (
        <article className="element">
            <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
            <img className="element__img" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="element__title">
                <h2 className="element__name">{card.name}</h2>
                <div className="element__like-container">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;