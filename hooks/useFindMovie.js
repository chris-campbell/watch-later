const useFindMovie = (movies, id) => {
  const movie = movies.find((m) => m.id === id);

  return movie ? true : false;
};

export default useFindMovie;
