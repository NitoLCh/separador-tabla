import './app.css'
import { Renglon } from './components/Renglon'
import { useEffect } from 'react';
import { database } from './lib/init-firebase'
import { ref, onValue } from 'firebase/database'


const App = () => {
  //Objeto que recibe los datos
  var nodos = []
  let keys_array = []

  //useEffect(() => {
  //Metodo get para obtener los datos
  const referenciaDB = ref(database, 'pruebas/');
  onValue(referenciaDB, (snapshot) => {
    const data = snapshot.val();
    const values = Object.values(data);
    const keys = Object.keys(data);
    //console.log(keys)
    nodos = values;
    keys_array = keys;
  })
  //}, [nodos, keys_array])

  const procesar_objetos = (nodos, keys_array) => nodos.map( (nodo, i) => [nodo, keys_array[i]] );

  const elementos = procesar_objetos(nodos, keys_array)

  console.log(elementos)

  //}, [aux])

  /*const generarId = () => {
    id = id+1;

    return id;
  }*/


  return (
    <>
      <header>
        <h1>Separador de textiles</h1>
        <button>Descargar</button>
      </header>

      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Peso</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          {
            elementos.map( elemento => {
              return(
              <Renglon
              nodo={elemento[0]}
              key={elemento[1]}
            />)
            } )
          }  
        </tbody>
      </table>
    </>
  )
  }

export default App