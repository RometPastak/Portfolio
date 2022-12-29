import '../css/Contact.css';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { container, item } from '../components/Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faShare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    const { t } = useTranslation();

    return (
        <div className="content">
            <div className="headline">
                <h1>{t('contact')}</h1>
            </div>
            <motion.div className="contactpage" variants={container} initial="hidden" animate="visible">
                <motion.div className="contact_info" variants={item}>
                    <h2>{t('contact_myinfo')}</h2>
                    <h3>{t('contact_contactme')}</h3>
                    <div className="contact_box">
                        <a href="mailto: rometpastak@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" className="box_icon" />
                            <p>rometpastak@gmail.com</p>
                        </a>
                    </div>
                    <div className="contact_box">
                        <a href="tel:+372-53468102">
                            <FontAwesomeIcon icon={faPhone} size="2x" className="box_icon" />
                            <p>+372 53 46 81 02</p>
                        </a>
                    </div>
                    <div className="contact_box">
                        <a href="https://www.linkedin.com/in/romet-pastak-ba857b252/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="box_icon" />
                            <p>Linked In</p>
                        </a>
                    </div>
                    <div className="contact_box">
                        <a href="https://www.facebook.com/romet.pastak/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" className="box_icon" />
                            <p>Facebook</p>
                        </a>
                    </div>
                </motion.div>
                <motion.div className="contact_form" variants={item}>
                    <h2>{t('contact_sendletter')}</h2>
                    <h3>{t('contact_replywithin')}</h3>
                    <div className="inputBox">
                        <input type="text" className="form_input" placeholder=" " id="name" />
                        <label className="form_label" htmlFor="name">{t('contact_name')}</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" className="form_input" placeholder=" " id="email" />
                        <label className="form_label" htmlFor="email">{t('contact_email')}</label>
                    </div>
                    <div className="inputBox">
                        <textarea className="form_input" placeholder=" " id="message"></textarea>
                        <label className="form_label" htmlFor="message">{t('contact_message')}</label>
                    </div>
                    <button>
                        <FontAwesomeIcon icon={faShare} size="1x" fixedWidth /> {t('contact_send')}
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Contact;