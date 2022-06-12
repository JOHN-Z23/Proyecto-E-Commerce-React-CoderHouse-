
import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Item({product}) {
    const { título, precio, imagen, categoría} = product
  return (
    <Card style={{ width: '15rem', margin: 20}}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>{título}</Card.Title>
    <Card.Text>
      Tituto: {título}<br/>
      Precio: {precio}<br/>
      Categoria:{categoría}
    </Card.Text>
    <Button variant="primary">Ver detalle</Button>
    
  </Card.Body>
</Card>
  )
}
