import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Cog, Settings } from 'lucide-react';
import '../brands/SEOPage.css';

const ServoRepair = () => {
    return (
        <div className="seo-page">
            <Helmet>
                <title>Servo Stabilizer Repair Unnao | Industrial & Home Service</title>
                <meta name="description" content="Professional servo stabilizer repair in Unnao. We fix buck-boost transformers, servo motors, and controller cards for all industrial and home stabilizers. Call 8090090051." />
            </Helmet>

            <section className="seo-hero">
                <div className="container">
                    <h1 className="text-gradient">Servo Stabilizer Repair Unnao</h1>
                    <p className="lead">Expert technical maintenance and repairing for high-precision Servo Voltage Stabilizers in Unnao region.</p>
                </div>
            </section>

            <section className="seo-content-main">
                <div className="container grid-2">
                    <div className="text-content">
                        <h2>Precision Servo Repair Solutions</h2>
                        <p>
                            Vijay Electronics provides high-end <b>servo stabilizer repair Unnao</b>.
                            If your industrial or residential stabilizer is showing voltage fluctuations
                            or motor errors, our expert team can calibrate and fix it on-site.
                        </p>
                        <ul className="feature-list">
                            <li><Zap size={18} /> Servo Motor Replacement & Repair</li>
                            <li><Settings size={18} /> Voltage Calibration & Testing</li>
                            <li><Cog size={18} /> Buck-Boost Transformer Maintenance</li>
                            <li><ShieldCheck size={18} /> Control PCB Microchip Level Service</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src="/src/assets/servo_stabilizer_repair_unnao_technical_1766477818478.png" alt="Servo Stabilizer Repair Unnao" className="glass-image" />
                    </div>
                </div>
            </section>

            <section className="seo-faq glass">
                <div className="container">
                    <h3>Servo Maintenance FAQ</h3>
                    <div className="faq-item">
                        <h4>Why is my servo stabilizer making a grinding noise?</h4>
                        <p>This is usually due to a worn-out servo motor or carbon brush issues. We can replace these parts quickly in Unnao.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Do you offer on-site industrial servo repair?</h4>
                        <p>Yes, we provide on-site technical support for industrial stabilizers in factories and large offices across Unnao.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServoRepair;
