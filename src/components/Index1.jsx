import React from "react";
import "./index1.css";
import "./scpt.js";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
export default function Todo() {
    return (
        
        <div>
            
                {/* <h6>Check your inbox so you can quickly complete your verification. <span><a href=""></a>resend email</span></h6>       */}
            
                <nav id="header">
      <div id="link_wrapper">
        <a href="www.random.com">FAQ</a>
         <a href="www.random.com">Rules</a>
        <a href="www.random.com">Handbook</a>
      </div>
      <div id="logo_wrapper">
        <img
          src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f"
          alt="kickstart-logo"
        />
      </div>
      <div id="login_wrapper">
        <div id="search">
          <span class="la">
            <img src="https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-4.0.2&w=160&h=160&fit=crop&v=&auto=format&frame=1&q=92&s=f59fbc667bd2955360201f24253383dd" alt="kickstarter"></img>
          </span>
        </div>
      </div>
    </nav>
    
            
            <div class="artpro">
                <p class="artpro1">Art Project</p>
                <p>by thiru</p>
            </div>
            <div class="previe">
            <img src="data:image/png;base64,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" alt="kickstarter"></img>
            <a href="">Preview</a>
            </div>
            

            <div class="pro">
                <p class="s">Project Status</p>
                
                <div class="project">
                
                    <span class="pi">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADwCAMAAABCI8pNAAAAb1BMVEUAAAD////5+fnl5eWqqqrq6upFRUX8/PySkpLt7e2np6fk5OSYmJgnJyesrKwFBQXe3t4NDQ1KSkpWVlYRERGysrItLS2Li4t6enp0dHQ6OjpAQEBubm6CgoJRUVEyMjIgICDExMTT09PAwMBeXl4rq2s4AAADRklEQVR4nO2dbVfiMBBGkyraaIWy8o4Isv7/37igorCU1NjpmSbe+5mZPPdUemxCGmPDyIqbgTljcFNkgY3a62zCPl6eD3qgDBy5tc5hStnlcY1pdJ0EO4cpTX0D50Gt2uscpjTyDfwQ1Kq9zmFKvnFN4Neytc4ooaTSGSWUVDqjhJJKZ5RQUumMEkoqnVFCSaUzSiipdEYJJZXOZ58u+7NH79Rnlxg9zvr3fiVXbLRThrMp3EUlN9dO91Pmrlop1w7WhKJCyS20UzVj6f5X2mpHak55qvSinUeC7bFSAtdoT/ml1NPOIoX7VFprR5FieVCK+u59yt27ktPOIUn2pvSkHUOS2V4pmXvDO26nlNA3ac/dTulBO4QsC2uutDNI48xYO4I0f81KO4I0U/OsHUGaJ7PRjiDNwgy1I0iz0Q4AAAAAAAAA0IDIl2jPWZhCO4I0hfFulYyRzPg2tMZIuV9fyqbJzPRP8ix493MMoBQDKMUASjGAUgygFAMoxQBKMfD2vDTRfs6R4uN5Kb2n2gTnHhKcIUrmB9UHltoB5Kl4Ix0AAAAAAAAAAADEx/VV1YrH1XXrtb2f13r5c3tpGSe7abN22aDWz+Bi55qjKRrWDhvU1jC+3Nnau27W1uB8rWteQqBVW4Ovc7OX2rVXixJKKKGEEkpdqkUJJZRQQgmlLtWihFIXlSqnBw/UvEu0Sa13OqXZO0z7vtb99mq9k141tTX4pghvO1pbh9YE8nNrE8g7+pVT9fffmm5vUDuonub/3rgAAAAAAAAAAAAAAADRwJ4LoVr2XATAnotO1Nbg6xzpTzlQ6kQtSiihhBJKKHWpFiWUUEIJJZS6VPv7lNhzIVbLnosg2HMhV8ueCwAASIShdgBphiaZ43cPTMyjdgRpXs1KO4I0UzPWjiDN2DRbce8gPWMTuz9MrLG5dghZip1Ss8mJzuH2Rx0+aaeQZP52eqPTjiGJez9jM6FvU24/jg1N5ozNtT0oJXOH6H0q2a12Fhm29kvJvminkeDFHiulcJ1Ke6pke5HfI9afix1HKzlR38vzL4/jxSk31w72U2aZrVba/fXlEf5fPilOF9jOlhDvx6vXyUg75vcYrV9X47PFkX+/jkUxL9r9/gAAAABJRU5ErkJggg==" alt="kick"></img></span>
                    <p class="pr">
                      Creators across all categories are experiencing fulfillment delays due to global supply chain and shipping issues. Consider these 
                      <a href=""> Helpful tips <span>when planning your project</span></a>
                    </p>
                         
                </div>
            </div>
            <div></div>
            <div class="review">
                <div>
                    <img alt="hreh"></img>
                    <span class="re1">
                        <p>Take a moment to review our rules.</p>
                        <p>Here are five rules every Kickstarter project must follow.</p>
                   </span>
                </div>
                <div>
                    <p class="re">1 <span>Projects must create something to share with others.</span></p>
                </div><hr></hr>
                <div>
                    <p class="re">2 <span>Projects must be honest and clearly presented.</span></p>
                </div><hr></hr>
                <div>
                    <p class="re">3 <span>Projects can't fundraise for charity.</span></p>
                </div><hr></hr>
                <div>
                    <p class="re">4 <span>Projects can't offer equity.</span></p>
                </div><hr></hr>
                <div>
                    <p class="re">5 <span>Projects can't involve prohibited items.</span></p>
                </div><hr></hr>
                <div class="btn">
                    <a href="">Got it</a>
                </div>
                <div class="hre">
                    <a href="">Read More <span>about our rules</span></a>
                </div>
                
            </div>

            <div class="over">
            <p>Project Overview</p>
            </div>
            
            <div class="projectover">
                <div class="po">
                    <a href="">Basics</a>
                    <p>Name of your project,upload an image or vide,and establish your compain details</p>
                </div><hr></hr>
                <div class="po">
                    <a href="">Funding</a>
                    <p>Build out a budget and calculate your financial goals</p>
                </div><hr></hr>
                <div class="po">
                    <a href="">Rewards</a>
                    <p>Set your rewards and shipping costs</p>
                </div><hr></hr>
                <div class="po">
                    <a href="">Story</a>
                    <p>Add a detailed project description and convey your risks and challenges</p>
                </div><hr></hr>
                <div class="po">
                    <a href="">People</a>
                    <p>Edit your kickstarter profile and add collaborators</p>
                </div><hr></hr>
                <div class="po">
                    <a href="">Payment</a>
                    <p>Confirm your identity and link a bank account</p>
                    <p>This may take up to 3 bussiness days to a complete</p>
                </div>
            </div>
            <div class="pro"></div>
                <div class="project-review">
                    <p class="la"><a href="">People</a></p>
                    <p class="al">Edit your kickstarter profile and add collaborators</p>
            </div>
            
            <div class="over">
            <p>Project for lunch</p>
            </div>
            <div class="pro"></div>
                <div class="project-review">
                    <p class="la"><a href="">Promotion</a></p>
                    <p class="al">Generate a project URL and activate your pre-launch page</p>
            </div>

            <div class="over">
            <p>Support</p>
            </div>
            <div class="a1">
                         <div class="sup">
                             <p class="pa">Creator Resources<a href="">-></a></p>
                                <p class="pa1">Learn about everything from shipping to communicating with backers.</p>
                         </div >
                <div class="sup">
                             <p class="pa">Creator Questions<a href="">-></a></p>
                            <p class="pa1">Get more help with any step of the process.</p>
                        </div>
            </div>
            <div class="lh">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAAQEBAwMDD6+vrCwsKzs7M5OTlJSUnc3NyVlZWSkpLk5OSGhoZzc3Pi4uL09PRgYGBAQEBubm7Ozs6Li4uioqLr6+vIyMisrKwbGxtbW1tOTk57e3vX19dUVFQmJiacnJwiIiIyMjKxsbHbysbqAAAE9UlEQVR4nO2d63baOhBGEZhgLikGQgiQpiE57/+MbVbbFJjPxBqNPfI63/7tzJodbF1GsjUY2FONt+VoGOIYjsrtuGohG3OK8THS7ZzjuPAW+Iq71wS/D17vvBVuMi0T/T4op94a9Twa+H3w6C1SQ7ExEgxhk+fT+GwmGMKztwxibSgYwtpbR7IyFQxh5S10zd5YMIS9t9IlC3PBEBbeUhd8a8Hwm7fUOcsWBENYemud8b0Vw+/eWv8oWhEMIZ9+32q0dk0+o7dRS4Yjb7G/PLUkGMKTt9of8HBmXUYBY2QysIG9/XEXGaWC7XEevf4cZDZRxEG3wtw8Ww3of68pRTygQObZKrgDeQ1VPRmaf+VQtZmAvLaqSGh+orndjXlB95ZuRLlDNdYX43zjQcUZbSOPmtONabYKdugn1HbUUxQsttux5gRyelNHQ23NyTBbBQUakuoHzKhdHvnOMMbovkpICYUb26Wr4AfIKGXiugXxfphlqwAOSVOWHWA5xHNweg/ySStXo6W5e6NsFcDqRdo4y/rBTgQNs97S0inQ+qNfcRh1X6nznRmI6baIAac7qUvxFQr6YJLvL6b7WQQnVHk4nOZpnA4ganmKSWxf15pX1stHfqzwnYR6774CRwnt1QQ9QNMb1Ij1lxkwbGOBzA+0NEfDfkHD/kPD/kPD/vP/NGxru4EPqGYLl1h6C1zQaWfbjw81NVs4ve4jh9q1jmo5PWch617Dyys8WMpVxtfF5RXNa0Xv0rDx37aHNHxXx5ILS3ka6vdO0dAHGsZAQx9oGAMNfaBhDDT0gYYx0NAHGsZAQx9oGAMNfaBhDDT0gYYx0PAvD7P7T2Z1e0Gr/fbzou2+bmmhQajuDa+/S4M/LjO+TGwI36JoFKp7Q7FhHy3eyfcW0DsGYgkTbdPv3BBsWwbJy10CYKUdvL4B7ubODcG+VLC5U27PBZtcm4Xq3BC8jSWfsUK+aTqRzxh42QK8vUFDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDGtKQhjSkIQ1pSEMa0pCGNKQhDWlIQxrSkIY0pCENaUhDQ0N5/PO6N4bgwHdwnNRGXLSRF4FDtZYZGA7EmUmv4CJ5SDk6TrxRqO4NxfHc8HOH1x9sg2cSNwrl8GXI6cVDtq45FXt+EajmCPYmoXy+7rn45Ea46vOiW4dqfRmK3y+NgYY+0DAGGvpAwxho6AMNY6ChDzSMgYY+0DAGaRgMM9Uik3pXx3rvieFEHUuWcQM8u6JTCpnUWh1MlnFRKbRjQFEV1u0asZLBHg1z1fEokwJHZTREnD4SQmmYq45SJnVSB5OF6hB2hslq2IGc4Jk1jQBnhoStYbYatiAnsLjRENBshaHvj7iT/X1SF4bCrcyy1QAav3BMiAeamtolh06Yo4TQKlZT0IP4awhRegGGICGt8SvQbZobKTdpzW2aGWAhPIKpd/pf83Zrqa4BqO3KC/2A5jdgnJsZybMduYkiL1K6it+Ao/FyQj+9/8d/3hI3qdkWEUfO96nNdLUCBalMAPuqVKApWRboK1DXZNrvTxL7+gvFHMena0PBwWCBR/WerKwLm+IgW2dSB2uAl2dvqTNWt/bP6XnIZRi+aa8uXYxnx9HB0e0wWp2e4h7An6IRiYFeum+tAAAAAElFTkSuQmCC" alt="kick"></img>
                <a href="/">Delete product</a>
            </div>
            <div class="fot">
            <span>kickstart,PBC 2022
                <a href="/">Trust and safety</a>
                    <a href="/">Terms of Use</a>
                        <a href="/">Privacy Policy</a>
                            <a href="/">Cookie Policy</a>
                            </span>
            </div>
            
            <div>

            </div>

        </div>
    );
}