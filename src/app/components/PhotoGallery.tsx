import image_2c3dbaebc4352b8efabc03a5da381230c9826940 from "figma:asset/2c3dbaebc4352b8efabc03a5da381230c9826940.png";
import newPhoto from "../../imports/P1096747.JPG";
import Masonry from "react-responsive-masonry";
import photo1 from "../../imports/590405332_18547739671028874_7435867602656436346_n.jpg";
import photo2 from "../../imports/P1096724.JPG";
import photo3 from "../../imports/P1096755.JPG";
import photo4 from "../../imports/P1096648.JPG";
import photo5 from "../../imports/P1096652.JPG";
import photo6 from "../../imports/583197414_18544923640028874_7797153504611728218_n.jpg";
import photo7 from "../../imports/583211237_18544923649028874_6452517651683200106_n.jpg";
import photo8 from "../../imports/583244652_18544923682028874_4303381667637597625_n.jpg";
import photo9 from "../../imports/584003324_18544923658028874_4475696796212664425_n.jpg";
import photo10 from "../../imports/584302039_18544923685028874_7790306397564952160_n.jpg";
import photo11 from "../../imports/584310575_18544923622028874_774743794793383200_n.jpg";
import photo12 from "../../imports/584401663_18544923679028874_9101231630884071722_n.jpg";
import photo13 from "../../imports/587313509_18544923631028874_8043959510395605229_n.jpg";
import photo15 from "../../imports/P1097024.JPG";
import photo16 from "../../imports/P1107269.JPG";
import photo17 from "../../imports/P1096486.JPG";
import photo18 from "../../imports/P1096482.JPG";
import photo19 from "../../imports/P1096539.JPG";
import photo20 from "../../imports/P1096481.JPG";

export function PhotoGallery() {
  const photos = [
    {
      id: 1,
      src: photo1, // This will use 590405332_18547739671028874_7435867602656436346_n.jpg
      title: "Your Title Here",
    },
    {
      id: 3,
      src: photo3, // This will use P1096755.JPG
      title: "Your Title Here",
    },
      {
      id: 19,
      src: photo19, // P1096539.JPG
      title: "Your Title",
    },
    {
      id: 4,
      src: photo4, // P1096648.JPG
      title: "Your Title",
    },
    {
      id: 5,
      src: photo5, // P1096652.JPG
      title: "Your Title",
    },
    {
      id: 6,
      src: photo6, // 583197414_18544923640028874_7797153504611728218_n.jpg
      title: "Your Title",
    },
    {
      id: 7,
      src: photo7, // 583211237_18544923649028874_6452517651683200106_n.jpg
      title: "Your Title",
    },
    {
      id: 8,
      src: photo8, // 583244652_18544923682028874_4303381667637597625_n.jpg
      title: "Your Title",
    },
    {
      id: 9,
      src: photo9, // 584003324_18544923658028874_4475696796212664425_n.jpg
      title: "Your Title",
    },
    {
      id: 10,
      src: photo10, // 584302039_18544923685028874_7790306397564952160_n.jpg
      title: "Your Title",
    },
    {
      id: 11,
      src: photo11, // 584310575_18544923622028874_774743794793383200_n.jpg
      title: "Your Title",
    },
    {
      id: 12,
      src: photo12, // 584401663_18544923679028874_9101231630884071722_n.jpg
      title: "Your Title",
    },
    {
      id: 13,
      src: photo13, // 587313509_18544923631028874_8043959510395605229_n.jpg
      title: "Your Title",
    },
    {
      id: 15,
      src: photo15, // P1097024.JPG
      title: "Your Title",
    },
    {
      id: 17,
      src: photo17, // P1096486.JPG
      title: "Your Title",
    },
  ];

  return (
    <section id="photos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Taken from working with International Productions
            and travelling
          </p>
        </div>

        <Masonry columnsCount={3} gutter="20px">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}