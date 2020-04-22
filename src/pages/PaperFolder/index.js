import React, { useCallback, useState } from 'react';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Link } from 'react-router-dom';
import { Container, Scroll } from './styles';
import image1 from '~/assets/images/paper/1.png';
import image2 from '~/assets/images/paper/2.png';
import image3 from '~/assets/images/paper/3.png';
import image4 from '~/assets/images/paper/4.png';
import image5 from '~/assets/images/paper/5.png';
import image6 from '~/assets/images/paper/6.png';
import image7 from '~/assets/images/paper/7.png';
import image8 from '~/assets/images/paper/8.png';
import image9 from '~/assets/images/paper/9.png';
import image10 from '~/assets/images/paper/10.png';
import image11 from '~/assets/images/paper/11.png';
import image12 from '~/assets/images/paper/12.png';
import image13 from '~/assets/images/paper/13.png';
import image14 from '~/assets/images/paper/14.png';
import image15 from '~/assets/images/paper/15.png';
import image16 from '~/assets/images/paper/16.png';
import image17 from '~/assets/images/paper/17.png';
import image18 from '~/assets/images/paper/18.png';
import image19 from '~/assets/images/paper/19.png';
import image20 from '~/assets/images/paper/20.png';
import image21 from '~/assets/images/paper/21.png';
import image22 from '~/assets/images/paper/22.png';
import image23 from '~/assets/images/paper/23.png';
import image24 from '~/assets/images/paper/24.png';
import image25 from '~/assets/images/paper/25.png';
import image26 from '~/assets/images/paper/26.png';
import image27 from '~/assets/images/paper/27.png';
import image28 from '~/assets/images/paper/28.png';
import image29 from '~/assets/images/paper/29.png';
import image30 from '~/assets/images/paper/30.png';
import image31 from '~/assets/images/paper/31.png';
import image32 from '~/assets/images/paper/32.png';
import image33 from '~/assets/images/paper/33.png';
import image34 from '~/assets/images/paper/34.png';
import image35 from '~/assets/images/paper/35.png';
import image36 from '~/assets/images/paper/36.png';
import image37 from '~/assets/images/paper/37.png';
import image38 from '~/assets/images/paper/38.png';
import image39 from '~/assets/images/paper/39.png';
import image40 from '~/assets/images/paper/40.png';
import image41 from '~/assets/images/paper/41.png';
import image42 from '~/assets/images/paper/42.png';
import image43 from '~/assets/images/paper/43.png';

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
    { src: image21, width: 1, height: 1 },
    { src: image22, width: 1, height: 1 },
    { src: image23, width: 1, height: 1 },
    { src: image24, width: 1, height: 1 },
    { src: image25, width: 1, height: 1 },
    { src: image26, width: 1, height: 1 },
    { src: image27, width: 1, height: 1 },
    { src: image28, width: 1, height: 1 },
    { src: image29, width: 1, height: 1 },
    { src: image30, width: 1, height: 1 },
    { src: image31, width: 1, height: 1 },
    { src: image32, width: 1, height: 1 },
    { src: image33, width: 1, height: 1 },
    { src: image34, width: 1, height: 1 },
    { src: image35, width: 1, height: 1 },
    { src: image36, width: 1, height: 1 },
    { src: image37, width: 1, height: 1 },
    { src: image38, width: 1, height: 1 },
    { src: image39, width: 1, height: 1 },
    { src: image40, width: 1, height: 1 },
    { src: image41, width: 1, height: 1 },
    { src: image42, width: 1, height: 1 },
    { src: image43, width: 1, height: 1 },
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
        <div>
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
        </div>
      </Scroll>
    </Container>
  );
}
