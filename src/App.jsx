import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Tours from './pages/Tours';
import Pages from './pages/Pages';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import Features from './pages/Features';


const router = createBrowserRouter(
  createRoutesFromElements(
<>
<Route
      path="/"
      element={<Home />}>
    </Route>
    <Route
      path="/"
      element={<Tours />}>
    </Route>
    <Route
      path="/"
      element={<Booking />}>
    </Route>
    <Route
      path="/"
      element={<Pages />}>
    </Route>
    <Route
      path="/"
      element={<Features />}>
    </Route>
    <Route
      path="/"
      element={<Blog />}>
    </Route>
</>
  )
);


const App = () => {
  return (
<RouterProvider router={router} />
  )
}

export default App