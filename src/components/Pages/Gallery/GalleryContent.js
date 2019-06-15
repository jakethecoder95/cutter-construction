import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    height: 4,
    src:
      "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzM0fQ",
    width: 5
  },
  {
    height: 4,
    src:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzM0fQ",
    width: 6
  },
  {
    height: 3,
    src:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzM0fQ",
    width: 5
  },
  {
    height: 4,
    src:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzM0fQ",
    width: 4
  },
  {
    height: 7,
    src:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzM0fQ",
    width: 6
  },
  {
    height: 4,
    src:
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzM0fQ",
    width: 6
  },
  {
    height: 4,
    src:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzM0fQ",
    width: 6
  },
  {
    height: 3,
    src:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzM0fQ",
    width: 5
  },
  {
    height: 6,
    src:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzM0fQ",
    width: 4
  },
  {
    height: 3,
    src:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzM0fQ",
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
