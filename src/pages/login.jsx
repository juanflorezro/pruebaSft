import './css/login.css'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <section>
                <div className="signin">
                    <div className="content2">
                        <h2>Iniciar Sesión</h2>
                        <div className="form">
                            <div className="inputBox">
                                <input
                                    type="text"
                                />
                                <i>Usuario</i>
                            </div>
                            <div className="inputBox">
                                <input
                                    type="password"
                                />
                                <i>Contraseña</i>
                            </div>
                            <div className="links">
                                <a href="/ayuda">¿Nesecitas Ayuda?</a>

                            </div>
                            <div className="inputBox">

                                {/*<div className="loader-container"><div className="loader"></div></div>*/}


                                <input type="submit" value="Login" onClick={() => navigate('/home')} />



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}