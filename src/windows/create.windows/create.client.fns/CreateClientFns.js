import React, { useState } from 'react';
import './CreateClientFns.css';

function CreateClientFns({ onClose }) {
    const [clientId, setClientId] = useState('');

    const handleSearchFnsInfo = () => {
        // Отправляем запрос на сервер для поиска информации в ФНС по ID клиента
        fetch(`http://localhost:8080/api/createClientFnsForClient?clientId=${clientId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при создании информации в ФНС');
                }
                // Обработка успешного ответа от сервера
                console.log('Информация успешно создана в ФНС');
            })
            .catch(error => {
                // Обработка ошибки
                console.error('Ошибка:', error);
            });

        onClose(); // Закрываем всплывающее окно после отправки запроса
    };

    return (
        <div>
            <button className="close-button" onClick={onClose}>✖</button>
            <div className="client-details">
                <h2>Информация из ФНС</h2>
                <div className="input-group">
                    <p>ID клиента для поиска в ФНС:</p>
                    <input type="text" value={clientId} onChange={(e) => setClientId(e.target.value)} placeholder="ID клиента" />
                </div>
                <button onClick={handleSearchFnsInfo}>Найти информацию в ФНС</button>
            </div>
        </div>
    );
}

export default CreateClientFns;
