import React, {useState} from 'react';
import './App.css';
import Form from "./Component/Form";
import ListTask from "./Component/ListTask";

function App() {

    const [data,setData] = useState([])
    const [idEdit,setIdEdit] = useState('')

    let RecogerDatos = (nt)=> {
        //nueva tarea
        setData([...data,nt])
    }

    let CheckIdDelete = (dt)=> {
        //delete task
        let filterArray = data.filter((key,index) => index !== dt)
        setData(filterArray)
    }

    let CheckIdEdit = (id)=> {
        //recoge id para saber que tarea editar
        setIdEdit(id)
    }

    let objetoEdit = (et,id)=> {
        //edit task
        let arrayTemp = [...data]
        arrayTemp[id].NombreTarea=et

        setData(arrayTemp)
        setIdEdit('')
    }

    let objetoChangeStatus = (i)=> {
        //tarea completada
        let arrayTemp = [...data]
        arrayTemp[i].status=!arrayTemp[i].status

        setData(arrayTemp)
    }

  return (
    <div className="container mt-5">
        <h1 className="text-center mb-5">CRUD con React</h1>
        <div className="row">
            <ListTask datos={data} idForDelete={CheckIdDelete} idForEdit={CheckIdEdit} objetoChangeStatus={objetoChangeStatus}/>
            <Form recogerData={RecogerDatos} dataEdit={data} idEdit={idEdit} objetoEdit={objetoEdit}/>
        </div>
    </div>
  );
}

export default App;
