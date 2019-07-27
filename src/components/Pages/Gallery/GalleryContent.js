import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import bathBeforeAfter from "../../../images/bath-before-after.jpg";
import deckWithScafolding from "../../../images/deck-w-scafolding.jpg";
import deckFinished from "../../../images/deck-finished.jpg";
import deckFinished2 from "../../../images/deck-finished-2.jpg";
import firePlace from "../../../images/fire-place.jpg";
import shower from "../../../images/shower.jpg";
import shower2 from "../../../images/shower2.jpg";
import sink from "../../../images/sink.jpg";
import rockWall from "../../../images/rock-wall.JPG";
import rockWall2 from "../../../images/rock-wall-2.JPG";

const photos = [
  {
    height: 4,
    src: deckFinished,
    width: 7
  },
  {
    height: 5,
    src: firePlace,
    width: 3
  },
  {
    height: 3,
    src: deckFinished2,
    width: 6
  },
  {
    height: 6,
    src: bathBeforeAfter,
    width: 6
  },
  {
    height: 7,
    src: shower,
    width: 5
  },
  {
    height: 3,
    src: sink,
    width: 6
  },
  {
    height: 4,
    src: rockWall,
    width: 4
  },
  {
    height: 3,
    src: deckWithScafolding,
    width: 6
  },
  {
    height: 4,
    src: rockWall2,
    width: 5
  },
  {
    height: 7,
    src: shower2,
    width: 4
  }
];

const GalleryContent = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (event, obj) => {
    setCurrentImage(obj.index);
    setViewerIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallery__page-content">
      <div className="container">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
};

export default GalleryContent;
