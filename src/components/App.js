import { useState } from 'react'
import '../App.css';

//components
import Navbar from './Navbar'
import CardContainer from './CardContainer'
import About  from './About'

function App() {

  const [view, setView] = useState("Home");

  console.log("rendering App")
  return (
    <>
      <Navbar setView={setView}/>
      {view === "Profile" ? <CardContainer /> : null } 
      {view === "About" ? <About /> : null}
      {view === "Home" ? <h3>We are home page</h3> : null}
    </>
  );
}

export default App;
