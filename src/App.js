import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Component/loginPAge/LoginPage';
import ForgetPass from './Component/ForgetPass/ForgetPass';
import RegisteredMember from "./Component/registeredMembers/RegisteredMember"
import Home from './Component/Home/Home';
import Darshboard from './Component/Dashboard/Darshboard';
import Placeorder from './Component/PlaceOrder/Placeorder';
import useFirebase from './Hook/useFirebase';

function App() {
  const{user,loading} = useFirebase();
  return (
    <div className="App w-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgetpassword" element={<ForgetPass />} />
          <Route path="/dashboard" element={<Darshboard />} />
         
          <Route path="/placeorder/:serviceId"  element={loading?    <p className="placeholder-glow">
  <span className="placeholder col-6"></span>
  <span className="placeholder col-8"></span>
  <span className="placeholder col-11"></span>
  <span className="placeholder col-5"></span>
  <span className="placeholder col-7"></span>
  <span className="placeholder col-9"></span>
  <span className="placeholder col-4"></span>
  <span className="placeholder col-8"></span>
  <span className="placeholder col-11"></span>
  <span className="placeholder col-9"></span>
  <span className="placeholder col-10"></span>
</p>: user.email ?<Placeorder />: <Navigate to="/login"/>}  />
          <Route path="/Myorder"  element={loading?    <p className="placeholder-glow">
  <span className="placeholder col-6"></span>
  <span className="placeholder col-8"></span>
  <span className="placeholder col-11"></span>
  <span className="placeholder col-5"></span>
  <span className="placeholder col-7"></span>
  <span className="placeholder col-9"></span>
  <span className="placeholder col-4"></span>
  <span className="placeholder col-8"></span>
  <span className="placeholder col-11"></span>
  <span className="placeholder col-9"></span>
  <span className="placeholder col-10"></span>
</p>: user.email ?<RegisteredMember />: <Navigate to="/login"/>}  />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
