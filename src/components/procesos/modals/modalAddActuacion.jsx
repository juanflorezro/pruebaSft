import { useState } from 'react';
import '../css/modalAddActuacion.css';

const ModalAddActuacion = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Agregar Actuación</h2>
                <form className="modal-form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <div className="cuaderno-wrapper">
                            <select id="cuaderno" name="cuaderno" required>
                                <option value="" disabled selected>Seleccione un cuaderno...</option>
                                <option value="cuaderno1">Cuaderno 1</option>
                                <option value="cuaderno2">Cuaderno 2</option>
                            </select>
                            <button type="button" className="btn-add-cuaderno">Agregar Cuaderno</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Ingresa título..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Fecha *</label>
                        <input
                            type="date"
                            id="date"
                            value="2024-08-01"
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descripción *</label>
                        <textarea
                            id="description"
                            placeholder="Ingrese una descripción de la actuación..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn-submit">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalAddActuacion;