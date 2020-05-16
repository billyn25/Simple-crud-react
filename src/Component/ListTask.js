import React from 'react';

function ListTask({datos, idForDelete, idForEdit,objetoChangeStatus}) {

    console.log(datos)

    let clickDelete = (i) => {
        idForDelete(i)
    }

    let clickEdit = (i) => {
        idForEdit(i)
    }

    let clickComplete = (i) => {
        objetoChangeStatus(i)
    }

    return (
        <div className="col-8">
            <h4 className="text-center mb-3">Lista de Tareas</h4>
            {datos.length>0?
            <ul className="list-group">
                {Object.keys(datos).map((key, index) => (
                    <li className="list-group-item" key={index}>
                        <span onClick={() => clickComplete(index)} style={{
                            textDecoration: datos[key].status ? 'line-through' : 'none'}} className={datos[key].status?"lead text-danger":"lead"}>{datos[key].NombreTarea}</span>
                        <button onClick={() => clickDelete(index)}
                                className="btn btn-sm btn-danger float-right mx-2"
                        >Eliminar
                        </button>
                        <button onClick={() => clickEdit(index)}
                                className="btn btn-sm btn-warning float-right"
                        >Editar
                        </button>
                    </li>
                ))}
            </ul>:<h5 className="text-center text-danger">No hay tareas</h5>}
        </div>
    );
}

export default ListTask;
