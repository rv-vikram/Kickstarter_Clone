import { Link } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Navbar } from "../Navbar";

export const Project = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Heading>
        <div>Bring your creative project to life.</div>
        <Link to={"/steps"}>
          <button>Start a project</button>
        </Link>
      </Heading>
      <Grid>
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </Grid>
      <Heading1>
        <div>
          <div>“</div>
          <div>
            <div>
              We see Kickstarter as a home for creative minds and a wonderful
              platform; where people who believe, respect, and see the vision
              can support an idea and make it a reality.
            </div>
            <div>— DE LA SOUL</div>
          </div>
        </div>
      </Heading1>
      <Heading2>
        <div>
          A Kickstarter project does more than raise money. It builds community
          around your work.
        </div>
        <div>
          <div>
            <div>What can I use Kickstarter to fund?</div>
            <div>
              Kickstarter is specifically for creative projects in the following
              categories: Art, Comics, Crafts, Dance, Design, Fashion, Film &
              Video, Food, Games, Journalism, Music, Photography, Publishing,
              Technology, and Theater. Make an album, write a book, create an
              immersive theater experience, score a film — you name it. Read
              more about{" "}
              <a href="https://www.kickstarter.com/rules?ref=learn_faq">
                our project guidelines.
              </a>
            </div>
          </div>
          <div>
            <div>Who can I get pledges from?</div>
            <div>
              Millions of people visit Kickstarter every week, but support
              always begins with people you know. Friends, fans, and the
              communities you’re a part of will likely be some of your earliest
              supporters, not to mention your biggest resources for spreading
              the word about your project.
            </div>
          </div>
          <div>
            <div>How much work is it to run a project?</div>
            <div>
              Every Kickstarter project has its share of exhilarating and
              challenging moments, but the amount of work generally depends on
              the size and complexity of the project. Expect the first few days
              after launch to be very busy as you spread the word to your
              community, answer questions from potential backers, and more. You
              may need to spend the last few days rallying your social networks
              in order to reach your funding goal. Projects sometimes take on a
              life of their own, and in that case you should expect to spend
              more time creating and fulfilling rewards.
            </div>
          </div>
          <div>
            <div>How do I get in touch with questions?</div>
            <div>
              You can reach out with your questions through this{" "}
              <a href="https://www.kickstarter.com/contact?ref=learn_faq">
                contact form
              </a>
              . We also recommend taking a look at{" "}
              <a href="our FAQs">our FAQs</a> for more detailed information,
              along with the{" "}
              <a href="https://www.kickstarter.com/help/handbook?ref=learn_faq">
                creator handbook
              </a>{" "}
              for guidance on starting and running a project.
            </div>
          </div>
        </div>
      </Heading2>
      <Video>
        <video
          controls
          preload="none"
          poster="https://ksr-static.imgix.net/5ac912ca266060390adbca02a40d49b7_original.png?ixlib=rb-2.1.0&auto=compress%2Cformat&s=4f50c15b1e29598a78b7a12754792928"
          src="https://d3mlfyygrfdi2i.cloudfront.net/175c/startpage_20130916_supercut_hi.mp4"
        ></video>
      </Video>
      <Heading2>
        <div>Why Kickstarter?</div>
        <div>
          <div>
            <div>Kickstarter is just for creative projects.</div>
            <div>
              We built Kickstarter as a tool for artists, designers, makers,
              musicians, and creative people everywhere. We’re proud to be the
              only platform that’s fully dedicated to building community around
              creative projects.
            </div>
          </div>
          <div>
            <div>All-or-nothing funding works.</div>
            <div>
              Kickstarter’s all-or-nothing model allows you to choose a funding
              goal and a set number of days to reach that goal. This way, you
              don’t get stuck without enough funds to realize your project. It
              also gives backers incentive to pledge more to help you reach your
              goal.
            </div>
          </div>
          <div>
            <div>Our community wants to support you.</div>
            <div>
              Millions of backers agree — helping to create something new is
              exciting. People love peeking behind the creative curtain and
              directly supporting the creative process. In fact, 13.9 million
              people have pledged more than $3.39 billion to bring Kickstarter
              projects to life over the years.
            </div>
          </div>
        </div>
      </Heading2>
      {/* <Hr /> */}
      <Heading3>
        <div>
          <div>“A way for every creative person to control their destiny.”</div>
          <div>— Brian Fargo, successful Kickstarter project creator</div>
          <Link to={"/steps"}>
            <button>Start a project</button>
          </Link>
        </div>
      </Heading3>
      <Navbar />
      <Footer />
    </div>
  );
};

