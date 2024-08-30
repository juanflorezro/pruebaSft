import { useState } from 'react'
import './css/procesos.css'
import { ProcesosComponente } from '../components/procesos/procesosComponente'
import { PagesProcesos } from '../components/procesos/pagesProcesos'
export const Procesos = () => {
    const [verPagesProcesos, setVerPagesProcesos] = useState(false)
    
    return(
        <>

            {
              verPagesProcesos ? (
                <PagesProcesos setVerPagesProcesos = {setVerPagesProcesos} />
              ) : (
                <ProcesosComponente setVerPagesProcesos = {setVerPagesProcesos}/>
              )
            }
            
        </>
    )
}