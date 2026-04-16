import { ArrowDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import heroImage from 'figma:asset/3c82e2a38ff3deb8f9daf9bf0356460a7b5fd52f.png';
import photo14 from '../../imports/P1001001.JPG';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${photo14})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl mb-4 tracking-tight font-mono font-bold force-bold">
          NayeemFilms
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Capturing Stories Through Lens
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200"
            onClick={() => scrollToSection('videos')}
          >
            View Videos
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-black hover:bg-white hover:text-black"
            onClick={() => scrollToSection('photos')}
          >
            View Photos
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}