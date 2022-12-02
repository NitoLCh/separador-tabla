import './app.css'
import { Renglon } from './components/Renglon'
import { useEffect } from 'react';
import {database} from './lib/init-firebase'
import {ref, onValue} from 'firebase/database'

function App() {
  //Objeto que recibe los datos
  var aux = []
  var nodos = []
  
  //useEffect(() => {
    //Metodo get para obtener los datos
    const referenciaDB = ref(database, 'pruebas/');
    onValue(referenciaDB, (snapshot) => {
      const data = snapshot.val();
      const values = Object.values(data);
      nodos = values;
    })
  //}, [aux])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }


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
          {nodos.map(nodo => {
            return(
              <Renglon 
                nodo={nodo}
                key={generarId}
              />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
