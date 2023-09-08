import { Link,useHistory } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"
import Loading from "../../../components/loading/Loading"


const CreateInterventions = () => {

    const [loading, setLoading] = useState(false)

    const [inputErrorList, setInputErrorList] = useState({})

    const [intervention, setIntervention]=useState(
        {
            date_intervention:'',
            date_proch_intervention:'',
            notes_intervention:'',
            extincteur_id:'',
            technicien_id:''
        })
    const handleInput = (e) =>{
        e.persist();
        setIntervention({ ...intervention, [e.target.name]: e.target.value });

        // setIntervention({...intervention, [e.target.date_intervention]: e.target.value})
    }
    const history = useHistory();
    const saveIntervention = (e) => {

        e.preventDefault();

        setLoading(true);

        const data={
            date_intervention: intervention.date_intervention,
            date_proch_intervention: intervention.date_proch_intervention,
            notes_intervention:intervention.notes_intervention,
            extincteur_id:intervention.extincteur_id,
            technicien_id:intervention.technicien_id,
        }
        axios.post(`api/interventions`,data).then()
        .then(res => {

        //    alert(res.data.message);
           history.push('/interventions')
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
                            <h4>Ajouter une Intervention
                                <Link to='/interventions' className="btn btn-primary float-end">Retour</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={saveIntervention}>
                                <div className="mb-3">
                                    <label>Date de l'intervention</label>
                                    <input type="date" name="date_intervention" value={intervention.date_intervention} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.date_intervention}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Prochaine Intervention</label>
                                    <input type="date" name="date_proch_intervention" value={intervention.date_proch_intervention} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.date_proch_intervention}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Notes</label>
                                    <input type="text" name="notes_intervention" value={intervention.notes_intervention} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.notes_intervention}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Extincteur</label>
                                    <input type="number" name="extincteur_id" value={intervention.extincteur_id} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.extincteur_id}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Technicien</label>
                                    <input type="number" name="technicien_id" value={intervention.technicien_id} onChange={handleInput}className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.technicien_id}</span>
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

export default CreateInterventions