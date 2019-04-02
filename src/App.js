import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {

  token = '3OS7IYV3H7YNCTBU5GLJ';

  state = {
    categorias: []
  }
  componentDidMount(){
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {

    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        this.setState({
          categorias: categorias.categories
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-container">
          <Formulario
            categorias={this.state.categorias}/>
        </div>

      </div>
    );
  }
}

export default App;
