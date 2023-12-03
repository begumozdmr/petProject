import NotFound from 'components/NotFound';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Faq from 'pages/Faq';
import Home from 'pages/Home';
import Services from 'pages/Services';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/about" element={<About />}>About</Route>
            <Route path="/contact" element={<Contact />}>Contact</Route>
            <Route path="/faq" element={<Faq />}>FAQ</Route>
            <Route path="/services" element={<Services />}>Services</Route>
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFound />}>Not Found</Route>
        </Routes>
    )
}
