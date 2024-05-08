import React, { useState, useEffect } from 'react';
import './Buttons.css';
import axios from 'axios'; // Подключаем библиотеку axios
import ModalWindow from './windows/create.windows/ModalWindow';

function Buttons({ updateColumns }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Функция для открытия всплывающего окна
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Функция для закрытия всплывающего окна
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Функция для обновления данных
    const handleUpdate = async () => {
        try {
            // Выполняем GET запросы
            const clientsResponse = await axios.get('http://localhost:8080/api/getAllClients');
            const ordersResponse = await axios.get('http://localhost:8080/api/getAllOrders');

            // Обновляем колонки с данными
            updateColumns(clientsResponse.data, ordersResponse.data);
        } catch (error) {
            console.error('Ошибка при обновлении данных:', error);
        }
    };

    // Функция для автоматического обновления данных
    const autoUpdate = () => {
        handleUpdate(); // Вызываем функцию обновления данных
        setInterval(handleUpdate, 10000); // Запускаем обновление каждые 10 секунд
    };

    useEffect(() => {
        autoUpdate(); // Вызываем автоматическое обновление данных при загрузке страницы
    }, []); // Пустой массив зависимостей, чтобы запустить useEffect только один раз

    return (
        <div className="buttons">
            <button onClick={openModal}>Добавить</button>
            {/* Условный рендеринг всплывающего окна */}
            {isModalOpen && <ModalWindow onClose={closeModal} />}
            {/* Добавляем обработчик для кнопки "Обновить" */}
            <button onClick={handleUpdate}>Обновить</button>
            <button className="search-button" onClick={() => console.log('Создать')}>Поиск</button>
        </div>
    );
}

export default Buttons;
