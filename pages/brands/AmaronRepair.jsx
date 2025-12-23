import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Battery, Award } from 'lucide-react';
import './SEOPage.css';

const AmaronRepair = () => {
    return (
        <div className="seo-page">
            <Helmet>
                <title>Amaron Inverter & Battery Service Unnao | Authorized Help</title>
                <meta name="description" content="Professional Amaron inverter and battery service in Unnao. We fix Quanta UPS and Amaron home inverters. Genuine parts and fast repair. Call 8090090051." />
            </Helmet>

            <section className="seo-hero">
                <div className="container">
                    <h1 className="text-gradient">Amaron Inverter Service Unnao</h1>
                    <p className="lead">Expert technical support and repairs for Amaron Shield, Amaron Quanta, and home UPS systems in Unnao.</p>
                </div>
            </section>

            <section className="seo-content-main">
                <div className="container grid-2">
                    <div className="text-content">
                        <h2>High-Performance Amaron Service</h2>
                        <p>
                            Vijay Electronics specializes in <b>Amaron inverter repair Unnao</b>.
                            If your Amaron battery is showing low backup or the UPS is beeping
                            continuously, our technicians can identify and fix the issue quickly
                            using original components.
                        </p>
                        <ul className="feature-list">
                            <li><Zap size={18} /> Amaron Quanta UPS specialist</li>
                            <li><Battery size={18} /> Tall Tubular battery testing</li>
                            <li><ShieldCheck size={18} /> Zero-maintenance battery check-up</li>
                            <li><Award size={18} /> Most trusted shop in Purani Bazar</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src="/src/assets/amaron_quanta_service_unnao_1766480554407.png" alt="Amaron Inverter Repair Unnao" className="glass-image" />
                    </div>
                </div>
            </section>

            <section className="seo-faq glass">
                <div className="container">
                    <h3>Amaron Service FAQ</h3>
                    <div className="faq-item">
                        <h4>Why is my Amaron battery showing 'Low Battery' even when charged?</h4>
                        <p>This could be a gravity issue or the charging circuit in your inverter might be faulty. We can diagnose it in 15 minutes.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Do you sell new Amaron batteries?</h4>
                        <p>Yes, we provide new Amaron batteries with official warranty and best exchange rates in Unnao.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AmaronRepair;
