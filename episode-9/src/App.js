import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Here, import is an statement
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Error from './components/Error';
import NotFound from './components/NotFound';
import Restaurant from './components/Restaurant';
import Shimmer from './components/Shimmer';

// Here, import is a function
const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
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
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
