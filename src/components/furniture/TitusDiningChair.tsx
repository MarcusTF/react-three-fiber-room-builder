import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"
import instancesStore from "../../store/instances.store"

type GLTFResult = GLTF & {
  nodes: {
    Base_chair: THREE.Mesh
    Base_chair_1: THREE.Mesh
    Net: THREE.Mesh
  }
  materials: {
    ["Wood dark"]: THREE.MeshStandardMaterial
    Polywood: THREE.MeshStandardMaterial
    Wood_bambo: THREE.MeshStandardMaterial
  }
}

export function InitializeTitusInstances() {
  const { nodes } = useGLTF("/3d/TitusDiningChair.glb") as unknown as GLTFResult
  const { setMeshes, initialized } = instancesStore()

  useEffect(() => {
    if (!initialized.TitusDiningChair) {
      setMeshes("TitusDiningChair", {
        Basechair: {
          geometry: nodes.Base_chair.geometry,
          material: nodes.Base_chair.material,
        },
        Basechair1: {
          geometry: nodes.Base_chair_1.geometry,
          material: nodes.Base_chair_1.material,
        },
        Net: {
          geometry: nodes.Net.geometry,
          material: nodes.Net.material,
        },
      })
    }
  }, [nodes, setMeshes, initialized.TitusDiningChair])

  return null
}

export function TitusDiningChair() {
  const meshes = instancesStore(state => state.meshes.TitusDiningChair)
  const initialized = instancesStore(state => state.initialized.TitusDiningChair)

  if (!initialized) {
    return null
  }

  return (
    <group dispose={null}>
      {meshes?.Basechair && (
        <mesh castShadow receiveShadow geometry={meshes.Basechair.geometry} material={meshes.Basechair.material} />
      )}
      {meshes?.Basechair1 && (
        <mesh castShadow receiveShadow geometry={meshes.Basechair1.geometry} material={meshes.Basechair1.material} />
      )}
      {meshes?.Net && <mesh castShadow receiveShadow geometry={meshes.Net.geometry} material={meshes.Net.material} />}
    </group>
  )
}

useGLTF.preload("/3d/TitusDiningChair.glb")
