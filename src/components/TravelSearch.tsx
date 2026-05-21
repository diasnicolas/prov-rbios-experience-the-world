import { useEffect, useMemo, useRef } from 'react';
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
        height: auto !important;
        min-height: 0 !important;
        overflow: hidden;
      }

      #wrapper {
        width: 100%;
        min-height: 0 !important;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <befly-widget language="pt-br" new-tab="true"></befly-widget>
    </div>
    <script type="text/javascript" src="https://static.onertravel.com/widget/search/production/widget-befly.js"></script>
    <script>
      (function () {
        const MESSAGE_TYPE = 'onertravel-widget-height';
        const wrapper = document.getElementById('wrapper');

        if (!wrapper) {
          return;
        }

        const notifyParent = () => {
          const wrapperRect = wrapper.getBoundingClientRect();
          let maxBottom = wrapperRect.top;

          const allElements = wrapper.querySelectorAll('*');
          allElements.forEach((node) => {
            const rect = node.getBoundingClientRect();
            if (rect.height > 0) {
              maxBottom = Math.max(maxBottom, rect.bottom);
            }
          });

          const measuredHeight = Math.max(
            Math.ceil(maxBottom - wrapperRect.top),
            Math.ceil(wrapperRect.height),
            120,
          );

          parent.postMessage(
            {
              type: MESSAGE_TYPE,
              height: measuredHeight,
            },
            '*',
          );
        };

        const scheduleNotify = () => requestAnimationFrame(notifyParent);

        if ('ResizeObserver' in window) {
          const ro = new ResizeObserver(scheduleNotify);
          ro.observe(document.documentElement);
          ro.observe(wrapper);
        }

        const mo = new MutationObserver(scheduleNotify);
        mo.observe(document.documentElement, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true,
        });

        window.addEventListener('load', scheduleNotify);
        document.addEventListener('readystatechange', scheduleNotify);
        [100, 300, 700, 1200, 2000].forEach((delay) => {
          setTimeout(scheduleNotify, delay);
        });

        scheduleNotify();
      })();
    </script>
  </body>
</html>`;

export default function TravelSearch() {
  const { ref, isVisible } = useScrollReveal();
  const iframeSrcDoc = useMemo(() => WIDGET_SRC_DOC, []);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    const onMessage = (event: MessageEvent) => {
      if (event.source !== iframe.contentWindow) {
        return;
      }

      const data = event.data as { type?: string; height?: number };
      if (data?.type !== 'onertravel-widget-height' || typeof data.height !== 'number') {
        return;
      }

      const safeHeight = Math.max(120, Math.ceil(data.height));
      iframe.style.height = `${safeHeight}px`;
    };

    // Initial fallback while widget scripts are loading inside iframe.
    iframe.style.height = '220px';

    window.addEventListener('message', onMessage);

    return () => {
      window.removeEventListener('message', onMessage);
    };
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
          <iframe
            ref={iframeRef}
            title="Buscador de viagens"
            srcDoc={iframeSrcDoc}
            loading="lazy"
            className="w-full border-0 rounded-xl block"
            sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin"
          />
        </div>
      </div>
    </section>
  );
}
