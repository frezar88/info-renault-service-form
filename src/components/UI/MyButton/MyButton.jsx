import React from 'react';
import s from "./MyButton.module.scss";

const MyButton = ({children,...props}) => {
    return (
        <button {...props} className={s.button} type={'submit'}>{children}</button>
    );
};

export default MyButton;