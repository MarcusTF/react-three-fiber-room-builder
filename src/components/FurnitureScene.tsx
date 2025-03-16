import { Grid, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Outline, OutlineProps } from "@react-three/postprocessing"
import { Mesh, Object3D } from "three"
import furnitureStore from "../store/furniture.store"
import { sceneStore } from "../store/scene.store"
import { FurnitureComponent } from "./furniture/FurnitureComponent"
import InitializeAllInstances from "./furniture/InitializeAllInstances"

const getAllMeshes = (group: Object3D | null): Mesh[] => {
  const meshes: Mesh[] = []

  if (group)
    group.traverse((object: Object3D) => {
      if ((object as Mesh).isMesh) meshes.push(object as Mesh)
    })

  return meshes
}

const outlineProps = {
  visibleEdgeColor: 0xffffff,
  hiddenEdgeColor: 0xffffff,
  edgeStrength: 3,
  width: 2000,
  blur: true,
} satisfies OutlineProps

export function FurnitureScene() {
  const furniture = furnitureStore(state => state.furniture)
  const selectedObject = furnitureStore(state => state.selectedObject)

  const { orbitActive } = sceneStore()

  // Memoize the outline props to prevent recreating them on each render

  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }} shadows>
      <EffectComposer autoClear={false}>
        <Outline selection={getAllMeshes(selectedObject)} {...outlineProps} />
      </EffectComposer>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={3}
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-bias={-0.0001}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />
      <InitializeAllInstances />
      {furniture.map(item => (
        <FurnitureComponent key={item.id} {...item} />
      ))}
      <OrbitControls enabled={orbitActive} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 5]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
      <Grid
        position={[0, 0.001, 0]}
        infiniteGrid
        fadeDistance={30}
        fadeStrength={3}
        cellSize={1}
        cellThickness={0.7}
        sectionSize={5}
        sectionThickness={1.5}
        renderOrder={1}
        cellColor='#0553A0'
        sectionColor='#0553A0'
      />
    </Canvas>
  )
}
