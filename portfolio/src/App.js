import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Contact from './components/contact/contactMe';
import About from './components/about';
// import Container from './components/container';
import PortfolioCardGroup from './components/portfolioContent/portfolioCardGroup';
// import PortfolioContainer from './components/portfolioContent/portfolioContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
     <NavBar/>
    {/* <Container> */}
    <div className='container'>

      <About/>
      <br/>
      {/* <PortfolioContainer> */}
        <PortfolioCardGroup/> 
      {/* </PortfolioContainer> */}
      <Contact/>
    {/* </Container> */}
    </div>

    {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
