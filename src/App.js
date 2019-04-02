import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {

  token = '3OS7IYV3H7YNCTBU5GLJ'; // Cambiar el token en caso de expirar o tener problemas.
  ordenar = 'date'; // Parameter you want to sort by - options are "date", "distance" and "best". Prefix with a hyphen to reverse the order, e.g. "-date".
  ubicacion = 'es_ES';

  state = {
    categorias: [],
    eventos: []
  }
  componentDidMount(){
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {

    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=${this.ubicacion}`;

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

  obtenerEventos = async (busqueda) => {
    //console.log(busqueda)
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&sort_by=${this.ordenar}&categories=${busqueda.categoria}&token=${this.token}&locale=${this.ubicacion}`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(eventos => {
        this.setState({
          eventos: eventos.events
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-container">
          <Formulario
            categorias={this.state.categorias}
            obtenerEventos={this.obtenerEventos}
          />
        </div>

      </div>
    );
  }
}

export default App;
