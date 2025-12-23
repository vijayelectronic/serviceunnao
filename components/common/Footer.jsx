import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer glass-top">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <span className="logo-text">VIJAY</span>
                        <span className="logo-sub">ELECTRONICS</span>
                    </Link>
                    <p className="footer-desc">
                        Your trusted partner for power backup solutions in Unnao since 1995. Authorized sales and service center for multi-brand inverters and stabilizers.
                    </p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Brands We Repair</h4>
                    <ul>
                        <li><Link to="/microtek-inverter-repair-unnao">Microtek Inverter</Link></li>
                        <li><Link to="/luminous-inverter-repair-unnao">Luminous Inverter</Link></li>
                        <li><Link to="/su-kam-inverter-repair-unnao">Su-Kam Inverter</Link></li>
                        <li><Link to="/exide-inverter-repair-unnao">Exide Battery & UPS</Link></li>
                        <li><Link to="/amaron-inverter-repair-unnao">Amaron Quanta Fix</Link></li>
                        <li><Link to="/apc-delta-ups-repair-unnao">APC & Delta UPS</Link></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Specialized Service</h4>
                    <ul>
                        <li><Link to="/servo-stabilizer-repair-unnao">Servo Stabilizer</Link></li>
                        <li><Link to="/voltage-stabilizer-repair-unnao">Voltage Stabilizer</Link></li>
                        <li><Link to="/inverter-battery-replacement-unnao">Battery Replacement</Link></li>
                        <li><Link to="/services">All Services</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Unnao</h4>
                    <ul>
                        <li><MapPin size={18} className="text-primary" /> 9 Purani Bazar, Unnao</li>
                        <li><Phone size={18} className="text-primary" /> 8090090051</li>
                        <li><Mail size={18} className="text-primary" /> service@vijayelectronics.com</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2025 Vijay Electronics Unnao. All Rights Reserved. Designed for Excellence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
