import { create } from "zustand"

export interface SceneStore {
  orbitActive: boolean
  setOrbitActive: (active: boolean) => void
}

export const sceneStore = create<SceneStore>(set => ({
  orbitActive: true,
  setOrbitActive: (active: boolean) => set({ orbitActive: active }),
}))
