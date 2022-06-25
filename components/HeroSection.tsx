import logo from '../images/WWD-logo.png';
import NFTPreview from '../images/CoverImage.png';

const HeroSection = ({data}) => {
  return (
    <section className="darkBlue">
      <div className="hero content flex flex-space-between flex-mobile-col responsive-2-columns">
        <div>
          <img
            src={logo.src}
            alt="Wander Women DAO Logo"
            className="tablet-desktop margin-bottom"
            width="75"
          />
          <h2>
            {data.aboutBuildathon[0].highlight}
          </h2>
          <a href="" target="_blank" rel="noreferrer">
            <button className="pink margin-top fullWidth-mobile">
              Sign Up
            </button>
          </a>
        </div>
        <div
          className="flex-mobile-order-first padding-h marginCenter"
          style={{ maxWidth: '480px' }}
        >
          <img
            src={NFTPreview.src}
            className="limitWidth"
            alt="Wander Women DAO NFT"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
