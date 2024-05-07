import React, { useState } from 'react';
import './ModalWindow.css';
import CreateOrderWindow from './create.order/CreateOrderWindow';
import CreateClientWindow from './create.client/CreateClientWindow';
import CreateClientFns from './create.client.fns/CreateClientFns.js';

function ModalWindow({ onClose }) {
    const [isCreateOrderWindowOpen, setIsCreateOrderWindowOpen] = useState(false);
    const [isCreateClientWindowOpen, setIsCreateClientWindowOpen] = useState(false);
    const [isCreateClientFnsOpen, setIsCreateClientFnsOpen] = useState(false); // Состояние для отслеживания открытия окна ФНС клиента

    const openCreateOrderWindow = () => {
        setIsCreateOrderWindowOpen(true);
        setIsCreateClientWindowOpen(false); // Закрыть окно создания клиента при открытии окна заказа
        setIsCreateClientFnsOpen(false); // Закрыть окно ФНС клиента при открытии окна заказа
    };

    const openCreateClientWindow = () => {
        setIsCreateClientWindowOpen(true);
        setIsCreateOrderWindowOpen(false); // Закрыть окно заказа при открытии окна создания клиента
        setIsCreateClientFnsOpen(false); // Закрыть окно ФНС клиента при открытии окна создания клиента
    };

    const openCreateClientFns = () => {
        setIsCreateClientFnsOpen(true);
        setIsCreateOrderWindowOpen(false); // Закрыть окно заказа при открытии окна ФНС клиента
        setIsCreateClientWindowOpen(false); // Закрыть окно создания клиента при открытии окна ФНС клиента
    };

    const closeCurrentWindow = () => {
        onClose();
        setIsCreateOrderWindowOpen(false);
        setIsCreateClientWindowOpen(false);
        setIsCreateClientFnsOpen(false);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>✖</button>
                <button onClick={openCreateOrderWindow}>Заказ</button>
                <button onClick={openCreateClientWindow}>Клиент</button>
                <button onClick={openCreateClientFns}>ФНС клиента</button>

                {isCreateOrderWindowOpen && <CreateOrderWindow onClose={closeCurrentWindow}/>}
                {isCreateClientWindowOpen && <CreateClientWindow onClose={closeCurrentWindow}/>}
                {isCreateClientFnsOpen && <CreateClientFns onClose={closeCurrentWindow}/>}
            </div>
        </div>
    );
}

export default ModalWindow;
