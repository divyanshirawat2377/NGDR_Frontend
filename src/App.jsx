import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import DMS from './DMS';
import Signup from './Signup'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import VisitorCount from './Components/VisitorCount';
import DMSNAV from './Components/DMSNAV';
import ForgotPasswordModal from './Components/ForgotPasswordModal';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/DMS' element={<DMS/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/VisitorCount' element={<VisitorCount/>}/>
        <Route path='/DMSNAV' element={<DMSNAV/>}/>
        <Route path='/Forget' element={<ForgotPasswordModal/>}/>
        <Route path='/fileContext' element={<fileContext/>}/>

  
      </Routes>
    </Router>
  );
}

export default App;