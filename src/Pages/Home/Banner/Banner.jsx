import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/1.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
      return (
            <>
              <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={img4}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide4" className="btn btn-secondary  btn-circle mr-5">❮</a>
      <a href="#slide2" className="btn btn-secondary  btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img5}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide1" className="btn btn-secondary  btn-circle mr-5">❮</a>
      <a href="#slide3" className="btn btn-secondary  btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img6}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide2" className="btn btn-secondary  btn-circle mr-5">❮</a>
      <a href="#slide4" className="btn btn-secondary  btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full" />
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
      <a href="#slide3" className="btn btn-secondary  btn-circle mr-5">❮</a>
      <a href="#slide1" className="btn btn-secondary  btn-circle">❯</a>
    </div>
  </div>
</div>    
            </>
      );
};

export default Banner;