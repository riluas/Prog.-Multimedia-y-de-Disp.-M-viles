import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [],
      recuperado: false
    }
  }

  componentWillMount() {
    fetch('https://localhost:44349/api/Usuarios')
      .then((response) => {
        //console.log(response.json());
        return response.json()
      })
      .then((art) => {
        this.setState({ 
                        articulos: art,
                        recuperado: true
                     })
      })    
  }

  render() {
    if (this.state.recuperado)
      return this.mostrarTabla()
    else
      return (<div>recuperando datos...</div>)
  }

  mostrarTabla() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
            <th>Email</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Edad</th>                   
          </tr>
        </thead>
        <tbody>  
          {this.state.articulos.map(art => {
            return (
              <tr key={art.Email}>
                <td>{art.Email}</td>
                <td>{art.Nombre}</td>
                <td>{art.Apellidos}</td>
                <td>{art.Edad}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }
   
}

export default App;