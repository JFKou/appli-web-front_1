import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "../../components/loading/Loading"
import { faAdd, faDeleteLeft, faFileEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Contrats=()=>{

    const [loading, setLoading] = useState(true);

    const [contrats, setContrats] = useState([]);
     
    

    useEffect(() => {
        axios.get(`api/contrats`).then(res => {
            console.log(res)
            setContrats(res.data);
            setLoading(false);
          });
      }, []); // <== ici, le tableau de dépendances est vide, donc l'effet ne s'exécute qu'une seule fois   
      
      const deleteContrat=(e,id)=>{
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Suppression ...";

        axios.delete(`api/contrats/${id}`)
        .then(res => {

            alert(res.data.message)
            thisClicked.closest("Contrat supprimés avec succès").remove();

          })
         .catch(function(error){

            if(error.response){

                if(error.response.status === 404){
                    alert(error.response.data.message)
                    thisClicked.innerText = "Supprimer";
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
      var contratDetails = "";
      if (contrats && contrats.length) {
        contratDetails = contrats.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.date_debut}</td>
              <td>{item.date_fin}</td>
              <td>{item.clause}</td>
              <td>
                <Link to={`/contrats/${item.id}`} className="btn btn-success"><FontAwesomeIcon icon={faFileEdit}/></Link>
              </td>
              <td>
                <button type="button" onClick={(e)=>deleteContrat(e, item.id)} className="btn btn-danger"><FontAwesomeIcon icon={faDeleteLeft}/></button>
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
                            <h4>Listes des contrats
                                <Link to='/contrats/add' className="btn btn-primary float-end"><FontAwesomeIcon icon={faAdd}/></Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date du debut</th>
                                        <th>Date de fin</th>
                                        <th>clauses</th>
                                        <th>Editer</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contratDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contrats;