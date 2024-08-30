import './css/calendario.css'
import { useState } from "react"

export const Calendario = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [view, setView] = useState("month") // "month", "week", "day"
    const [tasks, setTasks] = useState([
        {
            title: "Revisión de documentos",
            date: "2024-08-27T10:00:00",
            startTime: "10:00 AM",
            endTime: "11:00 AM",
        },
        {
            title: "Reunión con el cliente",
            date: "2024-08-27T13:00:00",
            startTime: "01:00 PM",
            endTime: "02:00 PM",
        },
    ])

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const startOfWeek = currentDate.getDate() - currentDate.getDay()
    const weekDays = [...Array(7).keys()].map(offset => new Date(currentDate.getFullYear(), currentDate.getMonth(), startOfWeek + offset))
    const hoursInDay = [...Array(24).keys()]

    const handlePrev = () => {
        if (view === "month") {
            setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))
        } else if (view === "week") {
            setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)))
        } else if (view === "day") {
            setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)))
        }
    }

    const handleNext = () => {
        if (view === "month") {
            setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))
        } else if (view === "week") {
            setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)))
        } else if (view === "day") {
            setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)))
        }
    }

    const renderHeader = () => {
        if (view === "month") {
            return (
                <>
                    <h2>
                        {currentDate.toLocaleString("default", { month: "long" })}{" "}
                        {currentDate.getFullYear()}
                    </h2>
                </>
            )
        } else if (view === "week") {
            const startOfWeekDate = weekDays[0]
            const endOfWeekDate = weekDays[6]
            return (
                <>
                    <h2>
                        {startOfWeekDate.toLocaleDateString()} - {endOfWeekDate.toLocaleDateString()}
                    </h2>
                </>
            )
        } else if (view === "day") {
            return (
                <>
                    <h2>{currentDate.toLocaleDateString()}</h2>
                </>
            )
        }
    }

    const renderGrid = () => {
        if (view === "month") {
            return (
                <div className="calendar-grid month-view">
                    {[...Array(daysInMonth).keys()].map((day) => (
                        <div
                            key={day + 1}
                            className={`calendar-day ${new Date().toDateString() ===
                                new Date(currentDate.getFullYear(), currentDate.getMonth(), day + 1).toDateString()
                                ? "today"
                                : ""
                            }`}
                        >
                            <span className="day-number">{day + 1}</span>
                            <ul className="task-list">
                                {tasks
                                    .filter(
                                        (task) =>
                                            new Date(task.date).toDateString() ===
                                            new Date(currentDate.getFullYear(), currentDate.getMonth(), day + 1).toDateString()
                                    )
                                    .map((task, index) => (
                                        <li key={index} className="task-item">
                                            <span>{task.startTime} - {task.endTime}</span>
                                            <p>{task.title}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )
        } else if (view === "week") {
            return (
                <div className="calendar-grid week-view">
                    {weekDays.map((date, index) => (
                        <div
                            key={index}
                            className={`calendar-day ${new Date().toDateString() === date.toDateString() ? "today" : ""}`}
                        >
                            <span className="day-number">{date.toDateString()}</span>
                            <ul className="task-list">
                                {tasks
                                    .filter((task) => new Date(task.date).toDateString() === date.toDateString())
                                    .map((task, index) => (
                                        <li key={index} className="task-item">
                                            <span>{task.startTime} - {task.endTime}</span>
                                            <p>{task.title}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )
        } else if (view === "day") {
            return (
                <div className="calendar-grid day-view">
                    {hoursInDay.map((hour) => (
                        <div key={hour} className="calendar-hour">
                            <span className="day-number">{`${hour}:00`}</span>
                            <ul className="task-list">
                                {tasks
                                    .filter(
                                        (task) =>
                                            new Date(task.date).toDateString() === currentDate.toDateString() &&
                                            new Date(task.date).getHours() === hour
                                    )
                                    .map((task, index) => (
                                        <li key={index} className="task-item">
                                            <span>{task.startTime} - {task.endTime}</span>
                                            <p>{task.title}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className="calendar-container">
            <h1 className="professional-title">Calendario</h1>
            <div className="calendar-header">
                <button className="calendar-header-button" onClick={handlePrev}>Anterior</button>
                {renderHeader()}
                <button className="calendar-header-button" onClick={handleNext}>Siguiente</button>
            </div>
            <div className="view-toggle">
                <button onClick={() => setView("month")}>Mes</button>
                <button onClick={() => setView("week")}>Semana</button>
                <button onClick={() => setView("day")}>Día</button>
            </div>
            {renderGrid()}
        </div>
    )
}
