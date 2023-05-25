import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import './techniciens.css'
import Loading from "../../components/loading/Loading"




const Techniciens=()=>{

    const [loading, setLoading] = useState(true);

    const [techniciens, setTechniciens] = useState([]);
     
    

    useEffect(() => {
        axios.get(`api/techniciens`).then(res => {
            console.log(res)
            setTechniciens(res.data);
            setLoading(false);
          });
      }, []); // <== ici, le tableau de dépendances est vide, donc l'effet ne s'exécute qu'une seule fois   
      
      const deleteTechnicien=(e,id)=>{
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Suppression ...";

        axios.delete(`api/techniciens/${id}`)
        .then(res => {

            alert(res.data.message)
            thisClicked.closest("Technicien supprimées avec succès").remove();

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
      var technicienDetails = "";
      if (techniciens && techniciens.length) {
        technicienDetails = techniciens.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.nom_technicien}</td>
              <td>{item.prenom_technicien}</td>
              <td>{item.email_technicien}</td>
              <td>{item.adresse_technicien}</td>
              <td>{item.telephone_technicien}</td>
              <td>
                <Link to={`/techniciens/${item.id}`} className="btn btn-success"> Editer</Link>
              </td>
              <td>
                <button type="button" onClick={(e)=>deleteTechnicien(e, item.id)} className="btn btn-danger">Supprimer</button>
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
                            <h4>Listes des techniciens
                                <Link to='/techniciens/add' className="btn btn-primary float-end">Ajouter une Technicien</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nom </th>
                                        <th>Prenom</th>
                                        <th>Email</th>
                                        <th>Adresse</th>
                                        <th>Telephone</th>
                                        <th>Editer</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {technicienDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techniciens;