import { ReactComponent as RocketIcon } from '../media/rocket.svg';
import { ReactComponent as RocketOutline } from '../media/rocketoutline.svg';

export interface LikeBarProps {
  liked: boolean;
  handleClick(): void;
}

const LikeBar: React.FC<LikeBarProps> = ({ liked, handleClick }) => {
  return (
    <div className='like-bar'>
      {liked ? (
        <RocketIcon
          className='like-bar__like-icon--liked'
          onClick={handleClick}
        />
      ) : (
        <RocketOutline className='like-bar__like-icon' onClick={handleClick} />
      )}
    </div>
  );
};

export default LikeBar;
