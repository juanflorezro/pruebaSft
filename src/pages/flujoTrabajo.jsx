import { useState } from 'react';
import './css/flujoTrabajo.css'
import { Column } from '../components/flujoTrabajo/colum';


export const FlujoTrabajo = () => {

    const [projects, setProjects] = useState([
        { id: 1, name: 'Proyecto 1' },
        { id: 2, name: 'Proyecto 2' }
    ]);
    const [activeProject, setActiveProject] = useState(null);
    const [tasks, setTasks] = useState({
        'Por Hacer': [],
        'En Proceso': [],
        'Finalizado': []
    });

    const addProject = () => {
        const newProjectName = prompt('Nombre del nuevo proyecto:');
        if (newProjectName) {
            setProjects([...projects, { id: projects.length + 1, name: newProjectName }]);
        }
    };

    const addTask = (status) => {
        const taskName = prompt('Nombre de la tarea:');
        if (taskName && activeProject) {
            setTasks(prevTasks => ({
                ...prevTasks,
                [status]: [...prevTasks[status], { id: Date.now(), name: taskName }]
            }));
        }
    };

    const handleTaskMove = (task, status) => {
        const newTasks = { ...tasks };
        Object.keys(newTasks).forEach(key => {
            newTasks[key] = newTasks[key].filter(t => t.id !== task.id);
        });
        setTasks({
            ...newTasks,
            [status]: [...newTasks[status], task]
        });
    };

    const handleTaskDrop = (task, column) => {
        handleTaskMove(task, column);
    };

    return (
        <div className="trello-board">
            <div className="sidebar">
                <h2>Flujo de Trabajo</h2>
                <button onClick={addProject}>Agregar Proyecto</button>
                <ul>
                    {projects.map(project => (
                        <li key={project.id}>
                            <button onClick={() => setActiveProject(project)}>{project.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="main-content">
                <header className="header">
                    <h1>{activeProject ? `Proyecto: ${activeProject.name}` : 'Selecciona un Proyecto'}</h1>
                    {activeProject && (
                        <button onClick={() => addTask('Por Hacer')}>Agregar Tarea</button>
                    )}
                </header>
                <div className="board">
                    {['Por Hacer', 'En Proceso', 'Finalizado'].map(column => (
                        <Column
                            key={column}
                            title={column}
                            tasks={tasks[column]}
                            onTaskDrop={handleTaskDrop}
                            onTaskMove={handleTaskMove}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}