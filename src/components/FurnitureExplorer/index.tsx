import { FURNITURE } from "../../constants/furniture"
import furnitureStore from "../../store/furniture.store"
import sidebarStore from "../../store/sidebar.store"

import "./index.css"

export default function FurnitureExplorer() {
  const { addFurniture } = furnitureStore()
  const { isOpen } = sidebarStore()

  return (
    <div className={"furniture-explorer" + (isOpen ? " open" : "")}>
      <h2>Furniture Explorer</h2>
      <ul className='furniture-list'>
        {Object.entries(FURNITURE).map(([name, details]) => (
          <li key={name}>
            <div className='furniture-image-container'>
              <img src={details.image} alt={details.name} />
            </div>

            <p className='name'>{details.name}</p>
            <p className='price'>
              <span className='currency-symbol'>$</span>
              {details.price.toLocaleString(undefined, {
                currency: "usd",
                style: "decimal",
              })}
            </p>
            <button
              onClick={() =>
                addFurniture({ ...details, position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 } })
              }>
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
