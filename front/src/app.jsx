// import './app.scss';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import ProductList from './components/product-list/product-list';
import Board from './components/board/board';
import Footer from './components/footer/footer';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/main.scss';

function App() {


  return (
    <div className="App">

      <BrowserRouter>

        <Header />
        <main style={{backgroundColor: 'rgb(250, 250, 250)'}}>

          <Switch>
            <Route path="/board" exact >
              <Board />
            </Route>
            <Route path="/">
              <Carousel />
              <ProductList />
            </Route>
          </Switch>

        </main>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
