
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Project from './components/projects/Project';
import Events from './components/events/Events';
import Team from './components/team/Team';
import Story from './components/story/Story';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
					<Route path="/projects"element={<Project/>} />
					<Route path="/events" element={<Events/>} />
					<Route path="/team" element={<Team/>} />
					<Route path="/story" element={<Story/>} />
					
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
