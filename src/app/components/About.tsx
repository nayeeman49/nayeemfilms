import { Camera, Film, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing authentic moments with artistic vision and technical excellence.',
    },
    {
      icon: Film,
      title: 'Videography',
      description: 'Creating compelling visual stories that resonate and inspire.',
    },
    {
      icon: Award,
      title: 'Professional',
      description: 'Delivering high-quality results with attention to detail and creativity.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About NayeemFilms</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating cineamtic visual narratives that capture the essence of every moment. 
            With years of experience in both videography and photography, I bring success to dynamic projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
