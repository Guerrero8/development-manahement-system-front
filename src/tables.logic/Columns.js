import React, { useState } from 'react';
import './Columns.css';
import { deleteClientById, viewClient } from './clietns.logic/ClientsLogic';
import { deleteOrderById, viewOrder } from './orders.logic/OrdersLogic';

function Modal({ isOpen, content, onClose }) {
    if (!isOpen) return null;

    // Логирование для проверки, что приходит в content
    console.log("Content passed to Modal:", content);

    // Функция для отображения данных в виде таблицы
    function renderTable(data, title) {
        // Проверяем, инициализированы ли данные
        if (!data) {
            return <p>Загрузка данных {title}...</p>;
        }

        // Проверяем, есть ли объекты в массиве
        if (Array.isArray(data) && data.length === 0) {
            return <p>{title} не найдены.</p>;
        }

        return (
            <div>
                <h3>{title}</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {Object.keys(item).map(key => (
                                <React.Fragment key={key}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                                        <strong>{key}:</strong>
                                    </td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                                        {item[key] === null || item[key] === undefined ? 'Не указано' : item[key]}
                                    </td>
                                </React.Fragment>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', width: '80%', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
                <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', padding: '5px 10px', cursor: 'pointer' }}>Закрыть</button>
                {content.clients ? renderTable(content.clients, "Клиенты") : <p>Информация о клиентах не найдена.</p>}
                {content.clientFnsList ? renderTable(content.clientFnsList, "ФНС Информация") : <p>ФНС информация не найдена.</p>}
                {content.orders ? renderTable(content.orders, "Заказы") : <p>Заказы не найдены.</p>}
            </div>
        </div>
    );
}

function Columns({ clients, clientFnsList, orders }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const handleViewDetails = async (id, viewer) => {
        const details = await viewer(id);

        setModalContent(prevContent => ({
            ...prevContent,
            ...details
        }));
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="Columns">
            <Modal isOpen={modalOpen} content={modalContent} onClose={handleCloseModal} />

            <div className="row header">
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
            {clients.map(client => (
                <div key={client.id} className="row">
                    <div className="cell">{client.id}</div>
                    <div className="cell">{client.clientFirstName}</div>
                    <div className="cell">{client.clientSurname}</div>
                    <div className="cell">{client.clientPatronymicName}</div>
                    <div className="cell">{client.customerCategory}</div>
                    <div className="cell">{client.phoneNumber}</div>
                    <div className="cell">{client.emailAddress}</div>
                    <div className="cell">{client.clientInn}</div>
                    <div className="cell">
                        <button onClick={() => handleViewDetails(client.id, viewClient)}>Посмотреть</button>
                        <button onClick={() => deleteClientById(client.id)}>Удалить</button>
                    </div>
                </div>
            ))}
            <div className="spacer"></div>
            <div className="row header">
                <div className="cell">ID заказа</div>
                <div className="cell">Статус заказа</div>
                <div className="cell">Адрес</div>
                <div className="cell">Дата заключения контракта</div>
                <div className="cell">Дата и время установки</div>
                <div className="cell">Срок выполнения</div>
                <div className="cell">Сумма заказа</div>
                <div className="cell">Действия</div>
            </div>
            {orders.map(order => (
                <div key={order.id} className="row">
                    <div className="cell">{order.id}</div>
                    <div className="cell">{order.orderStatus}</div>
                    <div className="cell">{order.address}</div>
                    <div className="cell">{order.dateOfContractConclusion}</div>
                    <div className="cell">{order.dateTimeOfInstallation}</div>
                    <div className="cell">{order.deadlineForServiceProvision}</div>
                    <div className="cell">{order.orderAmount}</div>
                    <div className="cell">
                        <button onClick={() => deleteOrderById(order.id)}>Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Columns;
