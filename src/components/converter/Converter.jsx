import React, {  useState, useEffect } from 'react';
import { useHttp } from '../../API/useHttp';

import './converter.css';

const Converter = () => {

    const [valuta, setValute] = useState(0);
    const [result, setResult] = useState('0 USD');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {request} = useHttp();
    
   
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
             getValuta();
        }
        });



    const getValuta = () => {
        setLoading(true);

        request(`https://api.apilayer.com/exchangerates_data/convert?to=USD&from=RUB&amount=${valuta}`)
        .then(data => {
            const floorNum = data.result.toFixed(2) + ' USD';
            setResult(floorNum);
            setLoading(false);
            console.log(data);
        })
        .catch(e => {
            setError(true)
            setResult('упс, произошла ошибочка');
            console.log(e);
        })
    };

    

    

    return (
        <div className='wrapper'>
            <div><span>{loading ? 'получение данных...' : result}</span></div>

            <input type="number" 
            placeholder='введите количество денежных едениц'
            value={valuta}
            onChange={e => setValute(e.target.value)} />

            <button onClick={getValuta} >Конвертировать</button>
        </div>
    );
};

export default Converter;


// onKeyDown={e => getValute(e.key)}