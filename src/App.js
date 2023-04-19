import './App.css';
import HeroBanner from './HeroBanner';
import About from './components/About';
import Footer from './components/Footer';
import Grid from './components/Grid';
import PictCarousel from './components/PictCarousel';
import Quote from './components/Quote';
import Video from './components/Video';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <HeroBanner/>
      <About/>
      <Quote/>
      <Grid/>
      <PictCarousel/>
      <Video/>
      <Footer/>

    </div>
  );
}

export default App;
