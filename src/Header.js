import './PageStyle.css';
import LinkedinLogo from './linkedin_logo.webp';
import GitHubLogo from './github_logo.svg';
import PfP from './id_photo.jpg';
import FacebookLogo from './Facebook_logo.svg';

function Header(){
    return(
        <div className="Header">
            <h1>Andrew Meyer</h1>
            <span className="center" style={{textAlign: "center"}}>
                <a href="https://github.com/andrew03meyer"><img className="logo" src={GitHubLogo} alt="github"></img></a>
                <a href="https://www.linkedin.com/in/andrew-meyer-200103266/"><img className="logo" src={LinkedinLogo} alt="linkedin"></img></a>
                <a href="https://www.facebook.com/andrew03meyer/"><img className="logo" src={FacebookLogo} alt="Facebook"></img></a>
                </span>

            <img className="center" id="id_photo" src={PfP} alt="ID Photo"></img>
        </div>
    );
}

export default Header;