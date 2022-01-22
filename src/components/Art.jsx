import "../Styles/art.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer"
import { CarouselCard } from "./CarouselCard";
import { Header } from "./Header";

export function Art() {
  return (
    <>
      {/* ========================================= */}
      {/* Featured Project Section */}
      {/* ========================================= */}
      <Header />
      <Navbar />
      <section id="art">
        <div id="arts_1">
          <h3>Arts</h3>
          <p>
            Discover the artists and organizations using Kickstarter to realize
            ambitious projects in visual art and performance.
          </p>
          <div>
            <a href="www.random.com">Explore Art</a>
            <a href="www.random.com">Explore Dance</a>
            <a href="www.random.com">Explore Photography</a>
            <a href="www.random.com">Explore Theater</a>
          </div>
        </div>
        <div id="arts_2">
          <div id="arts_2_1">
            <section>
              <h2 className="head">FEATURED PROJECT</h2>
              <div>
                <img
                  src="https://ksr-ugc.imgix.net/assets/035/838/920/3beba606d5af11b9d350046ced8bc5e2_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1639418810&auto=format&frame=1&q=92&s=3bd371d02ff37227211ba6626fb861cb"
                  alt="big img"
                />
              </div>
              <div id="hr"></div>
              <h3>"Puberty" - The Book</h3>
              <p id="description">
                Puberty is a photo book by Laurence Philomene + Yoffy Press that
                looks at the process of becoming oneself as a non-binary trans
                person.
              </p>
              <p id="quote">By Laurence Philomene</p>
            </section>
          </div>
          <div id="arts_2_2">
            <section>
              <h2 className="head">RECOMMENDED FOR YOU</h2>
              <div>
                <ul>
                  <li>
                    <div className="card">
                      <div className="small_img">
                        <img
                          src="https://ksr-ugc.imgix.net/assets/035/838/920/3beba606d5af11b9d350046ced8bc5e2_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1639418810&auto=format&frame=1&q=92&s=3bd371d02ff37227211ba6626fb861cb"
                          alt=" puberty"
                        />
                      </div>
                      <div className="title">
                        <p className="book_title">"Puberty" - The Book</p>
                        <span className="funded">103% funded</span>
                        <p className="book_author">
                          By <span>Laurence Phinomene</span>
                        </p>
                        <div className="like_wrapper">
                          <i className="far fa-bookmark"></i>
                          <i className="far fa-thumbs-up"></i>
                          <i className="far fa-thumbs-down"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <div className="small_img">
                        <img
                          src="https://ksr-ugc.imgix.net/assets/036/059/701/d6a98566965e75b3124c4ad49aadf5ce_original.jpeg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1642097094&auto=format&frame=1&q=92&s=c2500443fc819a736ff3d57aec235343"
                          alt="taken tarot"
                        />
                      </div>
                      <div className="title">
                        <p className="book_title">Token Tarot</p>
                        <span className="funded">15% funded</span>
                        <p className="book_author">
                          By <span>Erin Taylor</span>
                        </p>
                        <div className="like_wrapper">
                          <i className="far fa-bookmark"></i>
                          <i className="far fa-thumbs-up"></i>
                          <i className="far fa-thumbs-down"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <div className="small_img">
                        <img
                          src="https://ksr-ugc.imgix.net/assets/036/011/775/5b31f5fcb03c94bea3d354cb1ff3d3ad_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1641598381&auto=format&frame=1&q=92&s=dff18c16b00d1eb0d9c72f47290e2f18"
                          alt="terra incognita oracle deck"
                        />
                      </div>
                      <div className="title">
                        <p className="book_title">
                          Terra Incognita Oracle Deck
                        </p>
                        <span className="funded">107% funded</span>
                        <p className="book_author">
                          By <span>artemis + alchemy</span>
                        </p>
                        <div className="like_wrapper">
                          <i className="far fa-bookmark"></i>
                          <i className="far fa-thumbs-up"></i>
                          <i className="far fa-thumbs-down"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* Navbar Section */}
      {/* ========================================= */}

      <Navbar />

      {/* ========================================= */}
      {/* Subscribe Section */}
      {/* ========================================= */}

      <div id="subscribe_section">
        <h2>
          Discover new work and big ideas from established and emerging artists.
        </h2>
        <p>Sign up to receive Kickstarter’s Arts newsletter.</p>
        <div id="subscribe_input">
          <input type="text" placeholder="Enter email address" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* ========================================= */}
      {/* Carousel Section */}
      {/* ========================================= */}

      <div id="carausel_section">
        <div id="carausel_first">
          <span>FRESH FAVORITES</span>
          <span>
            Discover more<i className="fas fa-greater-than"></i>
          </span>
        </div>
        <CarouselCard />
      </div>

      {/* ========================================= */}
      {/* Creators Section */}
      {/* ========================================= */}

      <div id="creator_section">
        <div id="creator_first">
          <span>FOR CREATORS</span>
        </div>
        <div id="creator_second">
          <div className="creator_2_1">
            <div>
              {/* <img
                src="https://ksr-ugc.imgix.net/assets/032/442/115/9e32d56e2faf52175682ccb57c5bd2b3_original.jpg?ixlib=rb-4.0.2&w=700&fit=max&v=1613767170&auto=format&gif-q=50&q=92&s=edba72ffc96d4c8fd057c39b8dc216b9"
                alt="img"
              /> */}
            </div>
            <div>
              <h2 className="creator_heading">
                How To Build Your Kickstarter Arts Campaign
              </h2>
              <p className="creator_description">
                Tactical and emotional support for creating every aspect of your
                project page.
              </p>
            </div>
            <span>Learn more</span>
          </div>
          <div className="creator_2_1 creator_2_2">
            <div>
              {/* <img
                src="https://ksr-ugc.imgix.net/assets/032/442/115/9e32d56e2faf52175682ccb57c5bd2b3_original.jpg?ixlib=rb-4.0.2&w=700&fit=max&v=1613767170&auto=format&gif-q=50&q=92&s=edba72ffc96d4c8fd057c39b8dc216b9"
                alt="img"
              /> */}
            </div>
            <div>
              <h2 className="creator_heading">
                How To Build Your Kickstarter Arts Campaign
              </h2>
              <p className="creator_description">
                Tactical and emotional support for creating every aspect of your
                project page.
              </p>
            </div>
            <span>Learn more</span>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* Home Stretch Section */}
      {/* ========================================= */}

      <div id="homeStretch_section">
        <div id="homeStretch_first">
          <span>HOME STRETCH</span>
          <span>
            Discover more<i className="fas fa-greater-than"></i>
          </span>
        </div>
        <CarouselCard />
      </div>

      {/* ========================================= */}
      {/* Portfolio Section */}
      {/* ========================================= */}

      <div id="portfolio_section">
        <div id="portfolio_wrapper">
          <div id="portfolio_img">
            {/* <img src="https://ksr-ugc.imgix.net/assets/032/441/849/6b8b93f9cda9dddc3f1a5f1be63a8e16_original.jpeg?ixlib=rb-4.0.2&w=700&fit=max&v=1613765944&auto=format&gif-q=50&q=92&s=3cc30c8a3e997bd5e37e098ffcc0cf60" alt="portfolio img" /> */}
          </div>
          <div id="portfolio_textWrapper">
            <div id="portfolio_text">
              <span id="portfolio_heading">
                How To Make a Photography Portfolio
              </span>
              <p>
                An insider's guide to getting your work out there--whether
                that's through a website, PDF, or whole photo book.
              </p>
            </div>
            <span id="link">Learn more.</span>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* Creators Corner Section */}
      {/* ========================================= */}

      <div id="creatorsCorner_section">
        <div id="creators_first">
          <span>CREATORS' CORNER</span>
        </div>

        <div id="creators_second">
          <div className="cCornersCard_Wrapper">
            <div className="cCornersCard_Image" id="cc1">
              {/* <img
                src="https://ksr-static.imgix.net/creator_handbook-2f861a5.jpeg?ixlib=rb-2.1.0&s=db586fa544dbb66ff7a4cbb312474b5d"
                alt="background img"
              /> */}
            </div>
            <div className="cCorners_Text">
              <div>
                <span>The Kickstarter Creator Handbook</span>
                <p>
                  This guide will walk you through everything from planning your
                  shipping to communicating with backers.
                </p>
              </div>
              <span className="read">Read more</span>
            </div>
          </div>

          <div className="cCornersCard_Wrapper">
            <div className="cCornersCard_Image" id="cc2">
              {/* <img
                src="https://ksr-static.imgix.net/TCI_storytelling-9fe71bf.png?ixlib=rb-2.1.0&s=dca8c6b2fbb2d3d423ae9a9e2f11c165"
                alt="background img"
              /> */}
            </div>
            <div className="cCorners_Text">
              <div>
                <span>The Kickstarter Creator Handbook</span>
                <p>
                  This guide will walk you through everything from planning your
                  shipping to communicating with backers.
                </p>
              </div>
              <span className="read">Read more</span>
            </div>
          </div>

          <div className="cCornersCard_Wrapper">
            <div className="cCornersCard_Image" id="cc3">
              {/* <img
                src="https://ksr-static.imgix.net/embrace_mistakes_without_romanticizing_failure_the_creative_independent-059993c.jpg?ixlib=rb-2.1.0&s=943d20dca2ae75fa4a41a574dd5584f1"
                alt="background img"
              /> */}
            </div>
            <div className="cCorners_Text">
              <div>
                <span>The Kickstarter Creator Handbook</span>
                <p>
                  This guide will walk you through everything from planning your
                  shipping to communicating with backers.
                </p>
              </div>
              <span className="read">Read more</span>
            </div>
          </div>

          <div className="cCornersCard_Wrapper">
            <div className="cCornersCard_Image" id="cc4">
              {/* <img
                src="https://ksr-static.imgix.net/how_to_archive_your_owrk_digitally_the_creative_indpendent-91b6a74.jpg?ixlib=rb-2.1.0&s=1c54a33aaff65ffa773a480318d5be26"
                alt="background img"
              /> */}
            </div>
            <div className="cCorners_Text">
              <div>
                <span>The Kickstarter Creator Handbook</span>
                <p>
                  This guide will walk you through everything from planning your
                  shipping to communicating with backers.
                </p>
              </div>
              <span className="read">Read more</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* Navbar Section */}
      {/* ========================================= */}

      <Navbar />

      {/* ========================================= */}
      {/* Footer Section */}
      {/* ========================================= */}

      <Footer />

    </>
  );
}
