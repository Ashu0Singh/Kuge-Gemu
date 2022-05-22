import React from 'react';
import './Card.css';
import KugeLogo from '../../images/NavigationBar/KugeGemuLogo.png'
import Bojutsu from '../../images/Clan/Bojutsu.jpeg';
import Boju from '../../images/Clan/Boju.jpeg';
import Kenjutsu from '../../images/Clan/Kenjutsu.png';
import Kenj from '../../images/Clan/Kenj.jpeg';
import Kyujutsu from '../../images/Clan/Kyujutsu.png';
import Kyuj from '../../images/Clan/Kyuj.jpeg';
import Sojutsu from '../../images/Clan/Sojutsu.png';
import Soju from '../../images/Clan/Soju.jpeg';


export default function Card(){
    return(
        <div className="card">
            <div className="card-top">
                <div className="card-top-transbox_top">
                    <img src={KugeLogo} alt="Kuge_Logo"/>
                    <h1>Kuge Gemu Clan</h1>
                    <p>The Kuge (公家) was a Japanese aristocratic className that dominated the Japanese Imperial Court in Kyoto.</p>
                </div>
            </div>
            <div className="clan_flexa">
                <div className="transbox_lft">
                    <img src={Kenj} alt="Kenjutsu" id="lt"/>
                    <div className="contl">
                        <img src={Kenjutsu} alt="Kenjutsu_logo" className="iml"/>
                        <div className="textsty">
                            <h2>Kenjutsu 剣術</h2>
                            <h4>Art of Sword</h4>
                            <p>refers to the Japanese warrior arts which were created and developed during feudal Japan.</p>
                        </div>
                    </div>
                </div>
                <div className="transbox_rgt">
                    <div className="contl">
                        <div className="textsty">
                            <h2>Bojutsu 棒術</h2>
                            <h4>Art of Staff</h4>
                            <p>is the martial art of stick fighting using a bō, which is the Japanese word for staff.</p>
                        </div>
                        <img src={Bojutsu} alt="Bojutsu_logo" className="imr"/>
                    </div>
                    <img src={Boju} alt="Bojutsu" id="rt"/>
                </div>
            </div>
            <div className="clan_flexb">
                <div className="transbox_lft">
                    <img src={Kyuj} alt="Kyujutsu"  id="lb"/>
                    <div className="contl">
                        <img src={Kyujutsu} alt="Kyujutsu_logo" className="iml"/>
                        <div className="textsty">
                            <h2>Kyujutsu 弓術</h2>
                            <h4>Art of Archery</h4>
                            <p>is the traditional Japanese martial art of wielding a bow (yumi) as practiced by the samurai className of feudal Japan.</p>
                        </div>
                    </div>
                </div>
                <div className="transbox_rgt">
                    <div className="contl">
                        <div className="textsty">
                            <h2>Sojutsu 槍術</h2>
                            <h4>Art of Spear</h4>
                            <p>is the Japanese martial art of fighting with a Japanese spear (槍, yari).</p>
                        </div>
                        <img src={Sojutsu} alt="Sojutsu_logo" className="imr" id="soim"/>
                    </div>
                    <img src={Soju} alt="Sojutsu" id="rb"/>
                </div>
            </div>
        </div>
    );
}