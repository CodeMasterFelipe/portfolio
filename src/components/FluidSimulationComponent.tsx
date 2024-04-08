import React, { useRef, useEffect } from 'react';
import FluidDynamicsSolver from '../fluidSimulation/FluidDynamicsSolver'; // Adjust the import path according to your project structure

const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
// const canvasHeight = 512;

const FluidBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scale = 10;
  // const solver = new FluidDynamicsSolver(Math.floor(window.innerWidth / scale), 0.005, 0.0, -0.0001); // Example parameters
  // const solver = new FluidDynamicsSolver(Math.floor(window.innerWidth / scale), 0.006, 0, -0.0002); // Example parameters
  const solver = new FluidDynamicsSolver(Math.floor(window.innerWidth / scale), 0.006, 0.0, 0.0); // Example parameters
  solver.addVelocity(Math.floor(canvasWidth * 3 / 5 / scale), Math.floor(canvasHeight / 2 / scale), 5000, 0)
  solver.addVelocity(Math.floor(canvasWidth * 2 / 5 / scale), Math.floor(canvasHeight / 2 / scale), -5000, 0)
  solver.addVelocity(Math.floor(canvasWidth * 2.5 / 5 / scale), Math.floor(canvasHeight * 2.3 / 5 / scale), 0, -7000)
  solver.addVelocity(Math.floor(canvasWidth * 2.5 / 5 / scale), Math.floor(canvasHeight * 2.7 / 5 / scale), 0, 7000)
  const amount = 60; // Density amount to inject
  const velocityAmount = 40; // Velocity amount to inject

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    // let amount = 60; // Density amount to inject
    // let velocityAmount = 1; // Velocity amount to inject

    let lastX = 0;
    let lastY = 0;
    const onMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      if (x <= 10 || y <= 10) return;

      const gridX = Math.floor(x / scale);
      const gridY = Math.floor(y / scale);

      solver.addDensity(gridX, gridY, amount);
      solver.addVelocity(gridX, gridY, (x - lastX) / scale * velocityAmount, (y - lastY) / scale * velocityAmount);

      lastX = x;
      lastY = y;
    };

    // Assuming the solver initializes or updates its own density/velocity fields
    const render = () => {
      solver.simulate(); // Simulate one step

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // function drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
      //   ctx.beginPath();
      //   ctx.moveTo(x + radius, y);
      //   ctx.lineTo(x + width - radius, y);
      //   ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      //   ctx.lineTo(x + width, y + height - radius);
      //   ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      //   ctx.lineTo(x + radius, y + height);
      //   ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      //   ctx.lineTo(x, y + radius);
      //   ctx.quadraticCurveTo(x, y, x + radius, y);
      //   ctx.closePath();
      //   ctx.fill();
      // }

      for (let j = 0; j < solver.N; j++) {
        for (let i = 0; i < solver.N; i++) {
          const u = solver.u[solver.IX(i, j)];
          const v = solver.v[solver.IX(i, j)];
          // solver.v[solver.IX(i, j)] += 0.001;

          // Calculate the vector's magnitude and use it to scale the length
          const magnitude = Math.sqrt(u * u + v * v);
          let vectorLength = Math.max(1, magnitude * 20) - 1; // Adjust as necessary
          // const vectorLength = 10;
          vectorLength = Math.min(vectorLength, scale * 7); // Cap the length to half the cell size

          // Calculate angle for the direction
          const angle = Math.atan2(v, u);

          // Set up for drawing
          ctx.save();
          ctx.translate(i * scale + scale / 2, j * scale + scale / 2); // Center of cell
          ctx.rotate(angle);
          // ctx.fillStyle = 'rgba(75,210,245, 0.95)'; // Blue with some transparency
          ctx.fillStyle = `rgba(75,210,245, ${Math.min(1, Math.abs(magnitude / 3))})`; // Blue with some transparency

          // Draw the vector as a rounded rectangle
          // drawRoundedRect(ctx, -vectorLength / 2, -scale / 8, vectorLength, scale / 4, scale / 8);
          ctx.fillRect(-scale, -scale, scale, scale);

          ctx.restore();
        }
      }

      animationFrameId = window.requestAnimationFrame(render);
    };
    // mouseLayerRef.addEventListener('mousemove', onMouseMove);
    // mouseLayerRef.current?.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', onMouseMove);
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <>
      <canvas ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 0,
          filter: 'blur(5px)',
        }} />
    </>
  )
};

export default FluidBackground;
