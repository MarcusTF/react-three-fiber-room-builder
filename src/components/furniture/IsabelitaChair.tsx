import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"
import instancesStore from "../../store/instances.store"

type GLTFResult = GLTF & {
  nodes: {
    Estofado_do_Assento001: THREE.Mesh
    Estofado_do_Assento001_1: THREE.Mesh
  }
  materials: {
    ISABELITA_WOOD: THREE.MeshStandardMaterial
    CH20_COUROl: THREE.MeshStandardMaterial
  }
}

export function InitializeIsabelitaInstances() {
  const { nodes } = useGLTF("/3d/IsabelitaChair.glb") as unknown as GLTFResult
  const { setMeshes, initialized } = instancesStore()

  useEffect(() => {
    if (!initialized.IsabelitaChair) {
      setMeshes("IsabelitaChair", {
        EstofadodoAssento: {
          geometry: nodes.Estofado_do_Assento001.geometry,
          material: nodes.Estofado_do_Assento001.material,
        },
        EstofadodoAssento1: {
          geometry: nodes.Estofado_do_Assento001_1.geometry,
          material: nodes.Estofado_do_Assento001_1.material,
        },
      })
    }
  }, [nodes, setMeshes, initialized.IsabelitaChair])

  return null
}

export function IsabelitaChair() {
  const meshes = instancesStore(state => state.meshes.IsabelitaChair)
  const initialized = instancesStore(state => state.initialized.IsabelitaChair)

  if (!initialized) {
    return null
  }

  return (
    <group dispose={null}>
      {meshes?.EstofadodoAssento && (
        <mesh
          castShadow
          receiveShadow
          geometry={meshes.EstofadodoAssento.geometry}
          material={meshes.EstofadodoAssento.material}
        />
      )}
      {meshes?.EstofadodoAssento1 && (
        <mesh
          castShadow
          receiveShadow
          geometry={meshes.EstofadodoAssento1.geometry}
          material={meshes.EstofadodoAssento1.material}
        />
      )}
    </group>
  )
}

useGLTF.preload("/3d/IsabelitaChair.glb")
