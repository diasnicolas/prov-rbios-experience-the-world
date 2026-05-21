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

    let resizeObserver: ResizeObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let rafId: number | null = null;
    const timeoutIds: number[] = [];

    const updateHeight = () => {
      const doc = iframe.contentDocument;
      if (!doc) {
        return;
      }

      const wrapper = doc.getElementById('wrapper');
      const widgetElement = wrapper?.firstElementChild as HTMLElement | null;
      const body = doc.body;
      const html = doc.documentElement;
      let nextHeight = Math.max(
        widgetElement?.getBoundingClientRect().height ?? 0,
        wrapper?.scrollHeight ?? 0,
        wrapper?.offsetHeight ?? 0,
      );

      // Fallback in case widget has not painted yet.
      if (nextHeight < 120) {
        nextHeight = Math.max(
          body?.scrollHeight ?? 0,
          body?.offsetHeight ?? 0,
          html?.scrollHeight ?? 0,
          html?.offsetHeight ?? 0,
        );
      }

      nextHeight = Math.max(Math.ceil(nextHeight), 120);

      iframe.style.height = `${nextHeight}px`;
    };

    const scheduleHeightUpdate = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(updateHeight);
    };

    const startObservers = () => {
      const doc = iframe.contentDocument;
      if (!doc) {
        return;
      }

      scheduleHeightUpdate();

      if ('ResizeObserver' in window) {
        resizeObserver = new ResizeObserver(scheduleHeightUpdate);

        if (doc.body) {
          resizeObserver.observe(doc.body);
        }

        resizeObserver.observe(doc.documentElement);
      }

      mutationObserver = new MutationObserver(scheduleHeightUpdate);
      mutationObserver.observe(doc.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });

      window.addEventListener('resize', scheduleHeightUpdate);

      [150, 400, 900, 1500, 2500].forEach((delay) => {
        const timeoutId = window.setTimeout(scheduleHeightUpdate, delay);
        timeoutIds.push(timeoutId);
      });
    };

    const onLoad = () => {
      startObservers();
    };

    iframe.addEventListener('load', onLoad);

    if (iframe.contentDocument?.readyState === 'complete') {
      startObservers();
    }

    return () => {
      iframe.removeEventListener('load', onLoad);
      window.removeEventListener('resize', scheduleHeightUpdate);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      if (mutationObserver) {
        mutationObserver.disconnect();
      }

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      timeoutIds.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
    };
  }, [iframeSrcDoc]);

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
            className="w-full border-0 rounded-xl"
            sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin"
          />
        </div>
      </div>
    </section>
  );
}
