import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from "three"

const Scene = () => {
    let tex = useTexture("./img.png");
    let cly = useRef(null);
    useFrame((state, delta)=> {
        cly.current.rotation.y += delta;
    })
    return (
        <group rotation={[0, 1.2, 0.3]} >
            <mesh ref={cly}>
            <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
        </group>
    )
}

export default Scene