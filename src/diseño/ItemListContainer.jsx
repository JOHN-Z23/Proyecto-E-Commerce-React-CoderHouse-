import React, { useEffect, useState, resultado } from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
 const [personajes, setPersonajes] = useState([])

 useEffect(() => {
  const pagara = new Promise ((res, rej) => {
    setTimeout(() => {
      res([
        {id: '', name: '', status: '' },
        {id: '', name: '', status: '' },
        {id: '', name: '', status: '' },
        {id: '', name: '', status: '' },
        {id: '', name: '', status: '' },
      ]);
    }, 3000);
  });


    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(res => setPersonajes(res.results))
      .catch(error => console.error("Error:", error))
 
}, [])



  return (
    <>

  <div>{greeting}</div>

  <div>
    <ItemList personajes={personajes}/>
  </div>

  <div>
   {resultado &&
   resultado.map((item) => (
     <p>Personaje: {item.id}</p>
   ))}
   </div>

  </>
  )

}

export default ItemListContainer