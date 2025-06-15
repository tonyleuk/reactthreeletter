'use client';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
/* import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; */
import { Suspense } from 'react';

/* const Model = () => {
    const gltf = useLoader(GLTFLoader, "/models/your-model.glb");
    return <primitive object={gltf.scene} scale={0.5} />;
}; */

const App = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={<span>Loading...</span>}>
            <mesh>
                <boxGeometry />
                <meshBasicMaterial color="royalblue" />
            </mesh>
            </Suspense>
        </Canvas>
    );
};

export default App;