import React from "react";
import "./Programming.css";
import PythonLogo from "../../assets/images/python.svg";
import HtmlLogo from "../../assets/images/html-logo.png";
import CssLogo from "../../assets/images/css-logo.png";
import JavaScriptLogo from "../../assets/images/javascript-logo.png";
import PostGreLogo from "../../assets/images/postgre-logo.png";
import HaskellLogo from "../../assets/images/haskell-logo.png";

function Programming() {
  return (
    <>
      {/* <nav>
            <div className="scroll-panel">
                <ul>
                    <li>
                        <a href="/programming/#section1">Java</a>
                    </li>
                    <li>
                        Python
                    </li>
                    <li>
                        HTML/CSS/JavaScript
                    </li>
                    <li>
                        PostGreSQL
                    </li>
                    <li>
                        Haskell
                    </li>
                </ul>
            </div>
        </nav> */}

      <div className={"main-content-programming"} id="section1">
        <table>
          <tbody>
            <tr>
              <th>
                <img
                  src="https://www.oracle.com/a/ocom/img/cb71-java-logo.png"
                  alt="Java Logo"
                />
              </th>
            </tr>
            <tr>
              <td>
                <p>
                  Java is the main programming language I have been using at
                  university. I was introduced to it in my first year and have
                  been using it ever since. Many of of the projects I have done
                  have been in Java, and I have been developing my skills of OOP
                  since A-Level. Examples can be found on my GitHub.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src={PythonLogo}
                  alt="Python Logo"
                  style={{ maxWidth: "40%" }}
                />
              </th>
            </tr>
            <tr>
              <td>
                <p>
                  I have experience with Python from my A-Level Computer Science
                  course. Both my NEA and the exam were in Python, and I have
                  used it for a couple of small projects since. I would like to
                  develop my skills in Python, but have taken an interest in
                  Java and web development currently. Although I don't have many
                  online, you can find some examples of my Python work on my GitHub.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src={HtmlLogo}
                  alt="HTML Logo"
                  style={{ maxWidth: "15%" }}
                />
                <img src={CssLogo} alt="CSS Logo" style={{ maxWidth: "15%" }} />
                <img
                  src={JavaScriptLogo}
                  alt="JavaScript Logo"
                  style={{ maxWidth: "15%" }}
                />
              </th>
            </tr>
            <tr>
              <th>HTML/CSS/JavaScript</th>
            </tr>
            <tr>
              <td>
                <p style={{ margin: "10vh" }}>
                  Web development is something that I picked up in my first year
                  of university. I have since done another module in it,
                  teaching me more about building this website. My plans for the
                  future are to develop my skills in designing backends to
                  websites and the interactions of things like APIs, databases,
                  and backend scripts. Also, to get more knowledge of the
                  standards of web development.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src={PostGreLogo}
                  alt="Postgre Logo"
                  style={{ maxWidth: "15%" }}
                />
              </th>
            </tr>
            <tr>
              <th>PostGreSQL</th>
            </tr>
            <tr>
              <td>
                <p>
                  I've recently been introduced to PostGreSQL, for one of my
                  second year modules. It is a new language for me, but I have
                  got experience in MySQL and BigQuery. I also have experience
                  with designing databases from A-Level and assignments for this
                  module. I'm looking forward to developing my skills in this in
                  the future.
                </p>
              </td>
            </tr>
            <tr>
              <th>
                <img
                  src={HaskellLogo}
                  alt="Haskell Logo"
                  style={{ maxWidth: "15%" }}
                />
              </th>
            </tr>
            <tr>
              <th>Haskell</th>
            </tr>
            <tr>
              <td>
                <p>
                  Haskell is another language that I am being introduced to in
                  my second year of university. It is a very different language
                  to the others I have used, but I'm enjoying the challenge of
                  learning it.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Programming;
