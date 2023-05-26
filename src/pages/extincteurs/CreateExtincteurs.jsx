import { Link,useHistory } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"
import Loading from "../../components/loading/Loading"


const CreateExtincteurs = () => {

    const [loading, setLoading] = useState(false)

    const [inputErrorList, setInputErrorList] = useState({})

    const [extincteur, setExtincteur]=useState(
        {
            numero_extincteur:'',
            date_creation:'',
            date_expiration:'',
            categorie_id:'',
            site_id:''
        })
    const handleInput = (e) =>{
        e.persist();
        setExtincteur({ ...extincteur, [e.target.name]: e.target.value });

        // setExtincteur({...extincteur, [e.target.numero_extincteur]: e.target.value})
    }
    const history = useHistory();
    const saveExtincteur = (e) => {

        e.preventDefault();

        setLoading(true);

        const data={
            numero_extincteur: extincteur.numero_extincteur,
            date_creation: extincteur.date_creation,
            date_expiration:extincteur.date_expiration,
            categorie_id:extincteur.categorie_id,
            site_id:extincteur.site_id,
        }
        axios.post(`api/extincteurs`,data).then()
        .then(res => {

           alert(res.data.message);
           history.push('/extincteurs')
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
                            <h4>Ajouter un Extincteur
                                <Link to='/extincteurs' className="btn btn-primary float-end">Retour</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={saveExtincteur}>
                                <div className="mb-3">
                                    <label>Numéro</label>
                                    <input type="date" name="numero_extincteur" value={extincteur.numero_extincteur} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.numero_extincteur}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Date de création</label>
                                    <input type="date" name="date_creation" value={extincteur.date_creation} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.date_creation}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Date de fin</label>
                                    <input type="text" name="date_expiration" value={extincteur.date_expiration} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.date_expiration}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Catégorie</label>
                                    <input type="number" name="categorie_id" value={extincteur.categorie_id} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.categorie_id}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Site</label>
                                    <input type="number" name="site_id" value={extincteur.site_id} onChange={handleInput}className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.site_id}</span>
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

export default CreateExtincteurs