import { useEffect, useState } from "react";

function MiApi ()  {
    //settear hooks (useState)
    const [ actores, setActores ] = useState([]);
    const [buscarActores, setBuscarActores] = useState("");
    
    //funcion para traer dato de la api
    const consultarInfo = async() => {
        const url='https://bobsburgers-api.herokuapp.com/characters/';
        const response = await fetch(url)
        const data = await response.json ()
        //console.log(data)
        setActores(data)
    }
    
    useEffect(() => {
        consultarInfo(); 
    }, []);
    
    //funcion de busqueda
    const buscar = (e) => {
        setBuscarActores(e.target.value)
    }

    //metodo de filtrado 1
    const results = !buscarActores ? actores : actores.filter((e) => e.name.toLowerCase().startsWith(buscarActores.toLocaleLowerCase()));
    
    //meto de filtrado 2
    /*let results = []
    if(!buscarActores)
    {
        results = actores
    }else{
        results = actores.filter((i) =>
        i.name.toLowerCase().includes(buscarActores.toLocaleLowerCase())
        )
    }*/
      
   
    //renderizamos la vista
    return (
        <div className="container"> 
            <div>
                <form className="d-flex">
                    <h3>Busca tu personaje favorito</h3>
                    <input type="text" placeholder="Buscar personaje" value={buscarActores} onChange={buscar} className="form-control"/>
                </form>
            </div>        
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ">
                {results.map((actores) =>(
                    <div >
                        <div className="card-group" style={{width:'20rem'}} key={actores.id} >
                                <div className="card ">
                                            
                                    <img className="img2" src={actores.image} alt="imagenes de actores" width={100}/>
                                                    
                                    <div className="card2">
                                        <div className="card-title">
                                            <h3>Nombre: {actores.name}</h3>
                                        </div>
                                        <div className="card-text">
                                            <h4>Primer episodio:{actores.firstEpisode}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                    </div>
                ))}
                
            </div>        
            
        </div>
            
          
    ) 
}

export default MiApi;