import '../css/Accueil.css';

import { useState } from 'react';

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

import selecteur from '../assets/images/features/selecteur.webp';

export function Accueil() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slide_number = 4
    const images = [presentation1, presentation2, presentation3, presentation4]
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
        const nextSlide = (currentSlide + direction + slide_number) % slide_number
        setCurrentSlide(nextSlide);
    }
    return <>
        <section id="accueil">
            <video src={background} autoPlay loop muted/>
        </section>
        <section id="presentation">
            <div>
                <img className="transition" src={images[currentSlide]} alt=""/>
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
                {/* <img src={selecteur} alt=""/> */}
            </div>
        </section>
        <section>

        </section>
    </>
}