const { data , error, isLoading, isError } = useQuery(
  ["images", { id: movie.id }],
  getMovieImages
);

if (isLoading) {
  return <Spinner />;
}

if (isError) {
  return <h1>{error.message}</h1>;
}
const images = data.posters 
