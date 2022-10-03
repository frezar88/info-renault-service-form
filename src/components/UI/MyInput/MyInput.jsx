import React from 'react';
import {makeStyles, TextField} from "@material-ui/core";
import s from './MyInput.module.scss'
import {PRIME_COLOR} from "../../../const";

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
                borderColor: '#b0b0b0'
            }
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
                borderColor: PRIME_COLOR
            }
        },
        "& .MuiOutlinedInput-root.Mui-focused:hover": {
            "& > fieldset": {
                borderColor: PRIME_COLOR
            }
        },
        "& .MuiOutlinedInput-input":{
            padding:'14px'
        }
    },
}));

const MyInput = ({value,setValue, type,children,...props}) => {
    //tyle={{borderBottom:!message?.length ?'solid 1px red':'none',borderRadius:5}}
    const classes = useStyles();
    return (
        <label className={[s.label, classes['root']].join(' ')}>
            <span>{children}*</span>
            <TextField {...props} value={value} onInput={(e)=>setValue(e.target.value)} id="outlined-basic" size={'medium'}  variant="outlined" type={type} required={true}/>
        </label>
    );
};

export default MyInput;