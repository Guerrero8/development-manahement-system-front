import React, { useState } from 'react';
import './Columns.css';
import { deleteClientById, viewClient } from './clietns.logic/ClientsLogic';
import { deleteOrderById, viewOrder } from './orders.logic/OrdersLogic';

function Columns({ clients, orders }) {
    const [editMode, setEditMode] = useState(false);

    const handleDeleteClient = async (clientId) => {
        await deleteClientById(clientId);
    };

    const handleViewClient = (clientId) => {
        viewClient(clientId);
    };

    const handleDeleteOrder = async (orderId) => {
        await deleteOrderById(orderId);
    };

    const handleViewOrder = (orderId) => {
        viewOrder(orderId);
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
                    <div className="cell">{client.clientFirstName}</div>
                    <div className="cell">{client.clientSurname}</div>
                    <div className="cell">{client.clientPatronymicName}</div>
                    <div className="cell">{client.customerCategory}</div>
                    <div className="cell">{client.phoneNumber}</div>
                    <div className="cell">{client.emailAddress}</div>
                    <div className="cell">{client.clientInn}</div>
                    <div className="cell">
                        <div className="button-container">
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
                            <button onClick={() => handleViewOrder(order.id)}>Посмотреть</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Columns;
