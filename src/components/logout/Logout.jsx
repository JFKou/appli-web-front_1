import React from 'react';


import {Link, useHistory} from 'react-router-dom';

import swal from 'sweetalert';

import axios from 'axios';

function Logout(){

    const history = useHistory();
    const logoutSubmit = (e) => {
    e.preventDefault();
 
    axios.post(`/api/logout`).then(res => {
        if(res.data.status === 200)
        {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        swal("Success",res.data.message,"success");
        history.push('/');
        }
        });
        
        }
        var AuthButtons = '';
        if(!localStorage.getItem('auth_token'))
        {
        AuthButtons = (
        <li className="nav-item">
        <button type="button" onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white">Logout</button>
        </li>
        );
        }

        return(
            <div>
                
            {AuthButtons}
         
            </div>
        );
        }
export default Logout