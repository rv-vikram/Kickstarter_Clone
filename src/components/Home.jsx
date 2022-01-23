import "../styles/Home.css";
import { CarouselCard } from "./CarouselHome";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <h1 className="cre">
          Creative work shows us what’s possible.
          <br />
          Help fund it here.
        </h1>
        <h5 className="with">WITHIN THE LAST DAY</h5>
        <div className="box">
          <div>
            <h1>21</h1>
            <h4>projects funded</h4>
          </div>
          <div>
            <h1>$4,302,354</h1>
            <h4>towards creative work</h4>
          </div>
          <div>
            <h1>25,172</h1>
            <h4>backings</h4>
          </div>
        </div>
        <div id="arts_2">
          <div id="arts_2_1">
            <section>
              <h2 className="head">FEATURED PROJECT</h2>
              <div>
                <img
                  src="https://ksr-ugc.imgix.net/assets/035/869/549/b2a101b3c1d5c57bd9e3a427a24e6bb9_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1639712377&auto=format&frame=1&q=92&s=fade1674edbf6a4ddd564609f5244846"
                  alt="big img"
                />
              </div>
              <div id="hr"></div>
              <h3>"Ocean Filibuster</h3>
              <p id="description">
                A genre-defying musical theater production about the ocean and
                its environmental threats is looking to go on tour
              </p>
              <p id="quote">By PearlDamour</p>
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
                          src="https://ksr-ugc.imgix.net/assets/036/002/004/007be6d709cb8cb4b242fd5e6f598031_original.jpg?ixlib=rb-4.0.2&amp;crop=faces&amp;w=1024&amp;h=576&amp;fit=crop&amp;v=1641498848&amp;auto=format&amp;frame=1&amp;q=92&amp;s=2f3cbf0c33e56211ef47152e8dd5e029"
                          alt=" NINJA"
                        />
                      </div>
                      <div className="title">
                        <p className="book_title">
                          GIRLS of NINJA HIGH SCHOOL <br />
                          vol.1 Collectionk
                        </p>
                        <span className="funded">447% funded</span>

                        <p className="book_author">By Ben Dunn</p>
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
                          src="https://ksr-ugc.imgix.net/assets/035/951/889/f705bb1328cc1d68484577b2513da745_original.png?ixlib=rb-4.0.2&amp;crop=faces&amp;w=1024&amp;h=576&amp;fit=crop&amp;v=1640877706&amp;auto=format&amp;frame=1&amp;q=92&amp;s=8489968b1366d6a2b5dbd5f5c8f9ff93"
                          alt="Queen"
                        />
                      </div>
                      <div className="title">
                        <p className="book_title">
                          Make 100: Lost Queen Chronicles: <br /> The
                        </p>
                        <span className="funded">127% funded</span>
                        <p className="book_author">By S.A. McClure</p>
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
                          src="https://ksr-ugc.imgix.net/assets/034/808/368/944a99bc27b36c1888c889d00a3e5636_original.png?ixlib=rb-4.0.2&amp;crop=faces&amp;w=1024&amp;h=576&amp;fit=crop&amp;v=1631139162&amp;auto=format&amp;frame=1&amp;q=92&amp;s=7eb3389cf1bdbac76ef4d941f56b8ffa"
                          alt="
                          KODAMA"
                        />
                      </div>
                      <div className="title">
                        <p className="book_title">KODAMA</p>
                        <span className="funded">107% funded</span>
                        <p className="book_author">By Brian M Tang</p>
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
        <div id="carausel_section">
          <div id="carausel_first">
            <span>FRESH FAVORITES</span>
            <span>
              Discover more<i className="fas fa-greater-than"></i>
            </span>
          </div>
          <CarouselCard />
        </div>

        <div id="subscribe_section">
          <h2>Discover the best and brightest projects on Kickstarter.</h2>
          <p>Sign up to receive our weekly Projects We Love newsletter.</p>
          <div id="subscribe_input">
            <input type="text" placeholder="Enter email address" />
            <button>Subscribe</button>
          </div>
        </div>

        <div id="carausel_section">
          <div id="carausel_first">
            <span>TAKING OFF</span>
            <span>
              Discover more<i className="fas fa-greater-than"></i>
            </span>
          </div>
          <CarouselCard />
        </div>

        <div id="portfolio_section">
          <div id="portfolio_wrapper">
            <div id="portfolio_img">
              {/* <img src="https://ksr-static.imgix.net/Longstoryshort_2022_LandingPage_2100x900_KSR-valentine-06e55e7.jpg?ixlib=rb-4.0.2&amp;s=3b78791a1135c3321987fb5905b4c3bf" alt="portfolio img" /> */}
            </div>
            <div id="portfolio_textWrapper">
              <div id="portfolio_text">
                <span id="portfolio_heading">Long Story Short</span>
                <p>
                  More than 7,000 bold and brilliant short films have been
                  funded on Kickstarter, including three Academy Award winners.
                  These films illuminate and entertain with their beauty and
                  depth. They tell unknown stories and amplify lesser heard
                  voices.
                </p>
              </div>
              <span id="link">Learn more.</span>
            </div>
          </div>
        </div>

        <div id="homeStretch_section">
          <div id="homeStretch_first">
            <span>HOME STRETCH</span>
            <span>
              Discover more<i className="fas fa-greater-than"></i>
            </span>
          </div>
          <CarouselCard />
        </div>
        <span id="make">THE MAKING OF</span>
        <div id="makeof">
          <div>
            <img
              src='https://ksr-static.imgix.net/CaseStudy_WaxPoetics-400x500-3-e9aa7fd.png?ixlib=rb-2.1.0&amp;auto=compress%2Cformat&amp;w=1000&amp;fit=min&amp;s=e553548f556bd28d6d687a39f918be87"'
              alt="portfolio img"
            />
          </div>
          <div>
            <img
              src='https://ksr-static.imgix.net/tin-crop-ed2a47a.png?ixlib=rb-2.1.0&amp;auto=compress%2Cformat&amp;w=1000&amp;fit=min&amp;s=c072c44dd65b1db6bb9007e61fbc7cb4"'
              alt="portfolio img"
            />
            <h3></h3>
            <p></p>
            <span></span>
          </div>
          <div>
            <img
              src='https://ksr-static.imgix.net/galdem-45-11cf59e.png?ixlib=rb-2.1.0&amp;auto=compress%2Cformat&amp;w=1000&amp;fit=min&amp;s=b6d4f56070e7f5aec3bafbc97316d8e0"'
              alt="portfolio img"
            />
            <h3></h3>
            <p></p>
            <span></span>
          </div>
          <div>
            <img
              src='https://ksr-static.imgix.net/Screen_Shot_2021-03-11_at_12-14-34_PM-a2b84ac.png?ixlib=rb-2.1.0&amp;auto=compress%2Cformat&amp;w=1000&amp;fit=min&amp;s=bdaeae97bc01ea8402b4146f58cfca93");'
              alt="portfolio img"
            />
            <h3></h3>
            <p></p>
            <span></span>
          </div>
        </div>
        <hr />

        <div id="portfolio_section">
          <div id="portfolio_wrapper">
            <div id="portfolio_img">
              {/* <img src="https://ksr-ugc.imgix.net/assets/032/441/849/6b8b93f9cda9dddc3f1a5f1be63a8e16_original.jpeg?ixlib=rb-4.0.2&w=700&fit=max&v=1613765944&auto=format&gif-q=50&q=92&s=3cc30c8a3e997bd5e37e098ffcc0cf60" alt="portfolio img" /> */}
            </div>
            <div id="portfolio_textWrapper">
              <div id="portfolio_text">
                <span id="portfolio_heading">
                  The Future of Crowdfunding Creative Projects
                </span>
                <p>
                  To truly serve our mission to help bring creative projects to
                  life, we need to build on what made Kickstarter so innovative
                  in the first place: the power of a large network of people
                  working together towards a common goal.
                </p>
              </div>
              <span id="link">Learn more.</span>
            </div>
          </div>
        </div>

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
                    This guide will walk you through everything from planning
                    your shipping to communicating with backers.
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
                    This guide will walk you through everything from planning
                    your shipping to communicating with backers.
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
                    This guide will walk you through everything from planning
                    your shipping to communicating with backers.
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
                    This guide will walk you through everything from planning
                    your shipping to communicating with backers.
                  </p>
                </div>
                <span className="read">Read more</span>
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio_section">
          <div id="portfolio_wrapper">
            <div id="portfolio_img">
              {/*<img src="https://ksr-static.imgix.net/Final_magic-and-div_hp-module-1225x525_R-311e886.jpg?ixlib=rb-4.0.2&amp;s=d8fe051bc727dbf42c9bca0ccdbef4c1&quot;" alt="portfolio img" /> */}
            </div>
            <div id="portfolio_textWrapper">
              <div id="portfolio_text">
                <span id="portfolio_heading">Magic & Divination</span>
                <p>
                  From terrific tarot decks and wizarding wands to arcane
                  accessories, eldritch electronics, sorcerous stationery, and
                  so much more, you can now find all the most spellbinding
                  projects here in one place.
                </p>
              </div>
              <span id="link">Discover the magic</span>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <Footer />
    </>
  );
};
