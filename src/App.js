import logo from './logo.svg';
import './App.css';
import AdvertismentBar from './components/AdvertismentBar/AdvertismentBar';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import TextAd from './components/TextAd/TextAd';

function App() {
  return (
    <div className="App">
      <AdvertismentBar/>
      <Header/>
      <Carousel/>
      <TextAd/>
    </div>
  );
}

export default App;
