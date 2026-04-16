import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { VideoSection } from '@/app/components/VideoSection';
import { PhotoGallery } from '@/app/components/PhotoGallery';
import { Contact } from '@/app/components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <VideoSection />
      <PhotoGallery />
      <Contact />
    </div>
  );
}
