import { format, sub, parseISO } from 'date-fns';
import { useEffect, useState, useRef, SyntheticEvent } from 'react';
import axios from 'axios';
import PictureOfTheDay from './PictureOfTheDay';
import { APOD } from '../types/apod';
import validateDate from '../utilities/validateDate';

const Feed = () => {
  const currentDate = useRef(format(new Date(), 'yyyy-LL-dd'));
  const endDate = useRef(format(new Date(), 'yyyy-LL-dd'));
  const startDate = useRef(format(sub(new Date(), { days: 9 }), 'yyyy-LL-dd'));
  const [loading, setLoading] = useState(true);
  const [apodData, setApodData] = useState<APOD[]>([]);
  const dateRef = useRef(null);

  async function fetchAPOD() {
    try {
      const data = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: process.env.REACT_APP_NASA_API,
          start_date: startDate.current,
          end_date: endDate.current,
        },
      });

      setApodData(data.data.reverse());
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAPOD();
  }, []);

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (dateRef.current != null) {
      const input = dateRef.current as HTMLInputElement;

      if (!input.value) return;

      let newEndDate = parseISO(input.value);
      let newStartDate = sub(newEndDate, { days: 9 });

      newStartDate = validateDate(newStartDate);
      newEndDate = validateDate(newEndDate);

      setLoading(true);
      startDate.current = format(newStartDate, 'yyyy-LL-dd');
      endDate.current = format(newEndDate, 'yyyy-LL-dd');

      fetchAPOD();
    }
  };

  let apodElements = null;
  if (!loading && apodData != null) {
    apodElements = apodData.map((apod) => {
      if (apod.media_type === 'image') {
        return <PictureOfTheDay key={apod.date} data={apod} />;
      }
      return null;
    });
  }

  return (
    <main>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <form
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}>
          <label htmlFor='selectedDate'>
            Enter a date:
            <input
              type='date'
              name=''
              id='selectedDate'
              max={currentDate.current}
              min='1995-06-16'
              ref={dateRef}
              required
            />
          </label>
          <br />
          <button>Explore the galaxy!</button>
        </form>
      )}
      {loading ? null : apodElements}
    </main>
  );
};

export default Feed;
