import React, { useState } from 'react';
import Columns from './Columns';
import Buttons from './Buttons';

function App() {
    const [clients, setClients] = useState([]);
    const [orders, setOrders] = useState([]);

    const updateColumns = (newClients, newOrders) => {
        setClients(newClients);
        setOrders(newOrders);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Система учета заказов.</h1>
            </header>
            <main>
                {/* Передаем функцию updateColumns компоненту Buttons */}
                <Buttons updateColumns={updateColumns} />
                {/* Передаем данные клиентов и заказов компоненту Columns */}
                <Columns clients={clients} orders={orders} />
            </main>
        </div>
    );
}

export default App;
