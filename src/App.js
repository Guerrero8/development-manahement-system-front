import React from 'react';
import Columns from './Columns';
import Buttons from './Buttons';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Система учета заказов.</h1>
            </header>
            <main>
                <Buttons />
                <Columns />
            </main>
        </div>
    );
}

export default App;
