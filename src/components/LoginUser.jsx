import { useContext, useState } from "react";
import "../RegisterUser.css";
import { Link } from "react-router-dom";
import { ProgressContext } from "../context/ProgressContext";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router";

const initState = {
  name: "",
  email: "",
  password: "",
};

export const LoginUser = () => {
  const [formData, setFormData] = useState(initState);

  const auth = useContext(ProgressContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await getData();
    if (result.status === "success") {
      auth.toggleAuth();
      navigate("/");
      localStorage.setItem("token", JSON.stringify(result.token));
      setError(null);
    } else {
      setError(result.message);
    }
    setFormData(initState);
  };

  const getData = async () => {
    let res = await fetch("http://localhost:5001/login", {
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
            <div className="container2">
              <p>Log in</p>
              <p className="warning">{error}</p>

              <form action="" onSubmit={handleSubmit}>
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
                <button type="submit" className="submit-btn">
                  Log in
                </button>
              </form>
              <div className="terms-conditions">
                Get notified when your friends back and launch projects. We'll
                never post anything on Facebook without your permission. Read
                more
              </div>
            </div>
            <div className="not-having-an-account">
              New to Kickstarter? <Link to="/register">Sign up</Link>
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
          <div className="container2">
            <p>Log in</p>

            <form action="" onSubmit={handleSubmit}>
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
              <button type="submit" className="submit-btn">
                Log in
              </button>
            </form>
            <div className="terms-conditions">
              Get notified when your friends back and launch projects. We'll
              never post anything on Facebook without your permission. Read more
            </div>
          </div>
          <div className="not-having-an-account">
            New to Kickstarter? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
