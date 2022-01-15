import Spacestagram from '../media/spacestagram.png';

const Header = () => {
  return (
    <header>
      <div className='inner-header'>
        <img src={Spacestagram} alt='' />
      </div>
    </header>
  );
};

export default Header;
