import { useState } from 'react';
import './css/pagesProcesos.css'
import Actuaciones from './pagesProcesos/actuaciones';
import { Caso } from './pagesProcesos/caso';
export const PagesProcesos = ({ setVerPagesProcesos }) => {
    const [activeTab, setActiveTab] = useState('Ver Caso');
    const renderActiveComponent = () => {
        switch (activeTab) {
            case 'Ver Caso':
                return <Caso />;
            case 'Actuaciones':
                return <Actuaciones />;
            case 'Tareas':
                return <Component3 />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className='name-case'>#1 Titulo-Prueba</div>
            <ul className="tab-container">
                <li>
                    <button
                        className={`tab-button ${activeTab === 'Ver Caso' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Ver Caso')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-dots" width="12" height="12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M9 14v.01" />
                            <path d="M12 14v.01" />
                            <path d="M15 14v.01" />
                        </svg>

                        Ver Caso
                    </button>
                </li>
                <li>
                    <button
                        className={`tab-button ${activeTab === 'Actuaciones' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Actuaciones')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-subtask" width="12" height="12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M6 9l6 0" />
                            <path d="M4 5l4 0" />
                            <path d="M6 5v11a1 1 0 0 0 1 1h5" />
                            <path d="M12 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                            <path d="M12 15m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                        </svg>
                        Actuaciones
                    </button>
                </li>
                <li>
                    <button
                        className={`tab-button ${activeTab === 'Tareas' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Tareas')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-details" width="12" height="12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M13 5h8" />
                            <path d="M13 9h5" />
                            <path d="M13 15h8" />
                            <path d="M13 19h5" />
                            <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                        </svg>
                        Tareas
                    </button>
                </li>
                <li>
                    <button
                        className='tab-button'
                        onClick={() => setVerPagesProcesos(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="12" height="12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M5 12l6 6" />
                            <path d="M5 12l6 -6" />
                        </svg>
                        Salir
                    </button>
                </li>
                <div className="tab-end">
                    Sin Código
                </div>
            </ul>
            <div className="content-container">
                {renderActiveComponent()}
            </div>

        </div>
    );
};



const Component1 = () => {
    return <div>Contenido del Componente 1</div>;
};



const Component2 = () => {
    return <div>Contenido del Componente 2</div>;
};

// Compo

const Component3 = () => {
    return <div>Contenido del Componente 3</div>;
};

