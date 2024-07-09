import '../routes/Page2.css'
import { Link } from "react-router-dom";
import search from '../assets/search.png'
import clipboard from '../assets/clipboard.png'
import shopping from '../assets/shopping.png'
import lock from '../assets/lock.png'
import gemini from '../assets/gemini.png'
import gpt from '../assets/GPT.png'
import flag from '../assets/image.png'
import search2 from '../assets/search2.png'
import fire from '../assets/Fire.png'
import line1 from '../assets/Line1.png'
import line2 from '../assets/Line2.png'
import rocket1 from '../assets/Rocket1.png'
import rocket2 from '../assets/Rocket2.png'
import { useTranslation } from 'react-i18next';



const Page2 = () => {
  const {t, i18n} = useTranslation("global")

  const changeLang =(lang) =>{
    i18n.changeLanguage(lang)
  }
  return (
    <div>
       <div className="container">
        <nav className='navbar'>
          <div className="navbar-left">
            <span className="logo"><Link to={"/"}>{t('Voyex.')}</Link></span>
          </div>
          <div className="navbar-center">
        <a href="#" className="nav-link"><i className="fa fa-search"><img src={search} alt="" /></i> {t('Search')}</a>
        <a href="#" className="nav-link"><i className="fa fa-file"><img src={clipboard} alt="" /></i> {t('Templates')}</a>
        <a href="#" className="nav-link"><i className="fa fa-shopping-cart"><img src={shopping} alt="" /></i> {t('GalactiMart')}</a>
        <a href="#" className="nav-link"><i className="fa fa-briefcase"><img src={lock} alt="" /></i> {t('Workspace')}</a>
        </div>
        <div className="navbar-right">
        <a href="#" className="sign-up">{t('Sign Up')}</a>
        <a href="#" className="log-in">{t('Log in')}</a>
      </div>
        </nav>
        <img src={line1} alt="" className="line1" />
        <img src={line2} alt="" className="line2" />
        <img src={rocket1} alt="" className="rocket1" />
        <img src={rocket2} alt="" className="rocket2" />
        <img className="gemini" src={gemini} alt="" />
        <img className='gpt' src={gpt} alt="" />
        <img className='flag' src={flag} />
        <h1>{t("Voyex.")}</h1>
        <p>{t("Search for")} <span>{t("anything")}</span></p>
        <div className="search-bar">
          <i className='search-icon'><img src={search2} alt="" /></i>
          <input type="text" value= {t('Start your search voyeux')} className='search-input'/>
        </div>
        <div className="buttons">
        <div className="button-y">
          <button className='button-y1'>
            <i><img src={fire} alt="" className='fire' /></i>{t("Surprise ME!")}
          </button>
          <button className='button-y2'>
          <i><img src={fire} alt="" className='fire'/></i>{t("Trending Searches")}
          </button>
        </div>
        <button className='button-x'>
        <i><img src={fire} alt="" className='fire'/></i>{t("Recently Added")}
        </button>
        </div>
          <div className="navbar2">
          <ul className="navmenu2">
          <li><a href="#">{t('Buy Plan')}</a></li>
            <li><a href="#">{t('Advertise')}</a></li>
            <li><a href="#">{t('Resources')}</a></li>
            <li><a href="#">{t('About us')}</a></li>
            <select name="" className='lang'>
            <option value="" onClick={() => changeLanguage('en')}>English(UK)</option>
              <option value="" onClick={() => changeLanguage('es')}>Spanish(ESP)</option>
              <option value="" onClick={() => changeLanguage('de')}>German(GER)</option>
              <option value="" onClick={() => changeLanguage('fr')}>French(FRA)</option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page2