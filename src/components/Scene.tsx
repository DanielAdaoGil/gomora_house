import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, type MutableRefObject } from 'react'

const L = THREE.MathUtils.lerp
const clamp = (v: number) => Math.min(1, Math.max(0, v))
const ease = (t: number) => t * t * (3 - 2 * t)
const mobile = typeof window !== 'undefined' && window.innerWidth < 768

/** p: 0..1 — 0-.7 aproximação, .7-.85 porta abre, .85-1 entrada */
function Rig({ p, door }: { p: MutableRefObject<number>; door: MutableRefObject<THREE.Group | null> }) {
  const { camera } = useThree()
  useFrame(() => {
    const a = ease(clamp(p.current / 0.7)), b = ease(clamp((p.current - 0.7) / 0.15)), c = ease(clamp((p.current - 0.85) / 0.15))
    const z = L(L(mobile ? 58 : 44, 7, a), -3, c)
    camera.position.set(L(-7, 0, a), L(L(8, 1.7, a), 1.6, c), z)
    camera.lookAt(0, L(4.5, 1.8, a), L(0, -8, c))
    if (door.current) door.current.rotation.y = b * 1.75
  })
  return null
}

const Tree = ({ x, z, s = 1 }: { x: number; z: number; s?: number }) => (
  <group position={[x, 0, z]} scale={s}>
    <mesh position={[0, 1.2, 0]} castShadow><cylinderGeometry args={[0.18, 0.28, 2.4, 8]} /><meshStandardMaterial color="#5a3d26" /></mesh>
    <mesh position={[0, 3.4, 0]} castShadow><icosahedronGeometry args={[1.7, 1]} /><meshStandardMaterial color="#2f6b2f" flatShading /></mesh>
    <mesh position={[0.8, 2.8, 0.4]} castShadow><icosahedronGeometry args={[1.1, 1]} /><meshStandardMaterial color="#3b7d36" flatShading /></mesh>
  </group>
)
const Bush = ({ x, z }: { x: number; z: number }) => (
  <mesh position={[x, 0.45, z]} castShadow><icosahedronGeometry args={[0.6, 1]} /><meshStandardMaterial color="#3f8a3a" flatShading /></mesh>
)
const Win = ({ x, y }: { x: number; y: number }) => (
  <group position={[x, y, 0.06]}>
    <mesh><boxGeometry args={[1.9, 2.4, 0.12]} /><meshStandardMaterial color="#f4efe6" /></mesh>
    <mesh position={[0, 0, 0.07]}><boxGeometry args={[1.6, 2.1, 0.05]} /><meshStandardMaterial color="#8fb7d6" metalness={0.8} roughness={0.1} emissive="#c9a24b" emissiveIntensity={0.15} /></mesh>
    <mesh position={[0, 0, 0.1]}><boxGeometry args={[0.06, 2.1, 0.03]} /><meshStandardMaterial color="#f4efe6" /></mesh>
  </group>
)

