import styled from "styled-components";
import Select from "react-dropdown-select";
import { options } from "./options";
import "../../App.css";
import { useContext, useState } from "react";
import { ProgressContext } from "../../context/ProgressContext";
import { countries } from "./countries";
import { Link } from "react-router-dom";

export const Steps = () => {
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState(false);
  const [text, setText] = useState("");
  const [i, setI] = useState(1);
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);

  const data = useContext(ProgressContext);

  const handleNext = () => {
    if (i === 1) {
      data.handleData("category", text);
      setI(i + 1);
    } else if (i === 2) {
      data.handleData("description", text);
      setI(i + 1);
    } else if (i === 3) {
      data.handleData("country", text);
    }
    setSelect(false);
  };

  const handlePrev = () => {
    if (i === 3 || i === 2) {
      setI(i - 1);
    }
  };

  const handleCheck = () => {
    console.log(step2, step3, step4, step5);
    if (step2 && step3 && step4 && step5) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  };

  return (
    <Layout>
      <Div>
        <div>
          <Link to={"/"} style={{ textAlign: "center" }}>
            <Img src="kickstarter.svg" alt="kickstarter" />
          </Link>
        </div>
      </Div>
      <P>{i} of 3</P>
      <Check>
        {i === 1 ? (
          <div>First, let’s get you set up.</div>
        ) : i === 2 ? (
          <div>Describe what you’ll be creating.</div>
        ) : i === 3 ? (
          <div>Last one—set a location for your project.</div>
        ) : null}
        {i === 1 ? (
          <div>
            Pick a project category to connect with a specific community. You
            can always update this later.
          </div>
        ) : i === 2 ? (
          <div>And don’t worry, you can edit this later, too.</div>
        ) : i === 3 ? (
          <div>
            Pick your country of legal residence if you’re raising funds as an
            individual. If you’re raising funds for a business or nonprofit,
            select the country where the entity’s tax ID is registered.
          </div>
        ) : null}
        {i === 1 ? (
          <div>
            <Select
              name="category"
              color="grey"
              className="selects"
              onChange={(value) => {
                setText(value[0].name);
                setSelect(true);
              }}
              searchable={false}
              options={options}
              labelField="name"
              valueField="name"
              placeholder="Select Your Category"
            />
          </div>
        ) : i === 2 ? (
          <div>
            <Input
              type="text"
              onChange={({ target }) => {
                setCount(target.value.length);
                target.value.length !== 0 ? setSelect(true) : setSelect(false);
              }}
              name="description"
              maxLength={135}
              placeholder="An Album of songs based on Pablo Neruda poems."
            />
            <Count>
              <div>{count}/135</div>
            </Count>
          </div>
        ) : i === 3 ? (
          <div>
            <Select
              name="country"
              className="selects"
              onChange={() => {
                setStep1(true);
                handleCheck();
              }}
              searchable={true}
              options={countries}
              labelField="name"
              valueField="name"
              placeholder="Select Your Country"
            />
            <Check1>
              <div>
                <i className="fa fa-question-circle"></i> Who’s eligible to run
                a Kickstarter project?
              </div>
            </Check1>
            <Check2>
              <div>
                <div className="pretty p-svg p-round p-bigger">
                  <input
                    type="checkbox"
                    onChange={({ target }) => {
                      setStep2(target.checked);
                      handleCheck();
                    }}
                  />
                  <div className="state">
                    <img className="svg svg-icon" src="tick.svg" alt="tick" />
                    <label>I am at least 18 years old.</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="pretty p-svg p-round p-bigger">
                  <input
                    type="checkbox"
                    onChange={({ target }) => {
                      setStep3(target.checked);
                      handleCheck();
                    }}
                  />
                  <div className="state">
                    <img className="svg svg-icon" src="tick.svg" alt="tick" />
                    <label>I can verify an address and bank account.</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="pretty p-svg p-round p-bigger">
                  <input
                    type="checkbox"
                    onChange={({ target }) => {
                      setStep4(target.checked);
                      handleCheck();
                    }}
                  />
                  <div className="state">
                    <img className="svg svg-icon" src="tick.svg" alt="tick" />
                    <label>I can verify a government issued ID.</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="pretty p-svg p-round p-bigger">
                  <input
                    type="checkbox"
                    onChange={({ target }) => {
                      setStep5(target.checked);
                      handleCheck();
                    }}
                  />
                  <div className="state">
                    <img className="svg svg-icon" src="tick.svg" alt="tick" />
                    <label>I have a debit and/or credit card.</label>
                  </div>
                </div>
              </div>
            </Check2>
          </div>
        ) : null}

        <Hr />
        {i === 1 ? (
          <Proceed>
            <p>Your first project! Welcome.</p>
            {select ? (
              <button onClick={() => handleNext()} type="button">
                Next: Project Idea
              </button>
            ) : (
              <button type="button" disabled>
                Next: Project Idea
              </button>
            )}
          </Proceed>
        ) : i === 2 ? (
          <Proceed>
            <p onClick={() => handlePrev()}>&larr; Category</p>
            {select ? (
              <button onClick={() => handleNext()} type="button">
                Next: Location
              </button>
            ) : (
              <button type="button" disabled>
                Next: Location
              </button>
            )}
          </Proceed>
        ) : i === 3 ? (
          <Proceed>
            <p onClick={() => handlePrev()}>&larr; Project Idea</p>
            {select ? (
              <Link to={"/summary"}>
                <button onClick={() => handleNext()} type="button">
                  Continue
                </button>
              </Link>
            ) : (
              <button type="button" disabled>
                Continue
              </button>
            )}
          </Proceed>
        ) : null}

        <P2>
          Please note: Your ability to edit, hide, or delete a project is
          limited after you launch a project.
        </P2>
      </Check>
    </Layout>
  );
};

