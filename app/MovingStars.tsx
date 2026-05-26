"use client";

import React from "react";

export default function MovingStars() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const stars = React.useMemo(() => {
        if (!mounted) return [];

        return Array.from({ length: 70 }, (_, index) => ({
            id: index,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 8,
            duration: 10 + Math.random() * 10,
            size: 1 + Math.random() * 3,
            opacity: 0.35 + Math.random() * 0.65,
        }));
    }, [mounted]);

    if (!mounted) return null;

    return (
        <div className="stars-background pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {stars.map((star) => (
                <span
                    key={star.id}
                    className="star"
                    style={
                        {
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: star.opacity,
                            animationDelay: `${star.delay}s`,
                            "--star-duration": `${star.duration}s`,
                        } as React.CSSProperties
                    }
                />
            ))}

            <span className="shooting-star shooting-star-one" />
            <span className="shooting-star shooting-star-two" />
            <span className="shooting-star shooting-star-three" />
        </div>
    );
}
