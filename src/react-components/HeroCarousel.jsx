import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const HeroCarousel = ({ projects }) => {
  // Take exactly 5 featured projects
  const featuredProjects = projects.filter((p) => p.isFeaturedHero).slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);

  const totalSlides = featuredProjects.length || 5;
  const currentProject = featuredProjects[currentIndex] || projects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleGoTo = (index) => {
    setCurrentIndex(index);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Halo Garis AS Studio, saya ingin berkonsultasi mengenai rancangan arsitektur dan interior rumah tinggal modern bernuansa kayu. Apakah ada waktu luang untuk berdiskusi?",
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  // Auto-play timer (5 seconds per slide)
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isAutoPlaying, totalSlides]);

  return (
    <section
      id="hero-carousel-section"
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-neutral-950 text-white overflow-hidden select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Image Carousel with Smooth Crossfade & Subtle Zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentProject.heroImage.src || currentProject.heroImage}
            alt={currentProject.title}
            className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />

          {/* Vignette & Gradient Overlays for High Contrast Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent w-full md:w-3/4" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-24 sm:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">
          {/* Left: Business Description & CTWA Button */}
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            {/* Business Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/50 backdrop-blur-md border border-white/20 text-amber-300 text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase">
              <span>GARIS AS STUDIO</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">
                ARSITEKTUR, INTERIOR & KONTRUKSI
              </span>
            </div>

            {/* Business Main Headline */}
            <h1
              id="hero-business-headline"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white font-display leading-[1.1] drop-shadow-md"
            >
              Rumah Tinggal Modern{" "}
              <span className="text-amber-200">Bernuansa Kayu Alami</span>
            </h1>

            {/* Business Description */}
            <p className="text-sm sm:text-base text-neutral-200 max-w-xl leading-relaxed font-light drop-shadow">
              Spesialis perancangan arsitektur, interior, dan konstruksi hunian
              bernilai seni tinggi dengan kenyamanan tropis, proporsi presisi,
              dan material kayu pilihan.
            </p>

            {/* Action Buttons: CTWA & Portfolio */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* CTWA Button (Click To WhatsApp) */}
              <button
                id="hero-ctwa-btn"
                onClick={handleWhatsAppClick}
                className="group relative inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20bd5a] text-neutral-950 font-extrabold text-xs sm:text-sm tracking-[0.15em] uppercase rounded-xs transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 cursor-pointer focus:outline-none"
              >
                <MessageCircle className="w-4 h-4 text-neutral-950 fill-neutral-950" />
                <span>KONSULTASI VIA WHATSAPP</span>
              </button>

              {/* View All Portfolio a */}
              <a
                id="hero-all-portfolio-btn"
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-3.5 sm:py-4 border border-white/60 bg-black/30 backdrop-blur-xs text-white hover:bg-white hover:text-black hover:border-white text-xs sm:text-sm font-bold tracking-[0.15em] uppercase rounded-xs transition-all duration-300 cursor-pointer"
              >
                <span>JELAJAHI PORTOFOLIO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Small Project Title & Lihat Portofolio (Kanan Pojok Bawah) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id + "-mini-project"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="lg:mb-1 bg-black/60 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-xs max-w-xs sm:max-w-sm self-start lg:self-end text-left lg:text-right shadow-2xl space-y-1.5"
            >
              <div className="flex items-center gap-2 lg:justify-end text-[10px] font-bold tracking-widest text-amber-300 uppercase">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>
                  PROYEK LATAR ({currentIndex + 1}/{totalSlides})
                </span>
              </div>

              <h2
                id="hero-mini-project-title"
                className="text-sm sm:text-base font-bold uppercase tracking-wide text-white font-display line-clamp-1"
              >
                {currentProject.title}
              </h2>

              <p className="text-[11px] text-neutral-300 tracking-wider uppercase">
                {currentProject.location} • {currentProject.year}
              </p>

              <div className="pt-1 flex items-center lg:justify-end">
                <a
                  id="hero-view-portfolio-btn"
                  href={`/portfolio/${currentProject.id}`}
                  className="group inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-white hover:text-amber-200 underline underline-offset-4 decoration-amber-400/70 hover:decoration-amber-300 transition-colors"
                >
                  <span>Lihat Portofolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Bar: Indicators (Left) & Controls (Right) matching image 1 */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-30 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-end justify-between">
        {/* Left: 5 Slide Bars */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {featuredProjects.map((_, idx) => (
            <button
              key={idx}
              id={`hero-indicator-${idx}`}
              onClick={() => handleGoTo(idx)}
              className="group py-2 focus:outline-none cursor-pointer"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`h-[2.5px] sm:h-[3px] rounded-full transition-all duration-500 ${
                  currentIndex === idx
                    ? "w-10 sm:w-16 bg-white shadow-xs"
                    : "w-6 sm:w-8 bg-white/35 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right: Slide Counter & Nav Arrows */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Slide Counter (03 / 05 formatted) */}
          <div className="flex flex-col items-center text-right font-mono text-xs sm:text-sm tracking-wider">
            <span className="font-bold text-white">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs text-neutral-400">
              {String(totalSlides).padStart(2, "0")}
            </span>
          </div>

          {/* Navigation Arrows in translucent border boxes */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <button
              id="hero-prev-btn"
              onClick={handlePrev}
              className="p-2 sm:p-2.5 border border-white/30 bg-black/40 backdrop-blur-xs text-white/80 hover:text-white hover:border-white/80 hover:bg-black/60 transition-all focus:outline-none cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              id="hero-next-btn"
              onClick={handleNext}
              className="p-2 sm:p-2.5 border border-white/30 bg-black/40 backdrop-blur-xs text-white/80 hover:text-white hover:border-white/80 hover:bg-black/60 transition-all focus:outline-none cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
