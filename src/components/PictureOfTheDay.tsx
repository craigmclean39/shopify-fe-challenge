import { APOD } from '../types/apod';
import LikeBar from './LikeBar';
import { format, parseISO } from 'date-fns';
import useLocalStorage from '../hooks/useLocalStorage';

export interface PictureOfTheDayProps {
  data: APOD;
}

//Date returned is in EST
const formatApodDate = (date: string) => {
  const dateObj = parseISO(date);
  return format(dateObj, 'MMMM do, yyyy');
};

const PictureOfTheDay: React.FC<PictureOfTheDayProps> = ({ data }) => {
  const [liked, setLiked] = useLocalStorage(data.date, false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <article>
      <header>
        <h2>{data.title}</h2>
        <p>
          <time dateTime={data.date}>{formatApodDate(data.date)}</time>
        </p>
      </header>

      <img src={data.hdurl} alt='' />

      <LikeBar liked={liked} handleClick={handleClick} />

      <p>{data.explanation}</p>

      <footer>
        {data.copyright ? '©' : ''}
        <span>{data.copyright ? ` ${data.copyright}` : ''}</span>
      </footer>
    </article>
  );
};

export default PictureOfTheDay;
