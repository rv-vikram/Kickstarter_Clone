import { useContext, useState } from "react";
import "../RegisterUser.css";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProgressContext } from "../context/ProgressContext";

const initState = {
  name: "",
  email: "",
  password: "",
};

export const RegisterUser = () => {
  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const auth = useContext(ProgressContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await getData();
    if (result.status === "success") {
      localStorage.setItem("token", JSON.stringify(result.token));
      setError(null);
    } else {
      setError(result.message);
    }
    setFormData(initState);
  };

  const getData = async () => {
    let res = await fetch("http://localhost:5001/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });

    let data = await res.json();

    return data;
  };

  const [error, setError] = useState(null);
  if (error) {
    return (
      <>
        <Header />
        <div className="container">
          <div className="main-container">
            <div className="container1">
              Have an account? <Link to="/login">Log in</Link>
            </div>
            <div className="container2">
              <p>Sign up</p>
              <p className="warning">{error}</p>
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  className="input-box"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="input-box"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="input-box"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="checkbox-div">
                  <input type="checkbox" name="check_box1" id="checkbox1" />
                  <label htmlFor="checkbox1">
                    Send me a weekly mix of handpicked projects, plus occasional
                    Kickstarter news
                  </label>
                </div>
                <div className="checkbox-div">
                  <input type="checkbox" name="check_box1" id="checkbox2" />
                  <label htmlFor="checkbox2">
                    Contact me about participating in Kickstarter research
                  </label>
                </div>
                <button type="submit" className="submit-btn">
                  Create account
                </button>
              </form>
              <div className="terms-conditions">
                By signing up, you agree to our Privacy Policy, Cookie Policy
                and Terms of Use. Read more
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="main-container">
          <div className="container1">
            Have an account? <Link to="/login">Log in</Link>
          </div>
          <div className="container2">
            <p>Sign up</p>

            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="input-box"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Email"
                className="input-box"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Password"
                className="input-box"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="checkbox-div">
                <input type="checkbox" name="check_box1" id="checkbox1" />
                <label htmlFor="checkbox1">
                  Send me a weekly mix of handpicked projects, plus occasional
                  Kickstarter news
                </label>
              </div>
              <div className="checkbox-div">
                <input type="checkbox" name="check_box1" id="checkbox2" />
                <label htmlFor="checkbox2">
                  Contact me about participating in Kickstarter research
                </label>
              </div>
              <button type="submit" className="submit-btn">
                Create account
              </button>
            </form>
            <div className="terms-conditions">
              By signing up, you agree to our Privacy Policy, Cookie Policy and
              Terms of Use. Read more
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
