import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Battery, Droplets } from 'lucide-react';
import '../brands/SEOPage.css';

const BatteryReplacement = () => {
    return (
        <div className="seo-page">
            <Helmet>
                <title>Inverter Battery Replacement Unnao | New Battery Sales</title>
                <meta name="description" content="Get fast inverter battery replacement in Unnao. Authorized dealer for Exide, Luminous, and Amaron. Best exchange prices and home installation. Call 8090090051." />
            </Helmet>

            <section className="seo-hero">
                <div className="container">
                    <h1 className="text-gradient">Inverter Battery Replacement Unnao</h1>
                    <p className="lead">Professional battery maintenance, testing, and new replacement services with best exchange offers in Unnao.</p>
                </div>
            </section>

            <section className="seo-content-main">
                <div className="container grid-2">
                    <div className="text-content">
                        <h2>Reliable Battery Replacement & Service</h2>
                        <p>
                            Vijay Electronics specializes in <b>inverter battery replacement Unnao</b>.
                            If your battery is not giving enough backup or is swelling, we can
                            test its health and provide a brand new replacement from Exide or Luminous
                            with full warranty and home delivery.
                        </p>
                        <ul className="feature-list">
                            <li><Zap size={18} /> Instant On-site Battery Testing</li>
                            <li><Droplets size={18} /> Distilled Water Topping Service</li>
                            <li><Battery size={18} /> Best Scrap Value for Old Batteries</li>
                            <li><ShieldCheck size={18} /> Genuine Warranty Support</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src="/src/assets/inverter_battery_replacement_unnao_home_1766477887628.png" alt="Inverter Battery Replacement Unnao" className="glass-image" />
                    </div>
                </div>
            </section>

            <section className="seo-faq glass">
                <div className="container">
                    <h3>Battery Replacement FAQ</h3>
                    <div className="faq-item">
                        <h4>When should I replace my inverter battery?</h4>
                        <p>Most tubular batteries last 3-5 years. If the backup drops significantly, it's time for <b>inverter battery replacement in Unnao</b>.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Do you provide a warranty on new batteries?</h4>
                        <p>Yes, all new batteries come with official brand warranty cards (up to 60 months depending on the model).</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BatteryReplacement;
