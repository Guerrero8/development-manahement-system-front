import React, { useState } from 'react';
import './Columns.css';
import axios from 'axios'; // Подключаем библиотеку axios

function Columns({ clients, orders }) {
    // Состояние для отслеживания режима редактирования
    const [editMode, setEditMode] = useState(false);

    // Функция для включения режима редактирования
    const handleEdit = () => {
        setEditMode(true);
    };

    // Функция для сохранения изменений
    const handleSave = () => {
        setEditMode(false);
    };

    // Функция для удаления клиента
    const handleDeleteClient = async (clientId) => {
        try {
            // Выполняем DELETE запрос к API
            await axios.delete(`http://localhost:8080/api/deleteClientById?id=${clientId}`);
            console.log(`Клиент с ID ${clientId} успешно удален`);
        } catch (error) {
            console.error(`Ошибка при удалении клиента с ID ${clientId}:`, error);
        }
    };

    // Функция для удаления заказа
    const handleDeleteOrder = async (orderId) => {
        try {
            // Выполняем DELETE запрос к API
            await axios.delete(`http://localhost:8080/api/deleteOrderById?id=${orderId}`);
            console.log(`Заказ с ID ${orderId} успешно удален`);
        } catch (error) {
            console.error(`Ошибка при удалении заказа с ID ${orderId}:`, error);
        }
    };

    // Функция для редактирования клиента
    const handleEditClient = (clientId) => {
        // Ваша логика редактирования клиента
        console.log(`Редактирование клиента с ID ${clientId}`);
    };

    // Функция для просмотра клиента
    const handleViewClient = (clientId) => {
        // Ваша логика просмотра клиента
        console.log(`Просмотр клиента с ID ${clientId}`);
    };

    return (
        <div className="Columns">
            <div className="row">
                <div className="cell">ID клиента</div>
                <div className="cell">Имя клиента</div>
                <div className="cell">Фамилия клиента</div>
                <div className="cell">Отчество клиента</div>
                <div className="cell">Категория клиента</div>
                <div className="cell">Номер телефона</div>
                <div className="cell">Email</div>
                <div className="cell">ИНН клиента</div>
                <div className="cell">Действия</div>
            </div>
            {clients && clients.map(client => (
                <div key={client.id} className="row">
                    <div className="cell">{client.id}</div>
                    <div className="cell">{editMode ? <input type="text" defaultValue={client.clientFirstName} /> : client.clientFirstName}</div>
                    <div className="cell">{editMode ? <input type="text" defaultValue={client.clientSurname} /> : client.clientSurname}</div>
                    <div className="cell">{editMode ? <input type="text" defaultValue={client.clientPatronymicName} /> : client.clientPatronymicName}</div>
                    <div className="cell">{editMode ? <input type="text" defaultValue={client.customerCategory} /> : client.customerCategory}</div>
                    <div className="cell">{editMode ? <input type="text" defaultValue={client.phoneNumber} /> : client.phoneNumber}</div>
                    <div className="cell">{editMode ? <input type="text" defaultValue={client.emailAddress} /> : client.emailAddress}</div>
                    <div className="cell">{editMode ? <input type="text" defaultValue={client.clientInn} /> : client.clientInn}</div>
                    <div className="cell">
                        <div className="button-container">
                            {editMode ? <button onClick={handleSave}>Сохранить</button> : <button onClick={handleEdit}>Редактировать</button>}
                            <button onClick={() => handleDeleteClient(client.id)}>Удалить</button>
                            <button onClick={() => handleViewClient(client.id)}>Посмотреть</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="spacer"></div>
            <div className="row">
                <div className="cell">ID заказа</div>
                <div className="cell">Статус заказа</div>
                <div className="cell">Адрес</div>
                <div className="cell">Дата заключения контракта</div>
                <div className="cell">Дата и время установки</div>
                <div className="cell">Срок выполнения</div>
                <div className="cell">Сумма заказа</div>
                <div className="cell">Действия</div>
            </div>
            {orders && orders.map(order => (
                <div key={order.id} className="row">
                    <div className="cell">{order.id}</div>
                    <div className="cell">{order.orderStatus}</div>
                    <div className="cell">{order.address}</div>
                    <div className="cell">{order.dateOfContractConclusion}</div>
                    <div className="cell">{order.dateTimeOfInstallation}</div>
                    <div className="cell">{order.deadlineForServiceProvision}</div>
                    <div className="cell">{order.orderAmount}</div>
                    <div className="cell">
                        <div className="button-container">
                            <button onClick={() => handleDeleteOrder(order.id)}>Удалить</button>
                            <button>Редактировать</button>
                            <button>Посмотреть</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Columns;
