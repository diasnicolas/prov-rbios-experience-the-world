import { useMemo } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const WIDGET_SRC_DOC = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://static.onertravel.com/widget/search/production/styles.css" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        background: transparent;
      }

      #wrapper {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <befly-widget language="pt-br" new-tab="true"></befly-widget>
    </div>
    <script type="text/javascript" src="https://static.onertravel.com/widget/search/production/widget-befly.js"></script>
  </body>
</html>`;

export default function TravelSearch() {
  const { ref, isVisible } = useScrollReveal();
  const iframeSrcDoc = useMemo(() => WIDGET_SRC_DOC, []);

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
          <iframe
            title="Buscador de viagens"
            srcDoc={iframeSrcDoc}
            loading="lazy"
            className="w-full border-0 rounded-xl h-[780px] md:h-[720px]"
            sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin"
          />
        </div>
      </div>
    </section>
  );
}
