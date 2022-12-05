export const ReviewList = ({ reviewList }) => {
  const review = reviewList.map(({ id, content }) => (
    <li key={id}>{content}</li>
  ));
  return (
    <div>
      <ul>{review}</ul>
    </div>
  );
};
