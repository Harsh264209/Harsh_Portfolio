
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AdminDashboard from './Components/Admin/AdminDashboard';
import ProjectContact from './Pages/ProjectContact/ProjectContact';
import HomePage from './Components/Homepage/Homepage';
import Contact from './Pages/Contact/Contact';
import FetchUsers from './Pages/fetchUsers/FetchUsers';
import Inquiries from './Pages/Inquiries/Inquiries';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app" >
     
   
    <Routes>
    <Route exact path="/" element={<Home/>}/>
      <Route exact path="/project-details" element={<ProjectContact/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/users" element={<FetchUsers/>}/>
      <Route exact path="/inquiries" element={<Inquiries/>}/>
    </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
