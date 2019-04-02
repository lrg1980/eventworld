import React, { Component } from 'react';


class Formulario extends Component {

     nombreEventoRef = React.createRef();
     categoriaRef = React.createRef();

     buscarEvento = (e) => {
          e.preventDefault();

          // Crear el objeto
          const datosBusqueda = {
               nombre: this.nombreEventoRef.current.value,
               categoria: this.categoriaRef.current.value
          }
          
          // pasarlo por props
          this.props.obtenerEventos(datosBusqueda);
     }
     mostrarOpciones = (key) => {
          const categoria = this.props.categorias[key];

          const { id, name_localized } = categoria;
          if (!id || !name_localized) return null;

          return (
               <option key={id} value={id}>{name_localized}</option>
          )
     }
     
     render() { 

          const categorias = Object.keys(this.props.categorias);
          return ( 
               <form onSubmit={this.buscarEvento}>
                    <fieldset className="uk-fieldset uk-margin">
                         <legend className="uk-legend uk-text-center">
                              Busca tu evento por nombre o categorías
                         </legend>

                         <div className="uk-column-1-3@m uk-margin">
                              <div className="uk-margin" uk-margin="true">
                                   <input className="uk-input" ref={this.nombreEventoRef}type="text" placeholder="Nombre de Evento o Ciudad" />
                              </div>
                              <div className="uk-margin" uk-margin="true">
                                   <select ref={this.categoriaRef}className="uk-select">
                                        {categorias.map(this.mostrarOpciones)}
                                   </select>
                              </div>
                              <div className="uk-margin" uk-margin="true">
                                   <button className="uk-button uk-button-danger" >Buscar</button>
                              </div>
                         </div>
                    </fieldset>
               </form>
           );
     }
}
 
export default Formulario;