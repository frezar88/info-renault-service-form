import React from 'react';
import {CircularProgress} from "@material-ui/core";
import s from './MySpinner.module.scss'
import {PRIME_COLOR} from "../../../const";

const MySpinner = () => {
    return (
        <div className={s.spinner}>
            <CircularProgress size={'50px'} style={{color:PRIME_COLOR}} />
        </div>

    );
};

export default MySpinner;