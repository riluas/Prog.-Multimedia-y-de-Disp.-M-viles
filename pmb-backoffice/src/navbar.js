import {Component} from 'react';

class Navbar extends Component{
    render(){
        return(
            <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="Usuarios.js">Usuarios</a>
            <a href="#contact">Apuestas</a>
            <a href="#about">Eventos</a>
          </div>
        );

    }
}

export default Navbar;