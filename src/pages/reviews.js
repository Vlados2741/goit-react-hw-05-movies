import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewList } from 'components/movies/review-list';
import { Error } from 'components/Error';
import { fetchReviews } from 'components/services/api';

const Reviews = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const reviews = async () => {
      try {
        setLoading(true);
        const review = await fetchReviews(id);
        setState(review.results);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    reviews();
  }, [id]);
  const isState = Boolean(state.length);

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      <h3 className="title">Reviews</h3>
      {isState ? <ReviewList reviewList={state} /> : <p>No reviews</p>}
      {error && <Error />}
    </div>
  );
};
export default Reviews;
