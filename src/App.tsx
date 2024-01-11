import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form.tsx';
import Signin from "./components/Signin";
import Register from "./components/Register";
import Success from "./components/Success";
import Header from "./components/Header";
import AdminSignin from "./components/AdminSignin"
import AdminView from './components/AdminView'
import NotFound from './components/NotFound.tsx';
import UserProfile from './components/UserProfile.tsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Landing/>}/> */}
          <Route path="/form" element={<><Header /><Form /></>}/>
          <Route path="/success" element={<><Success/></>}/>
          <Route path="/" element={<Signin/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/admin" element={<AdminSignin/>}/>
          <Route path="/adminview" element={<AdminView/>}/>
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="*" Component={NotFound}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App