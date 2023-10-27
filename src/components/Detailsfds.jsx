import styled from "styled-components";
import { Header } from "./Header";
// import { Navbar } from "./Navbar";

export const Details = () => {

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