import React, {useState, useEffect} from 'react';

function Form({recogerData, idEdit, objetoEdit, dataEdit}) {

    const [tarea, setTarea] = useState('')
    const [tareaStatus, setTareaStatus] = useState(false)
    const [mode, setMode] = useState(false)

    useEffect(() => {

        //si existe el id para editar, filtramos la tarea para editar
        if (idEdit !== '') {
            let filterArray = dataEdit.filter((key, index) => index === idEdit)
            Object.keys(filterArray).map(key => (
                setTarea(filterArray[key].NombreTarea)
            ))
            setMode(true)
        }

    }, [idEdit]);

    let envio = (e) => {
        e.preventDefault()

        //cambiamos el status si el campo esta vacio para mostrar error
        tarea === '' ? setTareaStatus(true) : setTareaStatus(false)

        if (!mode && tarea) {
            let obj = {
                NombreTarea: tarea,
                status:false
            }

            setTarea('')
            //mandamos al app js la nueva tarea
            recogerData(obj)
        }

        if (mode) {
            //mandamos al app js la tarea editada y seteamos
            objetoEdit(tarea, idEdit)
            setMode(false)
            setTarea('')
            setMode('')
        }
    }

    return (
        <div className="col-4">
            {!mode ?<h4 className="text-center mb-3">Agregar Tarea</h4>:<h4 className="text-center mb-3 text-warning">Editando Tarea</h4>}
            <form onSubmit={envio}>
                <input
                    value={tarea}
                    type="text"
                    className={tareaStatus?"form-control mb-2 is-invalid":"form-control mb-2"}
                    placeholder="Ingrese Tarea" onChange={(e) => setTarea(e.target.value)}
                />
                <div className="invalid-feedback mb-2">Rellena la tarea</div>
                {!mode ? <button className="btn btn-dark btn-block mb-2" type="submit">Agregar</button>:
                <button className="btn btn-warning btn-block mb-2" type="submit">Editar</button>}
            </form>
        </div>
    );
}

export default Form;
