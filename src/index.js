import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Подключаем компонент App

ReactDOM.render(
    <React.StrictMode>
        <App /> {/* Рендерим компонент App */}
    </React.StrictMode>,
    document.getElementById('root') // Рендерим в HTML-элемент с id 'root'
);
