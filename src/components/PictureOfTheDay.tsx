import { APOD } from '../types/apod';
import LikeBar from './LikeBar';

export interface PictureOfTheDayProps {
  data: APOD;
}

const PictureOfTheDay: React.FC<PictureOfTheDayProps> = ({ data }) => {
  return (
    <article>
      <header>{data.title}</header>

      <img src={data.hdurl} alt='' />

      <LikeBar liked={true} />

      <p>{data.explanation}</p>

      <footer>
        {data.copyright ? '©' : ''}
        <span>{data.copyright ? ` ${data.copyright}` : ''}</span>
      </footer>
    </article>
  );
};

export default PictureOfTheDay;
