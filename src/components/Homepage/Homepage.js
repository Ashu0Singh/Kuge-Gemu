import './Homepage.css'
import NavBar from '../Navigation/NavBar'
import Chess from '../../images/Homepage/chessBois.svg'
import Controller from '../../images/Homepage/Controller.png'
import Youtube from '../../images/Homepage/youtube.png'
import Twitter from '../../images/Homepage/twitter.png'
import Discord from '../../images/Homepage/discord.png'
import Instagram from '../../images/Homepage/instagram.png'
import LinkedIn from '../../images/Homepage/linkedin.png'


export default function Homepage(){
    return (
        <div className='homepageContainer'>
            <NavBar />
            <div className='homepage'>
                <img className='homepage-chessBois' src={Chess} alt='Chess With The Bois'/>
                <div className='homepage-heroText'>
                    <div className='homepage-heroText-small'>ESPORTS CLUB</div>
                    <div className='homepage-heroText-big'>Watch, Analyze, Seek and Destroy</div>
                </div>
                
                <div className='homepage-desc'>
                    <img className='homepage-desc-controller' src={Controller} alt='Controller'/>
                    <div className='homepage-desc-textArea'>
                        <p className='homepage-desc-textArea-text'>
                            The kuge (公家) was a Japanese aristocratic 
                            class that dominated the Japanese Imperial 
                            Court in Kyoto. The kuge were important 
                            from the establishment of Kyoto as the capital 
                            during the Heian period in the late 8th 
                            century until the rise of the Kamakura 
                            shogunate in the 12th century, at which point 
                            it was eclipsed by the bushi. 
                        </p>
                        <div className='homepage-desc-textArea-socials'>
                            <a href='https://www.youtube.com/results?search_query=how+to+redirect+someone+to+another+page+in+react'>
                                <img className='social' src={Discord} alt='Discord'/>
                            </a>
                            
                            <a href='https://www.youtube.com/results?search_query=how+to+redirect+someone+to+another+page+in+react'>
                                <img className='social' src={Twitter} alt='Twitter'/>
                            </a>

                            <a href='https://www.youtube.com/results?search_query=how+to+redirect+someone+to+another+page+in+react'>
                                <img className='social' src={Instagram} alt='Instagram'/>
                            </a>

                            <a href='https://www.youtube.com/results?search_query=how+to+redirect+someone+to+another+page+in+react'>
                                <img className='social' src={LinkedIn} alt='LinkedIn'/>
                            </a>

                            <a href='https://www.youtube.com/results?search_query=how+to+redirect+someone+to+another+page+in+react'>
                                <img className='social' src={Youtube} alt='Youtube'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}