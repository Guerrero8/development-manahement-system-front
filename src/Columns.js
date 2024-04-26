import React from 'react';
import './Columns.css';

function Columns() {
    return (
        <div className="Columns">
            <div className="row">
                <div className="cell">Заказ</div>
                <div className="cell">Клиент</div>
                <div className="cell">Информация с сайта ФНС</div>
            </div>
        </div>
    );
}

export default Columns;
