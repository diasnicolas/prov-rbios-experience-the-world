import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Differentials from '@/components/Differentials';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5511915103864';
const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site da Provérbios Turismo e gostaria de mais informações.';

const Index = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Differentials />
      <Services />
      <Contact />
      <Footer />

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-forest text-forest-foreground shadow-lg flex items-center justify-center hover:brightness-110 active:scale-95 transition-all"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Index;
