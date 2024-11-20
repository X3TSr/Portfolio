import React, { useEffect, useRef } from 'react'
import style from './HeroContainer.module.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const HeroContainer = () => {

    const obj = useGLTF('/3dModels/LowPollyTree.glb');
    const meshRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (meshRef.current) {
                meshRef.current.rotation.y = window.scrollY * 0.0005;
                meshRef.current.rotation.z = window.scrollY * 0.0005;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${style.heroContainer}`}>
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [50, 60, 0]
                }}
            >
                <ambientLight intensity={0} />
                <directionalLight position={[50, 60, 5]} intensity={10} color={'#6e5a99'} />
                <primitive ref={meshRef} object={obj.scene} />
            </Canvas>
        </div>
    );
};

export default HeroContainer;