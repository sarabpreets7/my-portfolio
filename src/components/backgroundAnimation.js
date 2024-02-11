// src/components/BackgroundAnimation.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const FullPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundAnimation = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    const numberOfParticles = 50; // Adjust number of particles here

    // Create particle
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width; // Random starting x position
        this.y = Math.random() * canvas.height; // Random starting y position
        this.size = Math.random() * 5 + 1; // Random size
        this.speedX = Math.random() * 3 - 1.5; // Random x speed
        this.speedY = Math.random() * 3 - 1.5; // Random y speed
      }

      // Method to draw individual particle
      draw() {
        ctx.fillStyle = theme.text || 'white'; // Use theme text color or default to white
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Method to update particle's position
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        this.draw();
      }
    }

    // Initialize particles
    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => particle.update());
      requestAnimationFrame(animate);
    }

    init();
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Re-initialize particles on resize
    });

  }, [theme]);

  return <canvas ref={canvasRef} style={{position: 'fixed', top: '0', pointerEvents: 'none'}}></canvas>;

};

export default BackgroundAnimation;
