import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Clock, Award } from 'lucide-react';
import './SEOPage.css';

const LuminousRepair = () => {
    return (
        <div className="seo-page">
            <Helmet>
                <title>Luminous Inverter Repair & Service Unnao | Best Prices</title>
                <meta name="description" content="Expert Luminous inverter repair and service in Unnao. Same-day battery service and genuine spares for all Luminous models. Call Vijay Electronics at 8090090051." />
            </Helmet>

            <section className="seo-hero">
                <div className="container">
                    <h1 className="text-gradient">Luminous Inverter Repair Unnao</h1>
                    <p className="lead">Premium servicing and repairs for Luminous Zelio, Eco Watt, and Solar inverters in Unnao.</p>
                </div>
            </section>

            <section className="seo-content-main">
                <div className="container grid-2">
                    <div className="text-content">
                        <h2>Top-Rated Luminous Inverter Service</h2>
                        <p>
                            Vijay Electronics is your trusted destination for <b>luminous inverter repair Unnao</b>.
                            We specialize in resolving overloading, battery non-charging, and main-line
                            switching issues common in Luminous models.
                        </p>
                        <ul className="feature-list">
                            <li><Zap size={18} /> Luminous Authorized Service Quality</li>
                            <li><ShieldCheck size={18} /> Genuine Relay and MOSFET replacement</li>
                            <li><Clock size={18} /> Quick Home Visit in Unnao</li>
                            <li><Award size={18} /> Certified Technicians</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src="/src/assets/luminous_inverter_repair_1766477706686.png" alt="Luminous Inverter Repair Unnao" className="glass-image" />
                    </div>
                </div>
            </section>

            <section className="seo-faq glass">
                <div className="container">
                    <h3>Common Luminous Inverter FAQs</h3>
                    <div className="faq-item">
                        <h4>Why is my Luminous inverter showing 'Overload'?</h4>
                        <p>This often happens due to excessive load or a faulty internal sensor. We can fix it within 1 hour.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Do you repair Luminous solar inverters?</h4>
                        <p>Yes, we are experts in both residential and solar Luminous inverter repairing in Unnao.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LuminousRepair;
