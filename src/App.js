import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import ClientDashboard from './pages/ClientDashboard';



function App() {
  return (
    <Router>
      <div>
        {/* <Routes /> */}
        <ClientDashboard/>
      </div>
    </Router>
  );
}

export default App;