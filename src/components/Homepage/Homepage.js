import React from "react";
import "./Homepage.css";
import homeImage from "../../assets/images/homePhoto.jpg";

function Homepage() {
  return (
    <>
      <div className={"profile"} style={{ zIndex: "1" }}>
        <div id={"container"}>
          <img id="home_photo" src={homeImage} alt={"Photo of me"}></img>
        </div>
        <div>
          <div className={"main-content"}>
            <h1>Welcome!</h1>
            <p>
              Welcome to my website! Please feel free to look around and find
              out more about me and what I do. As well as being a good showcase
              of me, this website is also a personal project for me to develop
              my abilities in React and web development. If you have any
              questions or comments please do get in touch!
            </p>
          </div>

          <div className={"main-content"}>
            <h2>A bit about me</h2>
            <p>
              As a current student at the university of Kent in Canterbury, I
              have just finished my year in industry at the MSP Wanstor but am
              staying on over my final year, part time.
            </p>
            <h3>Bellringing</h3>
            <p>
              I am a longstanding bell ringer, having started at the age of 4.
              It is a incredible hobby that I have been able to develop to a
              high level, as well as building a great community of friends.
            </p>
            <p>
              I currently hold the position of Steeplekeeper at St Mary le Bow
              in London, and was elected (by vote) into this role in 2023 on
              behalf of the Ancient Society of College Youths. This position I
              take very seriously and am proud to be able to volunteer my time
              to help maintain the bells and tower.
            </p>
            <p>
              As well as this, I have also taken up teaching the art of Ringing
              to a wide range of people, from children to adults. It is a very
              rewarding experience which I hope to be able to continue in the
              future.
            </p>
            <h3>Other Hobbies</h3>

            <table>
              <tr>
                <td>
                  <ul>
                    <li>Programming</li>
                    <li>Tennis</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Hiking</li>
                    <li>DIY</li>
                    
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Golf</li>
                    <li>Cooking</li>
                  </ul>
                </td>
              </tr>
            </table>

          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
