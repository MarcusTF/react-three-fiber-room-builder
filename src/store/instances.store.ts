import { BufferGeometry, Material } from "three";
import { create } from "zustand";

// Define mesh collections for each furniture type
interface TitusMeshes {
  Basechair?: { geometry: BufferGeometry; material: Material | Material[] }
  Basechair1?: { geometry: BufferGeometry; material: Material | Material[] }
  Net?: { geometry: BufferGeometry; material: Material | Material[] }
}

interface IsabelitaMeshes {
  EstofadodoAssento?: { geometry: BufferGeometry; material: Material | Material[] }
  EstofadodoAssento1?: { geometry: BufferGeometry; material: Material | Material[] }
}

interface AlbengaMeshes {
  Cushion?: { geometry: BufferGeometry; material: Material | Material[] }
  Frame?: { geometry: BufferGeometry; material: Material | Material[] }
  Wicker?: { geometry: BufferGeometry; material: Material | Material[] }
  LegFrame?: { geometry: BufferGeometry; material: Material | Material[] }
  LegFrame1?: { geometry: BufferGeometry; material: Material | Material[] }
  LegFrame2?: { geometry: BufferGeometry; material: Material | Material[] }
}

interface AntiguaMeshes {
  Levelers?: { geometry: BufferGeometry; material: Material | Material[] }
  Table?: { geometry: BufferGeometry; material: Material | Material[] }
}

interface ArlosMeshes {
  TableTop?: { geometry: BufferGeometry; material: Material | Material[] }
  SupportFrame?: { geometry: BufferGeometry; material: Material | Material[] }
  Leg?: { geometry: BufferGeometry; material: Material | Material[] }
}

interface ModernBedMeshes {
  Bed_01?: { geometry: BufferGeometry; material: Material | Material[] }
  Mattress?: { geometry: BufferGeometry; material: Material | Material[] }
  Plane?: { geometry: BufferGeometry; material: Material | Material[] }
  Plane001?: { geometry: BufferGeometry; material: Material | Material[] }
  Plane002?: { geometry: BufferGeometry; material: Material | Material[] }
  Plane003?: { geometry: BufferGeometry; material: Material | Material[] }
  Plane004?: { geometry: BufferGeometry; material: Material | Material[] }
  Plane005?: { geometry: BufferGeometry; material: Material | Material[] }
  Plane006?: { geometry: BufferGeometry; material: Material | Material[] }
  Plane010?: { geometry: BufferGeometry; material: Material | Material[] }
}

interface InstancesState {
  // Organize meshes by furniture type
  meshes: {
    TitusDiningChair?: TitusMeshes
    IsabelitaChair?: IsabelitaMeshes
    AlbengaDiningChair?: AlbengaMeshes
    AntiguaTable?: AntiguaMeshes
    ArlosTable?: ArlosMeshes
    ModernBed?: ModernBedMeshes
  }
  initialized: {
    TitusDiningChair: boolean
    IsabelitaChair: boolean
    AlbengaDiningChair: boolean
    AntiguaTable: boolean
    ArlosTable: boolean
    ModernBed: boolean
  }
  setMeshes: (furnitureType: string, meshes: unknown) => void
}

const instancesStore = create<InstancesState>(set => ({
  meshes: {},
  initialized: {
      TitusDiningChair: false,
      IsabelitaChair: false,
      AlbengaDiningChair: false,
      AntiguaTable: false,
      ArlosTable: false,
      ModernBed: false,
    },
  setMeshes: (furnitureType, meshes) =>
    set(state => ({
      meshes: {
        ...state.meshes,
        [furnitureType]: meshes,
      },
      initialized: {
        ...state.initialized,
        [furnitureType]: true,
      },
    })),
}))

export default instancesStore
