"use client";

export default function Particles() {

    const particles = Array.from({ length: 25 });

    return (

        <div className="particles">

            {particles.map((_, index) => (

                <span
                    key={index}
                    className="particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${8 + Math.random() * 8}s`
                    }}
                />

            ))}

        </div>

    );

}