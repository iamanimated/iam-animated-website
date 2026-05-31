"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Mail,
  Star,
  Gamepad2,
  Film,
  Palette,
} from "lucide-react";

import MovingStars from "./MovingStars";

export default function IAMAnimatedWebsite() {
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

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <MovingStars />

      {/* NAVBAR */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-cyan-500/20 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/iam_logo.png"
              alt="IAM Animated Logo"
              width={45}
              height={45}
              className="rounded-full shadow-[0_0_25px_rgba(0,255,255,0.7)]"
            />

            <h1 className="text-3xl font-black tracking-tight">
              IAM ANIMATED
              <span className="text-cyan-400">™</span>
            </h1>
          </div>

          <div className="hidden gap-8 md:flex">
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>

            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>

            <a href="#gallery" className="hover:text-cyan-400">
              Gallery
            </a>

            <a href="#about" className="hover:text-cyan-400">
              About
            </a>

            <a href="#store" className="hover:text-cyan-400">
              Store
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-cyan-500 px-5 py-2 font-bold text-black transition hover:bg-cyan-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center px-6 py-24 text-center"
      >
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/iam_logo.png"
              alt="IAM Animated"
              width={160}
              height={160}
              className="rounded-full shadow-[0_0_80px_rgba(0,255,255,0.6)]"
            />
          </div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-cyan-300">
            <Star className="h-4 w-4" />
            Innovation • Ambition • Manifestation
          </div>

          <h1 className="mb-8 text-5xl font-black tracking-tight md:text-7xl">
            IAM ANIMATED
            <span className="text-cyan-400">™</span>
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-2xl text-slate-300">
            A creative universe for games, animation, digital products,
            cinematic stories, and future technology.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/dimension-walker"
              className="rounded-2xl bg-cyan-500 px-10 py-5 text-xl font-bold text-black shadow-[0_0_30px_rgba(0,255,255,0.5)] transition hover:scale-105 hover:bg-cyan-400"
            >
              Explore Projects 🚀
            </Link>

            <a
              href="mailto:kinglordian1@gmail.com"
              className="rounded-2xl border border-cyan-500/40 px-10 py-5 text-xl transition hover:bg-cyan-500 hover:text-black"
            >
              Contact IAM ANIMATED™ ✉️
            </a>

            <a
              href="https://wa.me/27766530553"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-green-500 px-10 py-5 text-xl font-bold text-black transition hover:scale-105 hover:bg-green-400"
            >
              WhatsApp IAM ANIMATED™
            </a>

            <a
              href="https://www.youtube.com/@IAMANIMATED"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-red-500 px-10 py-5 text-xl font-bold text-white transition hover:scale-105 hover:bg-red-400"
            >
              Watch Gameplay
            </a>

            <a
              href="https://www.youtube.com/@IAMANIMATED?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-cyan-500/40 px-10 py-5 text-xl font-bold transition hover:bg-cyan-500 hover:text-black"
            >
              Follow IAM ANIMATED™
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="mb-4 text-lg font-bold tracking-[0.3em] text-cyan-400">
              PROJECT SHOWCASE
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Built Under IAM ANIMATED™
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {/* CARD 1 */}
            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-blue-900/10 p-10">
              <Gamepad2 className="mb-6 h-12 w-12 text-cyan-400" />

              <p className="mb-4 text-sm tracking-[0.3em] text-cyan-300">
                2D ACTION PLATFORMER
              </p>

              <h3 className="mb-6 text-4xl font-black">
                IAM: THE DIMENSION WALKER™
              </h3>

              <p className="mb-8 text-slate-300">
                A cinematic 2D action-platformer where IAM walks through
                dangerous dimensions, unlocks abilities, battles enemies, and
                survives impossible stages.
              </p>

              <span className="rounded-full border border-cyan-500/30 px-5 py-2 text-cyan-300">
                In Development
              </span>
            </div>

            {/* CARD 2 */}
            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-blue-900/10 p-10">
              <Film className="mb-6 h-12 w-12 text-cyan-400" />

              <p className="mb-4 text-sm tracking-[0.3em] text-cyan-300">
                CINEMATIC STORY CONCEPT
              </p>

              <h3 className="mb-6 text-4xl font-black">
                The Forgotten Flame™
              </h3>

              <p className="mb-8 text-slate-300">
                An epic animated storytelling project built around mystery,
                power, memory, and the rise of a forgotten guardian.
              </p>

              <span className="rounded-full border border-cyan-500/30 px-5 py-2 text-cyan-300">
                Concept / Pilot
              </span>
            </div>

            {/* CARD 3 */}
            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-blue-900/10 p-10">
              <Palette className="mb-6 h-12 w-12 text-cyan-400" />

              <p className="mb-4 text-sm tracking-[0.3em] text-cyan-300">
                DIGITAL PRODUCTS
              </p>

              <h3 className="mb-6 text-4xl font-black">
                IAM ANIMATED™ Assets
              </h3>

              <p className="mb-8 text-slate-300">
                Wallpapers, templates, game assets, cinematic packs, and future
                creative resources.
              </p>

              <span className="rounded-full border border-cyan-500/30 px-5 py-2 text-cyan-300">
                Growing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="mb-4 text-lg font-bold tracking-[0.3em] text-cyan-400">
              GAMEPLAY GALLERY
            </p>

            <h2 className="mb-6 text-4xl md:text-6xl font-black">
              THE DIMENSION WALKER™
            </h2>

            <p className="mx-auto max-w-4xl text-2xl text-slate-300">
              Explore cinematic dimensions, boss fights, action gameplay,
              futuristic worlds, and the evolving universe of IAM ANIMATED™.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
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

                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-black">
                    Level {i + 1}
                  </h3>

                  <p className="mb-8 text-lg text-slate-300">
                    Gameplay screenshot from IAM: THE DIMENSION WALKER™
                    showcasing dimensional exploration, combat, and cinematic
                    environments.
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
                    className="rounded-2xl border border-cyan-400/30 px-6 py-4 text-xl font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
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

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-4xl md:text-6xl font-black">ABOUT IAM ANIMATED™</h2>

          <p className="text-2xl leading-relaxed text-slate-300">
            IAM ANIMATED™ is a futuristic creative brand focused on games,
            animation, storytelling, cinematic worlds, apps, digital products,
            and next-generation entertainment experiences.
          </p>
        </div>
      </section>

      {/* STORE */}
      <section id="store" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-4xl md:text-6xl font-black">FUTURE STORE</h2>

          <p className="mb-10 text-2xl text-slate-300">
            Digital templates, game assets, wallpapers, creative packs,
            merchandise, and official IAM ANIMATED™ products coming soon.
          </p>

          <button className="rounded-2xl bg-cyan-500 px-10 py-5 text-2xl font-bold text-black transition hover:bg-cyan-400">
            Store Coming Soon
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-4xl md:text-6xl font-black">CONTACT</h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:kinglordian1@gmail.com"
              className="rounded-2xl border border-cyan-500/30 px-8 py-5 text-xl transition hover:bg-cyan-500 hover:text-black"
            >
              Email: kinglordian1@gmail.com
            </a>

            <a
              href="https://wa.me/27766530553"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-green-500 px-8 py-5 text-xl font-bold text-black transition hover:bg-green-400"
            >
              WhatsApp: +27 76 653 0553
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/20 px-6 py-10 text-center text-slate-400">
        <p className="text-xl font-bold text-white">
          IAM ANIMATED™
        </p>

        <p className="mt-2">
          Games • Animation • Digital Products • Future Technology
        </p>

        <p className="mt-4 text-sm">
          © 2026 IAM ANIMATED™. All rights reserved.
        </p>
      </footer>
    </main>
  );
}


