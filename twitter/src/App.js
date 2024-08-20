
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Explore from './components/Explore.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Navigate,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
    <div className="App">
      <div className="row">
        <div className="col-4" style={{borderRight:"1px rgb(54, 54, 54) solid",width:"432px"}}>
       
    <Navbar/>
    </div>
   
    <div className="col-5" style={{width:"600px"}}>
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
          { <Route path="/explore" element={<Explore />}/>

          /*<Route path="/about" element={<About />}/> */}
         </Routes>
        </div>
        </div>
    </div>
    </>
    </Router>
  );
}


export default App;
