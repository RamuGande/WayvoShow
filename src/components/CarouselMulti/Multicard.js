import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Multi.css';



import img11 from './Assets/img11.PNG';
import img22 from './Assets/img22.jpg';
import img33 from './Assets/img33.jpg';
import img44 from './Assets/img44.jpg';
import img55 from './Assets/img55.jpg';
import img66 from './Assets/img66.jpg';
import img77 from './Assets/img77.jpg';
import img88 from './Assets/img88.jpg';
import img99 from './Assets/img99.jpg';
import img0 from './Assets/img0.jpg';


import { FaStar } from 'react-icons/fa';

function Multicard() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="carousel-container">
       
      <h1 className="slider-title">Recommended</h1>
      <Carousel responsive={responsive}>
        <div className="carousel-item">
          <img src={img11} alt="img1" />
          <h2>Chhaava</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.5</button>
            <button className="votes-button">
               100 Votes
            </button>
            </div>
            <div className='type'>
              <h4>Chhaava</h4>
              <p>Action/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img22} alt="img2" />
          <h2>Mazaka</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.0</button>
            <button className="votes-button">
               200 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Mazaka</h4>
              <p>Comedy/Family</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img33} alt="img3" />
          <h2>Return Of The Dragon</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.7</button>
            <button className="votes-button">
               150 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Return Of The Dragon</h4>
              <p>Comedy/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img44} alt="img4" />
          <h2>Shabdham</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.2</button>
            <button className="votes-button">
               120 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Shabdham</h4>
              <p>Horror/Thriller</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img55} alt="img5" />
          <h2>Chhaava Telugu</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 3.9</button>
            <button className="votes-button">
               50 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Chhaava Telugu</h4>
              <p>Action/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img66} alt="img6" />
          <h2>Craxxy</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.3</button>
            <button className="votes-button">
               80 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Crazxy</h4>
              <p>Thriller/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img77} alt="img7" />
          <h2>Aghathiya</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.6</button>
            <button className="votes-button">
              140 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Aghathiya</h4>
              <p>Action/Thriller</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img88} alt="img8" />
          <h2>Superboys of Malegaon</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 3.8</button>
            <button className="votes-button">
               60 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Superboys of Malegaon</h4>
              <p>Biography/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img99} alt="img9" />
          <h2>Sankrantiki Vastunnam</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.1</button>
            <button className="votes-button">
               180 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Sankrantiki Vastunnam</h4>
              <p>Comedy/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img0} alt="img10" />
          <h2>Thandel</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.4</button>
            <button className="votes-button">
               90 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Thandel</h4>
              <p>Love/Drama</p>
            </div>
        </div>
      </Carousel>

      {/* Second Carousel container */}
      <h1 className="slider-title">Upcoming</h1>
      <Carousel responsive={responsive}>
      <div className="carousel-item">
          <img src={img11} alt="img1" />
          <h2>Chhaava</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.5</button>
            <button className="votes-button">
               100 Votes
            </button>
            </div>
            <div className='type'>
              <h4>Chhaava</h4>
              <p>Action/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img22} alt="img2" />
          <h2>Mazaka</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.0</button>
            <button className="votes-button">
               200 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Mazaka</h4>
              <p>Comedy/Family</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img33} alt="img3" />
          <h2>Return Of The Dragon</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.7</button>
            <button className="votes-button">
               150 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Return Of The Dragon</h4>
              <p>Comedy/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img44} alt="img4" />
          <h2>Shabdham</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.2</button>
            <button className="votes-button">
               120 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Shabdham</h4>
              <p>Horror/Thriller</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img55} alt="img5" />
          <h2>Chhaava Telugu</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 3.9</button>
            <button className="votes-button">
               50 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Chhaava Telugu</h4>
              <p>Action/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img66} alt="img6" />
          <h2>Craxxy</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.3</button>
            <button className="votes-button">
               80 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Crazxy</h4>
              <p>Thriller/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img77} alt="img7" />
          <h2>Aghathiya</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.6</button>
            <button className="votes-button">
              140 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Aghathiya</h4>
              <p>Action/Thriller</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img88} alt="img8" />
          <h2>Superboys of Malegaon</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 3.8</button>
            <button className="votes-button">
               60 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Superboys of Malegaon</h4>
              <p>Biography/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img99} alt="img9" />
          <h2>Sankrantiki Vastunnam</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.1</button>
            <button className="votes-button">
               180 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Sankrantiki Vastunnam</h4>
              <p>Comedy/Drama</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src={img0} alt="img10" />
          <h2>Thandel</h2>
          <div className="button-group">
            <button className="rating-button"><FaStar /> Rating: 4.4</button>
            <button className="votes-button">
               90 Votes
            </button>
          </div>
          <div className='type'>
              <h4>Thandel</h4>
              <p>Love/Drama</p>
            </div>
        </div>
      </Carousel>
    </div>
    
  );
}

export default Multicard;