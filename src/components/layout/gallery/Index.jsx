import React from "react";
import "./style.scss";

import PhotoAlbum from "react-photo-album";

import photos from "../../atoms/PhotosGalleryDatas";


const Gallery = () => {
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
