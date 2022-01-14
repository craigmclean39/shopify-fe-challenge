import { APOD } from '../types/apod';
import LikeBar from './LikeBar';
import { format } from 'date-fns';

export interface PictureOfTheDayProps {
  data: APOD;
}

const PictureOfTheDay: React.FC<PictureOfTheDayProps> = ({ data }) => {
  return (
    <article>
      <header>
        <h2>{data.title}</h2>
        <p>
          <time dateTime={data.date}>
            {format(new Date(data.date), 'MMMM do, yyyy')}
          </time>
        </p>
      </header>

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
