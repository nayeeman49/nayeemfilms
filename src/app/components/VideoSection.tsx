import { Play } from 'lucide-react';
import documentaryThumbnail from 'figma:asset/f1d95e98c18484f3f027b85108c0bafb99bd9f52.png';
import commercialThumbnail from 'figma:asset/e5e4bb54a78e3e3cebdd55a61213850807ebd4fa.png';
import photo15 from '../../imports/P1097024.JPG';
import photo16 from '../../imports/P1107269.JPG';
import photo17 from '../../imports/P1096486.JPG';
import photo18 from '../../imports/P1096482.JPG';
import photo19 from '../../imports/P1096539.JPG';
import photo20 from '../../imports/P1096481.JPG';

export function VideoSection() {
  const videos = [
    {
      id: 1,
      title: 'Cinematic Wedding Film',
      thumbnail: photo18 ,
      duration: '3:45',
      videoUrl: '',
    },
    {
      id: 2,
      title: 'Commercial Production',
      thumbnail: commercialThumbnail,
      duration: '2:30',
      videoUrl: 'https://youtu.be/sr7_K2MDY4Q',
    },
    {
      id: 3,
      title: 'Documentary/Travel Project',
      thumbnail: documentaryThumbnail,
      duration: '5:20',
      videoUrl: 'https://youtu.be/sr7_K2MDY4Q',
    },
    {
      id: 4,
      title: 'Event Highlights',
      thumbnail: photo16,
      duration: '4:15',
      videoUrl: '',
    },
  ];

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Video Portfolio</h2>
          <p className="text-xl text-gray-600">
            A collection of cinematic stories and visual narratives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.videoUrl || '#'}
              target={video.videoUrl ? '_blank' : undefined}
              rel={video.videoUrl ? 'noopener noreferrer' : undefined}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow block"
            >
              <div className="aspect-video relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-black ml-1" fill="black" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded text-white text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-xl">{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}