// import './app.scss';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import ProductList from './components/product-list/product-list';
import Board from './components/board/board';
import Footer from './components/footer/footer';

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import './styles/main.scss';

function App() {


  return (
    <div className="App">
      <Header />
          
      <main style={{backgroundColor: 'rgb(250, 250, 250)'}}>



        <BrowserRouter>
          <li>
            <Link to="/board">Board</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>


          <Switch>
            <Route path="/board" exact >
              <Board />
            </Route>
            <Route path="/">
              <Carousel />
              <ProductList />
            </Route>
          </Switch>

        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
