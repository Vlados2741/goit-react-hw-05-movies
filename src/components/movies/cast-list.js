export const CastList = ({ cast }) => {
  const imageURL = 'https://image.tmdb.org/t/p/w300';
  const actors = cast.map(({ cast_id, name, profile_path }) => (
    <li className="actor" key={cast_id}>
      <img
        src={
          profile_path
            ? `${imageURL}${profile_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
        }
        alt={name}
        width="150px"
        height="225px"
      />
      <p>{name}</p>
    </li>
  ));
  return (
    <div>
      <ul className="actors-list">{actors}</ul>
    </div>
  );
};
