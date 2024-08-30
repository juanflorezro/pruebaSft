import '../css/modalAddProcesos.css'

const ModalAddProcesos = ({togglePopup, currentView, handleBack, handleContinue}) => {

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close-btn" onClick={togglePopup}>×</span>
                <h2 className='h2'>Ingresa los datos del proceso</h2>
                <div className="form-container">
                    {currentView === 1 && (
                        <form>
                            <label className = 'label' htmlFor="titulo">Título:</label>
                            <input className='input' type="text" id="titulo" name="titulo" /><br /><br />
                            <label className = 'label' htmlFor="codigo">Código:</label>
                            <div className="codigo-container">
                                <select className='select' id="codigo" name="codigo">
                                    <option value="">Selecciona un código</option>
                                    <option value="codigo1">Código 1</option>
                                    <option value="codigo2">Código 2</option>
                                </select>
                                <input className='input' type="text" id="codigo-text" name="codigo-text" placeholder="Escribe el código" />
                            </div><br /><br />
                            <label className = 'label' htmlFor="Juzgado">Juzgado:</label>
                            <select className='select' id="Juzgado" name="Juzgado">
                                <option value="">Selecciona un juzgado</option>
                                <option value="Juzgado1">Juzgado 1</option>
                                <option value="Juzgado2">Juzgado 2</option>
                            </select><br /><br />
                            <label className = 'label' htmlFor="jurisdiccion">Jurisdicción:</label>
                            <select className='select' id="jurisdiccion" name="jurisdiccion">
                                <option value="">Selecciona una jurisdicción</option>
                                <option value="jurisdiccion1">Jurisdicción 1</option>
                                <option value="jurisdiccion2">Jurisdicción 2</option>
                            </select><br /><br />
                        </form>
                    )}
                    {currentView === 2 && (
                        <form>
                            <label className = 'label' htmlFor="cliente">Cliente:</label>
                            <select className='select' id="cliente" name="cliente">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="asunto">Asunto:</label>
                            <select className='select' id="asunto" name="asunto">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="codigoInterno">CÓDIGO INTERNO:</label>
                            <input className='input' type="text" id="codigoInterno" name="codigoInterno" /><br /><br />
                            <label className = 'label' htmlFor="area">ÁREA:</label>
                            <select className='select' id="area" name="area">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="fechaAsignacion">FECHA DE ASIGNACIÓN:</label>
                            <input className='input' type="date" id="fechaAsignacion" name="fechaAsignacion" /><br /><br />
                            <label className = 'label' htmlFor="centroTrabajo">CENTRO DE TRABAJO:</label>
                            <select className='select' id="centroTrabajo" name="centroTrabajo">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="directorCargo">DIRECTOR A CARGO:</label>
                            <select className='select' id="directorCargo" name="directorCargo">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="abogadoCargo">ABOGADO A CARGO:</label>
                            <select className='select' id="abogadoCargo" name="abogadoCargo">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="abogadoInterno">ABOGADO INTERNO DE LA COMPAÑÍA:</label>
                            <input className='input' type="text" id="abogadoInterno" name="abogadoInterno" /><br /><br />
                            <label className = 'label' htmlFor="numeroSiniestro">NÚMERO DE SINIESTRO:</label>
                            <input className='input' type="text" id="numeroSiniestro" name="numeroSiniestro" /><br /><br />
                            <label className = 'label' htmlFor="fechaSiniestro">FECHA DEL SINIESTRO:</label>
                            <input className='input' type="date" id="fechaSiniestro" name="fechaSiniestro" /><br /><br />
                            <label className = 'label' htmlFor="poliza">PÓLIZA:</label>
                            <input className='input' type="text" id="poliza" name="poliza" /><br /><br />
                            <label className = 'label' htmlFor="ramo">RAMO:</label>
                            <input className='input' type="text" id="ramo" name="ramo" /><br /><br />
                            <label className = 'label' htmlFor="amparo">AMPARO:</label>
                            <input className='input' type="text" id="amparo" name="amparo" /><br /><br />
                            <label className = 'label' htmlFor="numeroAplicativo">NÚMERO DE APLICATIVO:</label>
                            <input className='input' type="text" id="numeroAplicativo" name="numeroAplicativo" /><br /><br />
                            <label className = 'label' htmlFor="ciudad">CIUDAD:</label>
                            <input className='input' type="text" id="ciudad" name="ciudad" /><br /><br />
                            <label className = 'label' htmlFor="juzgadoInt">JUZGADO INT:</label>
                            <input className='input' type="text" id="juzgadoInt" name="juzgadoInt" /><br /><br />
                            <label className = 'label' htmlFor="radicado">RADICADO:</label>
                            <input className='input' type="text" id="radicado" name="radicado" /><br /><br />
                            <label className = 'label' htmlFor="parteActiva">PARTE ACTIVA:</label>
                            <input className='input' type="text" id="parteActiva" name="parteActiva" /><br /><br />
                            <label className = 'label' htmlFor="tipoTramite">TIPO DE TRÁMITE:</label>
                            <select className='select' id="tipoTramite" name="tipoTramite">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="claseProceso">CLASE DE PROCESO:</label>
                            <select className='select' id="claseProceso" name="claseProceso">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="tipoVinculacionCliente">TIPO DE VINCULACIÓN CLIENTE:</label>
                            <select className='select' id="tipoVinculacionCliente" name="tipoVinculacionCliente">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="pretensionesDinero">PRETENSIONES EN DINERO:</label>
                            <input className='input' type="text" id="pretensionesDinero" name="pretensionesDinero" /><br /><br />
                            <label className = 'label' htmlFor="calificacionInicialContingencia">CALIFICACIÓN INICIAL CONTINGENCIA:</label>
                            <select className='select' id="calificacionInicialContingencia" name="calificacionInicialContingencia">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="calificacionActualContingencia">CALIFICACIÓN ACTUAL CONTINGENCIA:</label>
                            <select className='select' id="calificacionActualContingencia" name="calificacionActualContingencia">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="motivoCalificacion">MOTIVO DE LA CALIFICACIÓN:</label>
                            <input className='input' type="text" id="motivoCalificacion" name="motivoCalificacion" /><br /><br />
                            <label className = 'label' htmlFor="fechaAdmisionVinculacion">FECHA ADMISIÓN/VINCULACIÓN:</label>
                            <input className='input' type="date" id="fechaAdmisionVinculacion" name="fechaAdmisionVinculacion" /><br /><br />
                            <label className = 'label' htmlFor="fechaNotificacion">FECHA DE NOTIFICACIÓN:</label>
                            <input className='input' type="date" id="fechaNotificacion" name="fechaNotificacion" /><br /><br />
                            <label className = 'label' htmlFor="instancia">INSTANCIA:</label>
                            <select className='select' id="instancia" name="instancia">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="etapaProcesal">ETAPA PROCESAL:</label>
                            <input className='input' type="text" id="etapaProcesal" name="etapaProcesal" /><br /><br />
                            <label className = 'label' htmlFor="claseMedidaCautelar">CLASE DE MEDIDA CAUTELAR:</label>
                            <input className='input' type="text" id="claseMedidaCautelar" name="claseMedidaCautelar" /><br /><br />
                            <label className = 'label' htmlFor="honorariosAsignados">HONORARIOS ASIGNADOS:</label>
                            <input className='input' type="text" id="honorariosAsignados" name="honorariosAsignados" /><br /><br />
                            <label className = 'label' htmlFor="autoridadConocimiento">AUTORIDAD DE CONOCIMIENTO:</label>
                            <input className='input' type="text" id="autoridadConocimiento" name="autoridadConocimiento" /><br /><br />
                            <label className = 'label' htmlFor="delito">DELITO:</label>
                            <select className='select' id="delito" name="delito">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="placa">PLACA:</label>
                            <input className='input' type="text" id="placa" name="placa" /><br /><br />
                            <label className = 'label' htmlFor="evento">EVENTO:</label>
                            <input className='input' type="text" id="evento" name="evento" /><br /><br />
                            <label className = 'label' htmlFor="probabilidadExito">PROBABILIDAD DE ÉXITO:</label>
                            <select className='select' id="probabilidadExito" name="probabilidadExito">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="valorIndemnizadoCliente">VALOR INDEMNIZADO CLIENTE:</label>
                            <input className='input' type="text" id="valorIndemnizadoCliente" name="valorIndemnizadoCliente" /><br /><br />
                            <label className = 'label' htmlFor="entidadAfectada">ENTIDAD AFECTADA:</label>
                            <input className='input' type="text" id="entidadAfectada" name="entidadAfectada" /><br /><br />
                            <label className = 'label' htmlFor="fechaPagoCliente">FECHA DE PAGO CLIENTE:</label>
                            <input className='input' type="date" id="fechaPagoCliente" name="fechaPagoCliente" /><br /><br />
                            <label className = 'label' htmlFor="tipoContragarantia">TIPO CONTRAGARANTIA (PAGARE/LETRA):</label>
                            <select className='select' id="tipoContragarantia" name="tipoContragarantia">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="montoProvision">MONTO DE PROVISIÓN:</label>
                            <input className='input' type="text" id="montoProvision" name="montoProvision" /><br /><br />
                            <label className = 'label' htmlFor="tipoMoneda">TIPO DE MONEDA:</label>
                            <input className='input' type="text" id="tipoMoneda" name="tipoMoneda" /><br /><br />
                            <label className = 'label' htmlFor="fechaTerminacion">FECHA DE TERMINACIÓN:</label>
                            <input className='input' type="date" id="fechaTerminacion" name="fechaTerminacion" /><br /><br />
                            <label className = 'label' htmlFor="motivoTerminacion">MOTIVO DE TERMINACIÓN:</label>
                            <input className='input' type="text" id="motivoTerminacion" name="motivoTerminacion" /><br /><br />
                            <label className = 'label' htmlFor="cliente2">CLIENTE 2:</label>
                            <select className='select' id="cliente2" name="cliente2">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label className = 'label' htmlFor="fechaAsignacion2">FECHA DE ASIGNACIÓN 2:</label>
                            <input className='input' type="date" id="fechaAsignacion2" name="fechaAsignacion2" /><br /><br />
                            <label htmlFor="abogadoInterno2">ABOGADO INTERNO DE LA COMPAÑIA 2:</label>
                            <select className='select' id="abogadoInterno2" name="abogadoInterno2">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label htmlFor="numeroSiniestro2">NÚMERO DE SINIESTRO 2:</label>
                            <input className='input' type="text" id="numeroSiniestro2" name="numeroSiniestro2" /><br /><br />
                            <label htmlFor="numeroAplicativo2">NÚMERO DE APLICATIVO 2:</label>
                            <input className='input' type="text" id="numeroAplicativo2" name="numeroAplicativo2" /><br /><br />
                            <label htmlFor="fechaNotificacion2">FECHA DE NOTIFICACIÓN 2:</label>
                            <input className='input' type="date" id="fechaNotificacion2" name="fechaNotificacion2" /><br /><br />
                            <label htmlFor="seInicioEjecutivo">SE INICIÓ EJECUTIVO A CONTINUACIÓN DE ORDINARIO:</label>
                            <select className='select' id="seInicioEjecutivo" name="seInicioEjecutivo">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label htmlFor="honorariosAsignados2">HONORARIOS ASIGNADOS 2:</label>
                            <input className='input' type="text" id="honorariosAsignados2" name="honorariosAsignados2" /><br /><br />
                            <label htmlFor="valorPagado">VALOR PAGADO:</label>
                            <input className='input' type="text" id="valorPagado" name="valorPagado" /><br /><br />
                            <label htmlFor="personaPago">PERSONA QUE REALIZÓ EL PAGO:</label>
                            <input className='input' type="text" id="personaPago" name="personaPago" /><br /><br />
                            <label htmlFor="fechaRadicacionContestado">FECHA DE RADICACIÓN DE LA CONTESTACIÓN:</label>
                            <input className='input' type="date" id="fechaRadicacionContestado" name="fechaRadicacionContestado" /><br /><br />
                            <label htmlFor="fechaRadicacionContestado2">FECHA DE RADICACIÓN DE LA CONTESTACIÓN 2:</label>
                            <input className='input' type="date" id="fechaRadicacionContestado2" name="fechaRadicacionContestado2" /><br /><br />
                            <label htmlFor="departamento">DEPARTAMENTO:</label>
                            <select className='select' id="departamento" name="departamento">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                            <label htmlFor="asegurado">ASEGURADO:</label>
                            <input className='input' type="text" id="asegurado" name="asegurado" /><br /><br />
                            <label htmlFor="usuariosInvolucrados">Usuarios involucrados:</label>
                            <select className='select' id="usuariosInvolucrados" name="usuariosInvolucrados">
                                <option value="">Seleccione...</option>
                                {/* Opciones dinámicas aquí */}
                            </select><br /><br />
                        </form>
                    )}
                </div>
                <div className="nav-buttons">
                    {currentView > 1 && (
                        <button type="button" className="nav-btn" onClick={handleBack}>Volver</button>
                    )}
                    <button type="button" className="nav-btn" onClick={handleContinue}>
                        {currentView === 2 ? 'Finalizar' : 'Continuar'}
                    </button>
                </div>
            </div>
        </div>
    )

}




export default ModalAddProcesos