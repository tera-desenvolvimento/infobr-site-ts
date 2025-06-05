import bannerImage from '../img/main-banner.svg'

import '../style/mainBanner.css';

function MainBanner() {
  return (
    <div className="main-banner">
      <img src={bannerImage} className="banner-image" alt="Banner Image"/>
    </div>
  );
}

export default MainBanner;