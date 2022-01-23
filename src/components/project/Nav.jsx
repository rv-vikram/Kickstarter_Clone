import styled from "styled-components";

export const Nav = () => {

    return <Div>
        <div>
            <div>Discover</div>
            <div>Start a project</div>
        </div>
        <div><Img src="kickstarter.svg" alt="kickstarter" /></div>
        <div>
            <div>Search</div>
            <div>Log in</div>
        </div>
    </Div>
}

const Div = styled.div`
    width:100%;
    height:67px;
    border-bottom: 1px solid #DCDEDD;
    display:flex;
    align-items:center;
    justify-content:space-between;
    &>div{
        padding: 0px 15px;
        display:flex;
    }
    &>div>div{
        font-size:14px;
        margin: 0px 10px;
        cursor: pointer;
        transition: .3s ease-in-out;
    }
    &>div>div:hover{
        color:#037362;
    }
`;

const Img = styled.img`
    color:green;
    width: 60%;
        cursor: pointer;

`;