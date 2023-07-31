import { faAngleDown, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TableBox = () => {
  return (
<div>
  <div className="table-box">
    <table>
      <thead>
        <tr>
          <th scope="col" width="50px">ID</th>
          <th scope="col" width="100px">Type extincteur</th>
          <th scope="col">Date de creation</th>
          <th scope="col">Date d'expiration</th>
          <th scope="col">Status</th>
          <th scope="col" width="70px">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Account">#1</td>
          <td data-label="Due Date"><img src="image/user-client.png" className="tab-img" alt='' />Classe A</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">03/01/2022</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="pe" />En attente</td>
          <td data-label="Period"><FontAwesomeIcon icon={faGear} className='i-client' />
            &nbsp; 
            <FontAwesomeIcon icon={faAngleDown} className='i-client' /></td>
        </tr>
        <tr className="active-tr">
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src="image/user-client.png" className="tab-img" alt=''/>Classe ABC</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">03/01/2022</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="de" />Entretenu</td>
          <td data-label="Period"><FontAwesomeIcon icon={faGear} className='i-client' />
            &nbsp; 
            <FontAwesomeIcon icon={faAngleDown} className='i-client' /></td>
        </tr>
        <tr>
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src="image/user-client.png" className="tab-img" alt=''/>Classe C</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">03/01/2022</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="pe" />En attente</td>
          <td data-label="Period"><FontAwesomeIcon icon={faGear} className='i-client' />
            &nbsp; 
            <FontAwesomeIcon icon={faAngleDown} className='i-client' /></td>
        </tr>
        <tr>
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src="image/user-client.png" className="tab-img" alt=''/>Classe ABC</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">03/01/2022</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="pe" />En attente</td>
          <td data-label="Period"><FontAwesomeIcon icon={faGear} className='i-client' />
            &nbsp; 
          <FontAwesomeIcon icon={faAngleDown} className='i-client' /></td>
        </tr>
        <tr>
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src="image/user-client.png" className="tab-img" alt=''/>Classe C</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">03/01/2022</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="de" />Dispatch</td>
          <td data-label="Period"><FontAwesomeIcon icon={faGear} className='i-client' />
            &nbsp; 
            <FontAwesomeIcon icon={faAngleDown} className='i-client' /></td>
        </tr>
        {/* <tr>
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src={''} className="tab-img" alt=''/>Classe A</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">03/01/2022</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="pe" />En attente</td>
          <td data-label="Period"><FontAwesomeIcon icon={faGear} className='i-client' />

            &nbsp; 
            <FontAwesomeIcon icon={faAngleDown} className='i-client' /></td>
        </tr> */}
      </tbody>
    </table>
  </div>
  <div className="t-sale">
    <div className="content-box-1">
      <br />	
      <p className="head-1 p-client">Recapitulatifs des entretiens </p>
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill" />
          </div>
          <div className="mask half">
            <div className="fill" />
          </div>
          <div className="inside-circle"> 70% </div>
        </div>
      </div>
    </div>
    <div style={{textAlign: 'center'}}><button className="btn">Veiw All</button></div>
  </div>
</div>


  )
}

export default TableBox