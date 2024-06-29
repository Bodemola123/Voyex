import '../routes/root.css';
import { Link } from "react-router-dom";
import search from '../assets/search.png'
import clipboard from '../assets/clipboard.png'
import shopping from '../assets/shopping.png'
import lock from '../assets/lock.png'
import gemini from '../assets/gemini.png'
import gpt from '../assets/GPT.png'
import flag from '../assets/image.png'
import arrowright from '../assets/arrow-right.png'






const root = () => {
  return (
    <div>
      <div className="container">
        <nav className='navbar'>
          <div className="navbar-left">
            <span className="logo">Voyex.</span>
          </div>
          <div className="navbar-center">
        <a href="#" className="nav-link"><i className="fa fa-search"><img src={search} alt="" /></i> Search</a>
        <a href="#" className="nav-link"><i className="fa fa-file"><img src={clipboard} alt="" /></i> Templates</a>
        <a href="#" className="nav-link"><i className="fa fa-shopping-cart"><img src={shopping} alt="" /></i> GalactiMart</a>
        <a href="#" className="nav-link"><i className="fa fa-briefcase"><img src={lock} alt="" /></i> Workspace</a>
        </div>
        <div className="navbar-right">
        <a href="#" className="sign-up">Sign Up</a>
        <a href="#" className="log-in">Log in</a>
      </div>
        </nav>
        <div className="main">
        <img className="gemini" src={gemini} alt="" />
        <img className='gpt' src={gpt} alt="" />
        <img className='flag' src={flag} />
        <h1 className='head'>Voyex.</h1>
        <p>Search for <span>anything</span></p>
        <div className="search">
          <button>
            <Link className='text' to={'/Page2'}>Start Your AI Journey</Link>
            <img src={arrowright} />
          </button>
          </div>
        </div>
          <footer>
          <div className="navbar2">
          <ul className="navmenu2">
            <li><a href="#">Buy Plan</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">About us</a></li>
            <select name="" className='lang'>
              <option value="">English(UK)</option>
              <option value="">Spanish(ESP)</option>
              <option value="">German(GER)</option>
              <option value="">French(FRA)</option>
            </select>
          </ul>
        </div>
          </footer>
      </div>
    </div>
  )
}

export default root