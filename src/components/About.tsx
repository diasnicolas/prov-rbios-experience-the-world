import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import sobre1 from '@/assets/sobre_1.jpeg';
import sobre2 from '@/assets/sobre_2.jpg';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photos column */}
          <div
            className={`flex gap-4 h-[500px] lg:h-[600px] ${
              isVisible ? 'opacity-100 animate-slide-left' : 'opacity-0'
            }`}
          >
            <div className="flex-1 rounded-2xl overflow-hidden shadow-xl bg-muted">
              <img
                src={sobre1}
                alt="Equipe da Provérbios Turismo em atendimento"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden shadow-xl bg-muted mt-12">
              <img
                src={sobre2}
                alt="Destino de viagem recomendado pela Provérbios Turismo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text column */}
          <div
            className={`${
              isVisible ? 'opacity-100 animate-slide-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.15s' }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
              Sobre nós
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6 text-balance">
              Uma agência nascida de um sonho, guiada por propósito
            </h2>
            <div className="space-y-4 text-foreground/75 leading-relaxed text-pretty">
              <p>
                Nossa história começou em 2023 a partir de um sonho. Em 2024 demos os primeiros
                passos, com muita dedicação. Somos uma agência cristã e o nome <strong className="text-foreground">Provérbios Turismo</strong> foi fruto
                disso. Em setembro iniciamos o processo de abertura legal, transformando o sonho
                da fundadora <strong className="text-foreground">Marli B. Cassiano</strong> em realidade.
              </p>
              <p>
                Somos apaixonados por viagens e por transformar destinos em experiências únicas.
                Entendemos que um atendimento humanizado, feito com empatia e atenção aos detalhes,
                faz muita diferença.
              </p>
              <p>
                Nossa preocupação sempre será oferecer a melhor experiência possível, ajudando
                nossos clientes a transformar seus sonhos em realidade, com todo o suporte
                necessário — do atendimento ao retorno da viagem.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-1 w-12 rounded-full bg-accent" />
              <p className="text-foreground font-display italic text-lg">
                "Criar memórias que ficarão marcadas pra sempre é o nosso compromisso."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
