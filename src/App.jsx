import { useState } from 'react'
import Form from './components/Form';
import Nav from './components/Nav';
import Header from './components/Header';
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';
import Footer from './components/Footer';
import './App.css'

function App(){
  return(
    <div class="corpo">
      <Nav />
      <Header />
      <SobreMim />
      <Projetos />
      <Form /> 
      <Footer />
    </div>
    
  )
}

export default App;