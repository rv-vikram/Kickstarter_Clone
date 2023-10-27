import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/carouselCard.css";
import { Link } from "react-router-dom";
export function CarouselCard() {
  // ========================================
  // breakpoints for carousel
  // ========================================

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      {/* <div id="carausel_first">
        <span>FRESH FAVORITES</span>
        <span>
          Discover more<i className="fas fa-greater-than"></i>
        </span>
      </div> */}
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customTransition="all .5"
        transitionDuration={500}
      >
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/036/011/775/5b31f5fcb03c94bea3d354cb1ff3d3ad_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1641598381&auto=format&frame=1&q=92&s=58c868a15296c1dc164e08f0be3e4e65"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>Terra Incognita Oracle</h3>
            <p>
              Transversing the Unexplored Terrain & Oracular magic of Plant
              Forms with a 54-Card Oracle Deck
            </p>
            <span>By artemis + alchemy</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/888/026/9afcc16fab8ed62375a19613eaae337f_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1639978582&auto=format&frame=1&q=92&s=2bfbe2fdb4448ec403c579bc1819d443"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>Bring LOVE Everywhere</h3>
            <p>
              An interactive light art performance-exhibition to spread the
              message of love.
            </p>
            <span>By Wei - Very Small Exhibition</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/838/920/3beba606d5af11b9d350046ced8bc5e2_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1639418810&auto=format&frame=1&q=92&s=80eed8c9449b4a69d99a85471a6a0f8d"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>"Puberty" - The Book</h3>
            <p>
              Puberty is a photo book by Laurence Philomene + Yoffy Press that
              looks at the process of becoming oneself as a non-binary trans
              person.
            </p>
            <span>By Laurence Philomene</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/876/236/1e1b783fe2a16ded92d3513de43b3b0d_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1639784223&auto=format&frame=1&q=92&s=d437e5196783b198be0a239405a89c21"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>St.Joan/Greta</h3>
            <p>
              Joan of Arc re-imagined for the post Greta Thunberg era performed
              by a children's theatre ensemble.
            </p>
            <span>By Amanda Douge</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/869/549/b2a101b3c1d5c57bd9e3a427a24e6bb9_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1639712377&auto=format&frame=1&q=92&s=980f06e3e7d0ebc018edcba589903301"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <Link to="/arts/details">
              <h3>Ocean Filibuster</h3>
            </Link>
            <p>
              A genre-crashing music theater experience featuring Jennifer
              Kidwell
            </p>
            <span>By PearlDamour</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/837/235/3a31b2e7dd7cf7823656360ac6d53d97_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1639406278&auto=format&frame=1&q=92&s=ad9fdb82a75eb4a3d10fbf9455a794a9"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>Memorie Temporelle</h3>
            <p>Book</p>
            <span>By Kalpesh Lathigra</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/616/643/45ebefe60bfe6f6afcff1671a598b450_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1637178775&auto=format&frame=1&q=92&s=32fe01f6eabfcef9dd88135a8b027119"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>listening near an edge</h3>
            <p>
              A dance film capturing the intimancy, rigor, intensity, play and
              commitment between a clise group of collaborators.
            </p>
            <span>By Anna Vomacka</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/795/756/77af83d007cbe906aa1e509e66f25024_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1638934139&auto=format&frame=1&q=92&s=38942287450e48db83bed1a8ae318bde"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>Tenganan Village Art Calendars</h3>
            <p>Help sustain Tenganan village art calendar tradition.</p>
            <span>By Ogi</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/761/323/bef44c828c092f972a7e6203a5cd8a08_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1638551160&auto=format&frame=1&q=92&s=18e64e8eb740b54bdd45ad685a6596a0"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>high functioning x.0</h3>
            <p>
              high functioning x.0 is a multimedia performance installation
              built from a collection of my journal entries recalling memories +
              dreams.
            </p>
            <span>By x</span>
          </div>
        </div>
      </Carousel>
    </>
  );
}
