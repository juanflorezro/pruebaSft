export const Task = ({ task, onMove }) => (
    <div className="task" draggable onDragStart={(e) => e.dataTransfer.setData('task', JSON.stringify(task))}>
        {task.name}
        <button onClick={() => onMove(task)}>Mover</button>
    </div>
);