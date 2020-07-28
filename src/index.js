import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cadastrovideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (<div>Pagina 404</div>)
ReactDOM.render(
  <BrowserRouter>
   <Switch>

   <Route path = "/cadastro/video" component = {Cadastrovideo} />
   <Route path = "/cadastro/Categoria" component = {CadastroCategoria} />
   <Route path = "/" component = {Home} exact/>

   <Route  component = {Pagina404} />
   </Switch>
  
  </BrowserRouter>,
  
  //<React.StrictMode>
  //<App />
  //</React.StrictMode>,
  document.getElementById('root')
);
