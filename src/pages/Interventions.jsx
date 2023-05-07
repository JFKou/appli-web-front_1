import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//  import './interventions.css'
import Loading from "../components/loading/Loading";

function Interventions(){

    const [loading, setLoading] = useState([true]);

    const [interventions, setInterventions] = useState([]);


    useEffect(() => {
        axios.get(`api/interventions`)
          .then(res => {
            console.log(res)
            setInterventions(res.data.interventions);
             setLoading(false);
          });
      }, []); // <== ici, le tableau de dépendances est vide, donc l'effet ne s'exécute qu'une seule fois
      
      if (loading){
            return (
             <Loading/>
            )
      }

    var interventionDetails = "";
    interventionDetails = interventions && interventions.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.date_intervention}</td>
                <td>{item.date_proch_intervention}</td>
                <td>{item.notes_intervention}</td>
                <td>{item.extincteur_id}</td>
                <td>{item.technicien_id}</td>
                <td>
                    <Link to="/edit"> Editer</Link>
                </td>
                <td>
                    <button className="btn btn-danger">Supprimer</button>
                </td>

            </tr>
        )
    });

    return(
        <div className="conatiner mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Listes des interventions
                                <Link to='/addintervention' className="btn btn-primary float-end">Ajouter une Intervention</Link>
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
                                        <th>Extincteur entrentenu</th>
                                        <th>Technicien_id</th>
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