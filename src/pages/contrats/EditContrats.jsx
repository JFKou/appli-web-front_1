import { Link, useParams } from "react-router-dom"
import React, { useState,useEffect } from "react"
import axios from "axios"
import Loading from "../../components/loading/Loading"


const EditContrats = () => {
    let {id} = useParams();

    const [loading, setLoading] = useState(true)
    const [inputErrorList, setInputErrorList] = useState({})
    const [contrat, setContrat]=useState({})

    useEffect(() => {
        axios.get(`api/contrats/${id}`).then(res => {
            console.log(res)
            setContrat(res.data);
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
        setContrat({...contrat, [e.target.name]: e.target.value});

    }

    const updateContrat=(e)=>{
        e.preventDefault();

        setLoading(true);
        const data={

            date_debut: contrat.date_debut,
            date_fin: contrat.date_fin,
            clause:contrat.clause,
        }
 
        axios.put(`api/contrats/${id}`,data)
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

     if(Object.keys(contrat).length ===0){
        return(
            <div className="container">
                <h4>Contrat non trouvé</h4>
            </div>
        )
     }

  return (
   
           <div className="conatiner mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Editer un Contrat   
                                <Link to='/contrats' className="btn btn-primary float-end">
                                    Retour
                                </Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateContrat}>
                                <div className="mb-3">
                                    <label>Date de debut</label>
                                    <input  type="date" name="date_debut" value={contrat.date_debut} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.date_debut}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Date de fin</label>
                                    <input type="date" name="date_fin" value={contrat.date_fin} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.date_fin}</span>
                                </div>
                                <div className="mb-3">
                                    <label>clauses</label>
                                    <input type="text" name="clause" value={contrat.clause} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.clause}</span>
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

export default EditContrats