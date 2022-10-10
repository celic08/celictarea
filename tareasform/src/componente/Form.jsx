import React,{useState} from 'react'
import uniqid from 'uniqid'

const Form = () =>{

const [tarea, setTareas] = useState('')
const [listatareas, setlistaTareas] = useState([])
const [descripcion, setDescripcion] = useState([])
const [listaDescripcion, setlistaDescripcion] = useState([])
const [id, setId] = useState('')
const [error, setError] = useState(null)

const addTarea = (e)=> { 
    e.preventDefault()
    if (!tarea.trim()){
        setError('El campo nombre esta vacio')
        return
    }
    const nuevoTarea = {
        id: uniqid(),
        tituloTarea: tarea
    }
    setlistaTareas([...listatareas,nuevoTarea])
setTareas('')
setError(null)

}

const deleteTarea = (id) =>{
    const nuevaArray = listatareas.filter(item => item.id !== id )
    setlistaTareas(nuevaArray)

}

const nuevoDescripcion = {
    id: uniqid(),
    tituloDescripcion: descripcion
}
setlistaDescripcion([...listaDescripcion,nuevoDescripcion])
setTareas('')
setError(null)



    return (
<div>
<h2>Aplicacion Tareas</h2>
<div className="row">
    <div className='col'>
    <ul className= "list-group">
       {
         listatareas.map(item =>
            <li key={item.id} className="list-group-item">{item.tituloTarea}
           <button  className="btn btn-outline-danger float-right" onClick={()=> {deleteTarea(item.id)}}>
            Borrar
           </button>

          
            </li>

            )
       }
    </ul>
    </div>

   
    <div className="col"> <h2>Añade tareas</h2></div>
    <form onSubmit={addTarea} className="form-group">
       <input onChange={(e)=>{setTareas(e.target.value)}} className="form-control mb-3" type= "text" placeholder="Introduce tarea" value={tarea} />
      
      
       

       <input onChange={(e)=>{setDescripcion(e.target.value)}} className="form-control mb-3" type= "text" placeholder="Descripcion de Tarea" value={descripcion}/>
       <li key={item.id} className="list-group-item">{item.tituloDescripcion}
       <button  className="btn btn-outline-danger float-right" onClick={()=> {setDescripcion(item.id)}}>
            Agregar
           </button>
           </li>
       
        
    </form>
    
    {
        error !=null ? (
    <div className="alert alert-danger">
        {error}
    </div>

        ):
        (
         <div></div>
        )
    }

</div>
</div>
    )
}

export default Form