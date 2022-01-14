import { format, sub } from 'date-fns';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import PictureOfTheDay from './PictureOfTheDay';
import { APOD } from '../types/apod';

const Feed = () => {
  const [pageLength, setPageLength] = useState(10);
  const [page, setPage] = useState(0);
  const endDate = useRef(format(new Date(), 'yyyy-LL-dd'));
  const startDate = useRef(
    format(sub(new Date(), { days: pageLength }), 'yyyy-LL-dd')
  );
  const [loading, setLoading] = useState(true);
  const [apodData, setApodData] = useState<APOD[]>([]);

  useEffect(() => {
    const fetchAPOD = async () => {
      const data = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: process.env.REACT_APP_NASA_API,
          start_date: startDate.current,
          end_date: endDate.current,
        },
      });

      setApodData(data.data);
      setLoading(false);
      console.log(data);
    };

    fetchAPOD();
  }, []);

  let apodElements = null;
  if (!loading && apodData != null) {
    apodElements = apodData.map((apod) => {
      return <PictureOfTheDay key={apod.date} data={apod} />;
    });
  }

  return <div>{apodElements}</div>;
};

export default Feed;
