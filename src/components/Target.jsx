import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
  );
  useGSAP(() => {
    gsap.from(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 4, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
