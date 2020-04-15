import React, { useCallback, useState } from 'react';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Link } from 'react-router-dom';
import { Container, Scroll } from './styles';
import image1 from '~/assets/images/digital/1.PNG';
import image2 from '~/assets/images/digital/2.PNG';
import image3 from '~/assets/images/digital/3.PNG';
import image4 from '~/assets/images/digital/4.PNG';
import image5 from '~/assets/images/digital/5.PNG';
import image6 from '~/assets/images/digital/6.PNG';
import image7 from '~/assets/images/digital/7.PNG';
import image8 from '~/assets/images/digital/8.PNG';
import image9 from '~/assets/images/digital/9.PNG';
import image10 from '~/assets/images/digital/10.PNG';
import image11 from '~/assets/images/digital/11.PNG';
import image12 from '~/assets/images/digital/12.PNG';
import image13 from '~/assets/images/digital/13.PNG';

export default function DigitalFolder() {
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
        <strong>Desenhos digitais</strong>
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
