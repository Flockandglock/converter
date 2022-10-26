import { useState } from 'react';
import Converter from './components/converter/Converter';

import './App.css';
import Current from './components/current/Current';

function App() {

    const [convertPage, setConvertPage] = useState(true);
    const [currentPage, setCurrentPage] = useState(false);

    const convertActive = () => {
        setConvertPage(true);
        setCurrentPage(false);
    };

    const currentActive = () => {
        setConvertPage(false);
        setCurrentPage(true);
    };


    return (
    <div className='container'>
        <h1>Конвертер валют</h1>
        <div className='menu'>
            <p className={convertPage ? 'menu-convert active' : 'menu-convert'} onClick={convertActive}>Конвертация</p>
            <p className={currentPage ? 'menu-current active' : 'menu-current'} onClick={currentActive}>Текущий курс валют</p>
        </div>
        {
            convertPage 
            ? 
            <Converter/>
            :
            <Current/>
        }
        
        
    </div>
    );
}

export default App;
