import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
function Cadastrovideo(){
    return(
      <PageDefault>
        <h1>Cadastro de video</h1>
        <Link to ="/cadastro/categoria">
          cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default Cadastrovideo;