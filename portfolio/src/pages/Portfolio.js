import '../css/Portfolio.css';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { container, item } from '../components/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
    const { t } = useTranslation();

    return (
        <div className="content">
            <div className="headline">
                <h1>{t('portfolio')}</h1>
            </div>
            <motion.div className="portfoliopage" variants={container} initial="hidden" animate="visible">
                <motion.div className="design" variants={item}>
                    <h2>Greenec OÜ</h2>
                    <div className="screen">
                        <img src="/screen.png" className="monitor" alt="" />
                        <img src="/greenec.png" className="website" alt="" />
                    </div>
                    <div className="buttons">
                        <a href="https://github.com/RometPastak/Greenec" target="_blank" rel="noopener noreferrer">
                            <button><FontAwesomeIcon icon={faGithub} size="1x" fixedWidth /> Github</button>
                        </a>
                        <a href="https://greenec.ee/" target="_blank" rel="noopener noreferrer">
                            <button><FontAwesomeIcon icon={faLink} size="1x" fixedWidth /> {t('portfolio_website')}</button>
                        </a>
                    </div>
                </motion.div>
                <motion.div className="design" variants={item}>
                    <h2>{t('portfolio_portfolio')}</h2>
                    <div className="screen">
                        <img src="/screen.png" className="monitor" alt="" />
                        <img src="/portfolio.png" className="website" alt="" />
                    </div>
                    <div className="buttons">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <button><FontAwesomeIcon icon={faGithub} size="1x" fixedWidth /> Github</button>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <button><FontAwesomeIcon icon={faLink} size="1x" fixedWidth /> {t('portfolio_website')}</button>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Portfolio;