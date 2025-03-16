import furnitureStore from "../../store/furniture.store"

import "./index.css"

export default function Cart() {
  const { furniture, selectFurniture, deselectAll, removeFurniture } = furnitureStore()
  return (
    <section className='cart'>
      <h2>Your Room</h2>
      <ul>
        {furniture.map(item => (
          <li
            key={item.id}
            className='cart-item'
            onMouseEnter={() => selectFurniture(item.id)}
            onMouseLeave={() => deselectAll()}>
            <div className='left'>
              <img src={item.image} alt={item.name} />
              <button onClick={() => removeFurniture(item.id)}>Remove</button>
            </div>
            <div className='right'>
              <h3>{item.name}</h3>
              <p>
                <span className='currency'>$</span>
                {item.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className='cart-total'>
        <h3>Total:</h3>
        <p>
          <span className='currency'>$</span>
          {furniture.reduce((acc, item) => acc + item.price, 0)}
        </p>
      </div>
    </section>
  )
}
