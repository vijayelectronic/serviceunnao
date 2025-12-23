import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ImageSlider from '../components/home/ImageSlider';
import { Battery, Zap, ShieldCheck, Clock, Award, MapPin } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Helmet>
                <title>Inverter & Stabilizer Repair Unnao | Vijay Electronics</title>
                <meta name="description" content="Official Vijay Electronics - Best Inverter & Stabilizer Repair in Unnao. Fast 24/7 service for Microtek, Luminous, Exide. ₹500 - ₹2500 only. Call 8090090051!" />
            </Helmet>

            <ImageSlider />

            {/* Hero Section / Primary H1 */}
            <section className="hero-seo-header">
                <div className="container">
                    <h1 className="text-gradient">Professional Inverter & Stabilizer Repair Services in Unnao</h1>
                    <p className="lead-text">
                        Vijay Electronics provides professional <b>inverter repair Unnao</b> and expert stabilizer
                        servicing for your home and business. If you are looking for <b>inverter repair near Unnao</b>,
                        we offer fast, same-day support.
                    </p>
                </div>
            </section>

            {/* Featured Services Section */}
            <section className="featured-services">
                <div className="container">
                    <h2 className="section-title text-gradient">Expert Power Solutions</h2>
                    <p className="section-subtitle">Since 1995, we are Unnao's leading specialists for <b>stabilizer repair Unnao</b> and power systems.</p>

                    <div className="services-grid">
                        <div className="glass-card service-item">
                            <div className="icon-box"><Zap size={32} /></div>
                            <h3>Inverter Repair</h3>
                            <p>Specialized repair for Luminous, Microtek, and Exide systems. <b>Emergency inverter repair Unnao</b> is available 24/7.</p>
                        </div>

                        <div className="glass-card service-item">
                            <div className="icon-box"><Battery size={32} /></div>
                            <h3>Battery Service</h3>
                            <p>Professional <b>inverter battery replacement Unnao</b> and maintenance check-ups at affordable rates.</p>
                        </div>

                        <div className="glass-card service-item">
                            <div className="icon-box"><ShieldCheck size={32} /></div>
                            <h3>Stabilizer Repair</h3>
                            <p>Expert fixing for <b>servo stabilizer repair Unnao</b> and voltage maintenance of all major brands.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Urgent CTA Section */}
            <section className="emergency-cta glass">
                <div className="container">
                    <h3>Need 24/7 Emergency Inverter Repair Unnao?</h3>
                    <p>Our technicians are ready to fix your power issues anytime, anywhere in Unnao city area.</p>
                    <a href="tel:8090090051" className="btn-main silver-glow">Call Now: 8090090051</a>
                </div>
            </section>

            {/* Brands Section */}
            <section className="brands-grid-section glass">
                <div className="container">
                    <h2 className="section-title text-gradient">Brands We Repair</h2>
                    <p className="section-subtitle">Expert servicing for India's most trusted power brands.</p>

                    <div className="brands-container">
                        <Link to="/microtek-inverter-repair-unnao" className="brand-card glass">
                            <div className="brand-logo-mock">MICROTEK</div>
                            <p>Authorized Style Repair</p>
                        </Link>
                        <Link to="/luminous-inverter-repair-unnao" className="brand-card glass">
                            <div className="brand-logo-mock">LUMINOUS</div>
                            <p>Premium Service</p>
                        </Link>
                        <Link to="/su-kam-inverter-repair-unnao" className="brand-card glass">
                            <div className="brand-logo-mock">SU-KAM</div>
                            <p>Expert Solutions</p>
                        </Link>
                        <Link to="/exide-inverter-repair-unnao" className="brand-card glass">
                            <div className="brand-logo-mock">EXIDE</div>
                            <p>Inverter & Battery Fix</p>
                        </Link>
                        <Link to="/amaron-inverter-repair-unnao" className="brand-card glass">
                            <div className="brand-logo-mock" style={{ color: '#00ff00' }}>AMARON</div>
                            <p>Quanta & Home UPS</p>
                        </Link>
                        <Link to="/apc-delta-ups-repair-unnao" className="brand-card glass">
                            <div className="brand-logo-mock">APC & DELTA</div>
                            <p>Industrial UPS Help</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="trust-section">
                <div className="container trust-grid">
                    <div className="trust-item">
                        <Clock size={40} className="text-gradient" />
                        <h4>Emergency Service</h4>
                        <p><b>24/7 inverter repair Unnao</b> for total peace of mind.</p>
                    </div>
                    <div className="trust-item">
                        <Award size={40} className="text-gradient" />
                        <h4>Authorized Partner</h4>
                        <p>Exide & Luminous certified expert service.</p>
                    </div>
                    <div className="trust-item">
                        <MapPin size={40} className="text-gradient" />
                        <h4>Local Shop</h4>
                        <p>Located at 9 Purani Bazar, Unnao.</p>
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="seo-content">
                <div className="container">
                    <h3>Vijay Electronics: Trusted Inverter Repair in Unnao</h3>
                    <p>
                        Vijay Electronics provides professional <b>inverter repair and stabilizer
                            servicing in Unnao</b>, Uttar Pradesh. With over 30 years of excellence, our expert
                        technicians offer <b>24/7 emergency repairs</b> for all major brands including
                        <b>Microtek, Luminous, Su Kam, Exide, and Amaron</b>. We understand that periodic
                        power cuts can be difficult, which is why we provide affordable repair services
                        ranging from <b>₹500-₹2,500</b>, ensuring fast same-day service and reliable
                        on-site home repairs.
                    </p>
                    <p>
                        Whether you are dealing with a faulty PCB, battery charging issues, or need
                        a complete <b>inverter battery replacement in Unnao</b>, we are your trusted
                        one-stop solution. Our specialization also extends to <b>servo stabilizer repair</b>
                        and <b>voltage stabilizer maintenance</b> for both residential Air Conditioners
                        and heavy-duty industrial units. If you are searching for the best
                        <b>inverter repair near Unnao</b>, look no further than Vijay Electronics at
                        9 Purani Bazar. We pride ourselves on technical expertise, transparent
                        pricing, and a customer-first approach that has made us the top choice
                        for thousands of residents for three decades.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
