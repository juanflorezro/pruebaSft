import { useState, useEffect } from 'react';
import './css/tareas.css'

export const Tareas = () => {
    const [openOptionsIndex, setOpenOptionsIndex] = useState(null);
    const toggleOptionsMenu = (index) => {
        setOpenOptionsIndex(openOptionsIndex === index ? null : index);
    };
    const handleClickOutside = (event) => {
        if (!event.target.closest('.options')) {
            setOpenOptionsIndex(null);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div className="container">
            <br />
            <br />
            <div className="headert">
                <h1 className="professional-title">Tareas</h1>
                <div className='borde'></div>
                <div className="search-bar-container">
                    <input type="text" placeholder="Buscar..." className="search-bart" />
                </div>
                <div className="filters">
                    <div className="filter-input-container">
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre de la tarea..." className="filter-input" />
                    </div>
                    <div className="filter-input-container">
                        <label>Estado</label>
                        <select className="filter-input">
                            <option>En progreso</option>
                            <option>Aprobada</option>
                            <option>Rechazada</option>
                        </select>
                    </div>
                    <div className="filter-input-container">
                        <label>Usuario</label>
                        <select className="filter-input">
                            <option>Seleccione usuario...</option>
                            <option>Daniel Colon Farah</option>
                            <option>Juan Florez Rodriguez</option>
                            <option>Noris Colon Farah</option>
                        </select>
                    </div>
                    <div className="filter-input-container date-filter">
                        <label>Fecha límite</label>
                        <div>
                            <input type="date" placeholder="Fecha inicial" className="filter-input date-input" />
                            <span>➔</span>
                            <input type="date" placeholder="Fecha final" className="filter-input date-input" />
                        </div>
                    </div>
                    <button className="search-buttont">Buscar</button>
                </div>
            </div>
            <div className="download-button-container">
                <button className="download-button">Descargar Excel</button>
            </div>
            <table className="tasks-table">
                <thead>
                    <tr>
                        <th>N° de proceso</th>
                        <th>Título de tarea</th>
                        <th>Flujo trabajo/Etapa</th>
                        <th>Prioridad</th>
                        <th>Estado</th>
                        <th>Responsables</th>
                        <th>Fecha límite</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>N° 1582 - Número de Radicación 70001310500320210005500 J...</td>
                        <td>INFORME DE AUDIENCIA ART 77 A LA CIA Y SOLICITUD DE R.L</td>
                        <td><div className="dots"></div></td>
                        <td><div className="dots"></div></td>
                        <td><span className="status in-progress">En progreso</span></td>
                        <td><img src="" alt="Responsable" className="responsable-img" /></td>
                        <td>19/12/2024</td>
                        <td>
                            <div className={`options ${openOptionsIndex === 0 ? 'show' : ''}`}>
                                <button className="options-btn" onClick={() => toggleOptionsMenu(0)}></button>
                                <div className="options-menu">
                                    <a href="#">Ver detalle</a>
                                    <a href="#">Ver en casos</a>
                                    <a href="#">Aprobar</a>
                                    <a href="#">Rechazar</a>
                                    <a href="#">Eliminar</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>N° 3937 - Número de Radicación FUT994 JESUS ANTONIO CASTILLO CASTILLO</td>
                        <td>CADUCIDAD DE LA QUERELLA</td>
                        <td><div className="dots"></div></td>
                        <td><div className="dots"></div></td>
                        <td><span className="status in-progress">En progreso</span></td>
                        <td><img src="" alt="Responsable" className="responsable-img" /></td>
                        <td>19/12/2024</td>
                        <td>
                            <div className={`options ${openOptionsIndex === 1 ? 'show' : ''}`}>
                                <button className="options-btn" onClick={() => toggleOptionsMenu(1)}></button>
                                <div className="options-menu">
                                    <a href="#">Ver detalle</a>
                                    <a href="#">Ver en casos</a>
                                    <a href="#">Aprobar</a>
                                    <a href="#">Rechazar</a>
                                    <a href="#">Eliminar</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>N° 3929 - Número de Radicación IUG613 MANUEL MUÑOZ ATENCIO</td>
                        <td>CADUCIDAD DE LA QUERELLA</td>
                        <td><div className="dots"></div></td>
                        <td><div className="dots"></div></td>
                        <td><span className="status in-progress">En progreso</span></td>
                        <td><img src="" alt="Responsable" className="responsable-img" /></td>
                        <td>16/12/2024</td>
                        <td>
                            <div className={`options ${openOptionsIndex === 2 ? 'show' : ''}`}>
                                <button className="options-btn" onClick={() => toggleOptionsMenu(2)}></button>
                                <div className="options-menu">
                                    <a href="#">Ver detalle</a>
                                    <a href="#">Ver en casos</a>
                                    <a href="#">Aprobar</a>
                                    <a href="#">Rechazar</a>
                                    <a href="#">Eliminar</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}