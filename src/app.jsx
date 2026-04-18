import React, { useState, useEffect } from 'react';
import { Sparkles, ShoppingBag, Menu, ArrowUpRight, Star } from 'lucide-react';

// ============================================
// EDITABLE CONSTANTS — Modify these to customize
// ============================================
const BRAND_NAME = "VESPERA";
const HERO_TITLE = "Scent of the Midnight Hour";
const HERO_SUBTITLE = "Crafted in the penumbra between dusk and dream. A cinematic essence for those who move after dark.";
const CTA_LABEL = "Discover the Ritual";
const COLLECTION_TAGLINE = "The Collection";
const COLLECTION_DESCRIPTION = "Three olfactory chapters. One silent manifesto.";

const PRODUCT_LIST = [
  {
    id: "01",
    name: "Noir Obsidian",
    notes: "Black Oud · Smoked Vetiver · Ambergris",
    imageURL: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
    price: "€ 340",
    volume: "100ML",
  },
  {
    id: "02",
    name: "Aurum Veil",
    notes: "Saffron · Liquid Gold · White Amber",
    imageURL: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    price: "€ 420",
    volume: "100ML",
  },
  {
    id: "03",
    name: "Violet Eclipse",
    notes: "Iris Noir · Bulgarian Rose · Dark Musk",
    imageURL: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80",
    price: "€ 380",
    volume: "100ML",
  },
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative font-sans">
      {/* Ambient Glow Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 51, 234, 0.12), transparent 40%)`,
        }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient Orbs */}
      <div className="fixed top-0 -left-40 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 -right-40 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ============ NAVIGATION ============ */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)] animate-pulse" />
            <span className="text-xs tracking-[0.4em] text-white/50 uppercase">Maison</span>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-xl md:text-2xl font-serif tracking-[0.3em] bg-gradient-to-r from-amber-200 via-white to-purple-200 bg-clip-text text-transparent">
              {BRAND_NAME}
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden md:flex text-xs tracking-[0.3em] uppercase text-white/60 hover:text-amber-300 transition-colors duration-500">
              Journal
            </button>
            <button className="relative group">
              <div className="absolute inset-0 bg-purple-500/20 blur-md group-hover:bg-purple-500/40 transition-all duration-500 rounded-full" />
              <div className="relative w-10 h-10 rounded-full border border-white/10 backdrop-blur-md bg-white/5 flex items-center justify-center group-hover:border-amber-300/50 transition-all duration-500">
                <ShoppingBag className="w-4 h-4 text-white/80 group-hover:text-amber-200 transition-colors" />
              </div>
            </button>
            <Menu className="w-5 h-5 text-white/70 md:hidden" />
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 z-10">
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400/70" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-amber-300/90">
                Collection Automne · MMXXVI
              </span>
            </div>

            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]"
              style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
              <span className="block text-white/95">{HERO_TITLE.split(' ').slice(0, 2).join(' ')}</span>
              <span className="block italic font-light bg-gradient-to-r from-amber-200 via-purple-300 to-amber-200 bg-clip-text text-transparent">
                {HERO_TITLE.split(' ').slice(2).join(' ')}
              </span>
            </h2>

            <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed font-light opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
              {HERO_SUBTITLE}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
              <button className="group relative overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-purple-500 to-amber-400 rounded-full opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 animate-[shimmer_3s_linear_infinite] bg-[length:200%_100%]" />
                <div className="relative px-10 py-5 rounded-full bg-black border border-white/20 backdrop-blur-xl flex items-center gap-3 group-hover:border-amber-300/60 transition-all duration-500">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span className="text-xs tracking-[0.3em] uppercase font-medium">
                    {CTA_LABEL}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-amber-200 group-hover:rotate-45 transition-all duration-500" />
                </div>
              </button>

              <button className="text-xs tracking-[0.3em] uppercase text-white/40 hover:text-white/80 transition-colors duration-500 border-b border-white/10 hover:border-amber-300/50 pb-1">
                Watch the Film
              </button>
            </div>

            <div className="flex items-center gap-8 pt-12 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
              <div>
                <div className="text-3xl font-serif text-amber-200">17</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">Rare Ingredients</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="text-3xl font-serif text-purple-200">48h</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">Longevity</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div>
                <div className="text-3xl font-serif text-white/90">∞</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">Signature</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[90%] rounded-full border border-amber-400/20 animate-[spin_30s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.9)]" />
              </div>
              <div className="absolute w-[70%] h-[70%] rounded-full border border-purple-400/20 animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1.5 h-1.5 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(216,180,254,0.9)]" />
              </div>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
            >
              <div className="relative w-48 md:w-64 h-72 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/30 via-purple-600/30 to-transparent blur-3xl" />
                <div className="relative w-full h-full rounded-t-[40%] rounded-b-lg overflow-hidden backdrop-blur-sm border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-purple-950/60 to-black/80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-5xl font-serif italic bg-gradient-to-r from-amber-200 to-purple-200 bg-clip-text text-transparent">V</div>
                    <div className="text-[8px] tracking-[0.4em] uppercase text-white/40 mt-2">Eau de Parfum</div>
                  </div>
                  <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/30 via-white/5 to-transparent" />
                </div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-8 rounded-sm bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_0_30px_rgba(251,191,36,0.4)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ============ COLLECTION ============ */}
      <section className="relative py-32 px-6 lg:px-12 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400/70" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-purple-300/90">Chapter I — III</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-serif">
                <span className="italic font-light text-white/90">{COLLECTION_TAGLINE}</span>
              </h3>
              <p className="text-white/40 mt-4 max-w-md font-light">{COLLECTION_DESCRIPTION}</p>
            </div>
            <button className="group flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-white/60 hover:text-amber-200 transition-colors self-start md:self-end">
              View Archive
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCT_LIST.map((product) => (
              <article
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-400/0 via-purple-500/0 to-amber-400/0 group-hover:from-amber-400/60 group-hover:via-purple-500/40 group-hover:to-amber-400/60 transition-all duration-700 blur-sm" />

                <div className="relative rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-700">
                  <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/70">N° {product.id}</span>
                  </div>

                  <div className="absolute top-5 right-5 z-20">
                    <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      <span className="text-[10px] tracking-[0.2em] text-white/60">{product.volume}</span>
                    </div>
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-amber-600/20 group-hover:opacity-0 transition-opacity duration-700 z-10 mix-blend-overlay" />
                    <img
                      src={product.imageURL}
                      alt={product.name}
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.2s] ease-out"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #4a2c5a 100%)';
                      }}
                    />

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-amber-300/40 flex items-center gap-2">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-white">Explore</span>
                        <ArrowUpRight className="w-3 h-3 text-amber-200" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 lg:p-8 space-y-4 relative">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-2xl font-serif text-white group-hover:text-amber-100 transition-colors duration-500">
                        {product.name}
                      </h4>
                      <span className="text-sm font-light text-amber-200/90 tracking-wider whitespace-nowrap">
                        {product.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-300/80 text-amber-300/80" />
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/5">
                      <div className="text-[9px] tracking-[0.3em] uppercase text-white/40 mb-2">Notes</div>
                      <p className="text-xs text-white/60 leading-relaxed font-light">{product.notes}</p>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-300/0 group-hover:border-amber-300/60 transition-all duration-500 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-purple-300/0 group-hover:border-purple-300/60 transition-all duration-500 rounded-br-2xl" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative z-10 border-t border-white/5 py-12 px-6 lg:px-12 backdrop-blur-xl bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/40">© MMXXVI {BRAND_NAME} · Paris / Grasse</span>
          </div>
          <div className="flex items-center gap-8 text-[10px] tracking-[0.3em] uppercase text-white/40">
            <a href="#" className="hover:text-amber-200 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Boutiques</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
