import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench, Shield, CheckCircle } from 'lucide-react';

const SpecializedRepair = () => {
    return (
        <div className="repair-page pt-32 pb-20">
            <Helmet>
                <title>Specialized Inverter Repair | Luminous, Microtek Service Unnao</title>
            </Helmet>

            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-glass rounded-3xl p-10 mb-20">
                    <div className="flex-1">
                        <h1 className="text-gradient text-4xl lg:text-5xl font-extrabold mb-6">Expert Inverter & Stabilizer Repairing</h1>
                        <p className="text-lg text-secondary mb-8">
                            Is your inverter producing a buzzing sound? Or is it not charging? Don't worry.
                            Our certified technicians at Vijay Electronics Unnao specialize in card-level repairing for all major brands.
                        </p>
                        <ul className="repair-list">
                            <li><CheckCircle className="text-primary" size={20} /> Luminous Inverter Repair & Card Change</li>
                            <li><CheckCircle className="text-primary" size={20} /> Microtek Charging & No Output Issues</li>
                            <li><CheckCircle className="text-primary" size={20} /> Exide Inverter Service & Battery Calibration</li>
                            <li><CheckCircle className="text-primary" size={20} /> Stabilizer Coil Binding & Relay Repair</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <img src="/assets/slider2.png" alt="Repairing Service" className="rounded-2xl shadow-2xl border border-glass w-full" />
                    </div>
                </div>

                <div className="pricing-info glass p-10 text-center">
                    <h2 className="text-2xl font-bold mb-6">Repair Cost Estimates in Unnao</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-glass">
                                    <th className="py-4">Service Type</th>
                                    <th className="py-4">Estimated Price</th>
                                    <th className="py-4">Warranty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-glass">
                                    <td className="py-4">General Service</td>
                                    <td className="py-4">₹250 - ₹500</td>
                                    <td className="py-4">30 Days</td>
                                </tr>
                                <tr className="border-b border-glass">
                                    <td className="py-4">Card Repairing</td>
                                    <td className="py-4">₹800 - ₹2500</td>
                                    <td className="py-4">90 Days</td>
                                </tr>
                                <tr className="border-b border-glass">
                                    <td className="py-4">Battery Health Check</td>
                                    <td className="py-4">₹150</td>
                                    <td className="py-4">Instant</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .repair-list { list-style: none; padding: 0; }
        .repair-list li { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; font-weight: 500; }
        .text-primary { color: var(--primary-color); }
        .bg-glass { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); }
        table th { color: var(--primary-color); }
        table td { color: var(--text-secondary); }
      `}</style>
        </div>
    );
};

export default SpecializedRepair;
