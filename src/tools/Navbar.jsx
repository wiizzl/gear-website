import '../css/Navbar.css';
import 'reactjs-popup/dist/index.css';

import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Popup from 'reactjs-popup';

import { CiShoppingCart } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";

import logo from '../assets/images/logo.svg';

export function Navbar() {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/');
    }
    return <>
        <nav>
            <div className="nav-logo">
                <Link to=""><img src={logo} alt=""/></Link>
            </div>
            <div className="nav-first_links">
                <ul>
                    <li>
                        <ScrollLink activeClass="active" to="presentation" spy={true} smooth={true} offset={50} duration={500} onClick={backToHome}>Présentation</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink activeClass="active" to="features" spy={true} smooth={true} offset={50} duration={500} onClick={backToHome}>Caractéristiques</ScrollLink>
                    </li>
                    <li><NavLink to="faq">FAQ</NavLink></li>
                </ul>
            </div>
            <div className="nav-button">
                <Popup trigger={<button>Commander</button>} modal nested>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>&times;</button>
                            <div className="header">
                                &#10004;Article ajouté à votre panier
                            </div>
                            <div className="content">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta atque, voluptatibus praesentium esse soluta, quo debitis consequuntur in amet 
                                laboriosam fuga. Numquam autem, aperiam cupiditate culpa repudiandae saepe molestias officiis cumque ipsam ullam corrupti vel placeat magni? 
                                Perferendis maiores magnam itaque, consequatur cumque voluptatem, natus, veritatis eligendi quam quae magni?
                            </div>
                            <div className="actions">
                                <div>
                                    <p>TOTAL</p>
                                    <p>149.99€</p>
                                </div>
                                <p>Frais de livraison calculés à la prochaine étape.</p>
                                <div>
                                    <button className="button">Procéder au paiement</button>
                                    <button className="button" onClick={close}>Continuer vos achats</button>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
            <div className="nav-second_links">
                <ul>
                    <li><NavLink to="account"><BsPerson/></NavLink></li>
                    <li><NavLink to="cart"><CiShoppingCart/></NavLink></li>
                </ul>
            </div>
        </nav>
    </>
}