const Heading = styled.div`
  margin-top: 60px;
  width: 100%;
  font-size: 42px;
  padding: 0px 250px;
  font-family: "Buenard", serif;

  font-weight: 700;

  & button {
    font-size: 16px;
    color: white;
    padding: 14px 34px;
    background-color: #028858;
    cursor: pointer;
  }
  & button:hover {
    background-color: #015738;
  }
`;

const Grid = styled.div`
  width: 94%;
  margin: 50px auto;
  height: 580px;
  display: flex;
  flex-direction: row;
  & > div {
    display: flex;
    margin: 1.5%;
  }
  & > div:nth-child(1) {
    width: 56%;
    background-image: url("https://a.kickstarter.com/assets/projects/learn/refresh/feature-1-6e68a182e1340ce87d9b3c9f9a25da52935d14be496a4e88085025ae54bb870d.jpg");
    background-size: cover;
    transition: all 0.25s ease-in-out !important;
    cursor: pointer;
  }
  & > div:nth-child(1):hover {
    box-shadow: 0 3px 6px 1px rgb(0 0 0 / 17%);
    transform: translateY(-1px);
  }
  & > div:nth-child(2) {
    width: 40%;
    display: flex;
    flex-direction: column;
  }
  & > div:nth-child(2) > div:hover {
    box-shadow: 0 3px 6px 1px rgb(0 0 0 / 17%);
    transform: translateY(-1px);
  }
  & > div:nth-child(2) > div:nth-child(1) {
    width: 100%;
    height: 47%;
    background-image: url("https://a.kickstarter.com/assets/projects/learn/refresh/feature-2-8c80ae939629f8b10087e097c965990ff4b3eae72b90b51fc597c7f794420881.jpg");
    background-size: cover;
  }
  & > div:nth-child(2) > div:nth-child(2) {
    width: 100%;
    margin-top: 6%;
    height: 47%;
    background-image: url("https://a.kickstarter.com/assets/projects/learn/refresh/feature-3-48fe9583f16524ea8412cbb862901b00af1aaf669fdcf43f466f34af5696fc08.jpg");
    background-size: cover;
  }
`;

const Heading1 = styled.div`
  margin: 0px;
  background: #034752;
  padding: 5%;
  & > div {
    width: 80%;
    margin: auto;
    display: flex;
    color: white;
  }
  & > div > div:nth-child(1) {
    font-size: 134px;
    /* font-family: 'Buenard', serif; */
    font-family: "Nunito Sans", sans-serif;
    color: #02323a;
  }
  & > div > div:nth-child(2) > div {
    margin: 1% 5%;
  }
  & > div > div:nth-child(2) > div:nth-child(1) {
    font-size: 40px;
    line-height: 1.2;
    font-family: "Buenard", serif;
  }
  & > div > div:nth-child(2) > div:nth-child(2) {
    margin-top: 5%;
  }
`;

const Heading2 = styled.div`
  margin: auto;
  width: 60%;
  & > div:nth-child(1) {
    margin: 8% auto;
    font-family: "Buenard", serif;
    font-size: 40px;
    line-height: 1.2;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
  & > div:nth-child(2) > div {
    display: flex;
    margin: 4% 0%;
  }
  & > div:nth-child(2) > div {
    width: 100%;
  }
  & > div:nth-child(2) > div > div:nth-child(1) {
    font-size: 28px;
    font-family: "Buenard", serif;
    line-height: 1.2;
    width: 35%;
  }
  & > div:nth-child(2) > div > div:nth-child(2) {
    color: #282828;
    width: 55%;
    margin-left: 10%;
  }
  /* &>div:nth-child(2)>div:nth-child(2){
        width:45%;
    } */
`;

const Video = styled.div`
  width: 100%;
  margin: 0%;
  background: #282828;
  & > video {
    width: 76%;
    margin: 5% 12%;
  }
`;

const Hr = styled.div`
  border-bottom: 1px solid black;
  margin: 4% auto;
`;

const Heading3 = styled.div`
  margin: 0px;
  background: #ffcba9;
  padding: 5%;
  border-top: 1px solid black;
  border-bottom: 1px solid gray;

  & > div {
    width: 70%;
    margin: auto;
    color: black;
  }
  & > div > div:nth-child(1) {
    font-size: 52px;
    font-weight: 700;
    line-height: 1.2;
    font-family: "Buenard", serif;
  }
  & > div > div:nth-child(2) {
    margin-top: 20px;
  }
  & button {
    font-size: 16px;
    color: white;
    padding: 14px 34px;
    background-color: #464646;
    margin-top: 40px;
    cursor: pointer;
  }
  & button:hover {
    background-color: black;
  }
`;
