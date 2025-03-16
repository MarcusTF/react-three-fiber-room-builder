import { create } from "zustand"

import { produce } from "immer"
import { Object3D } from "three"
import { v4 as uuidv4 } from "uuid"

import { Furniture, Vector3 } from "../types/furniture"

interface FurnitureState {
  addFurniture: (furniture: Omit<Furniture, "id">) => void
  deselectAll: () => void
  furniture: Furniture[]
  removeFurniture: (id: string) => void
  selectFurniture: (id: string) => void
  selectedObject: Object3D | null
  updateFurniturePosition: (id: string, position: Vector3, rotation: Vector3) => void
  applyReference: (id: string, modelReference?: Object3D) => void
}

const furnitureStore = create<FurnitureState>(set => ({
  furniture: [],
  selectedObject: null,
  applyReference: (id: string, modelReference?: Object3D) => {
    set(state =>
      produce(state, draft => {
        const selectedFurniture = draft.furniture.find(furniture => furniture.id === id)
        if (selectedFurniture) selectedFurniture.modelReference = modelReference
      }),
    )
  },
  selectFurniture(id: string) {
    set(state =>
      produce(state, draft => {
        // Clear selected objects when selecting new furniture
        draft?.furniture?.forEach(furniture => {
          if (furniture.id === id) {
            furniture.active = true

            if (furniture.modelReference) draft.selectedObject = furniture.modelReference
          } else furniture.active = false
        })
      }),
    )
  },
  deselectAll() {
    set(state =>
      produce(state, draft => {
        draft.furniture.forEach(furniture => {
          furniture.active = false
        })
        draft.selectedObject = null
      }),
    )
  },
  addFurniture: furniture =>
    set(state => ({
      furniture: [...state.furniture, { ...furniture, id: uuidv4() }],
    })),
  removeFurniture: id =>
    set(state => ({
      furniture: state.furniture.filter(f => f.id !== id),
    })),
  updateFurniturePosition: (id, position: Vector3, rotation: Vector3) =>
    set(state => ({
      furniture: state.furniture.map(item => (item.id === id ? { ...item, position, rotation } : item)),
    })),
}))

export default furnitureStore
