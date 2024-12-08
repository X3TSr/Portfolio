import React, { useEffect, useRef } from 'react'
import style from './HeroContainer.module.css'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Planet = () => {

    const obj = useGLTF('/3dModels/Planet5.gltf');
    const meshRef = useRef();

    useEffect(() => {

        console.log(obj.scene);

        // Rotate on scroll
        const handleScroll = () => {
            if (meshRef.current) {
                meshRef.current.rotation.y = window.scrollY * 0.0025;
                meshRef.current.rotation.z = window.scrollY * 0.0025;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [obj]);

    return (
        <primitive ref={meshRef} object={obj.scene} position-x={50} scale={.25} />
    );
}

const HeroContainer = () => {

    return (
        <div className={`${style.heroContainer}`}>
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 140, 0]
                }}
            >
                <ambientLight intensity={1} />
                <directionalLight position={[50, 60, 5]} intensity={3} color={'#6e5a99'} />
                <Planet />
            </Canvas>
        </div>
    );
};

export default HeroContainer;