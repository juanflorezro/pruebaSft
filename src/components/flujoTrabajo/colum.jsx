import { Task } from "./task";


export const Column = ({ title, tasks, onTaskDrop, onTaskMove }) => (
    <div
        className="column"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
            const task = JSON.parse(e.dataTransfer.getData('task'));
            onTaskDrop(task, title);
        }}
    >
        <h3>{title}</h3>
        {tasks.map(task => (
            <Task key={task.id} task={task} onMove={onTaskMove} />
        ))}
    </div>
);