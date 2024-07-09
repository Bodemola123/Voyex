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
import { useTranslation } from 'react-i18next';
import { useState } from 'react';







const root = () => {
  const {t, i18n} = useTranslation()
  const [language, setLanguage] = useState(i18n.language)



  const handleChangeLang =(lang) =>{
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  return (
    <div>
      <header>
        <nav className='navbar'>
          <div className="navbar-left">
            <span className="logo">{t('Voyex.')}</span>
          </div>
          <div className="navbar-center">
        <a href="#" className="nav-link"><i className="fa fa-search"><img src={search} alt="" /></i>{t('Search')} </a>
        <a href="#" className="nav-link"><i className="fa fa-file"><img src={clipboard} alt="" /></i>{t('Templates')} </a>
        <a href="#" className="nav-link"><i className="fa fa-shopping-cart"><img src={shopping} alt="" /></i> {t('GalactiMart')}</a>
        <a href="#" className="nav-link"><i className="fa fa-briefcase"><img src={lock} alt="" /></i>{t('Workspace')}</a>
        </div>
        <div className="navbar-right">
        <a href="#" className="sign-up">{t("Sign Up")}</a>
        <a href="#" className="log-in">{t("Log in")}</a>
      </div>
        </nav>
      </header>
      <div className="container">
        <div className="main">
        <img className="gemini" src={gemini} alt="" />
        <img className='gpt' src={gpt} alt="" />
        <img className='flag' src={flag} />
        <h1 className='head'>{t('Voyex.')}</h1>
        <p>{t('Search for')}<span>{t('anything')}</span></p>
        <div className="search">
          <button>
            <Link className='text' to={'/Page2'}>{t('Start Your AI Journey')}</Link>
            <img src={arrowright} />
          </button>
          </div>
        </div>
          <footer>
          <div className="navbar2">
          <ul className="navmenu2">
            <li><a href="#">{t('Buy Plan')}</a></li>
            <li><a href="#">{t('Advertise')}</a></li>
            <li><a href="#">{t('Resources')}</a></li>
            <li><a href="#">{t('About us')}</a></li>
            <select name="" className='lang'>
              <option value="" ><button onClick={() => handleChangeLang('en')}>English(UK)</button></option>
              <option value="" ><button onClick={() => handleChangeLang('es')}>Spanish(ESP)</button></option>
              <option value="" ><button onClick={() => handleChangeLang('de')}>German(GER)</button></option>
              <option value="" ><button onClick={() => handleChangeLang('fr')}>French(FRA)</button></option>
            </select>
          </ul>
        </div>
          </footer>
      </div>
    </div>
  )
}

export default root