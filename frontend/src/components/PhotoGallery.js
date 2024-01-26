import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/assets/images/photoalbum/img1.jpg",
  },
  {
    original: "/assets/images/photoalbum/img2.jpg",
  },
];

export default class PhotoGallery extends Component {
  render() {
    return (
      <ImageGallery
        items={images}
        showBullets={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showIndex={true}
      />
    );
  }
}
