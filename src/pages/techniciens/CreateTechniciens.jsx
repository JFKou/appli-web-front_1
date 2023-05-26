import { Link,useHistory } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"
import Loading from "../../components/loading/Loading"


const CreateTechniciens = () => {

    const [loading, setLoading] = useState(false)

    const [inputErrorList, setInputErrorList] = useState({})

    const [technicien, setTechnicien]=useState(
        {
            nom_technicien:'',
            prenom_technicien:'',
            email_technicien:'',
            adresse_technicien:'',
            telephone_technicien:''
        })
    const handleInput = (e) =>{
        e.persist();
        setTechnicien({ ...technicien, [e.target.name]: e.target.value });

        // setTechnicien({...technicien, [e.target.nom_technicien]: e.target.value})
    }
    const history = useHistory();
    const saveTechnicien = (e) => {

        e.preventDefault();

        setLoading(true);

        const data={
            nom_technicien: technicien.nom_technicien,
            prenom_technicien: technicien.prenom_technicien,
            email_technicien:technicien.email_technicien,
            adresse_technicien:technicien.adresse_technicien,
            telephone_technicien:technicien.telephone_technicien,
        }
        axios.post(`api/techniciens`,data).then()
        .then(res => {

           alert(res.data.message);
           history.push('/techniciens')
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
                            <h4>Ajouter un Technicien
                                <Link to='/techniciens' className="btn btn-primary float-end">Retour</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={saveTechnicien}>
                                <div className="mb-3">
                                    <label>Nom</label>
                                    <input type="date" name="nom_technicien" value={technicien.nom_technicien} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.nom_technicien}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Prénom(s)</label>
                                    <input type="date" name="prenom_technicien" value={technicien.prenom_technicien} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.prenom_technicien}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Emails</label>
                                    <input type="text" name="email_technicien" value={technicien.email_technicien} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.email_technicien}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Adresse</label>
                                    <input type="number" name="adresse_technicien" value={technicien.adresse_technicien} onChange={handleInput} className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.adresse_technicien}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Téléphone</label>
                                    <input type="number" name="telephone_technicien" value={technicien.telephone_technicien} onChange={handleInput}className="form-control"></input>
                                    <span className="text-danger">{inputErrorList.telephone_technicien}</span>
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

export default CreateTechniciens