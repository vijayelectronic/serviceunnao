import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Activity, Thermometer } from 'lucide-react';
import '../brands/SEOPage.css';

const VoltageRepair = () => {
    return (
        <div className="seo-page">
            <Helmet>
                <title>Voltage Stabilizer Repair Unnao | AC & Fridge Stabilizer Fix</title>
                <meta name="description" content="Affordable voltage stabilizer repair in Unnao. Expert technicians for V-Guard, Microtek, and local brands. Fix tripping and low voltage issues. Call Vijay Electronics." />
            </Helmet>

            <section className="seo-hero">
                <div className="container">
                    <h1 className="text-gradient">Voltage Stabilizer Repair Unnao</h1>
                    <p className="lead">Professional repair services for all types of automatic and manual voltage stabilizers in Unnao.</p>
                </div>
            </section>

            <section className="seo-content-main">
                <div className="container grid-2">
                    <div className="text-content">
                        <h2>Automatic Voltage Stabilizer Service</h2>
                        <p>
                            We specialize in <b>voltage stabilizer repair Unnao</b> for Air Conditioners,
                            Refrigerators, and Main-line setups. If your stabilizer is not turning on
                            or constantly tripping, our technicians can fix it at your home.
                        </p>
                        <ul className="feature-list">
                            <li><Zap size={18} /> Relay and Coil Repairing</li>
                            <li><Activity size={18} /> High-Voltage Protection Fix</li>
                            <li><Thermometer size={18} /> Thermal Overload protection Service</li>
                            <li><ShieldCheck size={18} /> 6-Month Service Warranty</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src="/src/assets/microtek_repair_bench_1766477588435.png" alt="Voltage Stabilizer Repair Unnao" className="glass-image" />
                    </div>
                </div>
            </section>

            <section className="seo-faq glass">
                <div className="container">
                    <h3>Stabilizer Help FAQ</h3>
                    <div className="faq-item">
                        <h4>My AC stabilizer is not showing output voltage, what to do?</h4>
                        <p>This is likely a circuit board or transformer fault. Our <b>voltage stabilizer repair in Unnao</b> can fix this same day.</p>
                    </div>
                    <div className="faq-item">
                        <h4>Which brands of stabilizers do you repair?</h4>
                        <p>We repair V-Guard, Microtek, Luminous, and all local Unnao built stabilizers.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VoltageRepair;
