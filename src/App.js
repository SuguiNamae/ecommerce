import logo from './logo.svg';
import './App.css';
import AdvertismentBar from './components/AdvertismentBar/AdvertismentBar';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';

function App() {
  return (
    <div className="App">
      <AdvertismentBar/>
      <Header/>
      <Carousel/>
    </div>
  );
}

export default App;
