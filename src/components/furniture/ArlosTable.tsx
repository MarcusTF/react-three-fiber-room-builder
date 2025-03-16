import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"
import instancesStore from "../../store/instances.store"

type GLTFResult = GLTF & {
  nodes: {
    Table_top: THREE.Mesh
    Support_frame: THREE.Mesh
    Leg: THREE.Mesh
  }
  materials: {
    ["Oak Natural"]: THREE.MeshPhysicalMaterial
  }
}

export function InitializeArlosInstances() {
  const { nodes, materials } = useGLTF("/3d/ArlosTable.glb") as unknown as GLTFResult
  const { setMeshes, initialized } = instancesStore()

  useEffect(() => {
    if (!initialized.ArlosTable) {
      setMeshes("ArlosTable", {
        TableTop: {
          geometry: nodes.Table_top.geometry,
          material: materials["Oak Natural"],
        },
        SupportFrame: {
          geometry: nodes.Support_frame.geometry,
          material: materials["Oak Natural"],
        },
        Leg: {
          geometry: nodes.Leg.geometry,
          material: materials["Oak Natural"],
        },
      })
    }
  }, [nodes, materials, setMeshes, initialized.ArlosTable])

  return null
}

export function ArlosTable() {
  const meshes = instancesStore(state => state.meshes.ArlosTable)
  const initialized = instancesStore(state => state.initialized.ArlosTable)

  if (!initialized) {
    return null
  }

  return (
    <group dispose={null}>
      {meshes?.TableTop && (
        <mesh castShadow receiveShadow geometry={meshes.TableTop.geometry} material={meshes.TableTop.material} />
      )}
      {meshes?.SupportFrame && (
        <mesh
          castShadow
          receiveShadow
          geometry={meshes.SupportFrame.geometry}
          material={meshes.SupportFrame.material}
        />
      )}
      {meshes?.Leg && <mesh castShadow receiveShadow geometry={meshes.Leg.geometry} material={meshes.Leg.material} />}
    </group>
  )
}

useGLTF.preload("/3d/ArlosTable.glb")
