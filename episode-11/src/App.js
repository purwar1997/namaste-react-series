import React, { lazy, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Here, import is an statement - static imports
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import Search from './components/Search';
import Error from './components/Error';
import NotFound from './components/NotFound';
import Restaurant from './components/Restaurant';
import Shimmer from './components/Shimmer';

/**
 * Code splitting
 * Chunking
 * Lazy loading
 * On-demand loading
 * Dynamic bundling
 * Dynamic imports
 */

// Here, import is a function - dynamic imports
const About = lazy(() => import('./components/About'));
const Grocery = lazy(() => import('./components/Grocery'));
const Instamart = lazy(() => import('./components/Instamart'));

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route
        path='about'
        element={
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        }
      />
      <Route path='search' element={<Search />} />
      <Route path='restaurants/:restaurantId' element={<Restaurant />} />
      <Route
        path='grocery'
        element={
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        }
      />
      <Route
        path='instamart'
        element={
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
