
import { Card } from '@mui/material'
import { Button } from 'bootstrap'
import React from 'react'

export default function ItemDetail(product) {
    const { título, precio, imagen, descripción} = product
  return (
    <Card style={{ width: '15rem', margin: 20}}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Title>{título}</Card.Title>
      <Card.Text>
        Tituto: {título}<br/>
        Precio: {precio}<br/>
        Descripción:{descripción}
      </Card.Text>
      <Button variant="comprar">Comprar</Button>
      
    </Card.Body>
  </Card>
  )
}
