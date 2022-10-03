import React, {useState} from 'react';
import PhoneInput from "react-phone-input-2";
import ru from 'react-phone-number-input/locale/ru.json'
import s from './MyInputPhone.module.scss'
import 'react-phone-input-2/lib/style.css'

const MyInputPhone = ({phone,errorPhone,setValue,children,...props}) => {


    return (
        <label className={s.label}>
            <span>Телефон*</span>
                <PhoneInput
                    style={{borderBottom:errorPhone?'solid 1px red':'none',borderRadius:5}}
                    labels={ru}
                    country={'by'}
                    value={phone}
                    onChange={phone => setValue(phone)}
                    type={'tel'}
                    inputProps={{'id':'phone','required':true,'name':'phone',}}
                    inputClass={[s.form_control].join(' ')}
                    isValid={(value, country) => {
                        if (value.match(/12345/)) {
                            return 'Invalid value: '+value+', '+country.name;
                        } else if (value.match(/1234/)) {
                            return false;
                        } else {
                            return true;
                        }
                    }}
                />
        </label>

    );

};

export default MyInputPhone;