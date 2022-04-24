import './App.css';
import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Lona from './components/Lona';


function App() {
  const [estado, setEstado] = React.useState(false);


  const toggle = () => {
    setEstado(prevEstado=> !prevEstado)
  }
  
  return (
    <div className="App">
      <Header toggle={toggle}/>
      
      {estado && <Main/>}
   
      {!estado && <Lona />}
      
      <Footer/>
    </div>
  );
}

export default App;
