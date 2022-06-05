
import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Item({personaje}) {
    const { name, image, species, status} = personaje
  return (
    <Card style={{ width: '15rem', margin: 20}}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Especie: {species}<br/>
      Estado: {status}
    </Card.Text>
    <Button variant="primary">Ve detalle</Button>
  </Card.Body>
</Card>
  )
}
