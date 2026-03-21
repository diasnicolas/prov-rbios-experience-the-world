import logo from '@/assets/logo.png';
import { Instagram, Facebook, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + CNPJ */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="Provérbios Turismo" className="h-12 w-auto" />
            <p className="text-primary-foreground/50 text-xs">
              CNPJ: 00.000.000/0000-00
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors active:scale-95"
              aria-label="WhatsApp"
            >
              <Phone size={18} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors active:scale-95"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors active:scale-95"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>

          {/* Credits */}
          <p className="text-primary-foreground/40 text-xs text-center md:text-right">
            Desenvolvido por{' '}
            <a
              href="https://zapturize.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-colors underline underline-offset-2"
            >
              Zapturize
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
