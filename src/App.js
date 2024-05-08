import './App.css';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar title="Developer"></Navbar>
      <Routes>
        <Route path='/' element={<Home firstname="Javeriya" lastname="Zubair" jobTitle="Front End Web Developer"></Home>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    </>
  );
}

export default App;