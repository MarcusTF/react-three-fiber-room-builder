import { Object3D } from "three/webgpu"
import { FURNITURE } from "../constants/furniture"

export interface Vector3 {
  x: number
  y: number
  z: number
}

export interface Metadata {
  name: string
  type: string
  image: string
  price: number
}

export interface PositionalData {
  position: Vector3
  rotation: Vector3
  modelReference?: Object3D | null
}

export interface InteractivityData {
  active?: boolean
}

export type Data = Metadata & PositionalData & InteractivityData

export interface Generic extends Data {
  id: string
  type: string
}

export interface Enumerated extends Generic {
  type: (typeof FURNITURE)[keyof typeof FURNITURE]["type"]
}

export type Furniture = Enumerated
