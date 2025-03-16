import GoIcon from "../../assets/vector/go.svg"
import sidebarStore from "../../store/sidebar.store"
import FurnitureExplorer from "../FurnitureExplorer"

import "./index.css"

export default function SideBar() {
  const { toggleSidebar, isOpen } = sidebarStore()

  return (
    <div className={"sidebar"}>
      <FurnitureExplorer />
      <button onClick={toggleSidebar} className={isOpen ? "open" : "closed"}>
        <img src={GoIcon} alt='Go' />
      </button>
    </div>
  )
}
