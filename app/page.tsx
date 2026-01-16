import { FiArrowRight, FiCalendar } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0f14] to-[#05070a] text-white px-6">
      <div className="max-w-4xl text-center">
        {/* Bulle */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          CRÉER UN SITE WEB VRAIMENT UNIQUE
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Votre site doit donner envie de <br />
          <span className="text-emerald-400">rester</span>, pas de revenir en arrière.
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Design moderne, SEO solide, Suivi complet : on construit un site qui retient vos visiteurs et vous apporte des résultats.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">
            <FiCalendar size={18} />
            Prendre RDV
          </button>

          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
            Découvrir nos projets
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
