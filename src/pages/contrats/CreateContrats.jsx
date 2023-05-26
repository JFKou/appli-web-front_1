import { Link,useHistory } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"
import Loading from "../../components/loading/Loading"


const CreateContrats = () => {

    const [loading, setLoading] = useState(false)

    const [inputErrorList, setInputErrorList] = useState({})

    const [contrat, setContrat]=useState(
        {
            date_debut:'',
            date_fin:'',
            clause:'',
        })
    const handleInput = (e) =>{
        e.persist();
        setContrat({ ...contrat, [e.target.name]: e.target.value });

        // setContrat({...contrat, [e.target.date_debut]: e.target.value})
    }
    const history = useHistory();
    const saveContrat = (e) => {

        e.preventDefault();

        setLoading(true);

        const data={
            date_debut: contrat.date_debut,
            date_fin: contrat.date_fin,
            clause:contrat.clause,
        }
        axios.post(`api/contrats`,data).then()
        .then(res => {

           alert(res.data.message);
           history.push('/contrats')
           setLoading(false)

        })
        .catch(function(error){
           if(error.response){

               if(error.response.status === 442){
                   setInputErrorList(error.response.data.errors)
                   setLoading(false)
               }
               if(error.response.status === 500){
                   alert(error.response.data)
                   setLoading(false)
               }
           }
        }); 
    }

        if (loading){
            return(
                <Loading/>
            )
        }

  return (
    <div>
           <div className="conatiner mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Ajouter un contrat
                                <Link to='/contrats' className="btn btn-primary float-end">Retour</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={saveContrat}>
                                <div className="mb-3">
                                    <label>Date de début</label>
                                    <input type="date" name="date_debut" value={contrat.date_debut} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.date_debut}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Date de fin</label>
                                    <input type="date" name="date_fin" value={contrat.date_fin} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.date_fin}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Clauses</label>
                                    <input type="text" name="clause" value={contrat.clause} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.clause}</span>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary">Enregisgtrer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateContrats