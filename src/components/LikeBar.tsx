import { ReactComponent as RocketIcon } from '../media/rocket.svg';
import { ReactComponent as RocketOutline } from '../media/rocketoutline.svg';

export interface LikeBarProps {
  liked: boolean;
}

const LikeBar: React.FC<LikeBarProps> = ({ liked }) => {
  return (
    <div className='like-bar'>
      {liked ? (
        <RocketIcon className='like-bar__like-icon--liked' />
      ) : (
        <RocketOutline className='like-bar__like-icon' />
      )}
    </div>
  );
};

export default LikeBar;
