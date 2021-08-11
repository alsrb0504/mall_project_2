// import './app.scss';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import ProductList from './components/product-list/product-list';

import Board from './components/board/board';

import Footer from './components/footer/footer';
import './styles/main.scss';

function App() {

  
  return (
    <div className="App">
      <Header/>
      <main style={{backgroundColor: 'rgb(250, 250, 250)'}}>

        <Board />

        {/* <Carousel /> */}
        {/* <ProductList /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
