import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Mail } from 'lucide-react';

const WHATSAPP_NUMBER = '5511915103864';
const CONTACT_EMAIL = 'comercia@proverbiosturismo.com.br';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', phone: '', destination: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.%0ATelefone: ${form.phone}%0ADestino de interesse: ${form.destination}%0AMensagem: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div
            className={`${isVisible ? 'animate-slide-left' : 'opacity-0'}`}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
              Fale conosco
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6 text-balance">
              Vamos planejar a sua próxima viagem?
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-10 text-pretty max-w-md">
              Preencha o formulário e entraremos em contato pelo WhatsApp para montar
              o roteiro perfeito para você.
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors mb-8"
            >
              <Mail size={18} />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <div className="flex gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest hover:bg-forest hover:text-forest-foreground transition-all active:scale-95"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/proverbiostur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all active:scale-95"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-5 bg-card p-8 sm:p-10 rounded-2xl shadow-lg border border-border/50 ${
              isVisible ? 'animate-slide-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.15s' }}
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                Nome completo
              </label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome"
                className="rounded-xl h-12"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">
                WhatsApp
              </label>
              <Input
                id="phone"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="(00) 00000-0000"
                className="rounded-xl h-12"
              />
            </div>
            <div>
              <label htmlFor="destination" className="text-sm font-medium text-foreground mb-1.5 block">
                Destino de interesse
              </label>
              <Input
                id="destination"
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                placeholder="Para onde você quer ir?"
                className="rounded-xl h-12"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                Mensagem
              </label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Conte-nos sobre a viagem dos seus sonhos..."
                className="rounded-xl min-h-[120px] resize-none"
              />
            </div>
            <Button variant="whatsapp" size="lg" type="submit" className="w-full rounded-xl h-12 text-base">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Enviar pelo WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
