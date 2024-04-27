import React, { useState } from 'react';
import './CreateClientWindow.css';

function CreateClientWindow({ onClose }) {
    const [clientFirstName, setClientFirstName] = useState('');
    const [clientSurname, setClientSurname] = useState('');
    const [clientPatronymicName, setClientPatronymicName] = useState('');
    const [customerCategory, setCustomerCategory] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [clientInn, setClientInn] = useState('');

    const handleCreateClientRequest = () => {
        const createClientDTO = {
            clientFirstName: clientFirstName,
            clientSurname: clientSurname,
            clientPatronymicName: clientPatronymicName,
            customerCategory: customerCategory,
            phoneNumber: phoneNumber,
            emailAddress: emailAddress,
            clientInn: clientInn
        };

        // Закрываем окно без ожидания ответа от сервера
        onClose();

        fetch('http://localhost:8080/api/createClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createClientDTO)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при создании клиента');
                }
                console.log('Клиент успешно создан');
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    };

    return (
        <div>
            <button className="close-button" onClick={onClose}>✖</button>
            <div className="order-details">
                <h2>Данные клиента</h2>
                <p>Имя: <input type="text" placeholder="Имя" value={clientFirstName} onChange={(e) => setClientFirstName(e.target.value)} /></p>
                <p>Фамилия: <input type="text" placeholder="Фамилия" value={clientSurname} onChange={(e) => setClientSurname(e.target.value)} /></p>
                <p>Отчество: <input type="text" placeholder="Отчество" value={clientPatronymicName} onChange={(e) => setClientPatronymicName(e.target.value)} /></p>
                <p>Категория клиента: <input type="text" placeholder="Категория клиента" value={customerCategory} onChange={(e) => setCustomerCategory(e.target.value)} /></p>
                <p>Номер телефона: <input type="text" placeholder="Номер телефона" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></p>
                <p>Email: <input type="text" placeholder="Email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} /></p>
                <p>ИНН клиента: <input type="text" placeholder="ИНН клиента" value={clientInn} onChange={(e) => setClientInn(e.target.value)} /></p>
                <button onClick={handleCreateClientRequest}>Создать клиента</button>
            </div>
        </div>
    );
}

export default CreateClientWindow;
