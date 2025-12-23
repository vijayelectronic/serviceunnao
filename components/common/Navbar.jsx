import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Battery, Settings, Info, PhoneCall } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span className="logo-text">VIJAY</span>
                    <span className="logo-sub">ELECTRONICS</span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                    <div className="emergency-badge">24/7 Emergency</div>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                    <Link to="/contact" className="nav-cta">Contact Now</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''} glass`}>
                <Link to="/">Home</Link>
                <Link to="/services">All Services</Link>
                <Link to="/microtek-inverter-repair-unnao">Microtek Repair</Link>
                <Link to="/luminous-inverter-repair-unnao">Luminous Repair</Link>
                <Link to="/su-kam-inverter-repair-unnao">Su-Kam Repair</Link>
                <Link to="/repair">Specialized Help</Link>
                <Link to="/contact">24/7 Emergency Service</Link>
            </div>
        </nav>
    );
};

export default Navbar;
