import '../css/Accueil.css';

import { useState } from 'react';
import { Link } from 'react-scroll';

import { BsStars } from 'react-icons/bs';
import { FaRegKeyboard } from 'react-icons/fa6';
import { TfiReload } from 'react-icons/tfi';
import { GrValidate } from 'react-icons/gr';
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from 'react-icons/io5';

import background from '../assets/video/background.mp4';

import presentation1 from '../assets/images/presentation/presentation1.webp';
import presentation2 from '../assets/images/presentation/presentation2.webp';
import presentation3 from '../assets/images/presentation/presentation3.webp';
import presentation4 from '../assets/images/presentation/presentation4.webp';

import features1 from '../assets/images/features/selecteur.webp';
import features2 from '../assets/images/features/compact.webp';
import features3 from '../assets/images/features/switch.webp';
import features4 from '../assets/images/features/poids.webp';
import features5 from '../assets/images/features/impression.webp';
import features6 from '../assets/images/features/eclairage.webp';
import features7 from '../assets/images/features/batterie.webp';

import buy1 from '../assets/images/buy/buy1.webp';
import buy2 from '../assets/images/buy/buy2.webp';
import buy3 from '../assets/images/buy/buy3.webp';
import buy4 from '../assets/images/buy/buy4.webp';
import buy5 from '../assets/images/buy/buy5.webp';
import buy6 from '../assets/images/buy/buy6.webp';

