import { createElement, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const ONERTRAVEL_WIDGET_SCRIPT =
  'https://static.onertravel.com/widget/search/production/widget-befly.js';

export default function TravelSearch() {
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[data-onertravel-widget="true"]',
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = ONERTRAVEL_WIDGET_SCRIPT;
    script.async = true;
    script.dataset.onertravelWidget = 'true';
    document.body.appendChild(script);
  }, []);

  return (
    <section id="encontre-viagem" className="py-24 lg:py-32 bg-muted/30">
      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-10">
          <span
            className={`text-accent font-semibold text-sm uppercase tracking-widest mb-3 block ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Planeje com praticidade
          </span>
          <h2
            className={`font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Encontre a sua viagem
          </h2>
        </div>

        <div
          className={`bg-card rounded-2xl border border-border/50 shadow-lg p-4 sm:p-6 md:p-8 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <div id="wrapper">
            {createElement('befly-widget', {
              language: 'pt-br',
              'new-tab': 'true',
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
