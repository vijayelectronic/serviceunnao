import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Battery, Zap, Settings, Cpu, HardDrive, Headphones } from 'lucide-react';

const Services = () => {
    const serviceList = [
        { title: "Inverter Sales", icon: <Zap />, desc: "Complete range of Luminous, Microtek, and Exide inverters." },
        { title: "Battery Sales", icon: <Battery />, desc: "Tall tubular, flat plate, and solar batteries at wholesale prices." },
        { title: "Repairing", icon: <Settings />, desc: "Expert card repair and component replacement for all power systems." },
        { title: "Maintenance", icon: <Cpu />, desc: "Annual maintenance contracts for offices and homes in Unnao." },
        { title: "UPS Repairing", icon: <HardDrive />, desc: "Specialized service for online and offline UPS systems." },
        { title: "Consultancy", icon: <Headphones />, desc: "Free power load assessment and recommendation by experts." }
    ];

    return (
        <div className="services-page py-20">
            <Helmet>
                <title>Services | Vijay Electronics Unnao - Inverter & Battery Specialist</title>
            </Helmet>

            <div className="container">
                <div className="text-center mb-16 pt-20">
                    <h1 className="text-gradient text-5xl font-extrabold mb-4">Our Premium Services</h1>
                    <p className="text-secondary max-w-2xl mx-auto">We provide comprehensive power backup solutions for residential and commercial clients in Unnao.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceList.map((service, i) => (
                        <div key={i} className="glass-card p-10 flex flex-col items-center text-center">
                            <div className="icon-box mb-6 bg-primary p-4 rounded-xl text-black">
                                {React.cloneElement(service.icon, { size: 36 })}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-secondary">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .py-20 { padding: 80px 0; }
        .text-center { text-align: center; }
        .mb-16 { margin-bottom: 64px; }
        .mb-4 { margin-bottom: 16px; }
        .pt-20 { padding-top: 80px; }
        .text-5xl { font-size: 3rem; }
        .font-extrabold { font-weight: 800; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .md\\:grid-cols-2 { @media (min-width: 768px) { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        .lg\\:grid-cols-3 { @media (min-width: 1024px) { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        .gap-8 { gap: 2rem; }
        .p-10 { padding: 2.5rem; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .text-2xl { font-size: 1.5rem; }
        .font-bold { font-weight: 700; }
        .text-secondary { color: var(--text-secondary); }
      `}</style>
        </div>
    );
};

export default Services;
