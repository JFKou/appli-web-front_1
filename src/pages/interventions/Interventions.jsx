import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'


import './interventions.css'
import Loading from "../../components/loading/Loading"




const Interventions=()=>{

    const [loading, setLoading] = useState(true);

    const [interventions, setInterventions] = useState([]);
     

    useEffect(() => {
        axios.get(`api/interventions`).then(res => {
            console.log(res)
            setInterventions(res.data);
             setLoading(false);
          });
      }, []); // <== ici, le tableau de dépendances est vide, donc l'effet ne s'exécute qu'une seule fois   
      
      const deleteIntervention=(e,id)=>{
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting ...";

        axios.delete(`api/interventions/${id}/delete`)
        .then(res => {

            alert(res.data.message)
            thisClicked.closest("tr").remove();

          })
         .catch(function(error){

            if(error.response){
    

                if(error.response.status === 404){
                    alert(error.response.data.message)
                    thisClicked.innerText = "Delete";
                  }
                if(error.response.status === 500){
                    alert(error.response.data)
                }
            }
         }); 
      
      }

      if (loading){
            return (
                <div>
                      <Loading/>
                </div>
            )
      }
      var interventionDetails = "";
      if (interventions && interventions.length) {
        interventionDetails = interventions.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.date_intervention}</td>
              <td>{item.date_proch_intervention}</td>
              <td>{item.notes_intervention}</td>
              <td>{item.extincteur_id}</td>
              <td>{item.technicien_id}</td>
              <td>
                <Link to={`/interventions/${item.id}/edit`} className="btn btn-danger"> Editer</Link>
              </td>
              <td>
                <button type="button" onClick={(e)=>deleteIntervention(e, item.id)} className="btn btn-danger">Supprimer</button>
              </td>
            </tr>
          )
        });
      }      
    return(
            <div className="conatiner mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Listes des interventions
                                <Link to='/interventions/add' className="btn btn-primary float-end">Ajouter une Intervention</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date de l'intervention</th>
                                        <th>Prochaine Intervention</th>
                                        <th>Notes de l'intervention</th>
                                        <th>Extincteur </th>
                                        <th>Technicien</th>
                                        <th>Editer</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {interventionDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interventions;