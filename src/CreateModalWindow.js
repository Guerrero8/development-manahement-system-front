// CreateModalWindow.js
import React from 'react';

function CreateModalWindow({ onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose}>Закрыть</button>
                <button>Заказ</button>
                <button>Клиент</button>
                <button>ФНС клиента</button>
            </div>
        </div>
    );
}

export default CreateModalWindow;
