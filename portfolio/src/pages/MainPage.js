import '../css/MainPage.css';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { container, item } from '../components/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function MainPage() {
    const { t } = useTranslation();

    const handleClick = () => {
        const fileUrl = "/cv_rometpastak_" + localStorage.getItem("language") + ".pdf";
        
        fetch(fileUrl)
          .then(response => response.blob())
          .then(blob => {
            const element = document.createElement('a');
            element.href = URL.createObjectURL(blob);
            element.download = 'cv_rometpastak.pdf';
            document.body.appendChild(element);
            element.click();
        });
    }

    return (
        <div className="content">
            <div className="headline">
                <h1>{t('home_page')}</h1>
            </div>
            <motion.div className="mainpage" variants={container} initial="hidden" animate="visible">
                <motion.div className="welcome_message" variants={item}>
                    <h3>{t('mainpage_hello')}</h3>
                    <h2>Romet Pastak</h2>
                    <h4>Front-End {t('mainpage_developer')}</h4>
                    <img src="/rometpastak.jpg" alt="Romet Pastak" />
                    <br />
                    <button onClick={handleClick}>
                        <FontAwesomeIcon icon={faDownload} size="1x" fixedWidth /> {t('mainpage_mycv')}
                    </button>
                </motion.div>
                <motion.div className="aboutme_message" variants={item}>
                    <h2>{t('mainpage_myinfo')}</h2>
                    <div className="mainpage_list">
                        <div className="div1">{t('mainpage_hobbies')}</div>
                        <div className="div2">{t('mainpage_employee')}</div>
                        <div className="div3">{t('mainpage_whystarted')}</div>
                        <div className="div4">{t('mainpage_skills')}</div>
                        <div className="div5">{t('mainpage_projects')}</div>
                        <div className="div6">{t('mainpage_contactme')}</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default MainPage;