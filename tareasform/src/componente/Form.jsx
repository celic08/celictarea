import React,{useState} from 'react'
import uniqid from 'uniqid'

const Form = () =>{

const [nombre, setNombre] = useState('')
const [listanombres, setlistaNombres] = useState([])
const [modoEdicion, setModoEdicion] = useState(false)
const [id, setId] = useState('')
const [error, setError] = useState(null)

const addNombre = (e)=> { 
    e.preventDefault()
    if (!nombre.trim()){
        setError('El campo nombre esta vacio')
        return
    }
    const nuevoNombre = {
        id: uniqid(),
        tituloNombre:nombre
    }
    setlistaNombres([...listanombres,nuevoNombre])
setNombre('')
setError(null)

}

const deleteNombre = (id) =>{
    const nuevaArray = listanombres.filter(item => item.id !== id )
    setlistaNombres(nuevaArray)

}
const editar=(item ) =>{
    setModoEdicion(true)
  
    setNombre(item.tituloNombre)
    setId(item.id)
}

const editarNombre= (e) =>{
    e.preventDefault()
    const NuevoArray = listanombres.map (item => item.id=== id ? {id:id, tituloNombre:nombre}: item)
    setlistaNombres(NuevoArray)
    setModoEdicion(false)
    
    setNombre('')
}



    return (
<div>
<h2>Aplicacion Tareas</h2>
<div className="row">
    <div className='col'>
    <ul className= "list-group">
       {
         listanombres.map(item =>
            <li key="{item.id}" className="list-group-item">{item.tituloNombre}
           <button  className="btn btn-danger float-right" onClick={()=> {deleteNombre(item.id)}}>
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
    <form onSubmit={modoEdicion ? editarNombre : addNombre} className="form-group">
       <input onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-3" type= "text" placeholder="Introduce tarea" value={nombre} />
      
      
       <input className="btn btn-info btn-block" type= "submit" value={setModoEdicion ? 'Editar Descripcion' : 'Registrar Descripcion'}/> 

       <input onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-3" type= "text" placeholder="Introduce Fecha" value={nombre} />
      
       <input className="btn btn-info btn-block" type= "submit" value={setModoEdicion ? 'Editar Descripcion' : 'Registrar Descripcion'}/> 
      

       <input onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-3" type= "text" placeholder="Introduce Descripcion" value={nombre} />
      
      
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