import React, {useState} from 'react';
import s from "./MyForm.module.scss";
import MySemiTitle from "../UI/MySemiTitle/MySemiTitle";
import MyTextArea from "../UI/MyTextArea/MyTextArea";
import MyInput from "../UI/MyInput/MyInput";
import MyInputPhone from "../UI/MyInputPhone/MyInputPhone";
import MyButton from "../UI/MyButton/MyButton";
import MySelect from "../UI/MySelect/MySelect";
import DealerBlock from "../DealerBlock/DealerBlock";
import {axiosSendToBot, axiosSendToMailer} from "../../http/requests";
import {DealerArr} from "../../const";


const MyForm = ({cityDealer, setCityDealer,setPopUpState,setSpinnerState}) => {
    const [activeRadio, setActiveRadio] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [vin, setVin] = useState('')
    const [message, setMessage] = useState(' ')
    const [errorPhone, setErrorPhone] = useState(false)
    const [errorDealer, setErrorDealer] = useState(false)



    let selectedUserData = {
        theme: null,
        name: null,
        lastName: null,
        phone: null,
        city: null,
        email: null,
        vin: null,
        message: null,
        dealer: null
    }

    const clickButton = () => {
        if (!activeRadio) {
            setErrorDealer(true)
            return
        }
    }

    const submit = (e) => {
        console.log(activeRadio)
        e.preventDefault()
        selectedUserData.theme = 'record-to-service-test'
        selectedUserData.name = name
        selectedUserData.lastName = lastName
        selectedUserData.phone = phone
        selectedUserData.city = city
        selectedUserData.email = email
        selectedUserData.vin = vin
        selectedUserData.message = message
        selectedUserData.dealer = DealerArr[activeRadio-1]['name'] + ' ' + DealerArr[activeRadio-1]['street']
        if (phone.length >= 11){
            if (phone.slice(0, 3).indexOf('375') !== -1) {

                setSpinnerState(true)
                axiosSendToMailer(JSON.stringify(selectedUserData)).then((r) => {
                    setSpinnerState(false)
                    setPopUpState(true)
                    setActiveRadio('')
                    setName('')
                    setLastName('')
                    setPhone('+375')
                    setCity('')
                    setEmail('')
                    setVin('')
                    setMessage(' ')
                    setTimeout(()=>{
                        setPopUpState(false)
                    },3000)
                })
            } else {
                setSpinnerState(true)
                axiosSendToMailer(JSON.stringify(selectedUserData)).then((r) => {
                    setSpinnerState(false)
                    setPopUpState(true)
                    setActiveRadio('')
                    setName('')
                    setLastName('')
                    setPhone('+375')
                    setCity('')
                    setEmail('')
                    setVin('')
                    setMessage(' ')
                    setTimeout(()=>{
                        setPopUpState(false)
                    },3000)
                })
            }
        }else{
            setErrorPhone(true)
        }

    }
    const change = (e) => {
        if (e.target.attributes['type']?.value === 'radio') {
            setActiveRadio(e.target['attributes']['id']?.value)
        }

    }

    return (
        <form onSubmit={submit}  onChange={change} className={s.form}>
            <MySemiTitle>Ваш запрос</MySemiTitle>
            <MyTextArea message={message} setMessage={setMessage}>Сообщение*</MyTextArea>
            <MySemiTitle>Контактные данные</MySemiTitle>
            <div className={s.form_wrapper}>
                <MyInput value={name} setValue={setName} type={'text'}>Имя</MyInput>
                <MyInput value={lastName} setValue={setLastName} type={'text'}>Фамилия</MyInput>
                <MyInputPhone errorPhone={errorPhone} phone={phone} setValue={setPhone}/>
                <MyInput value={city} setValue={setCity} type={'text'}>Город / населенный пункт</MyInput>
                <MyInput value={email} setValue={setEmail} type={'email'}>Электронная почта</MyInput>
                <MyInput value={vin} setValue={setVin} type={'text'}>VIN-номер вашего авто</MyInput>
                <MySelect cityDealer={cityDealer} setCityDealer={setCityDealer}/>
            </div>
            <DealerBlock errorDealer={errorDealer} activeRadio={activeRadio} cityDealer={cityDealer}/>
            <MyButton style={{
                opacity: name?.length && activeRadio?.length && lastName?.length && phone?.length && email?.length && vin?.length ? '1' : '0.5',
                pointerEvents: name?.length && activeRadio?.length && lastName?.length && phone?.length && email?.length && vin?.length ? 'unset' : 'none'
            }} onClick={clickButton}>Отправить запрос</MyButton>
        </form>
    );
};

export default MyForm;