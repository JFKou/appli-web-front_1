import { Link, useParams } from "react-router-dom"
import React, { useState,useEffect } from "react"
import axios from "axios"
import Loading from "../../components/loading/Loading"

const EditExtincteurs = () => {
    let {id} = useParams();
    const [loading, setLoading] = useState(true)
    const [inputErrorList, setInputErrorList] = useState({})
    
    const [extincteur, setExtincteur]=useState({})

    useEffect(() => {
        axios.get(`api/extincteurs/${id}`).then(res => {
            console.log(res)
            setExtincteur(res.data);
             setLoading(false);
          })
          .catch(function(error){

            if(error.response){
    
                if(error.response.status === 442){
    
                    setInputErrorList(error.response.data.errors)
                    setLoading(false)
                }
                if(error.response.status === 404){
                    alert(error.response.data.message)
                    setLoading(false)
                }
                if(error.response.status === 500){
                    alert(error.response.data)
                    setLoading(false)
                }
            }
         }); 
      }, [id]);

    const handleInput=(e)=>{
        e.persist();
        setExtincteur({...extincteur, [e.target.name]: e.target.value});

    }

    const updateExtincteur=(e)=>{
        e.preventDefault();

        setLoading(true);
        const data={

            numero_extincteur: extincteur.numero_extincteur,
            date_creation: extincteur.date_creation,
            date_expiration:extincteur.date_expiration,
            categorie_id:extincteur.categorie_id,
            site_id:extincteur.site_id,
        }
 
        axios.put(`api/extincteurs/${id}`,data)
        .then(res => {
            alert(res.data.message)
            setLoading(false)
         })
         .catch(function(error){

            if(error.response){
    
                if(error.response.status === 442){
    
                    setInputErrorList(error.response.data.errors)
                    setLoading(false)
                }
                if(error.response.status === 404){
                    alert(error.response.data.message)
                    setLoading(false)
                }
                if(error.response.status === 500){
                    alert(error.response.data)
                    setLoading(false)
                }
            }
         }); 
    }

     if (loading)
     {
      return (
             <Loading/>
         )
     }        

     if(Object.keys(extincteur).length ===0){
        return(
            <div className="container">
                <h4>Extincteur non trouvé</h4>
            </div>
        )
     }

  return (
   
           <div className="conatiner mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Editer un Extincteur   
                                <Link to='/extincteurs' className="btn btn-primary float-end">
                                    Retour
                                </Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateExtincteur}>
                                <div className="mb-3">
                                    <label>Numero</label>
                                    <input  type="date" name="numero_extincteur" value={extincteur.numero_extincteur} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.numero_extincteur}</span>
                                </div>
                                <div className="mb-3">
                                    <label> Date de creation</label>
                                    <input type="date" name="date_creation" value={extincteur.date_creation} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.date_creation}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Date d'expiration</label>
                                    <input type="text" name="date_expiration" value={extincteur.date_expiration} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.date_expiration}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Catégorie</label>
                                    <input type="categorie_id" name="extincteur" value={extincteur.categorie_id} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.categorie_id}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Site</label>
                                    <input type="number" name="site_id" value={extincteur.site_id} onChange={handleInput}className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.site_id}</span>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary">Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}



export default EditExtincteurs