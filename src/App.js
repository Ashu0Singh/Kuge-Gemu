import Homepage from './components/Homepage/Homepage';
import ClanPage from './components/Clan/Clan';
import Login from './components/Login/Login'
import {Routes , Route } from  'react-router-dom'

function App() {
  return (
    <div>
        <Routes>
            <Route path='/Kuge-Gemu/' exact element={<Homepage />}/>
            <Route path='/Kuge-Gemu/clan' exact element={<ClanPage />}/>
            <Route path='/Kuge-Gemu/login' exact element={<Login signUp={false}/>}/>
            <Route path='/Kuge-Gemu/signUp' exact element={<Login signUp={true}/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
