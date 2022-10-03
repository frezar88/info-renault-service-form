import React, {useState} from 'react';
import s from './App.module.scss'
import MyTitleBlock from "./components/MyTitleBlock/MyTitleBlock";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import MyForm from "./components/MyForm/MyForm";
import PopUp from "./components/PopUp/PopUp";
import MySpinner from "./components/UI/MySpinner/MySpinner";


const App = () => {
    const [cityDealer, setCityDealer] = useState()
    const [popUpState, setPopUpState] = useState(false)
    const [spinnerState, setSpinnerState] = useState(false)

    return (
        <div className={s.App}>
            {
                spinnerState
                    ? <MySpinner/>
                    : ''
            }

            {
                popUpState
                    ? <PopUp/>
                    : ''
            }

            <MyTitleBlock/>
            <div className={s.page}>
                <MyForm
                    setSpinnerState={setSpinnerState}
                    setPopUpState={setPopUpState}
                    cityDealer={cityDealer}
                    setCityDealer={setCityDealer}
                />
                <PrivacyPolicy/>
            </div>
        </div>

    );
};

export default App;