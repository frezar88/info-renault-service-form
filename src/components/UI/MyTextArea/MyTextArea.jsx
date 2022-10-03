import React from 'react';
import {makeStyles, TextField} from "@material-ui/core";
import s from './MyTextArea.module.scss'
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
        }
    },
}));


const MyTextArea = ({children,message,setMessage, ...props}) => {
    const classes = useStyles();
    return (
        <label className={[s.label, classes['root']].join(' ')}>
            <span className={s.label__text}>{children}</span>
            <TextField
                {...props}
                required={true}
                className={s.text_area}
                id="text-area"
                multiline
                minRows={10}
                variant="outlined"
                value={message}
                onInput={(e)=>setMessage(e.target['value'])}
                style={{borderBottom:!message?.length ?'solid 1px red':'none',borderRadius:5}}
            />
        </label>

    );
};

export default MyTextArea;