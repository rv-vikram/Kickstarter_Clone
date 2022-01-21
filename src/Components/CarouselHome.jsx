import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/CarouselHome.css";

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
              src="https://ksr-ugc.imgix.net/assets/036/031/713/fc74a404f3afc1ef2cad2949e9013bd3_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1641845313&auto=format&frame=1&q=92&s=7f2865263ad1b29905ac0f3e466bd9eb"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>The BitterSweet Review</h3>
            <p>
              A Literary Magazine for Queers & Their Friends
            </p>
            <span>By Benoit Loiseau</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/863/878/29ca72f315416a0ed0ddc5b01c8d6319_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1639659611&auto=format&frame=1&q=92&s=034118cb025ca4d423a5af075dadef2e"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>Emily wants a hardcover!</h3>
            <p>
              Pre-order quiet fantasy novel Night Ivy by E.D.E. Bell in high-quality hardcover. (Magic, dragons, queer, vegan, biconic? Totally!)
            </p>
            <span>By Atthis Arts</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/926/919/9c87e310e361fbf2d760d5205410e266_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1640540607&auto=format&frame=1&q=92&s=076ebef6f749f8f08e71d66457ca6b3c"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>Zine100: How Not to Be Colonized By Outreach Programs</h3>
            <p>
              A how-to, heads-up, do-it-right zine on working with people who offer you stuff.
            </p>
            <span>By Stephanie Nina Pitsirilos</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/995/028/7da399bb7e082d16ab4065d51e36b6c9_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1641419652&auto=format&frame=1&q=92&s=4bac928519d1f38b6b4f90f660e13e81"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>Surrounded by Love: A children's book on open adoption</h3>
            <p>
              Surrounded by Love is written by an adoptee and adoptive parent.
            </p>
            <span>By Allison Olson</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/996/930/d4d48b04b3bf318ccbd7854fb57eb418_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1641442546&auto=format&frame=1&q=92&s=391586f668913eb8a595e282c63bac26"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>MAKE 100: Detailed Dragon Paintings + Limited Edition Printsr</h3>
            <p>
              100 custom dragons will be made with different commission tiers and dragon-type options. You select the type of dragon you want!
              Kidwell
            </p>
            <span>By Anthony Christou</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/036/062/602/398a600ca76f1e516681e7c481e3918d_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1642120099&auto=format&frame=1&q=92&s=b296621184cf4bbdb29919febea56523"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>Queer Chat #2</h3>
            <p>The second annual zine featuring 15 LGBT+ artists</p>
            <span>By Mike Hunt(er)</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/036/102/250/dec144335a95c4530a22cb35d074fabd_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1642534652&auto=format&frame=1&q=92&s=1d00f73f918f7cc4fd862c9e7d740c7d"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>Marvel Zombies - A Zombicide Game</h3>
            <p>
              The hunger takes hold after the Marvel Universe has been turned into Zombies! Get ready for a Zombicide campaign of epic proportions.
            </p>
            <span>By CMON</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/035/914/413/821a12d4840904de2f183c8be22846e8_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1640281489&auto=format&frame=1&q=92&s=58bedea1a0e5fa16a1b4dfe1d16064a9"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>Calliope: A Place For Everyone</h3>
            <p>A stationery shop and an experience, a source for local makers, a safe space for all, and room for Calliope Pencil Factory to grow.</p>
            <span>By Kristina Burkey</span>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="carousel_img">
            <img
              src="https://ksr-ugc.imgix.net/assets/036/011/170/47cc9cb74a2aeeadb8f0fc3205d6d04c_original.jpg?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1641592764&auto=format&frame=1&q=92&s=e352d4b8e294e9ce32566db961845fea"
              alt="carouser-img"
            />
          </div>
          <div className="hr"></div>
          <div className="carausel_text">
            <h3>MAKE 100: The Lottery: A Steamy Billionaire Romance Book Box</h3>
            <p>
              When fate throws them together, not even the end of the world can keep them apart. The future of billionaire romance is in space!
            </p>
            <span>By Karpov Kinrade</span>
          </div>
        </div>
      </Carousel>
    </>
  );
}