import React, {useState, useEffect} from 'react';
import { useHttp } from '../../API/useHttp';



const Current = () => {

    const [currentValuta, setCurrentValuta] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {request} = useHttp();


    useEffect(() => {
        showCurrentVal();
    }, []);

    const showCurrentVal = () => {
        setLoading(true)
        const userLang = navigator.language; 
        console.log(userLang);

        if (userLang === 'ru-RU') {
            request('https://api.apilayer.com/exchangerates_data/latest?symbols=rub&base=usd')
            .then(data => {
                const rub = data.rates.RUB.toFixed(2);
                
                setCurrentValuta(rub);
                console.log(data);
            })
            .catch(e => {
                setError(true);
                console.log(e);
            })
        } else {
            request('https://api.apilayer.com/exchangerates_data/latest?symbols=usd&base=rub')
            .then(data => {
                const usd = data.rates.USD.toFixed(2);
                
                setCurrentValuta(usd);
                console.log(data);
            })
            .catch(e => {
                setError(true);
                console.log(e);
            })
        }  
    };
   


    return (
        <div>
            <h2>Текущий курс валют</h2>
            <p>1 USD = {currentValuta}RUB</p>
        </div>
    );
};

export default Current;