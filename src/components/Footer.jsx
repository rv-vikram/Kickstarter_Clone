import "../Styles/footer.css";

export function Footer() {
    
    return (
        <footer>

        {/* first half section */}

        <div id="menu_wrapper">
          <div>
            <h3 className="menuHeading">ABOUT</h3>
            <ul>
              <li>About us</li>
              <li>Our charter</li>
              <li>Stats</li>
              <li>Press</li>
              <li>Jobs</li>
            </ul>
          </div>

          <div>
            <h3 className="menuHeading">SUPPORT</h3>
            <ul>
              <li>Help Center</li>
              <li>Our Rules</li>
              <li>Creator Resources</li>
              <li>Forward Funds</li>
              <li>Brand assests</li>
            </ul>
          </div>

          <div>
            <h3 className="menuHeading">MORE FROM KICKSTARTER</h3>
            <ul>
              <li>Newsletters</li>
              <li>Kickstarter Magazine</li>
              <li>The Creative Independent</li>
              <li>Mobile apps</li>
              <li>Research</li>
            </ul>
          </div>
        </div>
        
        {/* second half section */}

        <div id="socialIcon_wrapper">
          <div id="left">
            <div id="social_copyright">
              <img
                src="https://st4.depositphotos.com/4562487/19852/v/380/depositphotos_198523478-stock-illustration-logo-web-icon-vector-illustration.jpg?forcejpeg=true"
                alt="k-logo"
              />
            </div>
            {/* <div id="copyright_text"> */}
              <span>Kickstarter, PBC &copy; 2022</span>
            {/* </div> */}
          </div>

          <div id="right">
            <i className="fab fa-facebook" onClick={() => window.open("https://www.facebook.com/Kickstarter/", "_blank")}></i>
            <i className="fab fa-instagram" onClick={() => window.open("https://www.instagram.com/kickstarter/", "_blank")}></i>
            <i className="fab fa-twitter" onClick={() => window.open("https://twitter.com/kickstarter", "_blank")}></i>
            <i className="fab fa-youtube" onClick={() => window.open("https://www.youtube.com/user/kickstarter", "_blank")}></i>
          </div>
        </div>

        <hr />

        {/* last half section */}

        <div id="footer_menuSection">
          <span onClick={() => window.open("https://www.kickstarter.com/trust?ref=global-footer", "_blank")}>Trust & Safety</span>
          <span onClick={() => window.open("https://www.kickstarter.com/terms-of-use?ref=global-footer", "_blank")}>Terms of Use</span>
          <span onClick={() => window.open("https://www.kickstarter.com/privacy?ref=global-footer", "_blank")}>Privacy Policy</span>
          <span onClick={() => window.open("https://www.kickstarter.com/cookies?ref=global-footer", "_blank")}>Cookie Policy</span>
          <span onClick={() => window.open("https://www.kickstarter.com/accessibility?ref=global-footer", "_blank")}>Accessibility Statement</span>
          <span onClick={() => window.open("https://www.kickstarter.com/privacy?ref=global-footer#privacy-information-for-california-residents", "_blank")}>CA Notice of Consent</span>
        </div>
      </footer>
    )
}
