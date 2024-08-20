import React, { useState } from 'react';

const EventForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = {
            title,
            date,
            time,
            location,
            description,
        };
        console.log('Evento Criado:', eventData);
        //enviar dados pro back
        try {
            const response = await fetch('', { // url da api do back
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Evento enviado com sucesso:', result);
            } else {
                console.error('Erro ao enviar o evento:', response.statusText);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="event-form">
            <label htmlFor="title">Título do Evento:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <label htmlFor="date">Data:</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            <label htmlFor="time">Horário:</label>
            <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />

            <label htmlFor="location">Localização:</label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />

            <div>
                <label htmlFor="description">Descrição:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Criar Evento</button>
        </form>
    );
};

export default EventForm;
