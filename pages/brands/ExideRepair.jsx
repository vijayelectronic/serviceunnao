import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Battery, Award } from 'lucide-react';
import './SEOPage.css';

const ExideRepair = () => {
    return (
        <div className="seo-page">
            <Helmet>
                <title>Exide Inverter & Battery Service Unnao | Certified Experts</title>
                <meta name="description" content="Expert Exide inverter and battery service in Unnao. Replacement, charging issues fix, and health check-up for all Exide models. Fast home service. Call 8090090051." />
            </Helmet>

            <section className="seo-hero">
                <div className="container">
                    <h1 className="text-gradient">Exide Inverter Service Unnao</h1>
                    <p className="lead">Authorized and expert technical support for Exide GQP, Star, and Integel series in Unnao city.</p>
                </div>
            </section>

            <section className="seo-content-main">
                <div className="container grid-2">
                    <div className="text-content">
                        <h2>Top-Tier Exide technical Service</h2>
                        <p>
                            Vijay Electronics specializes in <b>Exide inverter repair Unnao</b>.
                            From repairing pure sine wave circuits to battery deep-cycle maintenance,
                            we ensure your Exide power system stays healthy and reliable.
                        </p>
                        <ul className="feature-list">
                            <li><Zap size={18} /> High-precision circuit motherboard fix</li>
                            <li><Battery size={18} /> Genuine Exide battery testing & replacement</li>
                            <li><ShieldCheck size={18} /> Warranty verification and support</li>
                            <li><Award size={18} /> 30 Years of shop trust</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src="/src/assets/exide_battery_service_experts_1766480366653.png" alt="Exide Inverter Repair Unnao" className="glass-image" />
                    </div>
                </div>
            </section>

            <section className="seo-faq glass">
                <div className="container">
                    <h3>Exide Service FAQs</h3>
                    <div className="faq-item">
                        <h4>Why is my Exide inverter not switching to battery mode?</h4>
                        <p>This could be a main fuse issue or a relay fault. We can fix this onsite in Unnao within an hour.</p>
                    </div>
                    <div className="faq-item">
                        <h4>How often should I service my Exide battery?</h4>
                        <p>We recommend a health check and water topping every 6 months for maximum life.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExideRepair;
