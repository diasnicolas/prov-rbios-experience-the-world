import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Heart, Shield, Star, Headphones } from 'lucide-react';

const items = [
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    desc: 'Empatia e atenção aos detalhes em cada etapa da sua viagem.',
  },
  {
    icon: Star,
    title: 'Experiências Personalizadas',
    desc: 'Roteiros sob medida para o perfil e necessidade de cada cliente.',
  },
  {
    icon: Shield,
    title: 'Preço Justo e Transparente',
    desc: 'Opções variadas com o melhor custo-benefício, sem surpresas.',
  },
  {
    icon: Headphones,
    title: 'Suporte Completo',
    desc: 'Acompanhamento do planejamento até o retorno da viagem.',
  },
];

export default function Differentials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-primary">
      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span
            className={`text-secondary font-semibold text-sm uppercase tracking-widest mb-3 block ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Por que nos escolher
          </span>
          <h2
            className={`font-display text-3xl sm:text-4xl font-bold text-primary-foreground leading-tight text-balance ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Nossos diferenciais
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <item.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
