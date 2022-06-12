import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
 const [product, setProduct] = useState([])

 useEffect(() => {
    fetch("/productos.json")
      .then(res => res.json())
      .then(res => setProduct(res))
      .catch(error => console.error("Error:", error))
 
}, [])

  return (
  <>
  <div>{greeting}</div>
  <div>
    <ItemList product={product}/>
  </div>
  </>
  )
}
export default ItemListContainer