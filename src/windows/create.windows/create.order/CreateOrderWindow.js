import React from 'react';
import './CreateOrderWindow.css';

function OrderWindow({ onClose }) {

    const handleCreateOrderRequest = () => {
        // Собираем данные из полей ввода
        const status = document.querySelector('input[placeholder="Статус заказа"]').value;
        const address = document.querySelector('input[placeholder="Адрес"]').value;
        const contractDate = document.querySelector('input[placeholder="Дата заключения договора"]').value;
        const installationDate = document.querySelector('input[placeholder="Дата установки"]').value;
        const serviceDeadline = document.querySelector('input[placeholder="Крайний срок обслуживания"]').value;
        const amount = document.querySelector('input[placeholder="Сумма заказа"]').value;
        const clientId = document.querySelector('input[placeholder="ID клиента"]').value;

        // Формируем объект с данными заказа
        const orderDataToSend = {
            orderStatus: status,
            address: address,
            dateOfContractConclusion: contractDate,
            dateTimeOfInstallation: installationDate,
            deadlineForServiceProvision: serviceDeadline,
            orderAmount: amount,
            clientId: clientId
        };

        onClose();

        // Отправляем POST-запрос на сервер
        fetch('http://localhost:8080/api/createOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDataToSend)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при создании заказа');
                }
                // Обработка успешного ответа от сервера
                console.log('Заказ успешно создан');
            })
            .catch(error => {
                // Обработка ошибки
                console.error('Ошибка:', error);
            });
    };

    return (
        <div>
            <button className="close-button" onClick={onClose}>✖</button>
            <div className="order-details">
                <h2>Данные заказа</h2>
                <p>Статус заказа: <input type="text" placeholder="Статус заказа"/></p>
                <p>Адрес: <input type="text" placeholder="Адрес"/></p>
                <p>Дата заключения договора: <input type="date" placeholder="Дата заключения договора"/></p>
                <p>Дата установки: <input type="datetime-local" placeholder="Дата установки"/></p>
                <p>Крайний срок обслуживания: <input type="date" placeholder="Крайний срок обслуживания"/></p>
                <p>Сумма заказа: <input type="number" placeholder="Сумма заказа"/></p>
                <p>ID клиента: <input type="text" placeholder="ID клиента"/></p>
                <button onClick={handleCreateOrderRequest}>Создать заказ</button>
            </div>
        </div>
    );
}

export default OrderWindow;
