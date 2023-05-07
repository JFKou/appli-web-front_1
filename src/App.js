import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';

import './App.css'


function App() {
  return (
    <Router>
      <div>
        <Routes />
      </div>
    </Router>
  );
}

export default App;