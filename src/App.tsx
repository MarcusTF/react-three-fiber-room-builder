import "./App.css"
import Cart from "./components/Cart"

import RoomsToGoLogo from "./assets/vector/rooms-to-go.svg"
import { FurnitureScene } from "./components/FurnitureScene"
import SideBar from "./components/Sidebar"

function App() {
  return (
    <>
      <header>
        <img src={RoomsToGoLogo} alt='Rooms To Go' style={{ height: "30px" }} />
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
