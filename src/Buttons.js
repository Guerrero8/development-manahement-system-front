// Buttons.js
import React from 'react';
import './Buttons.css';

function Buttons() {
    return (
        <div className="buttons">
            <button onClick={() => console.log('Создать')}>Добавить</button>
            <button onClick={() => console.log('Удалить')}>Удалить</button>
            <button onClick={() => console.log('Обновить')}>Обновить</button>
            <button className="search-button" onClick={() => console.log('Создать')}>Поиск</button>
        </div>
    );
}

export default Buttons;
