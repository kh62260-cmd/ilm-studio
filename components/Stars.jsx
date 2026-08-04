"use client";

export default function Stars() {

    const stars = Array.from({ length: 80 });

    return (

        <div className="stars">

            {stars.map((_, index) => (

                <span
                    key={index}
                    className="star"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />

            ))}

        </div>

    );

}