import React from 'react';
import {DealerArr} from "../../const";
import logo from '../../img/logoMini.jpg'
import s from './DealerBlock.module.scss'


const DealerBlock = ({errorDealer,activeRadio, cityDealer}) => {

    return (
        <div className={[s.block,errorDealer?s.error:''].join(' ')}>
            <div className={s.list}>
                {
                    DealerArr
                        ?
                        DealerArr.filter(item=>cityDealer && cityDealer !== 'select'? cityDealer === item.city:item).map
                        (({id, city, name, street, info, phone, map}) =>
                            <div data-id={id} key={id}>
                                <label className={s.lab} htmlFor={id}>
                                    <input required={true} type="radio" name={'dealer_radio'} data-name={street} value={name} id={id}/>
                                    <div className={[s.item, +activeRadio === +id ? s.active : ''].join(' ')}>
                                        <div>
                                            <img src={logo} alt="logo"/>
                                        </div>
                                        <div className={s.info_wrapper}>
                                            <h3 className={s.row1}>{id}. {name} </h3>
                                            <p className={s.row2}>{street}</p>
                                            <p className={s.row3}>{info}</p>
                                            <p className={s.row4}>Tel: {phone}</p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        )
                        : ''
                }
            </div>
        </div>
    );
};

export default DealerBlock;