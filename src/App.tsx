import './App.scss';
import QuoteBox from './components/Quote/QuoteBox';
import Footer from './shared/Footer';

const App = () => {
  return (
    <div id='wrapper'>
      <QuoteBox />
      <Footer />
    </div>
  );
};

export default App;
