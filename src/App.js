import './App.css';
import { Helmet } from 'react-helmet';
import ARDUINO from './assets/FAbg.png';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page4 from './components/page4';
import Footer from './components/footer';
import Banner from './components/banner';

function App() {
  return (
    <div className='app'>
    <Helmet>
      <title>TIME SERIES</title>
      <link rel="icon" type="image/png" href={ARDUINO} />
    </Helmet>
        <Banner/>
        <Page1 />
        <Page2 />
        <Page4 />
        <Footer />
    </div>
  );
}

export default App;
