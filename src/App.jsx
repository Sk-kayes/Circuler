import { Canvas } from '@react-three/fiber'
import React from 'react'
import "../public/style.css"
import { OrbitControls } from '@react-three/drei'
import Scene from './Scene'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const App = () => {
  return (
    <Canvas flat camera={{fov: 30}}>
    <OrbitControls />
    <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom
        mipmapBlur
    intensity={5.0}
    luminanceThreshold={0.2}
    luminanceSmoothing={0} />
      </EffectComposer>
    </Canvas>
  )
}

export default App