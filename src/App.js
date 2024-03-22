import './App.css';
import AdvertismentBar from './components/AdvertismentBar/AdvertismentBar';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import TextAd from './components/TextAd/TextAd';
import Slideshow from './components/slideshow/slideshow';
import Handmade from './components/handmade/handmade';
import NewProducts from './components/NewProducts/NewProducts';

function App() {
  return (
    <div className="App">
      <AdvertismentBar/>
      <Header/>
      <Carousel/>
      <TextAd/>
      <Slideshow/>
      <Handmade/>
      <NewProducts/>
    </div>
  );
}

export default App;
