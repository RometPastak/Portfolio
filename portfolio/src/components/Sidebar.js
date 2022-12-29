import '../css/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSun, faMoon, faHouse, faUserTie, faLaptop, faCommentDots, faBars, faXmark, faDisplay, faCode } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isSidebarShown, setIsSidebarShown] = useState(true);
    const [theme, setTheme] = useState(false);
    const [gearSpin, setGearSpin] = useState(false);
    
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("dark-mode")) || true);
    const [currentColor, setCurrentColor] = useState(localStorage.getItem("main-color") || "orange");

    document.documentElement.style.setProperty('--main-color', currentColor);
    document.documentElement.style.setProperty('--secondary-color', darkMode ? "white" : "black");
    document.documentElement.style.setProperty('--background-image', darkMode ? "radial-gradient(circle, #484848, #3a3a3a, #2c2c2c, #1e1e1e, #111111)" : "radial-gradient(circle, #dcdcdc, #bebebe, #a2a2a2, #868686, #6b6b6b)");

    const { t, i18n } = useTranslation();
    
    const changeLang = (newLang) => {
        i18n.changeLanguage(newLang);
        localStorage.setItem("language", newLang);
    }

    const clickedGear = () => {
        setTheme(!theme);
        setGearSpin(true);
    }

    const checkGear = () => {
        if(theme === true) {
            return;
        }

        setGearSpin(false);
    }

    const changeMainColor = (color) => {
        document.documentElement.style.setProperty('--main-color', color);
        localStorage.setItem("main-color", color);
        setCurrentColor(color);
    }

    const changeBackgroundColor = () => {
        if(darkMode === true) {
            document.documentElement.style.setProperty('--background-image', "radial-gradient(circle, #dcdcdc, #bebebe, #a2a2a2, #868686, #6b6b6b);");
            document.documentElement.style.setProperty('--secondary-color', "black");
            localStorage.setItem("dark-mode", "false");
            setDarkMode(false);
        }
        else {
            document.documentElement.style.setProperty('--background-image', "radial-gradient(circle, #484848, #3a3a3a, #2c2c2c, #1e1e1e, #111111);");
            document.documentElement.style.setProperty('--secondary-color', "white");
            localStorage.setItem("dark-mode", "true");
            setDarkMode(true);
        }
    }

    const sidebarRef = useRef();
    const mobilenavRef = useRef();

    useEffect(() => {
        function handleScroll() {
            if(isSidebarShown) {
                sidebarRef.current.style.borderBottomRightRadius = '0';
            }
            else {
                mobilenavRef.current.style.borderBottom = '0';

                if(window.pageYOffset === 0) {
                    sidebarRef.current.style.borderBottomRightRadius = '0';
                }
                else {
                    sidebarRef.current.style.borderBottomRightRadius = '2em';
                }

                if(window.innerWidth >= 481) {
                    setIsSidebarShown(true);
                }
            }
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [isSidebarShown]);

    return (
        <div ref={sidebarRef} className={isSidebarShown ? "Sidebar" : "Sidebar closed"}>
            <div ref={mobilenavRef} className="mobile_navbar" onClick={() => setIsSidebarShown(!isSidebarShown)}>
                {isSidebarShown === true && <FontAwesomeIcon icon={faXmark} size="3x" fixedWidth className='mobile_navbar_icon' />}
                {isSidebarShown === false && <FontAwesomeIcon icon={faBars} size="3x" fixedWidth className='mobile_navbar_icon' />}
            </div>
            <div className="logo">
                <FontAwesomeIcon icon={faDisplay} size="9x" className="outer" />
                <FontAwesomeIcon icon={faCode} size="3x" className="inner" />
                <h2>Romet Pastak</h2>
            </div>
            <ul className={isSidebarShown ? "mylist" : "mylist closed"}>
                <Link to="" style={{ textDecoration: 'none' }}>
                    <li className="list">
                        <FontAwesomeIcon icon={faHouse} size="1x" fixedWidth className="list_icon" />
                        <span>{t('home_page')}</span>
                    </li>
                </Link>
                <Link to="/about-me" style={{ textDecoration: 'none' }}>
                    <li className="list">
                        <FontAwesomeIcon icon={faUserTie} size="1x" fixedWidth className="list_icon" />
                        <span>{t('about_me')}</span>
                    </li>
                </Link>
                <Link to="/portfolio" style={{ textDecoration: 'none' }}>
                    <li className="list">
                        <FontAwesomeIcon icon={faLaptop} size="1x" fixedWidth className="list_icon" />
                        <span>{t('portfolio')}</span>
                    </li>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <li className="list">
                        <FontAwesomeIcon icon={faCommentDots} size="1x" fixedWidth className="list_icon" />
                        <span>{t('contact')}</span>
                    </li>
                </Link>
            </ul>
            <div className={isSidebarShown ? "settings" : "settings closed"}>
                <div className="settings_button" onClick={clickedGear} onMouseOver={() => setGearSpin(true)} onMouseLeave={checkGear}>
                    <FontAwesomeIcon icon={faGear} size="2x" spin={gearSpin} />
                </div>
                <div className="settings_button" onClick={changeBackgroundColor}>
                    {darkMode === false && <FontAwesomeIcon icon={faMoon} size="2x" />}
                    {darkMode === true && <FontAwesomeIcon icon={faSun} size="2x" />}
                </div>
                {theme === true && 
                    <div className="theme">
                        <div onClick={() => changeMainColor("rgb(233, 34, 34)")} className="color red"></div>
                        <div onClick={() => changeMainColor("rgb(41, 111, 202)")} className="color blue"></div>
                        <div onClick={() => changeMainColor("green")} className="color green"></div>
                        <div onClick={() => changeMainColor("rgb(255, 123, 0)")} className="color orange"></div>
                        <div onClick={() => changeMainColor("rgb(255, 112, 136)")} className="color pink"></div>
                        <div onClick={() => changeMainColor("rgb(182, 3, 182)")} className="color purple"></div>
                        <div onClick={() => changeMainColor("rgb(0, 146, 102)")} className="color cyan"></div>
                        <div onClick={() => changeMainColor("brown")} className="color brown"></div>
                    </div>
                }
            </div>
            <div className={isSidebarShown ? "languages" : "languages closed"}>
                <img src="/estonia.png" alt="Eesti keel" onClick={() => changeLang("ee")} />
                <img src="/united-kingdom.png" alt="English" onClick={() => changeLang("en")} />
            </div>
        </div>
    );
}

export default Sidebar;