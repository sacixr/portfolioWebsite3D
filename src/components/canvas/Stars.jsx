import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), {radius: 1.2});

  /*adjusts rotation*/
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    /*sets the rotation of the sphere of stars*/
    <group rotation={[5, 5, 5]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/*setting color, size, rescaling*/}
        <PointMaterial transparent color="#f272c8" size={0.002} sizeAttentuation={true} depthWrite={false}/>
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    /*places the stars in the background of the earth and contact me section*/
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  )
}

export default StarsCanvas