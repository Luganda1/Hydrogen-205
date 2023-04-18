import {Splide, SplideSlide} from '@splidejs/react-splide';
import Pixal1 from '../../public/Pixal1.jpeg';
import paxal2 from '../../public/paxal2.jpeg';
import paxal3 from '../../public/paxal3.jpeg';

function Carousel() {
  return (
    <Splide
      options={{
        type: 'loop',
        // rewind: true,
        autoplay: true,
        width: '100vw',
        height: '96vh',
        // rewindByDrag: true,
        interval: 5000,
        speed: 7000,
      }}
      aria-label="Incomparating Slide into Remix"
    >
      <SplideSlide>
        <img src={Pixal1} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={paxal2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src={paxal3} alt="Image 3" />
      </SplideSlide>

      <div className="custom-wrapper">
        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>
        <button className="splide__toggle" type="button">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button>
      </div>
    </Splide>
  );
}

export default Carousel;
