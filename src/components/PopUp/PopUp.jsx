import React from 'react';
import s from './PopUp.module.scss'

const PopUp = () => {
    return (
        <div className={s.popUp}>
            <div className={s.popUp__container}>
                <h2>Сообщение отправлено</h2>
            </div>
        </div>
    );
};

export default PopUp;