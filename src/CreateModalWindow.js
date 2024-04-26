import React from 'react';
import './CreateModalWindow.css';

function CreateModalWindow({ onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>✖</button>
                <button>Заказ</button>
                <button>Клиент</button>
                <button>ФНС клиента</button>
            </div>
        </div>
    );
}

export default CreateModalWindow;
