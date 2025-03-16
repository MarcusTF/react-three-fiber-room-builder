import { create } from "zustand"

export interface SidebarStore {
  isOpen: boolean
  toggleSidebar: () => void
}

export const sidebarStore = create<SidebarStore>(set => ({
  isOpen: false,
  toggleSidebar: () => set(state => ({ isOpen: !state.isOpen })),
}))

export default sidebarStore
