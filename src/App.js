import { BrowserRouter } from 'react-router-dom';
import Routes from './components/router/Routes';

import './App.css'


function App() {
  return (
    <BrowserRouter>
        <Routes />   
    </BrowserRouter>
  );
}

export default App;