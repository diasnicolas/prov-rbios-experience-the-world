import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo.png';
import { MapPin, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center section-padding py-32">
        <img
          src={logo}
          alt="Provérbios Turismo"
          className="h-24 sm:h-32 w-auto mx-auto mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        />
        <h1
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-up text-balance"
          style={{ animationDelay: '0.3s' }}
        >
          Transformamos destinos em{' '}
          <span className="text-secondary">memórias inesquecíveis</span>
        </h1>
        <p
          className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 font-light leading-relaxed opacity-0 animate-fade-up text-pretty"
          style={{ animationDelay: '0.5s' }}
        >
          Nós cuidamos de todo o planejamento e você curte o momento. Atendimento
          humanizado, experiências personalizadas e preço justo.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          <Button variant="hero" size="lg" onClick={scrollToContact} className="text-base px-8 py-6 rounded-full">
            <MapPin className="mr-2 h-5 w-5" />
            Planejar minha viagem
          </Button>
          <Button variant="hero-outline" size="lg" onClick={scrollToAbout} className="text-base px-8 py-6 rounded-full">
            Conheça a Provérbios
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
}
