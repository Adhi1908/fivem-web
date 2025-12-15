import { useEffect, useRef } from 'react';

const Snowfall = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;

        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            // Update simulation bounds
            width = window.innerWidth;
            height = window.innerHeight;
        };

        handleResize();

        const snowflakes = [];
        const snowflakeCount = 100;

        class Snowflake {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = Math.random() * 1 + 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.y > height) {
                    this.y = -this.size;
                    this.x = Math.random() * width;
                }
                if (this.x > width) {
                    this.x = 0;
                } else if (this.x < 0) {
                    this.x = width;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.shadowBlur = 5;
                ctx.shadowColor = "white";
                ctx.fill();
            }
        }

        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.push(new Snowflake());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            snowflakes.forEach(flake => {
                flake.update();
                flake.draw();
            });
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-50 pointer-events-none mix-blend-screen"
        />
    );
};

export default Snowfall;
