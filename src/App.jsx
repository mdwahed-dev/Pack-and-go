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
      path="/home"
      element={<Home />}>
    </Route>
    <Route
      path="/tours"
      element={<Tours />}>
    </Route>
    <Route
      path="/booking"
      element={<Booking />}>
    </Route>
    <Route
      path="/pages"
      element={<Pages />}>
    </Route>
    <Route
      path="/features"
      element={<Features />}>
    </Route>
    <Route
      path="/blog"
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