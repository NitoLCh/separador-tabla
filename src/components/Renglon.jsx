import { useState } from 'react';
import '../app.css';

export const Renglon = ({nodo}) => {
  const {B, Fecha, G, Peso, R} = nodo;
  let rgb = `${R}, ${G}, ${B}`
  let peso = Peso
  let fecha = Fecha
  
  return (
    <>
      <tr>
        <td>{rgb}</td>
        <td>{peso}</td>
        <td>{fecha}</td>
      </tr>
    </>
  )
}
