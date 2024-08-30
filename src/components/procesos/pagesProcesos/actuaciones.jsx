import { useState } from 'react';
import ModalAddActuacion from '../modals/modalAddActuacion';
import './css/actuaciones.css';

const Actuaciones = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar el envío del formulario
        console.log('Formulario enviado');
        setModalOpen(false);
    };
    const [actuaciones, setActuaciones] = useState([
        { id: 1, titulo: 'Actuación 1', descripcion: 'Descripción de la actuación 1' },
        { id: 2, titulo: 'Actuación 2', descripcion: 'Descripción de la actuación 2' }
    ]);

    

    return (
        <div className="actuaciones-page">
            <div className="left-panel">
                <h2>Datos Importantes</h2>
                <div className="data-box">
                    <h3>Cuaderno:</h3>
                    <p>Información del cuaderno</p>
                </div>
                <div className="data-box">
                    <h3>Título del Caso:</h3>
                    <p>Información del título</p>
                </div>
                <div className="data-box">
                    <h3>Descripción:</h3>
                    <p>Descripción del caso</p>
                </div>
                <div className="data-box">
                    <h3>Fecha:</h3>
                    <p>Fecha del caso</p>
                </div>
            </div>
            <div className="right-panel">
                <h2>Listado de Actuaciones</h2>
                <button className="add-button" onClick={handleOpenModal}>
                    Agregar Actuación
                </button>
                <ModalAddActuacion isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
                <ul className="actuaciones-list">
                    {actuaciones.map(actuacion => (
                        <li key={actuacion.id} className="actuacion-item">
                            <h4>{actuacion.titulo}</h4>
                            <p>{actuacion.descripcion}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Actuaciones;

