import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Plane, Hotel, Ship, Globe, Umbrella, CreditCard } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Passagens Aéreas',
    desc: 'Emissão de passagens nacionais e internacionais com pesquisa inteligente de rotas e tarifas para você economizar sem abrir mão do conforto.',
  },
  {
    icon: Hotel,
    title: 'Hospedagem',
    desc: 'Seleção de hotéis, resorts e pousadas de confiança, de acordo com seu estilo de viagem, localização desejada e melhor custo-benefício.',
  },
  {
    icon: Ship,
    title: 'Cruzeiros',
    desc: 'Opções de cruzeiros em destinos incríveis, com orientação completa sobre cabines, roteiro, documentação e tudo o que você precisa saber.',
  },
  {
    icon: Globe,
    title: 'Pacotes de Viagem',
    desc: 'Montamos pacotes completos, nacionais e internacionais, com roteiro personalizado para você viajar com praticidade e tranquilidade.',
  },
  {
    icon: Umbrella,
    title: 'Seguro Viagem',
    desc: 'Proteção essencial para sua viagem, com coberturas adequadas ao destino e suporte para imprevistos de saúde, bagagem e deslocamento.',
  },
  {
    icon: CreditCard,
    title: 'Parcelamento Facilitado',
    desc: 'Condições de pagamento flexíveis e acessíveis para você planejar com calma e realizar a viagem dos sonhos no momento certo.',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-muted/50">
      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <span
            className={`text-accent font-semibold text-sm uppercase tracking-widest mb-3 block ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            O que oferecemos
          </span>
          <h2
            className={`font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Nossos serviços
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative p-8 rounded-2xl bg-card shadow-sm hover:shadow-xl border border-border/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-forest scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
