import React from 'react';
import s from './MyTitleBlock.module.scss'

const MyTitleBlock = () => {
    return (
        <div className={s.title}>
            <h4>Контакт онлайн</h4>
            <h1>СЕРВИСНЫЕ УСЛУГИ И ЗАПЧАСТИ</h1>
        </div>
    );
};

export default MyTitleBlock;