import { PivotControls } from "@react-three/drei"
import { ReactNode, useRef } from "react"
import { Object3D } from "three"

import furnitureStore from "../../store/furniture.store"
import instancesStore from "../../store/instances.store"

import { sceneStore } from "../../store/scene.store"
import { Furniture } from "../../types/furniture"

import { AlbengaDiningChair } from "./AlbengaDiningChair"
import { AntiguaTable } from "./AntiguaTable"
import { ArlosTable } from "./ArlosTable"
import { IsabelitaChair } from "./IsabelitaChair"
import { TitusDiningChair } from "./TitusDiningChair"

export function FurnitureComponent({ type, id, active, modelReference }: Furniture) {
  const modelRef = useRef<Object3D>(null)
  const initialized = instancesStore(state => state.initialized[type])
  const { selectFurniture, applyReference } = furnitureStore()
  const { setOrbitActive } = sceneStore()

  if (!initialized) return null

  if (!modelReference && modelRef.current) applyReference(id, modelRef.current)

  const renderFurniture = (): ReactNode => {
    switch (type) {
      case "TitusDiningChair":
        return <TitusDiningChair />
      case "IsabelitaChair":
        return <IsabelitaChair />
      case "AlbengaDiningChair":
        return <AlbengaDiningChair />
      case "AntiguaTable":
        return <AntiguaTable />
      case "ArlosTable":
        return <ArlosTable />
      default:
        return null
    }
  }

  return (
    <PivotControls
      visible={active}
      disableAxes={!active}
      disableRotations={!active}
      disableSliders={!active}
      activeAxes={[true, false, true]}
      onDragStart={() => {
        setOrbitActive(false)
      }}
      onDragEnd={() => {
        setOrbitActive(true)
      }}
      disableScaling>
      <group
        ref={modelRef}
        onClick={() => {
          if (!modelReference && modelRef.current) applyReference(id, modelRef.current)
          selectFurniture(id)
        }}
        castShadow
        receiveShadow>
        {renderFurniture()}
      </group>
    </PivotControls>
  )
}
