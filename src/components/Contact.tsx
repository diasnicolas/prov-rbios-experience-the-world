import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Instagram, Facebook, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '5500000000000'; // Substituir pelo número real

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

            <div className="flex gap-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest hover:bg-forest hover:text-forest-foreground transition-all active:scale-95"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all active:scale-95"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
                aria-label="Facebook"
              >
                <Facebook size={20} />
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
              <MessageCircle className="mr-2 h-5 w-5" />
              Enviar pelo WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
