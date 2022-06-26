import React from 'react';
import './App.scss';
import QuoteBox from './components/QuoteBox';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div id='wrapper'>
        <QuoteBox />
        <Footer />
      </div>
    );
  }
};

export default App;
