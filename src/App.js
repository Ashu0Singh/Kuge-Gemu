import Homepage from './components/Homepage/Homepage';
import ClanPage from './components/Clan/Clan';
import Login from './components/Login/Login'
import {BrowserRouter as Router, Routes , Route } from  'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' exact element={<Homepage />}/>
            <Route path='/clan' exact element={<ClanPage />}/>
            <Route path='/login' exact element={<Login signUp={false}/>}/>
            <Route path='/signUp' exact element={<Login signUp={true}/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
