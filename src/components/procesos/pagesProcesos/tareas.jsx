import { useState } from 'react';
import './css/tareas.css';

 const Tareas = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="procesos-container">
            <div className="header">
                <h2>Tareas del proceso</h2>
                <button className="btn-agregar-tarea" onClick={handleModalToggle}>+ Agregar tarea</button>
            </div>

            <table className="tasks-table">
                <thead>
                    <tr>
                        <th>Título de tarea</th>
                        <th>Prioridad</th>
                        <th>Estado</th>
                        <th>Responsables</th>
                        <th>Fecha límite</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AUTO ADMITE LLAMAMIENTO EN GARANTÍA</td>
                        <td><span className="prioridad"></span></td>
                        <td><span className="estado">Aprobada</span></td>
                        <td>
                            <span className="responsable-avatar"><img src="img1.jpg" alt="avatar" /></span>
                            <span className="responsable-avatar"><img src="img2.jpg" alt="avatar" /></span>
                        </td>
                        <td>31/07/2024</td>
                        <td>
                            <div className="options-dropdown">
                                <button className="options-button">&#9654;</button>
                                <div className="dropdown-content">
                                    <a href="#">Ver</a>
                                    <a href="#">Editar</a>
                                    <a href="#">Eliminar</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>AUTO ADMITE LLAMAMIENTO EN GARANTÍA</td>
                        <td><span className="prioridad"></span></td>
                        <td><span className="estado">Aprobada</span></td>
                        <td>
                            <span className="responsable-avatar"><img src="img1.jpg" alt="avatar" /></span>
                            <span className="responsable-avatar"><img src="img2.jpg" alt="avatar" /></span>
                        </td>
                        <td>31/07/2024</td>
                        <td>
                            <div className="options-dropdown">
                                <button className="options-button">&#9654;</button>
                                <div className="dropdown-content">
                                    <a href="#">Ver</a>
                                    <a href="#">Editar</a>
                                    <a href="#">Eliminar</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>AUTO ADMITE LLAMAMIENTO EN GARANTÍA</td>
                        <td><span className="prioridad"></span></td>
                        <td><span className="estado">Aprobada</span></td>
                        <td>
                            <span className="responsable-avatar"><img src="img1.jpg" alt="avatar" /></span>
                            <span className="responsable-avatar"><img src="img2.jpg" alt="avatar" /></span>
                        </td>
                        <td>31/07/2024</td>
                        <td>
                            <div className="options-dropdown">
                                <button className="options-button">&#9654;</button>
                                <div className="dropdown-content">
                                    <a href="#">Ver</a>
                                    <a href="#">Editar</a>
                                    <a href="#">Eliminar</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* Aquí puedes agregar más filas de tareas */}
                </tbody>
            </table>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="nueva-tarea">
                            <div className="columna">
                                <div className="input-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" id="nombre" placeholder="Nombre" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="descripcion">Descripción</label>
                                    <textarea id="descripcion" placeholder="Descripción"></textarea>
                                </div>
                            </div>
                            <div className="columna columna-derecha">
                                <div className="input-group">
                                    <label htmlFor="responsable">Responsable</label>
                                    <select id="responsable">
                                        <option value="1">Noris Colon Farah (Director Jurídico)</option>
                                        <option value="2">Daniel Colon Farah (Coordinador Jurídico)</option>
                                        <option value="3">Juan Florez Rodriguez (Abogado)</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="fecha-limite">Fecha Límite</label>
                                    <input type="date" id="fecha-limite" placeholder="Fecha Límite" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="fecha-alerta">Fecha Alerta</label>
                                    <input type="date" id="fecha-alerta" placeholder="Fecha Alerta" />
                                </div>
                            </div>
                        </div>
                        <div className="actions">
                            <button className="btn-cancelar" onClick={handleModalToggle}>Cancelar</button>
                            <button className="btn-guardar">Guardar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tareas