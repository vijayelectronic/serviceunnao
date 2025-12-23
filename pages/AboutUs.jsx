import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className="about-page pt-32 pb-20">
            <Helmet>
                <title>About Us | Vijay Electronics Unnao - 25+ Years of Excellence</title>
            </Helmet>

            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-gradient text-5xl font-extrabold mb-4">Our Story</h1>
                    <p className="text-secondary max-w-3xl mx-auto">Founded in 1995, Vijay Electronics has grown from a small repair shop to Unnao's most trusted name in power solutions.</p>
                </div>

                <div className="glass p-12 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-primary">The Vijay Promise</h2>
                            <p className="mb-4">At Vijay Electronics, we understand that power backup is not just a luxury, but a necessity. Our mission is to ensure that every home and business in Unnao has access to reliable, efficient, and affordable power maintenance.</p>
                            <p>We take pride in our highly skilled team of technicians who are trained by leading brands like Luminous and Exide to provide factory-standard service.</p>
                        </div>
                        <div className="flex flex-col justify-center bg-black/50 p-8 rounded-2xl border border-glass">
                            <div className="mb-6">
                                <span className="text-5xl font-extrabold text-gradient">25+</span>
                                <p className="text-secondary">Years of Experience</p>
                            </div>
                            <div className="mb-6">
                                <span className="text-5xl font-extrabold text-gradient">10,000+</span>
                                <p className="text-secondary">Happy Customers in Unnao</p>
                            </div>
                            <div>
                                <span className="text-5xl font-extrabold text-gradient">100%</span>
                                <p className="text-secondary">Genuine Spares Used</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
