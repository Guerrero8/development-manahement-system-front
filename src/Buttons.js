import React, { useState } from 'react';
import './Buttons.css';
import CreateModalWindow from './CreateModalWindow'; // Подключаем компонент с всплывающим окном

function Buttons() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Функция для открытия всплывающего окна
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Функция для закрытия всплывающего окна
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="buttons">
            <button onClick={openModal}>Добавить</button>
            {/* Условный рендеринг всплывающего окна */}
            {isModalOpen && <CreateModalWindow onClose={closeModal} />}
            <button onClick={() => console.log('Удалить')}>Удалить</button>
            <button onClick={() => console.log('Обновить')}>Обновить</button>
            <button className="search-button" onClick={() => console.log('Создать')}>Поиск</button>
        </div>
    );
}

export default Buttons;
