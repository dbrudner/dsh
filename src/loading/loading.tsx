import { useEffect, useRef } from "react";
import { Card } from "../components/card/card";

export function Loading() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Get the canvas and context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the canvas dimensions to fill the parent container
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Set up the code rain effect
    const columns = canvas.width / 20;
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    // Draw the code rain
    function draw() {
      // Fade the canvas
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the font and fill style
      ctx.fillStyle = "#0F0";
      ctx.font = "20px 'Press Start 2P'";

      // Draw the code rain
      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.floor(Math.random() * 65 + 33));
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Make the code rain drop down
        drops[i]++;

        // If the code rain hits the bottom, start it from the top again
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    }

    // Update the code rain every 33 milliseconds
    const intervalId = setInterval(draw, 33);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card noPadding>
      <canvas ref={canvasRef} width="1024px" height="600px" />
    </Card>
  );
}
