import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewList } from 'components/review-list';
import { Error } from 'components/Error';
import { fetchReviews } from 'components/api';

const Reviews = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState('');

  const { id } = useParams();
  useEffect(() => {
    const reviews = async () => {
      try {
        const review = await fetchReviews(id);
        setState(review.results);
      } catch (error) {
        setError(error);
      }
    };
    reviews();
  }, [id]);
  const isState = Boolean(state.length);

  return (
    <div>
      <h3 className="title">Reviews</h3>
      {isState ? <ReviewList reviewList={state} /> : <p>No reviews</p>}
      {error && <Error />}
    </div>
  );
};
export default Reviews;
