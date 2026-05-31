"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Gamepad2,
    Flame,
    Swords,
    Coins,
    Crown,
    Rocket,
    Youtube,
    ArrowLeft,
} from "lucide-react";

import MovingStars from "../MovingStars";

export default function DimensionWalkerPage() {
    const galleryImages = [
        "/images/Level_1.png",
        "/images/Level_2.png",
        "/images/Level_3.png",
        "/images/Level_4.png",
        "/images/Level_5.png",
        "/images/Level_6.png",
        "/images/Level_7.png",
        "/images/Level_8.png",
        "/images/Level_9.png",
        "/images/Level_10.png",
        "/images/Level_11.png",
        "/images/Level_12.png",
    ];

    const levelLinks = [
        "https://www.youtube.com/watch?v=IJ1cSGjawDU",
        "https://www.youtube.com/watch?v=tVAGfe_KtlE",
        "https://www.youtube.com/watch?v=skOL2IerA4s",
        "https://www.youtube.com/watch?v=Tr3-8T00t2A",
        "https://www.youtube.com/watch?v=vHPlbUq7Aas",
        "https://www.youtube.com/watch?v=e2R2p40g41I",
    ];

    const features = [
        {
            title: "Action Platformer",
            text: "Run, jump, survive traps, and move through dangerous dimensional worlds.",
            icon: <Gamepad2 className="h-10 w-10 text-cyan-400" />,
        },
        {
            title: "Enemy Battles",
            text: "Fight enemies, survive attacks, and progress through harder stages.",
            icon: <Swords className="h-10 w-10 text-cyan-400" />,
        },
        {
            title: "Special Powers",
            text: "Unlock skills, attacks, and future abilities as the game grows.",
            icon: <Flame className="h-10 w-10 text-cyan-400" />,
        },
        {
            title: "Coins & Rewards",
            text: "Collect coins, unlock content, and prepare for future shop upgrades.",
            icon: <Coins className="h-10 w-10 text-cyan-400" />,
        },
        {
            title: "Boss Energy",
            text: "Future boss fights and stronger enemies will expand the challenge.",
            icon: <Crown className="h-10 w-10 text-cyan-400" />,
        },
        {
            title: "Future Launch",
            text: "Built for mobile release, updates, and future IAM ANIMATED™ expansion.",
            icon: <Rocket className="h-10 w-10 text-cyan-400" />,
        },
    ];

    return (
        <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <MovingStars />

            <nav className="sticky top-0 z-50 w-full border-b border-cyan-500/20 bg-black/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/iam_logo.png"
                            alt="IAM Animated Logo"
                            width={45}
                            height={45}
                            className="rounded-full shadow-[0_0_25px_rgba(0,255,255,0.7)]"
                        />

                        <h1 className="text-2xl font-black tracking-tight">
                            IAM ANIMATED<span className="text-cyan-400">™</span>
                        </h1>
                    </Link>

                    <Link
                        href="/"
                        className="rounded-xl border border-cyan-500/40 px-5 py-2 font-bold text-cyan-300 hover:bg-cyan-500 hover:text-black"
                    >
                        <ArrowLeft className="mr-2 inline h-4 w-4" />
                        Back Home
                    </Link>
                </div>
            </nav>

            <section className="relative flex min-h-screen items-center justify-center px-6 py-24 text-center">
                <div className="relative z-10 mx-auto max-w-5xl">
                    <Image
                        src="/images/iam_logo.png"
                        alt="IAM Animated"
                        width={150}
                        height={150}
                        className="mx-auto mb-8 rounded-full shadow-[0_0_80px_rgba(0,255,255,0.6)]"
                    />

                    <p className="mb-4 font-bold tracking-[0.3em] text-cyan-400">
                        OFFICIAL GAME PROJECT
                    </p>

                    <h1 className="mb-8 text-5xl font-black md:text-7xl">
                        IAM: THE DIMENSION WALKER<span className="text-cyan-400">™</span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">
                        Walk through dangerous dimensions, battle enemies, unlock powers,
                        collect coins, and survive impossible worlds.
                    </p>

                    <div className="flex flex-wrap justify-center gap-5">
                        <a
                            href="https://www.youtube.com/watch?v=IJ1cSGjawDU"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl bg-red-500 px-8 py-5 text-xl font-bold text-white hover:bg-red-400"
                        >
                            <Youtube className="mr-2 inline h-5 w-5" />
                            Watch Gameplay
                        </a>

                        <a
                            href="#gallery"
                            className="rounded-2xl bg-cyan-500 px-8 py-5 text-xl font-bold text-black hover:bg-cyan-400"
                        >
                            View Levels
                        </a>
                    </div>
                </div>
            </section>

            <section className="px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-center font-bold tracking-[0.3em] text-cyan-400">
                        STORY
                    </p>

                    <h2 className="mb-8 text-center text-4xl font-black md:text-6xl">
                        A Universe Breaking Apart
                    </h2>

                    <p className="mx-auto max-w-4xl text-center text-xl leading-relaxed text-slate-300">
                        In a fractured universe where dimensions collide, IAM must travel
                        across mysterious worlds filled with enemies, traps, forgotten
                        powers, and hidden secrets. Each dimension becomes more dangerous,
                        forcing IAM to adapt, grow stronger, and keep walking forward.
                    </p>
                </div>
            </section>

            <section className="px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-4 text-center font-bold tracking-[0.3em] text-cyan-400">
                        FEATURES
                    </p>

                    <h2 className="mb-16 text-center text-4xl font-black md:text-6xl">
                        What Makes The Game Alive
                    </h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-blue-900/10 p-8 shadow-[0_0_40px_rgba(0,255,255,0.08)]"
                            >
                                <div className="mb-5">{feature.icon}</div>
                                <h3 className="mb-4 text-2xl font-black">{feature.title}</h3>
                                <p className="text-slate-300">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="gallery" className="px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-4 text-center font-bold tracking-[0.3em] text-cyan-400">
                        LEVEL GALLERY
                    </p>

                    <h2 className="mb-16 text-center text-4xl font-black md:text-6xl">
                        Walk Through Dimensions
                    </h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        {galleryImages.map((image, i) => (
                            <div
                                key={i}
                                className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-blue-900/10"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={`Level ${i + 1}`}
                                        fill
                                        className="object-cover transition duration-500 hover:scale-110"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="mb-3 text-2xl font-black">Level {i + 1}</h3>

                                    <p className="mb-6 text-slate-300">
                                        Gameplay preview from IAM: THE DIMENSION WALKER™.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            const url = levelLinks[i];

                                            if (!url) {
                                                alert("This level gameplay is coming soon.");
                                                return;
                                            }

                                            window.location.href = url;
                                        }}
                                        className="rounded-2xl border border-cyan-400/30 px-5 py-3 font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                                    >
                                        {i < levelLinks.length
                                            ? `Watch Level ${i + 1} →`
                                            : "Coming Soon"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-24">
                <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-black/60 p-10 text-center shadow-[0_0_60px_rgba(0,255,255,0.12)]">
                    <p className="mb-4 font-bold tracking-[0.3em] text-cyan-400">
                        ROADMAP
                    </p>

                    <h2 className="mb-8 text-4xl font-black md:text-6xl">
                        Future Updates
                    </h2>

                    <div className="grid gap-4 text-left text-lg text-slate-300 md:grid-cols-2">
                        <p>✅ Website Launch</p>
                        <p>✅ Gameplay Gallery</p>
                        <p>✅ Google Verification</p>
                        <p>🔄 More Levels</p>
                        <p>🔄 New Enemies</p>
                        <p>🔄 Boss Battles</p>
                        <p>🔄 Google Play Launch</p>
                        <p>🔄 Future Dimensions</p>
                    </div>
                </div>
            </section>

            <footer className="border-t border-cyan-500/20 px-6 py-10 text-center text-slate-400">
                <p className="text-xl font-bold text-white">IAM ANIMATED™</p>
                <p className="mt-2">
                    IAM: THE DIMENSION WALKER™ • Official Game Page
                </p>
            </footer>
        </main>
    );
}
