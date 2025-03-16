import "./App.css"
import Cart from "./components/Cart"

import { FurnitureScene } from "./components/FurnitureScene"
import SideBar from "./components/Sidebar"

function App() {
  return (
    <>
      <header>
        <img src='/src/assets/vector/rooms-to-go.svg' alt='Rooms To Go' style={{ height: "30px" }} />
        <h1>Room Builder</h1>
      </header>
      <main>
        <SideBar />
        <FurnitureScene />
        <Cart />
      </main>
    </>
  )
}

export default App
