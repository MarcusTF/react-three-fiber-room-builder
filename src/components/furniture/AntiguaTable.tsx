import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"
import instancesStore from "../../store/instances.store"

type GLTFResult = GLTF & {
  nodes: {
    Levelers: THREE.Mesh
    Table: THREE.Mesh
  }
  materials: {
    Plastic: THREE.MeshPhysicalMaterial
    ["Teak wood polished"]: THREE.MeshStandardMaterial
  }
}

export function InitializeAntiguaInstances() {
  const { nodes } = useGLTF("/3d/AntiguaTable.glb") as unknown as GLTFResult
  const { setMeshes, initialized } = instancesStore()

  useEffect(() => {
    if (!initialized.AntiguaTable) {
      setMeshes("AntiguaTable", {
        Levelers: {
          geometry: nodes.Levelers.geometry,
          material: nodes.Levelers.material,
        },
        Table: {
          geometry: nodes.Table.geometry,
          material: nodes.Table.material,
        },
      })
    }
  }, [nodes, setMeshes, initialized.AntiguaTable])

  return null
}

export function AntiguaTable() {
  const meshes = instancesStore(state => state.meshes.AntiguaTable)
  const initialized = instancesStore(state => state.initialized.AntiguaTable)

  if (!initialized) {
    return null
  }

  return (
    <group dispose={null}>
      {meshes?.Levelers && (
        <mesh
          castShadow
          receiveShadow
          geometry={meshes.Levelers.geometry}
          material={meshes.Levelers.material}
          position={[0, 0.005, 0]}
        />
      )}
      {meshes?.Table && (
        <mesh castShadow receiveShadow geometry={meshes.Table.geometry} material={meshes.Table.material} />
      )}
    </group>
  )
}

useGLTF.preload("/3d/AntiguaTable.glb")
