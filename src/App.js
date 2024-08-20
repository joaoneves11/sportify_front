import React from 'react';
import EventForm from './components/Events/EventForm';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Crie um evento!</h1>
            </header>
            <main>
                <EventForm />
            </main>
        </div>
    );
}

export default App;
