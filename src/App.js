import './App.css';
import Home from "./components/pages/Home";
import { Routes, Route} from "react-router-dom";
import Header from "./components/pages/block/Header";
import Footer from "./components/pages/block/Footer";
import Contact from "./components/pages/Contact";

function App() {
  return (
  <>
  <div className="container">
<Header/>
  <Routes> 
  <Route exact path="/" element={<Home />} />  
  <Route  path="/contact" element={<Contact />} />  
  </Routes>
<Footer/>
</div>
  
  </>
  );
}

export default App;
