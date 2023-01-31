import React,{useRef,useEffect} from "react";
import "./style.scss";

import PhotoAlbum from "react-photo-album";

import photos from "../../mock/PhotosGalleryDatas";


const Gallery = () => {

  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          observer.current.unobserve(lazyImage);
        }
      });
    })
  );

  useEffect(() => {
    photos.forEach(({ images }) => {
      images.forEach(({ src }) => {
        const lazyImage = new Image();
        lazyImage.src =
          "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
        lazyImage.dataset.src = src;
        lazyImage.classList.add("lazy");
        observer.current.observe(lazyImage);
      });
    });
  }, []);

  return (
    <section className="gallery section container">
      <h2 className="section__title">
        NFT art, Domain name, Stachu, Collection Gallery
      </h2>
      <p className="section__paragraph">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged
      </p>

      <PhotoAlbum layout="columns" photos={photos} />
    </section>
  );
};

export default Gallery;
