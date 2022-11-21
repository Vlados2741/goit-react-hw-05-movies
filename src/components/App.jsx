import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './styles.css';

export const App = () => {
  const Home = lazy(() => import('../pages/home'));
  const Movie = lazy(() => import('../pages/movies'));
  const MoviePage = lazy(() => import('../pages/movie-page'));
  const Cast = lazy(() => import('../pages/cast'));
  const Reviews = lazy(() => import('../pages/reviews'));
  const NotFound = lazy(() => import('../pages/not-found'));

  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Movie />}></Route>
        <Route path="/movies/:id" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
