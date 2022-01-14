export interface PictureOfTheDayProps {
  date: string;
}

const PictureOfTheDay: React.FC<PictureOfTheDayProps> = ({ date }) => {
  return <div>{date}</div>;
};

export default PictureOfTheDay;
