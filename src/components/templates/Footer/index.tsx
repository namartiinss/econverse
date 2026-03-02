import Logotipo from '../../atoms/Logotipo';
import styles from './index.module.scss';
import Instagram from '../../../assets/instagram.svg'
import Facebook from '../../../assets/facebook.svg'
import LinkedIn from '../../../assets/linkedin.svg'
import LinkFooter from '../../atoms/LinkFooter';
import EconLinks from '../../molecules/EconLinks';


function Footer() {
    return (
        <>
            <footer className={styles.containerFooter}>
                <div className={styles.contentFooter}>
                    <div className={styles.econSocials}>
                        <Logotipo />
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                        <div className={styles.iconSocials}>
                            <a
                                href="https://www.instagram.com/econverse.ag?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <img src={Instagram} alt="Logotipo instagram" />
                            </a>
                            <a href="https://www.facebook.com/agenciaeconverse">
                                <img src={Facebook} alt="Logotipo Facebook" />
                            </a>
                            <a href="linkedin.com/company/econverse">
                                <img src={LinkedIn} alt="Logotipo Linkedin" />
                            </a>
                        </div>
                    </div>
                    <hr />
                    <EconLinks />
                </div>
            </footer>
            <div className={styles.allRights}>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            </div>
        </>
    )
}

export default Footer