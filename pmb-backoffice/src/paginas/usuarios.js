import {Component} from 'react';
const users = [];
class Usuarios extends Component{

    render(){


        const promise = new Promise((resolve, reject) =>{
            const request = new XMLHttpRequest();
            request.timeout = 5;
            request.open('GET','https://localhost:44349/api/Usuarios');

            request.onload = () =>{
                if (request.status === 200) {
                    resolve(request.response);
                }else{
                    reject('Algo ha ido mal');
                }
            }
            request.send();
        })

        const promiseResult = promise.then((resolvedResult) => {
            const result = JSON.parse(resolvedResult);

           let contador = 0
            result.forEach(i => {
                users.push(result[contador]);
                contador++

            });

        },(rejectResult)=>{
         console.error(rejectResult);
        });
        console.log(users,"hola");
        console.log('This is a test after the promise');


        return(
         <div>
       <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
        {console.log(users,"hola2")}

          {/* {this.state.articulos.map(art => {
            return (
              <tr key={art.codigo}>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
              </tr>
            );
          })} */}
        </tbody>
        </table>

          </div>
        )}

    }

export default Usuarios;
