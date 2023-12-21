import '../css/Footer.css';

import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

import separator from '../assets/images/footer.svg';
import logo from '../assets/images/logo-text.svg';
import porte from '../assets/images/porte.webp';

export const Footer = () => {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/');
    }
    return <>
        <div className="footer">
            <img className="separator" src={separator} alt=""/>
            <div className="footer-content">
                <div>
                    <div className="content-infos">
                        <img src={logo} alt=""/>
                        <p>Tryhard est une marque de matériel gaming de haute qualité qui propose des périphériques au design simple et épuré et qui garantit des sensations de frappe uniques. Elle a été développée par CYRILmp4, un créateur de contenu français reconnu pour sa culture et son amour du jeu vidéo.</p>
                        <div>
                            <img src={porte} alt=""/>
                            <p>&copy; {new Date().getFullYear()} La Porte Beta</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content-links">
                        <ul>
                            <li>
                                <Link activeClass="active" to="presentation" spy={true} smooth={true} offset={50} duration={500} onClick={backToHome}>Présentation</Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="features" spy={true} smooth={true} offset={50} duration={500} onClick={backToHome}>Caractéristiques</Link>
                            </li>
                            <li>
                                <NavLink to="faq">FAQ</NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a onClick={() => {
                                    alert("La page des mentions légales n'a pas été reproduite pour le moment...");
                                }}>Mentions légales</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    alert("La page de la politique de confidentialité n'a pas été reproduite pour le moment...");
                                }}>Politique de confidentialité</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    alert("La page des conditions générales de vente n'a pas été reproduite pour le moment...");
                                }}>Conditions générales de vente</a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    alert("Il n'y a aucun cookies sur cette reproduction, pas d'inquiètudes !");
                                }}>Gérer vos cookies</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}