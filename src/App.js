import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/router/Routes';

import './App.css'


function App() {
  return (
    <Router>
        <Routes />   
    </Router>
  );
}

export default App;