export function Accueil() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const presentationimage = [presentation1, presentation2, presentation3, presentation4]
    const buyimage = [buy1, buy2, buy3, buy4, buy5, buy6]
    const icons = [
        <FaRegKeyboard key="keyboard" className="transition"/>,
        <TfiReload key="reload" className="transition"/>,
        <GrValidate key="validate" className="transition"/>,
        <CiDeliveryTruck key="deliveryTruck" className="transition"/>
    ]
    const titles = [
        "Sensations",
        "Personnalisation",
        "Esthétique",
        "Durabilité"
    ]
    const descs = [
        "Bénéficiez d'une expérience de frappe incomparable grâce à notre méthode de montage 'gasket mount' ! En utilisant des joints en caoutchouc entre la plate du clavier et le boîtier pour fixer les interrupteurs mécaniques, le clavier Tryhard permet une frappe plus souple et plus amortie, qui améliorera nettement votre confort et réduira la fatigue de vos doigts, tout en vous garantissant une parfaite homogénéisation du son. L'idéal pour de nombreuses heures de jeu !",
        "Repoussez les limites de la personnalisation grâce à la technologie 'hot swap' ! Changez vos touches et vos interrupteurs mécaniques (switches) en un clin d'œil, selon vos envies et besoins, en utilisant simplement notre extracteur 2-en-1.",
        "Redécouvrez la puissance dans la simplicité ! Notre clavier compact offre une disposition intelligente des touches, maximisant chaque centimètre carré sans sacrifier la fonctionnalité. Son esthétique minimaliste et son rétro-éclairage blanc se fondent harmonieusement dans n'importe quel setup, apportant une touche de modernité à votre espace de jeu.",
        "En quête d'un clavier qui résiste à l'épreuve du temps ? Matériaux de haute qualité, possibilité de remplacement simple et autonome des pièces usées, interrupteurs mécaniques plus robustes... Le clavier Tryhard vous garantit une durée de vie plus longue par rapport aux claviers traditionnels et contribue ainsi à la réduction de l'empreinte écologique grâce à son approche plus durable et écoresponsable de la technologie !"
    ]
    const handleSlide = (direction) => {
        const nextSlide = (currentSlide + direction + 4) % 4
        setCurrentSlide(nextSlide);
    }
    return <>
        <section id="accueil">
            <div>
                <p><span><BsStars/> Succès !</span> Nouvelle production en cours</p>
                <h3>Le compromis ultime entre performance, design et durabilité.</h3>
                <h1>TRYHARD, le clavier <br/>mécanique pour joueurs <br/>exigeants.</h1>
                <Link to="presentation" spy={true} smooth={true} offset={50} duration={500}>En savoir plus &gt;</Link>
            </div>
            <video src={background} autoPlay loop muted/>
        </section>
        <section id="presentation">
            <div>
                <img className="transition" src={presentationimage[currentSlide]} alt=""/>
            </div>
            <div>
                <h2>Présentation</h2>
                <h1>Ce qui fait la force de Tryhard</h1>
                <div>
                    {icons[currentSlide]}
                    <h3 className="transition">{titles[currentSlide]}</h3>
                </div>
                <div>
                    <p className="transition">{descs[currentSlide]}</p>
                </div>
                <div>
                    <IoArrowBackCircleOutline onClick={() => {
                        handleSlide(-1)
                    }}/>
                    <IoArrowForwardCircleOutline onClick={() => {
                        handleSlide(1)
                    }}/>
                </div>
            </div>
        </section>
        <section id="features">
            <div>
                <h2>Caractéristiques techniques</h2>
                <h1>Pensé pour les <span>joueurs</span></h1>
            </div>
            <div>
                <div>
                    <figure>
                        <img src={features1} alt=""/>
                        <figcaption className="fig-title">Sélecteur tri-mode</figcaption>
                        {/* <figcaption className="fig-desc">Dispositif permettant de relier le clavier à l&apos;ordinateur de 3 façons : en filaire via un câble USB-C (fourni), en réseau WiFi (dongle fourni) ou en Bluetooth.</figcaption> */}
                    </figure>
                    <figure>
                        <img src={features2} alt=""/>
                        <figcaption className="fig-title">Compact 65%</figcaption>
                        {/* <figcaption className="fig-desc">Clavier mécanique de taille réduite (68 touches), sans pavé numérique ou tout autre élément superflu, pour offrir une solution épurée, qui va à l&apos;essentiel.</figcaption> */}
                    </figure>
                    <figure>
                        <img src={features3} alt=""/>
                        <figcaption className="fig-title">Switch CIDOO</figcaption>
                        {/* <figcaption className="fig-desc">Switch mécaniques idéaux pour ceux qui apprécient une expérience de frappe lourde.</figcaption> */}
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={features4} alt=""/>
                        <figcaption className="fig-title">Poids</figcaption>
                        {/* <figcaption className="fig-desc">920g (à 10g près). Poids parfait pour une stabilité accrue et une réduction des vibrations indésirables.</figcaption> */}
                    </figure>
                    <figure>
                        <img src={features5} alt=""/>
                        <figcaption className="fig-title">Impression des caractères</figcaption>
                        {/* <figcaption className="fig-desc">L&apos;originalité du clavier se joue dans l&apos;impression des caractères, visibles uniquement sur la face avant (et non la face du dessus comme traditionnellement). Impression faite via sublimation thermique.</figcaption> */}
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={features6} alt=""/>
                        <figcaption className="fig-title">Rétro-éclairage</figcaption>
                        {/* <figcaption className="fig-desc">Rétro-éclairage blanc par défaut, avec possibilité de le personnaliser. Les LED sont positionnées du côté inférieur des interrupteurs mécaniques, pointant vers le bas (le sud par rapport à l&apos;utilisateur), afin de ne créer aucune interférence qu&apos;importe le profil de touches choisi.</figcaption> */}
                    </figure>
                    <figure>
                        <img src={features7} alt=""/>
                        <figcaption className="fig-title">Batterie</figcaption>
                        {/* <figcaption className="fig-desc">Batterie 3000mAh. Mode veille automatique disponible. Jusqu&apos;à 60h d&apos;autonomie LED éteintes, 10h en mode RVB et 5h en mode blanc statique, à pleine intensité.</figcaption> */}
                    </figure>
                </div>
            </div>
        </section>
        <section id="buy">
            <div>
                <img className="transition" src={buyimage[currentSlide]} alt=""/>
            </div>
            <div>
                <h1>Tryhard, le clavier mécanique gasket <br/>ultra-compact</h1>
                <div>
                    <p>Le clavier Tryhard est un clavier mécanique haut de gamme, construit entièrement sur-mesure grâce aux conseils d&apos;un consultant expert en clavier, aux talents d&apos;une équipe d&apos;ingénieurs dédiés et à l&apos;expérience gaming du créateur de contenu CYRILmp4.</p>
                </div>
                <div>
                    <IoArrowBackCircleOutline onClick={() => {
                        handleSlide(-1)
                    }}/>
                    <IoArrowForwardCircleOutline onClick={() => {
                        handleSlide(1)
                    }}/>
                </div>
            </div>
        </section>
        <div className="newsletter">
            <div>
                <h1>Newsletter</h1>
                <p>Si vous ne voulez rien manquer des nouvelles remises en stock et des dernières actualités de Tryhard (produits, collections, etc...), c&apos;est par ici ! Nous n&apos;envoyons que peu de mails, soyez rassurés ;)</p>
            </div>
            <div>
                <div>
                    <label htmlFor="prenom">PRÉNOM</label>
                    <br/>
                    <input type="text" id="prenom" placeholder="Prénom" autoComplete="false"/>
                </div>
                <div>
                    <label htmlFor="email">ADRESSE E-MAIL</label>
                    <br/>
                    <input type="text" id="email" placeholder="Adresse e-mail" autoComplete="false"/>
                </div>
                <div>
                    <input type="checkbox" id="consent"/>
                    <br/>
                    <label htmlFor="consent">J&apos;autorise Tryhard à utiliser mes données conformément à notre politique de confidentialité</label>
                </div>
                <div>
                    <button onClick={() => {
                        alert("Je suis content que cette reproduction vous plaise, mais il n'y a pas de newsletter !");
                    }}>S&apos;inscrire</button>
                </div>
            </div>  
        </div>
    </>
}