const Layout = styled.div`
  margin: 0px;
  padding: 0px 60px;
`;

const Div = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #dcdedd;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    display: flex;
    justify-content: center;
  }
`;

const Img = styled.img`
  color: green;
  width: 60%;
  cursor: pointer;
`;

const P = styled.p`
  font-size: 14px;
`;

const Check = styled.div`
  width: 50%;
  margin: 5% auto;
  text-align: center;
  & > div:nth-child(1) {
    font-size: 30px;
    margin: 1%;
  }
  & > div:nth-child(2) {
    font-size: 18px;
    color: gray;
    margin: 3% auto;
  }
  & > div:nth-child(3) {
    margin: 6%;

    & > select {
      width: 100%;
      height: 400px;
    }
  }
`;

const Hr = styled.div`
  margin: 1% 0%;
  margin-top: 80px;
  border-top: 1px solid lightgrey;
`;

const Proceed = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > p {
    color: gray;
    font-size: 14px;
  }
  & > p {
    color: gray;
    font-size: 14px;
    cursor: pointer;
  }
  & > p:hover {
    color: black;
  }
  & button {
    /* font-size:16px; */
    color: white;
    padding: 12px 28px;
    background-color: #464646;
    cursor: pointer;
  }
  & button:hover {
    background-color: black;
  }
  & button:disabled {
    background-color: lightgray;
    color: gray;
    cursor: not-allowed;
  }
`;

const P2 = styled.div`
  color: gray;
  font-size: 12px;
  padding: 0px;
  margin: 0px;
  margin-top: 12%;
`;

const Input = styled.textarea`
  outline: none;
  width: 100%;
  height: 80px;
  border: 1px solid lightgray;
  resize: none;
  transition: all 300ms cubic-bezier(0.175, 0.885, 0.335, 1);
  &:hover {
    border: 1px solid green;
  }
  &:focus {
    border: 1px solid black;
  }
`;

const Count = styled.div`
  display: flex;
  justify-content: right;
  & > div {
    color: gray;
    font-size: 12px;
    display: inline;
  }
`;

const Check1 = styled.div`
  color: gray;
  margin-top: 1%;
  display: flex;
  justify-content: left;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const Check2 = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 6%;
  & > div {
    width: 100%;
    height: 30px;
    align-items: left;
    padding: 8px;
    display: flex;
    align-items: center;
    border: 1px solid white;
  }
  & > div:hover {
    border: 1px solid lightgray;
  }
`;
