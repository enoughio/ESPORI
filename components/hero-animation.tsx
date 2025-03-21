"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000

    const posArray = new Float32Array(particlesCount * 3)
    const colorsArray = new Float32Array(particlesCount * 3)

    // Colors for particles
    const colors = [
      new THREE.Color(0x06b6d4), // cyan-500
      new THREE.Color(0x3b82f6), // blue-500
      new THREE.Color(0x8b5cf6), // purple-500
    ]

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Positions
      posArray[i] = (Math.random() - 0.5) * 50
      posArray[i + 1] = (Math.random() - 0.5) * 50
      posArray[i + 2] = (Math.random() - 0.5) * 50

      // Colors
      const color = colors[Math.floor(Math.random() * colors.length)]
      colorsArray[i] = color.r
      colorsArray[i + 1] = color.g
      colorsArray[i + 2] = color.b
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3))

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Lines between particles
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.2,
    })

    const linesGeometry = new THREE.BufferGeometry()
    const linesPositions = new Float32Array(particlesCount * 6) // 2 points per line, 3 values per point

    for (let i = 0; i < particlesCount; i += 2) {
      const i3 = i * 3
      const i6 = i * 6

      // Copy positions from particles
      linesPositions[i6] = posArray[i3]
      linesPositions[i6 + 1] = posArray[i3 + 1]
      linesPositions[i6 + 2] = posArray[i3 + 2]

      // Connect to a random particle
      const randomParticle = Math.floor(Math.random() * particlesCount)
      const r3 = randomParticle * 3

      linesPositions[i6 + 3] = posArray[r3]
      linesPositions[i6 + 4] = posArray[r3 + 1]
      linesPositions[i6 + 5] = posArray[r3 + 2]
    }

    linesGeometry.setAttribute("position", new THREE.BufferAttribute(linesPositions, 3))
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial)
    scene.add(linesMesh)

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate particles
      particlesMesh.rotation.x = elapsedTime * 0.05
      particlesMesh.rotation.y = elapsedTime * 0.03

      // Follow mouse
      particlesMesh.rotation.x += mouseY * 0.05
      particlesMesh.rotation.y += mouseX * 0.05

      linesMesh.rotation.x = elapsedTime * 0.05
      linesMesh.rotation.y = elapsedTime * 0.03
      linesMesh.rotation.x += mouseY * 0.05
      linesMesh.rotation.y += mouseX * 0.05

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)

      // Clean up
      scene.remove(particlesMesh)
      scene.remove(linesMesh)
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      linesGeometry.dispose()
      linesMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

