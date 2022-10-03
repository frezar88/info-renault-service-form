import React from 'react';
import {FormControl, makeStyles, Select} from "@material-ui/core";
import s from './MySelect.module.scss'
import {PRIME_COLOR} from "../../../const";

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
                borderColor: '#b0b0b0',

            }
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
                borderColor: PRIME_COLOR,

            }
        },
        "& .MuiOutlinedInput-root.Mui-focused:hover": {
            "& > fieldset": {
                borderColor: PRIME_COLOR
            }
        },
        "& .MuiSelect-select:focus":{
            background:'#fff'
        }
    },
}));

const MySelect = ({cityDealer,setCityDealer}) => {
    const classes = useStyles();
    return (
        <label className={[s.label, classes['root']].join(' ')}>
            <span>Выберите дилера*</span>
            <FormControl style={{width: '100%'}} variant="outlined">
                <Select

                    native
                    inputProps={{
                        name: 'dealer',
                        id: 'dealer',
                    }}
                    value={cityDealer}
                    onChange={(e)=>setCityDealer(e.target.value)}
                >
                    <option disabled={true} aria-label="None"  value=""/>
                    <option  value={'select'}>Выбрать</option>
                    <option value={'minsk'}>Минская обл.</option>
                    <option value={'brest'}>Брестская обл.</option>
                    <option value={'vitebsk'}>Витебская обл.</option>
                    <option value={'gomel'}>Гомельская обл.</option>
                    <option value={'grodno'}>Гродненская обл.</option>
                    <option value={'mogilev'}>Могилёвская обл.</option>
                </Select>
            </FormControl>
        </label>
    );
};

export default MySelect;