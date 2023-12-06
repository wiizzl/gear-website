import '../css/Accueil.css';

import background from '../assets/video/background.mp4';

export function Accueil() {
    return <>
        <section id="accueil">
            <video src={background} autoPlay loop muted/>
        </section>
        <section id="presentation">

        </section>
        <section id="features">

        </section>
    </>
}