function House({ door }: { door: MutableRefObject<THREE.Group | null> }) {
  const wall = <meshStandardMaterial color="#f3eee6" roughness={0.9} />
  return (
    <group>
      {/* paredes frontais com vão de porta (x -1.3..1.3, h 3.8) */}
      <mesh position={[-4.15, 4, -4]} castShadow receiveShadow><boxGeometry args={[5.7, 8, 8]} />{wall}</mesh>
      <mesh position={[4.15, 4, -4]} castShadow receiveShadow><boxGeometry args={[5.7, 8, 8]} />{wall}</mesh>
      <mesh position={[0, 5.9, -4]} castShadow><boxGeometry args={[2.6, 4.2, 8]} />{wall}</mesh>
      <mesh position={[0, 0.05, -4]}><boxGeometry args={[2.6, 0.1, 8]} /><meshStandardMaterial color="#d8c7a5" /></mesh>
      <mesh position={[0, 3, -8.2]}><boxGeometry args={[2.6, 6, 0.2]} /><meshStandardMaterial color="#ffd9a0" emissive="#ffb866" emissiveIntensity={1.2} /></mesh>
      <pointLight position={[0, 3, -4]} intensity={30} color="#ffcf8a" distance={14} />
      {/* ala central + cornija + telhado */}
      <mesh position={[0, 4, 0.5]} castShadow><boxGeometry args={[4.2, 0.35, 1.6]} />{wall}</mesh>
      <mesh position={[0, 8.2, -4]} castShadow><boxGeometry args={[15.4, 0.5, 8.6]} /><meshStandardMaterial color="#3a342c" /></mesh>
      <mesh position={[0, 9.1, -4]} castShadow><boxGeometry args={[13, 1.4, 7]} /><meshStandardMaterial color="#d9d2c4" /></mesh>
      {[-1.9, 1.9].map((x) => <mesh key={x} position={[x, 2, 0.75]} castShadow><cylinderGeometry args={[0.18, 0.2, 4, 16]} />{wall}</mesh>)}
      {[-6.5, -3.4, 3.4, 6.5].map((x) => <group key={x}><Win x={x} y={2.3} /><Win x={x} y={6} /></group>)}
      <Win x={0} y={6} />
      {/* varanda 1º andar */}
      <mesh position={[0, 4.2, 1.35]}><boxGeometry args={[4.4, 0.12, 0.1]} /><meshStandardMaterial color="#8c6b3f" /></mesh>
      {/* porta (pivô na dobradiça esquerda) */}
      <group ref={door} position={[-1.3, 0, 0.05]}>
        <mesh position={[1.3, 1.9, 0]} castShadow><boxGeometry args={[2.6, 3.8, 0.12]} /><meshStandardMaterial color="#4a2f1b" roughness={0.5} /></mesh>
        <mesh position={[2.3, 1.9, 0.1]}><sphereGeometry args={[0.08, 12, 12]} /><meshStandardMaterial color="#c9a24b" metalness={1} roughness={0.2} /></mesh>
      </group>
      {/* caminho + degraus */}
      <mesh position={[0, 0.03, 12]} receiveShadow><boxGeometry args={[2.6, 0.06, 26]} /><meshStandardMaterial color="#cfc6b6" /></mesh>
      <mesh position={[0, 0.1, 1.2]}><boxGeometry args={[3.2, 0.2, 1]} /><meshStandardMaterial color="#b9ae9a" /></mesh>
    </group>
  )
}

export default function Scene({ p, onReady }: { p: MutableRefObject<number>; onReady?: () => void }) {
  const door = useRef<THREE.Group | null>(null)
  const trees: [number, number, number][] = [[-9, 3, 1.2], [10, 2, 1.1], [-14, -4, 1.4], [15, -3, 1.3], [-8, 14, 1], [9, 16, 1.1], ...(mobile ? [] : [[-18, 10, 1.3], [19, 12, 1.2]] as [number, number, number][])]
  return (
    <Canvas shadows={!mobile} dpr={mobile ? [1, 1.25] : [1, 1.75]} camera={{ fov: 50, near: 0.1, far: 400 }} onCreated={onReady}>
      <Sky sunPosition={[40, 25, 30]} turbidity={3} rayleigh={1.2} />
      <fog attach="fog" args={['#cfe3f2', 60, 160]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[20, 30, 25]} intensity={2.2} castShadow={!mobile} shadow-mapSize={[2048, 2048]} shadow-camera-left={-30} shadow-camera-right={30} shadow-camera-top={30} shadow-camera-bottom={-30} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}><planeGeometry args={[300, 300]} /><meshStandardMaterial color="#4f9a45" roughness={1} /></mesh>
      <House door={door} />
      {trees.map(([x, z, s], i) => <Tree key={i} x={x} z={z} s={s} />)}
      {[-6, -4.5, -3, 3, 4.5, 6].map((x) => <Bush key={x} x={x} z={1.8} />)}
      {[[-30, 38, -40], [25, 42, -50], [60, 36, -30]].map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>{[0, 6, -6].map((dx) => <mesh key={dx} position={[dx, 0, 0]} scale={[5, 2.2, 3]}><sphereGeometry args={[1, 12, 12]} /><meshBasicMaterial color="#fff" transparent opacity={0.9} fog={false} /></mesh>)}</group>
      ))}
      <Rig p={p} door={door} />
    </Canvas>
  )
}
