import React, { useState } from 'react';
import './ModalWindow.css';
import CreateOrderWindow from './create.order/CreateOrderWindow';
import CreateClientWindow from './create.client/CreateClientWindow';

function ModalWindow({ onClose }) {
    const [isCreateOrderWindowOpen, setIsCreateOrderWindowOpen] = useState(false);
    const [isCreateClientWindowOpen, setIsCreateClientWindowOpen] = useState(false);

    const openCreateOrderWindow = () => {
        setIsCreateOrderWindowOpen(true);
        setIsCreateClientWindowOpen(false); // Закрыть окно создания клиента при открытии окна заказа
    };

    const openCreateClientWindow = () => {
        setIsCreateClientWindowOpen(true);
        setIsCreateOrderWindowOpen(false); // Закрыть окно заказа при открытии окна создания клиента
    };

    const closeCurrentWindow = () => {
        onClose();
        setIsCreateOrderWindowOpen(false);
        setIsCreateClientWindowOpen(false);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>✖</button>
                <button onClick={openCreateOrderWindow}>Заказ</button>
                <button onClick={openCreateClientWindow}>Клиент</button>
                <button>ФНС клиента</button>

                {isCreateOrderWindowOpen && <CreateOrderWindow onClose={closeCurrentWindow}/>}
                {isCreateClientWindowOpen && <CreateClientWindow onClose={closeCurrentWindow}/>}
            </div>
        </div>
    );
}


export default ModalWindow;
