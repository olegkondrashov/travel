import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.scss';
import App from './App';
import Destinations from './pages/destinations/destinations.component';
import Tours from './pages/tours/tours.component';
import About from './pages/about/about.component';
import Blog from './pages/blog/blog.component';
import Contact from './pages/contact/contact.component';
import { PaginationProvider } from './contexts/pagination.context';
import { CardProvider } from './contexts/card.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaginationProvider>
        <CardProvider>
            <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route  path="destinations" element={<Destinations />} />
                <Route  path="tourpackages" element={<Tours />} />
                <Route  path="about" element={<About />} />
                <Route  path="blog" element={<Blog />} />
                <Route  path="contact" element={<Contact />} />
            </Routes>
            </BrowserRouter>
        </CardProvider>
    </PaginationProvider>
  </React.StrictMode>
);