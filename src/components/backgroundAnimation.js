import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import angularIcon from "../assests/images/ang.png";
import reactIcon from "../assests/images/react.png";
import htmlIcon from "../assests/images/html.png";
import jsIcon from "../assests/images/js.png";

const FullPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

const icons = [
    angularIcon, // Path to Angular icon
    reactIcon,   // Path to React icon
    htmlIcon,    // Path to HTML icon
    jsIcon,     // Path to CSS icon
  // Add more icons as needed
];

const BackgroundAnimation = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 25; // Adjust number of particles here

    // Load icons as images
    const images = icons.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });

    // Modified Particle class to use images
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.image = images[Math.floor(Math.random() * images.length)]; // Randomly select an image
        this.size = Math.random() * 20 + 10; // Adjust size as needed
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      draw() {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => particle.update());
      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

  }, [theme]);

  return <canvas ref={canvasRef} style={{position: 'fixed', top: '0', pointerEvents: 'none'}}></canvas>;
};

export default BackgroundAnimation;
