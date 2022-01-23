import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Details = () => {
    const [offset, SetOffset] = useState(0);
    const [y, setY] = useState(0);

    const divRef = useRef();
    // setY(divRef.current.pageYOffset);
    useEffect(() => {
        setY(divRef.current.offsetTop);
    }, [])

    window.onscroll = () => {
        SetOffset(window.pageYOffset);

    };

    return <div>
        <Header />
        <Div>
            <h2>Ocean Filibuster</h2>
            <p>
                A genre-crashing music theater experience featuring Jennifer Kidwell
            </p>
        </Div>
        <Box>
            <div><video preload="none" src="https://v.kickstarter.com/1642933770_f54f97be402a9af89723ac51472855a7d0d9d3f9/projects/4272166/video-1142079-h264_base.mp4" controls poster="https://ksr-ugc.imgix.net/assets/035/869/549/b2a101b3c1d5c57bd9e3a427a24e6bb9_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1639712377&auto=format&frame=1&q=92&s=fade1674edbf6a4ddd564609f5244846"></video></div>
            <div>
                <h2>US$ 14,285</h2>
                <p>pledged of US$ 12,000 goal</p>
                <h2>136</h2>
                <p>backers</p>
                <h2>3</h2>
                <p>days to go</p>
                <button>Back this project</button>
                <div>
                    <div><button><i className="far fa-bookmark"></i> Remind Me</button></div>
                    <div><i style={{ color: "#39579a" }} className="fab fa-facebook"></i><i style={{ color: "#4c6ef5" }} class="fab fa-twitter"></i><i class="fas fa-envelope"></i><i class="fas fa-code"></i></div>
                </div>
                <p style={{ fontSize: "12px", marginTop: "20px" }}>All or nothing. This project will only be funded if it reaches its goal by Tue, January 25 2022 10:29 AM UTC +05:30.</p>
            </div >
        </Box >
        <Box2>
            <div> Kickstarter connects creators with backers to fund projects.</div>
            <div>Rewards aren’t guaranteed, but creators must regularly update backers.</div>
            <div>You’re only charged if the project meets its funding goal by the campaign deadline.</div>
        </Box2 >
        <Navb style={{ position: "sticky" }} ref={divRef} check={offset} y={y}>
            <div><a href="/campaign"><strong>Campaign</strong></a>
                <a href="/faq">FAQ</a>
                <a href="/Updates">Updates</a>
                <a href="/Comments">Comments</a>
                <a href="/Community">Community</a>
            </div>
            <div>
                <button>Back this project</button>
                <div style={{ fontSize: "15px" }}><i style={{ marginRight: "6px" }} className="far fa-bookmark"></i> Remind Me</div>
            </div>
        </Navb>
        <Div2>
            <h4>Story</h4>
            <h1>THE OCEAN.  THE CLIMATE.  YOU.</h1>
            <p>We are finishing a show about the Ocean. And our intimate relationship to it.  And how the ocean creates 50% of our breath.  And how human systems are messing with this process, and endangering poor people way more than the rich. And yes, it’s about the climate crisis, and how we feel powerless within it…</p>

            <p>…and also the show has songs, and jokes, and wondrous large scale video, and the singular Jenn Kidwell playing two roles, and interactive mini-labs that give you a quintessential PearlDamour experience of hospitality and roads to ACTION. </p>
            <p><strong>We are raising money to support our self-produced TOUR of this play. </strong></p>
            <img src="https://ksr-ugc.imgix.net/assets/035/869/638/193f89c10d6089fd4d427436737ab9fe_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1639713859&auto=format&gif-q=50&lossless=true&s=71b0494dbfa5be075f118c4b4bbc31ed" alt="nothing" />
            <p>Jenn Kidwell during a script workshop at Abrons Art Center, 2019</p>
            <h1>LIVE THEATER. LOCAL ACTION.  (GULP) HOPE.</h1>
            <p>The show is called Ocean Filibuster. It's a genre-crashing music theater experience about the climate, environmental justice, and hope.</p>
            <p>It is 40 years in the future. Inside the Senate chamber of a global governing body, Mr. Majority introduces an “End of Ocean Bill” designed to shrink Earth’s oceans into a more manageable (and marketable) collection of inland seas. When the floor is opened for debate, the Ocean arrives to speak in its own defense… and so begins an epic Human-Ocean showdown. Jenn Kidwell, playing both roles, is joined by a choir singing an urgent question: <strong>Can humans realize that we are Ocean, before it’s too late?</strong></p>

            <p>The show premieres in February at the American Repertory Theater and then we begin our tour - to Houston and a to-be-announced coastal city in 2022, with more partnerships to follow in 2023 and beyond.</p>
            <h1>Going Deep and Staying Local</h1>
            <p>Those of you who know our show MILTON know we love going deep when we tour.  We are already deep in process with our 2022 partners, designing local experiences that let audiences learn more about climate health in their city - and get involved in local climate healing. In Houston we are working with the Galveston Bay Foundation, HARC and Buffalo Bayou Conservancy on an interactive experience that gives you a crab's-eye view of Galveston Bay, Buffalo Bayou and the Houston Ship Channel showing how  human industry distorts and disrupts delicate ecosystems needed for survival by both sea life and human life. Our partners are then designing a host of volunteer opportunities in Houston that give our audiences the chance to work together to care for the natural world right where they are.</p>
            <img src="https://ksr-ugc.imgix.net/assets/035/869/620/2ed7caae7c98ee64309366e3534e97c3_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1639713703&auto=format&gif-q=50&lossless=true&s=78efeaab19a9733e8257a149fffba2df" alt="nothing" />
            <p>Set Model of Ocean Filibuster Global Senate Chamber</p>
            <h1>CAN YOU HELP?</h1>
            <p>We need $12,000 to ensure that our touring set is flexible enough to go to venues both large and small, and to make sure we have the sources we need to collaborate effectively and responsibly with our local partners.  Paying an assistant to help organize the local work. Money to construct the mini-labs in each town. A budget to pay and feed the folks who help us make and organize the mini lab. Our stretch goal is $15,000-- allowing us to increase the stipends to local partners and devote time and resources to support their organization after we are gone. The show may end, but their work still continues. We hope Ocean Filibuster can be a catalyst-- not just a one-off. Reaching our stretch goal can help make this a reality.</p>
            <h1>REWARD YOURSELF!</h1>
            <p>We would love for you to choose a level of support and a gift in our thanks. Will you get Mr. Majority’s Global Senate pin? Hear the voice of the ocean on an answering machine? Photos from past PearlDamour shows? Copies of our past plays? Please check out our rewards, and make a donation you feel comfortable with.</p>
            <img src="https://ksr-ugc.imgix.net/assets/035/869/643/9c029bd8f656ea2ca5181a4da07c863f_original.jpeg?ixlib=rb-4.0.2&w=680&fit=max&v=1639714038&auto=format&gif-q=50&q=92&s=85dbbaa42ba775fedda78e5ed9e8bbb5" alt="nothing" />
            <p>Our Costume Designer Olivera Gajic showing off early models of chorus headpieces-- they are made out of plastic bottles.</p>
        </Div2>
        <Navbar></Navbar>
        <Footer></Footer>
    </div >
}

