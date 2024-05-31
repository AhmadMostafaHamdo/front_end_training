import { Route, Routes } from 'react-router-dom';
import './styles/index.css';
import './styles/login.css';
import Init from './website/Init'
import Logout from './website/Logout'
import Verfiy from './website/Verfiy'
import Login from './website/auth/Login'
import Register from './website/auth/Register'

export default function App() {
  return (
       <Routes>
        <Route path='/verfiy' element={<Verfiy/>}/>
        <Route path='/front_end_training' element={<Init/>}>
         <Route path='login' element={<Login/>}/>
         <Route path='logout' element={<Logout/>}/>
         <Route path='register' element={<Register/>}/>
        </Route>
     </Routes>

  )
}