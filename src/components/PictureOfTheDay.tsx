import { APOD } from '../types/apod';

export interface PictureOfTheDayProps {
  data: APOD;
}

const PictureOfTheDay: React.FC<PictureOfTheDayProps> = ({ data }) => {
  return (
    <article>
      <header>{data.title}</header>
      <img src={data.hdurl} alt='' />
      <p>{data.explanation}</p>
      <footer>{data.copyright}</footer>
    </article>
  );
};

export default PictureOfTheDay;
