import Item from './Item'

const ItemList = ({product})=> {
  return (
      <>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {product?.map(product => <Item key={product.id} product={product}/>)}
    </div>
    
     </>
  )
}
export default ItemList