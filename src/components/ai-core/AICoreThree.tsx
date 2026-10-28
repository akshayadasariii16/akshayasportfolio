import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AICoreThreeProps {
  size?: number;
  className?: string;
}

export const AICoreThree: React.FC<AICoreThreeProps> = ({ size = 320, className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Detect WebGL capability safely
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 5.2;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff8fa, 1.2);
    scene.add(ambientLight);

    const pinkLight = new THREE.PointLight(0xd982a3, 3, 50);
    pinkLight.position.set(3, 3, 3);
    scene.add(pinkLight);

    const lavenderLight = new THREE.PointLight(0xa78bfa, 3, 50);
    lavenderLight.position.set(-3, -2, 2);
    scene.add(lavenderLight);

    // Group for combined core rotation
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Outer Holographic Wireframe Icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xd982a3,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
      roughness: 0.2,
      metalness: 0.8
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Middle Geometric Polyhedron
    const midGeo = new THREE.OctahedronGeometry(1.2, 2);
    const midMat = new THREE.MeshStandardMaterial({
      color: 0xc4b5fd,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    const midMesh = new THREE.Mesh(midGeo, midMat);
    coreGroup.add(midMesh);

    // Inner Glowing Core Sphere
    const innerGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xf8d7e3,
      emissive: 0xd982a3,
      emissiveIntensity: 0.65,
      roughness: 0.1,
      metalness: 0.2
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Torus Equatorial Ring
    const ringGeo = new THREE.TorusGeometry(1.9, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xa78bfa,
      transparent: true,
      opacity: 0.65
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh);

    // Particle Cloud around core
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.9 + Math.random() * 0.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd982a3,
      size: 0.035,
      transparent: true,
      opacity: 0.7
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // Parallax mouse tilt
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = (e.clientX / innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / innerHeight) * 2 + 1;
      targetRotationY = mouseX * 0.4;
      targetRotationX = mouseY * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();

      if (!reducedMotion) {
        outerMesh.rotation.y += delta * 0.35;
        outerMesh.rotation.x += delta * 0.15;

        midMesh.rotation.y -= delta * 0.5;
        midMesh.rotation.z += delta * 0.2;

        ringMesh.rotation.z += delta * 0.25;
        particles.rotation.y += delta * 0.12;

        // Subtle core breathing scale
        const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.04;
        innerMesh.scale.set(scale, scale, scale);

        // Smooth damping towards mouse position
        coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.05;
        coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.05;
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      // Clean up geometries and materials
      outerGeo.dispose();
      outerMat.dispose();
      midGeo.dispose();
      midMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [size, reducedMotion]);

  return (
    <div
      ref={mountRef}
      className={`ai-core-three ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      aria-label="Interactive 3D Holographic AI Core"
    />
  );
};
