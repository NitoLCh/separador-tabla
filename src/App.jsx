import './app.css'
import { Renglon } from './components/Renglon'

function App() {
  return (
    <><header>
        <h1>Separador de textiles</h1>
        <button>Descargar</button>
    </header>

    <table>
      <tr>
        <th>Color </th>
        <th> Peso</th>
        <th>Cantidad</th>
      </tr>
      
      <Renglon/>
    </table>

    </>
  )
}

export default App
