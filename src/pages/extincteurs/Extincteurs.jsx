import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import './extincteurs.css'
import Loading from "../../components/loading/Loading"




const Extincteurs=()=>{

    const [loading, setLoading] = useState(true);

    const [extincteurs, setExtincteurs] = useState([]);
     
    

    useEffect(() => {
        axios.get(`api/extincteurs`).then(res => {
            console.log(res)
            setExtincteurs(res.data);
            setLoading(false);
          });
      }, []); // <== ici, le tableau de dépendances est vide, donc l'effet ne s'exécute qu'une seule fois   
      
      const deleteExtincteur=(e,id)=>{
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Suppression ...";

        axios.delete(`api/extincteurs/${id}`)
        .then(res => {

            alert(res.data.message)
            thisClicked.closest("Extincteur supprimées avec succès").remove();

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
      var extincteurDetails = "";
      if (extincteurs && extincteurs.length) {
        extincteurDetails = extincteurs.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.numero_extincteur}</td>
              <td>{item.date_creation}</td>
              <td>{item.date_expiration}</td>
              <td>{item.categorie_id}</td>
              <td>{item.site_id}</td>
              <td>
                <Link to={`/extincteurs/${item.id}`} className="btn btn-success"> Editer</Link>
              </td>
              <td>
                <button type="button" onClick={(e)=>deleteExtincteur(e, item.id)} className="btn btn-danger">Supprimer</button>
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
                            <h4>Listes des extincteurs
                                <Link to='/extincteurs/add' className="btn btn-primary float-end">Ajouter une Extincteur</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>numero de l'extincteur</th>
                                        <th>Date de création</th>
                                        <th>Date d'expiration</th>
                                        <th>Catégorie </th>
                                        <th>Site</th>
                                        <th>Editer</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {extincteurDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extincteurs;