const Div = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    text-align:center;
    margin-top:30px;
    &>h2{
        font-weight:500;
        margin:8px;
        padding:0px;
    }
    &>p{
        font-size:18px;
        margin:0px;
        padding:0px
    }
`;

const Box = styled.div`
    width:90%;
    margin:3% auto;
    display:flex;
    & >div{

    }
    &>div:nth-child(1){
        width:65%;
        margin-right:4%;
    }
     &>div:nth-child(1) video{
         width:100%;
     }
    &>div:nth-child(2){
        width:30%;
        border-top:5px solid #009E74;
    }
    &>div:nth-child(2)>h2{
        margin:0px;
        margin-top:5%;
        width:300px;
        font-size:28px;
        color: #656969;
    }
    &>div:nth-child(2)>h2:nth-child(1){
        color:#009E74;
    }
    &>div:nth-child(2)>p{
        margin:0px;
        font-size:14px;
        color:gray;
    }
    & button{
        margin-top:6%;
        font-size:15px;
        color: white;
        width:100%;
        padding: 14px 38px;
        background-color:#028858;
        cursor: pointer;
    }
    & button:hover{
        background-color:#015738
    }
    &>div:nth-child(2)>div{
        width:100%;
        display:flex;
        align-items:center;
        margin-top:3%;
    }
    &>div:nth-child(2)>div>div:nth-child(2){
        display:flex;
    }
    &>div:nth-child(2)>div>div:nth-child(2) i{
        margin: 0% 20%;
        cursor: pointer;
    }
    &>div:nth-child(2)>div>div:nth-child(1) button{
        color: black;
        background-color:white;
        border: 1px solid lightgray;
    }
    &>div:nth-child(2)>div>div:nth-child(1) button:hover{
        border: 1px solid black;
    }
`;

const Box2 = styled.div`

    padding:4%;
    margin:0px auto;
    background-color:#F6F2EB;
    display:flex;
    &>div{
        margin:auto;
        font-size:20px;
        width:22%;
    }
`;
const Navb = styled.div`
    z-index:100;
    position: sticky;
    border-top:1px solid lightgray;
    border-bottom:1px solid lightgray;
    padding: 1% 3%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid lightgray;
    &>div{
        display:flex;
        align-items:center;
    }
    &>div a{
        display:block;
        height:100%;
        margin:0% 5%;
    }
    &>div a:hover{
        border-bottom:2px solid black;
    }
    &>div div{
        display:flex;
        align-items:center;
    }
    & button{
        margin: 0px 20px;
        font-size:13px;
        color: white;
        padding: 12px 22px;
        background-color:#028858;
        cursor: pointer;
    }
    & button:hover{
        background-color:#015738
    }
`;

const Div2 = styled.div`
    width:50%;
    margin:3% auto;
    &>h4{
        font-size:24px;
        font-weight:400;
        color:gray;
    }
    &>h1{
        font-weight:400;
        color:gray;
    }
`;