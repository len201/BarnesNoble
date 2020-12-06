import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from'./screens/HomeScreen'
import ProductScreen from'./screens/ProductScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
      <Container>
      <h1>Welcome to Barnes & Noble</h1>
      </Container>
      <Container>
        <Route path='/' component={HomeScreen} exact />
        {/* :id as the placeholder */}
        <Route path='/product/:id' component={ProductScreen} />      
      </Container>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
