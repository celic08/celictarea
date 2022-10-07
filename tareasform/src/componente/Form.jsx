import React,{useState} from 'react'
import uniqid from 'uniqid'

const Form = () =>{

const [tarea, setTareas] = useState('')
const [listatareas, setlistaTareas] = useState([])
const [modoEdicion, setModoEdicion] = useState(false)
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
const editar=(item ) =>{
    setModoEdicion(true)
  
    setTareas(item.tituloTarea)
    setId(item.id)
}

const editarTarea= (e) =>{
    e.preventDefault()
    const NuevoArray = listatareas.map (item => item.id=== id ? {id:id, tituloTarea:tarea}: item)
    setlistaTareas(NuevoArray)
    setModoEdicion(false)
    
    setTareas('')
}



    return (
<div>
<h2>Aplicacion Tareas</h2>
<div className="row">
    <div className='col'>
    <ul className= "list-group">
       {
         listatareas.map(item =>
            <li key="{item.id}" className="list-group-item">{item.tituloTarea}
           <button  className="btn btn-outline-danger float-right" onClick={()=> {deleteTarea(item.id)}}>
            Borrar
           </button>

           <button  className="btn btn-info float-right" onClick={()=> {editar(item)}}>
            Editar
           </button>
            </li>

            )
       }
    </ul>
    </div>

   
    <div className="col"> <h2>Añade tareas</h2></div>
    <form onSubmit={modoEdicion ? editarTarea : addTarea} className="form-group">
       <input onChange={(e)=>{setTareas(e.target.value)}} className="form-control mb-3" type= "text" placeholder="Introduce tarea" value={tarea} />
      
      
       <input className="btn btn-info btn-block" type= "submit" value={setModoEdicion ? 'Editar Tarea' : 'Registrar Descripcion'}/> 

       <input onChange={(e)=>{setTareas(e.target.value)}} className="form-control mb-3" type= "text" placeholder="Introduce Fecha" value={tarea} />
      
       <input className="btn btn-info btn-block" type= "submit" value={setModoEdicion ? 'Editar Fecha' : 'Registrar Descripcion'}/> 
      

       <input onChange={(e)=>{setTareas(e.target.value)}} className="form-control mb-3" type= "text" placeholder="Introduce Descripcion" value={tarea} />
      
      
       <input className="btn btn-info btn-block" type= "submit" value={setModoEdicion ? 'Editar Descripcion' : 'Registrar Descripcion'}/>  
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