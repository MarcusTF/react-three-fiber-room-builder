import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"
import { GLTF } from "three-stdlib"
import instancesStore from "../../store/instances.store"

type GLTFResult = GLTF & {
  nodes: {
    Cushion: THREE.Mesh
    Frame: THREE.Mesh
    Wicker: THREE.Mesh
    Leg_frame: THREE.Mesh
    Leg_frame_1: THREE.Mesh
    Leg_frame_2: THREE.Mesh
  }
  materials: {
    Fabric: THREE.MeshStandardMaterial
    ["Metal frame"]: THREE.MeshStandardMaterial
    Rope: THREE.MeshPhysicalMaterial
    ["Teak wood"]: THREE.MeshPhysicalMaterial
    ["Metal bolts"]: THREE.MeshStandardMaterial
    Caps: THREE.MeshStandardMaterial
  }
}

export function InitializeAlbengaInstances() {
  const { nodes } = useGLTF("/3d/AlbengaDiningChair.glb") as unknown as GLTFResult
  const { setMeshes, initialized } = instancesStore()

  useEffect(() => {
    if (!initialized.AlbengaDiningChair) {
      setMeshes("AlbengaDiningChair", {
        Cushion: {
          geometry: nodes.Cushion.geometry,
          material: nodes.Cushion.material,
        },
        Frame: {
          geometry: nodes.Frame.geometry,
          material: nodes.Frame.material,
        },
        Wicker: {
          geometry: nodes.Wicker.geometry,
          material: nodes.Wicker.material,
        },
        LegFrame: {
          geometry: nodes.Leg_frame.geometry,
          material: nodes.Leg_frame.material,
        },
        LegFrame1: {
          geometry: nodes.Leg_frame_1.geometry,
          material: nodes.Leg_frame_1.material,
        },
        LegFrame2: {
          geometry: nodes.Leg_frame_2.geometry,
          material: nodes.Leg_frame_2.material,
        },
      })
    }
  }, [nodes, setMeshes, initialized.AlbengaDiningChair])

  return null
}

export function AlbengaDiningChair() {
  const meshes = instancesStore(state => state.meshes.AlbengaDiningChair)
  const initialized = instancesStore(state => state.initialized.AlbengaDiningChair)

  if (!initialized) {
    return null
  }

  return (
    <group dispose={null} castShadow receiveShadow>
      {meshes?.Cushion && (
        <mesh castShadow receiveShadow geometry={meshes.Cushion.geometry} material={meshes.Cushion.material} />
      )}
      {meshes?.Frame && (
        <mesh castShadow receiveShadow geometry={meshes.Frame.geometry} material={meshes.Frame.material} />
      )}
      {meshes?.Wicker && (
        <mesh castShadow receiveShadow geometry={meshes.Wicker.geometry} material={meshes.Wicker.material} />
      )}
      {meshes?.LegFrame && (
        <mesh castShadow receiveShadow geometry={meshes.LegFrame.geometry} material={meshes.LegFrame.material} />
      )}
      {meshes?.LegFrame1 && (
        <mesh castShadow receiveShadow geometry={meshes.LegFrame1.geometry} material={meshes.LegFrame1.material} />
      )}
      {meshes?.LegFrame2 && (
        <mesh castShadow receiveShadow geometry={meshes.LegFrame2.geometry} material={meshes.LegFrame2.material} />
      )}
    </group>
  )
}

useGLTF.preload("/3d/AlbengaDiningChair.glb")
