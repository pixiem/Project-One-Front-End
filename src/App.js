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
         
          <Route path="/placeorder/:serviceId"  element={loading?    <p class="placeholder-glow">
  <span class="placeholder col-6"></span>
  <span class="placeholder col-8"></span>
  <span class="placeholder col-11"></span>
  <span class="placeholder col-5"></span>
  <span class="placeholder col-7"></span>
  <span class="placeholder col-9"></span>
  <span class="placeholder col-4"></span>
  <span class="placeholder col-8"></span>
  <span class="placeholder col-11"></span>
  <span class="placeholder col-9"></span>
  <span class="placeholder col-10"></span>
</p>: user.email ?<Placeorder />: <Navigate to="/login"/>}  />
          <Route path="/Myorder"  element={loading?    <p class="placeholder-glow">
  <span class="placeholder col-6"></span>
  <span class="placeholder col-8"></span>
  <span class="placeholder col-11"></span>
  <span class="placeholder col-5"></span>
  <span class="placeholder col-7"></span>
  <span class="placeholder col-9"></span>
  <span class="placeholder col-4"></span>
  <span class="placeholder col-8"></span>
  <span class="placeholder col-11"></span>
  <span class="placeholder col-9"></span>
  <span class="placeholder col-10"></span>
</p>: user.email ?<RegisteredMember />: <Navigate to="/login"/>}  />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
