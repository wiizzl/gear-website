import '../css/Navbar.css';
import 'reactjs-popup/dist/index.css';

import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Popup from 'reactjs-popup';

import { CiShoppingCart } from 'react-icons/ci';
import { BsPerson } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa6';
import { CiTrash } from "react-icons/ci";

import logowhite from '../assets/images/logo-white.svg';
import logoblack from '../assets/images/logo-black.svg';
import cartpreview from '../assets/images/cart-preview.webp';

export function Navbar({ bgColor, cartPage }) {
    const navigate = useNavigate();
    const textColor = bgColor === "black" ? "white" : "black";
    const backToHome = () => {
        navigate('/');
    }
    const goToCart = () => {
        navigate('/cart');
    }
    return <>
        <nav style={{backgroundColor: bgColor}}>
            <div className="nav-logo">
                <Link to=""><img src={bgColor === "black" ? logowhite : logoblack} alt=""/></Link>
            </div>
            <div className="nav-first_links">
                <ul>
                    <li>
                        <ScrollLink style={{color: textColor}} activeClass="active" to="presentation" spy={true} smooth={true} offset={50} duration={500} onClick={backToHome}>Présentation</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink style={{color: textColor}} activeClass="active" to="features" spy={true} smooth={true} offset={50} duration={500} onClick={backToHome}>Caractéristiques</ScrollLink>
                    </li>
                    <li>
                        <NavLink style={{color: textColor}} to="faq">FAQ</NavLink>
                    </li>
                </ul>
            </div>
            <div className="nav-button">
                <Popup trigger={<button style={{color: bgColor, backgroundColor: textColor, display: cartPage}}>Commander</button>} modal nested>
                    {close => (
                        <div className="button-modal">
                            <div className="modal-header">
                                <div className="header-icons">
                                    <button onClick={close}><IoClose/></button>
                                    <button onClick={close}><FaCheck/></button>
                                </div>
                                <div className="header-title">
                                    <p>Article ajouté à votre panier</p>
                                </div>
                            </div>
                            <div className="modal-content">
                                <div>
                                    <p>Clavier mécanique Tryhard</p>
                                    <button onClick={close}><CiTrash/></button>
                                </div>
                                <div>
                                    <img src={cartpreview} alt=""/>
                                    <p>compteur</p>
                                </div>
                                <div>
                                    <button onClick={() => {
                                        close();
                                        goToCart();
                                    }}>Voir le panier (1)</button>
                                </div>
                            </div>
                            <div className="modal-actions">
                                <div>
                                    <ul>
                                        <li>TOTAL</li>
                                        <li>149.99 €</li>
                                    </ul>
                                </div>
                                <p>Frais de livraison calculés à la prochaine étape.</p>
                                <div>
                                    <button>Procéder au paiement</button>
                                    <button onClick={close}>Continuer votre visite</button>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
            <div className="nav-second_links">
                <ul>
                    <li><NavLink to="account"><BsPerson style={{color: textColor}}/></NavLink></li>
                    <li><NavLink to="cart"><CiShoppingCart style={{color: textColor}}/></NavLink></li>
                </ul>
            </div>
        </nav>
    </>
}