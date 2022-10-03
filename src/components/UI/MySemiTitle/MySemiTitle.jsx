import React from 'react';
import s from './MySemiTitle.module.scss'

const MySemiTitle = ({children,...props}) => {
    return (
        <h5 className={s.h5} {...props}>{children}</h5>
    );
};

export default MySemiTitle;