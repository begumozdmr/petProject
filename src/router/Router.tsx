import About from 'pages/About';
import Contact from 'pages/Contact';
import Faq from 'pages/Faq';
import Home from 'pages/Home';
import Services from 'pages/Services';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/about" element={<About />}>About</Route>
            <Route path="/contact" element={<Contact />}>Contact</Route>
            <Route path="/faq" element={<Faq />}>FAQ</Route>
            <Route path="/services" element={<Services />}>Services</Route>
        </Routes>
    )
}
