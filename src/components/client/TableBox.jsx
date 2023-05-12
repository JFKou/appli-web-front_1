import React from 'react'

const TableBox = () => {
  return (
<div>
  <div className="table-box">
    <table>
      <thead>
        <tr>
          <th scope="col" width="50px">ID</th>
          <th scope="col" width="100px">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
          <th scope="col" width="70px">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src="image/user.png" className="tab-img" />Manoj</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">$64.00</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="pe" />Pending</td>
          <td data-label="Period"><i className="fa fa-gear ticon" />
            &nbsp; 
            <i className="fa fa-angle-down ticon" /></td>
        </tr>
        <tr className="active-tr">
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src="image/user.png" className="tab-img" />Manoj</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">$64.00</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="de" />Dispatch</td>
          <td data-label="Period"><i className="fa fa-gear  ticon" />
            &nbsp; 
            <i className="fa fa-angle-down ticon" /></td>
        </tr>
        <tr>
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src="image/user.png" className="tab-img" />Manoj</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">$64.00</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="pe" />Pending</td>
          <td data-label="Period"><i className="fa fa-gear ticon" />
            &nbsp; 
            <i className="fa fa-angle-down ticon" /></td>
        </tr>
        <tr>
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src="image/user.png" className="tab-img" />Manoj</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">$64.00</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="pe" />Pending</td>
          <td data-label="Period"><i className="fa fa-gear ticon" />
            &nbsp; 
            <i className="fa fa-angle-down ticon" /></td>
        </tr>
        <tr>
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src="image/user.png" className="tab-img" />Manoj</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">$64.00</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="de" />Dispatch</td>
          <td data-label="Period"><i className="fa fa-gear  ticon" />
            &nbsp; 
            <i className="fa fa-angle-down ticon" /></td>
        </tr>
        <tr>
          <td data-label="Account">#3412</td>
          <td data-label="Due Date"><img src="image/user.png" className="tab-img" />Manoj</td>
          <td data-label="Period">03/01/2022</td>
          <td data-label="Due Date">$64.00</td>
          <td data-label="Amount" style={{position: 'relative'}}><span className="pe" />Pending</td>
          <td data-label="Period"><i className="fa fa-gear ticon" />
            &nbsp; 
            <i className="fa fa-angle-down ticon" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="t-sale">
    <div className="content-box-1">
      <br />	
      <p className="head-1">Total Sale </p>
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