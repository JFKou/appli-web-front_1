import './App.css';

//Imports components
import Navigation from './composants/Naviagtion'; // Correction du nom du fichier
import Register from './composants/authentification/Register';
// import Login from './composants/authentification/Login';
import  'bootstrap/dist/css/bootstrap.min.css' ;



function App() {
  return (
    <div className="App">
     <Navigation/>
      <Register/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
