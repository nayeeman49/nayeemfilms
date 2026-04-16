import { Mail, Phone, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl mb-6">Let's Create Together</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can bring your vision to life 
          through compelling videography and photography.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:nayeemannoor@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Mail size={20} />
            <span>nayeemannoor@gmail.com</span>
          </a>
          <a
            href="tel:+447498840388"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Phone size={20} />
            <span>+44 7498 840388</span>
          </a>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black"
            asChild
          >
            <a href="https://www.instagram.com/nayeemfilms/" target="_blank" rel="noopener noreferrer" className="flex items-center !text-black">
              <Instagram size={20} className="mr-2" />
              Instagram - NayeemFilms
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-black"
            asChild
          >
            <a href="https://www.youtube.com/@TheAnnoor" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} className="mr-2" />
              YouTube
            </a>
          </Button>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400">
            © 2026 <span className="font-mono font-bold">NayeemFilms</span>. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
