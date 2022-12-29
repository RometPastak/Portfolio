import { useTranslation } from 'react-i18next';
import "../css/AboutMe.css";
import { motion, AnimatePresence } from "framer-motion";
import { container, item } from '../components/Animations';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUserCheck, faHeartPulse, faCircleCheck  } from '@fortawesome/free-solid-svg-icons';

function AboutMe() {
    const { t } = useTranslation();

    const slides = [
        {
            "id": 0,
            "icon": faHeartPulse,
            "headline": t('mainpage_hobbies'),
            "text1": t('aboutme_hobbies1'),
            "text2": t('aboutme_hobbies2')
        },
        {
            "id": 1,
            "icon": faUserCheck,
            "headline": t('mainpage_employee'),
            "text1": t('aboutme_employee1'),
            "text2": t('aboutme_employee2')
        },
        {
            "id": 2,
            "icon": faCode,
            "headline": t('mainpage_whystarted'),
            "text1": t('aboutme_whystarted1'),
            "text2": t('aboutme_whystarted2')
        }
    ];

    const [sliderActive, setSliderActive] = useState(slides[0]);
    
    return (
        <div className="content">
            <div className="headline">
                <h1>{t('about_me')}</h1>
            </div>
            <motion.div className="aboutmepage" variants={container} initial="hidden" animate="visible">
                <motion.div className="slides" variants={item}>
                    <div className="slider">
                        {slides.map(element => 
                            <div key={"headline" + element.id} onClick={() => setSliderActive(element)} className={sliderActive.id === element.id ? "slide active" : "slide"}>
                                <FontAwesomeIcon icon={element.icon} fixedWidth size="3x" />
                                <h2>{element.headline}</h2>
                            </div>
                        )}
                    </div>
                    <div className="information">
                        <AnimatePresence>
                            <motion.div className="information_slide" initial={{ x: '-100%' }} animate={{ x: 0}} exit={{ x: '100%' }} transition={{ duration: 0.7 }} key={"information" + sliderActive.id}>
                                <p>{sliderActive.text1}</p>
                                <p>{sliderActive.text2}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
                <motion.div className="skills" variants={item}>
                    <h2>{t('aboutme_myskills')}</h2>
                    <div className="box">
                        <h3>Front-End</h3>
                        <div className="element">
                            <FontAwesomeIcon icon={faCircleCheck} fixedWidth size="2x" />
                            <div>
                                <p className="skill">HTML</p>
                                <p className="desc">{t('aboutme_advanced')}</p>
                            </div>
                        </div>
                        <div className="element">
                            <FontAwesomeIcon icon={faCircleCheck} fixedWidth size="2x" />
                            <div>
                                <p className="skill">CSS</p>
                                <p className="desc">{t('aboutme_advanced')}</p>
                            </div>
                        </div>
                        <div className="element">
                            <FontAwesomeIcon icon={faCircleCheck} fixedWidth size="2x" />
                            <div>
                                <p className="skill">JavaScript</p>
                                <p className="desc">{t('aboutme_intermediate')}</p>
                            </div>
                        </div>
                        <div className="element">
                            <FontAwesomeIcon icon={faCircleCheck} fixedWidth size="2x" />
                            <div>
                                <p className="skill">React</p>
                                <p className="desc">{t('aboutme_intermediate')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h3>Back-End</h3>
                        <div className="element">
                            <FontAwesomeIcon icon={faCircleCheck} fixedWidth size="2x" />
                            <div>
                                <p className="skill">PHP</p>
                                <p className="desc">{t('aboutme_basic')}</p>
                            </div>
                        </div>
                        <div className="element">
                            <FontAwesomeIcon icon={faCircleCheck} fixedWidth size="2x" />
                            <div>
                                <p className="skill">MySQL</p>
                                <p className="desc">{t('aboutme_basic')}</p>
                            </div>
                        </div>
                        <div className="element">
                            <FontAwesomeIcon icon={faCircleCheck} fixedWidth size="2x" />
                            <div>
                                <p className="skill">Python</p>
                                <p className="desc">{t('aboutme_intermediate')}</p>
                            </div>
                        </div>
                        <div className="element">
                            <FontAwesomeIcon icon={faCircleCheck} fixedWidth size="2x" />
                            <div>
                                <p className="skill">Firebase</p>
                                <p className="desc">{t('aboutme_intermediate')}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default AboutMe;