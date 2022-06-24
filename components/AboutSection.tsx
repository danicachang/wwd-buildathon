import outdoors from '../images/Outdoors.png'

const AboutSection = () => {
    return (
        <section className='blue'>
            <div className='content'>
                <h1 className='allcaps center'>Calling all Female Nomads, Expats, Remote Workers, and Wanderers</h1>
                <div className='flex flex-mobile-col'>
                    <div className='mintingImage'>
                        <img src={outdoors.src} alt='Outdoors Background' className='fullWidth' />
                    </div>
                    <div className='padding-h larger'>
                        
                        <h2>Why are we running a Buildathon?</h2>
                        <p>As a community, we want to focus on building products and services to help women globally achieve financial, location, and creative independence, we're hoping to <strong>kickstart the entrepreneurial community spirit</strong> we aim to build within our community.</p>
                        
                        <h2>Who is the Buildathon for?</h2>
                        <p>Starters, Creators, Entrepreneurs, Builders, and Travelers</p>
                        <p>(All teams must have at least one women teammate)</p>
                        
                        <h2>When is the Buildathon happening?</h2>
                        <p>The Buildathon is a three day online event happening from <strong>19 - 21 August </strong>happening on Discord and Zoom.</p>
                        
                        <h2>What will the Buildathon cover?</h2>
                        <p>During these three days, attendees will:</p>
                        <ul>
                            <li>Learn new business acumen from prominent speakers that have build their own companies</li>
                            <li>Make new connections</li>
                            <li>Pitch their projects to the communities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        )
}

export default AboutSection;
