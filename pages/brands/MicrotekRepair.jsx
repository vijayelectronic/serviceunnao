import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Clock, Award } from 'lucide-react';
import './SEOPage.css';

const MicrotekRepair = () => {
    return (
        <div className="seo-page">
            <Helmet>
                <title>Microtek Inverter Repair in Unnao | Authorized Service</title>
                <meta name="description" content="Expert Microtek inverter repair in Unnao. Fast, authorized service for all Microtek models. Genuine parts and 24/7 support. Call 8090090051!" />
            </Helmet>

            <section className="seo-hero">
                <div className="container">
                    <h1 className="text-gradient">Microtek Inverter Repair Unnao</h1>
                    <p className="lead">Authorized and professional repair services for all Microtek inverter models in Unnao city.</p>
                </div>
            </section>

            <section className="seo-content-main">
                <div className="container grid-2">
                    <div className="text-content">
                        <h2>Reliable Microtek Inverter Service</h2>
                        <p>
                            At Vijay Electronics, we specialize in <b>microtek inverter repair Unnao</b>.
                            Our technicians are trained to handle complex PCB issues, charging faults,
                            and backup problems specifically for Microtek systems.
                        </p>
                        <ul className="feature-list">
                            <li><Zap size={18} /> Genuine Microtek Spare Parts</li>
                            <li><ShieldCheck size={18} /> Expert PCB Chip-level Repair</li>
                            <li><Clock size={18} /> Same-day Service Guarantee</li>
                            <li><Award size={18} /> 30 Years of Technical Experience</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src="/src/assets/microtek_repair_bench_1766477588435.png" alt="Microtek Inverter Repair Unnao" className="glass-image" />
                    </div>
                </div>
            </section>

            <section className="seo-faq glass">
                <div className="container">
                    <h3>Frequently Asked Questions</h3>
                    <div className="faq-item">
                        <h4>How much does Microtek inverter repair cost in Unnao?</h4>
                        <p>Repairs usually range from ₹500 to ₹2500 depending on the specific component failure.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Do you provide home service for Microtek inverters?</h4>
                        <p>Yes, we offer on-site home repairs for your convenience anywhere in Unnao.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MicrotekRepair;
