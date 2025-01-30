import './App.css';
import Destinations from './Components/Destinations/Destinations';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Middle from './Components/Middle/Middle';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Questions from './Components/Questions/Questions';
import Reviews from './Components/Reviews/Reviews';
import Subscribe from './Components/Subscribe/Subscribe';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <Destinations />
      <Portfolio />
      <Reviews />
      <Questions />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;