import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Trainers from './Components/Trainers';
import Plans from './Components/Plans';
import Aboutus from './Components/Aboutus';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Memberhome from './Components/Memberhome';
import Edit from './Components/Edit';
import Allmembers from './Components/Allmembers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/trainers'element={<Trainers/>}></Route>
        <Route path='/plans'element={<Plans/>}></Route>
        <Route path='/aboutus'element={<Aboutus/>}></Route>
        <Route path='/login'element={<Login/>}></Route>
        <Route path='/registration'element={<Registration/>}></Route>
        <Route path='/memberhome'element={<Memberhome/>}></Route>
        <Route path='/edit/:id'element={<Edit/>}></Route>
        <Route path='/allmembers'element={<Allmembers/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
