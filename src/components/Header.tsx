import Spacestagram from '../media/spacestagram.png';
import { ReactComponent as NasaIcon } from '../media/nasa.svg';
import { ReactComponent as ShopifyIcon } from '../media/shopify.svg';

const Header = () => {
  return (
    <header>
      <div className='inner-header'>
        <img src={Spacestagram} alt='' />
        <div className='link-icons'>
          <a href='https://www.nasa.gov' target='_blank' rel='noreferrer'>
            <NasaIcon className='header-icon nasa' />
          </a>
          <a href='https://www.shopify.com' target='_blank' rel='noreferrer'>
            <ShopifyIcon className='header-icon shopify' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
