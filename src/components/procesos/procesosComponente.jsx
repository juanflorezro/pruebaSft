import { useState } from 'react'
import  ModalAddProcesos  from './modals/modalAddProcesos'
import './css/procesosComponente.css'

export const ProcesosComponente = ({ setVerPagesProcesos }) => {

    const [filtrar, setFiltrar] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentView, setCurrentView] = useState(1);
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
        setCurrentView(1); // Reinicia la vista al abrir la ventana emergente
    };
    const handleContinue = () => {
        if (currentView < 2) setCurrentView(currentView + 1);
    };
    const handleBack = () => {
        if (currentView > 1) setCurrentView(currentView - 1);
    };
    const handleCheckboxChange = (e) => {
        setFiltrar(e.target.checked)
    }
    return (
        <>
            <div>
                <div className="containerp">
                
                    <h1 className="professional-title">Procesos</h1>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Buscar coincidencias..."
                            className="search-bar"
                        />
                        <label>
                            Filtro personalizado
                            <input
                                type="checkbox"
                                checked={filtrar}
                                onChange={handleCheckboxChange}
                            />
                        </label>
                        <div>

                        </div>
                        <button className="search-button" >Buscar</button>
                        <button className="excel-button" onClick={togglePopup}>Agregar Proceso</button>
                        {isPopupOpen && (
                            <ModalAddProcesos handleBack={handleBack} handleContinue={handleContinue} togglePopup={togglePopup} currentView={currentView} />
                        )}
                        <button className="excel-button">Importar</button>
                        <button className="excel-button">Descargar Excel</button>
                    </div>
                    {filtrar && (
                        <div id="custom-filter-container" className="custom-filter-container">
                            <div className="filter-form">
                                <h2>Filtro personalizado</h2>
                                <div className="form-row">
                                    <label>Cliente:</label>
                                    <select >
                                        <option value="">Seleccione...</option>

                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>Área:</label>
                                    <select >
                                        <option value="">Seleccione...</option>

                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>Centro de trabajo:</label>
                                    <select >
                                        <option value="">Seleccione...</option>

                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>Abogado a Cargo:</label>
                                    <select >
                                        <option value="">Seleccione...</option>

                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>Clase de Proceso:</label>
                                    <select >
                                        <option value="">Seleccione...</option>

                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>Ciudad</label>
                                    <select >
                                        <option value="">Seleccione...</option>

                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>Fecha de terminacion:</label>
                                    <input type="date" />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="table-wrapper">
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>Titulo</th>
                                        <th>Cliente</th>
                                        <th>Area</th>
                                        <th>Centro De Trabajo</th>
                                        <th>Abogado A Cargo</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr >
                                        <td>1</td>
                                        <td>Titulo-Prueba</td>
                                        <td>Cliente-Prueba</td>
                                        <td>Area-Prueba</td>
                                        <td>Centro-Prueba</td>
                                        <td>Abogado-Prueba</td>
                                        <td>
                                            <div className='conten-btn'>
                                                <button className='btn-g' onClick={() => setVerPagesProcesos(true)}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                                </svg></button>
                                                <button className='btn-g' ><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00bfd8" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                                    <path d="M7 11l5 5l5 -5" />
                                                    <path d="M12 4l0 12" />
                                                </svg></button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="pagination">
                            <button className='page-item'>
                                &laquo; Anterior
                            </button>
                            <span className="page-item active">
                            </span>
                            <button className='page-item'>
                                Siguiente &raquo;
                            </button>
                        </div>
                    </div>



                </div>


            </div>
        </>
    )
}
