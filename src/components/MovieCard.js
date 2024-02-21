function MovieCard({title, children }) {
  return (
    <article>
        <h2>{title}</h2>
        { children }
    </article>
  );
};

export default MovieCard;