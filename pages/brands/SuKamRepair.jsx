import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Clock, Award } from 'lucide-react';
import './SEOPage.css';

const SuKamRepair = () => {
    return (
        <div className="seo-page">
            <Helmet>
                <title>Su Kam Inverter Repair Services in Unnao | Trusted Help</title>
                <meta name="description" content="Expert Su Kam inverter repair services in Unnao. Fix charging bugs, PCB issues, and overload problems with Vijay Electronics. Fast onsite service. Call 8090090051." />
            </Helmet>

            <section className="seo-hero">
                <div className="container">
                    <h1 className="text-gradient">Su Kam Inverter Repair Unnao</h1>
                    <p className="lead">Reliable and professional repair solutions for all Su-Kam inverter and UPS models in Unnao.</p>
                </div>
            </section>

            <section className="seo-content-main">
                <div className="container grid-2">
                    <div className="text-content">
                        <h2>Expert Su-Kam Inverter Service</h2>
                        <p>
                            We provide specialized <b>su-kam inverter repair services in Unnao</b>.
                            From Falcon to Shark series, we handle all technical faults using
                            high-grade components to ensure long-lasting power backup.
                        </p>
                        <ul className="feature-list">
                            <li><Zap size={18} /> Su-Kam Compatible Genuine Parts</li>
                            <li><ShieldCheck size={18} /> Microcontroller and Board Repair</li>
                            <li><Clock size={18} /> Emergency Home Repair Unnao</li>
                            <li><Award size={18} /> 30+ Years Industry Experience</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src="/src/assets/su_kam_repair_lab_1766477760861.png" alt="Su-Kam Inverter Repair Unnao" className="glass-image" />
                    </div>
                </div>
            </section>

            <section className="seo-faq glass">
                <div className="container">
                    <h3>Su-Kam Service FAQ</h3>
                    <div className="faq-item">
                        <h4>Is Su-Kam service available in Unnao?</h4>
                        <p>Yes, Vijay Electronics provides comprehensive Su-Kam inverter repairing service across Unnao city.</p>
                    </div>
                    <div className="faq-item">
                        <h4>My Su-Kam inverter is not charging the battery, can it be fixed?</h4>
                        <p>Definitely! Non-charging is a common fuse or circuit issue that we can resolve within minutes.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuKamRepair;
