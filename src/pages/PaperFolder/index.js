import React, { useCallback, useState } from 'react';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Link } from 'react-router-dom';
import { Container, Scroll } from './styles';
import image1 from '~/assets/images/paper/1.jpg';
import image2 from '~/assets/images/paper/2.jpg';
import image3 from '~/assets/images/paper/3.jpg';
import image4 from '~/assets/images/paper/4.jpg';
import image5 from '~/assets/images/paper/5.jpg';
import image6 from '~/assets/images/paper/6.jpg';
import image7 from '~/assets/images/paper/7.jpg';
import image8 from '~/assets/images/paper/8.jpg';
import image9 from '~/assets/images/paper/9.jpg';
import image10 from '~/assets/images/paper/10.jpg';
import image11 from '~/assets/images/paper/11.jpg';
import image12 from '~/assets/images/paper/12.jpg';
import image13 from '~/assets/images/paper/13.jpg';
import image14 from '~/assets/images/paper/14.jpg';
import image15 from '~/assets/images/paper/15.jpg';
import image16 from '~/assets/images/paper/16.jpg';
import image17 from '~/assets/images/paper/17.jpg';
import image18 from '~/assets/images/paper/18.jpg';
import image19 from '~/assets/images/paper/19.jpg';
import image20 from '~/assets/images/paper/20.jpg';

export default function PaperFolder() {
  const images = [
    { src: image1, width: 1, height: 1 },
    { src: image2, width: 1, height: 1 },
    { src: image3, width: 1, height: 1 },
    { src: image4, width: 1, height: 1 },
    { src: image5, width: 1, height: 1 },
    { src: image6, width: 1, height: 1 },
    { src: image7, width: 1, height: 1 },
    { src: image8, width: 1, height: 1 },
    { src: image9, width: 1, height: 1 },
    { src: image10, width: 1, height: 1 },
    { src: image11, width: 1, height: 1 },
    { src: image12, width: 1, height: 1 },
    { src: image13, width: 1, height: 1 },
    { src: image14, width: 1, height: 1 },
    { src: image15, width: 1, height: 1 },
    { src: image16, width: 1, height: 1 },
    { src: image17, width: 1, height: 1 },
    { src: image18, width: 1, height: 1 },
    { src: image19, width: 1, height: 1 },
    { src: image20, width: 1, height: 1 },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container>
      <header>
        <Link to="/portifolio">Voltar</Link>
        <strong>Desenhos no papel</strong>
      </header>
      <Scroll>
        <Gallery photos={images} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={images.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Scroll>
    </Container>
  );
}
