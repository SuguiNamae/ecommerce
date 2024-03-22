import logo from './logo.svg';
import './App.css';
import AdvertismentBar from './components/AdvertismentBar/AdvertismentBar';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import TextAd from './components/TextAd/TextAd';
import Slideshow from './components/slideshow/slideshow';

function App() {
  return (
    <div className="App">
      <AdvertismentBar/>
      <Header/>
      <Carousel/>
      <TextAd/>
      <Slideshow/>
    </div>
  );
}

export default App;
