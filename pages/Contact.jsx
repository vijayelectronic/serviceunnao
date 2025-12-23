import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { agentConfig } from '../config/agentConfig';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        issue: 'Inverter Repair',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Construct WhatsApp Message for Immediate Mobile Notification
        const whatsappMsg = `*New Inquiry from Website*%0A--------------------------%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Issue:* ${formData.issue}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/91${agentConfig.phone}?text=${whatsappMsg}`;

        try {
            // 1. If we have a backend/leadsUrl, send there too
            if (agentConfig.leadsUrl) {
                await fetch(agentConfig.leadsUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...formData, timestamp: new Date().toLocaleString() })
                });
            }

            // 2. Open WhatsApp in new tab for the user to send
            window.open(whatsappUrl, '_blank');

            setStatus('success');
            setFormData({ name: '', phone: '', issue: 'Inverter Repair', message: '' });
        } catch (error) {
            console.error("Form Error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="contact-page pt-32 pb-20">
            <Helmet>
                <title>Contact Us | Vijay Electronics Unnao - Call 8090090051</title>
            </Helmet>

            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-gradient text-5xl font-extrabold mb-4">Get In Touch</h1>
                    <p className="text-secondary">Have an emergency power failure? Give us a call or visit our store.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="contact-info space-y-8">
                        <div className="glass-card p-8 flex items-start gap-6">
                            <div className="bg-primary p-4 rounded-xl text-black">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Call Us</h3>
                                <p className="text-2xl font-bold text-primary">+91 8090090051</p>
                                <p className="text-secondary">Available 9:00 AM - 8:00 PM</p>
                            </div>
                        </div>

                        <div className="glass-card p-8 flex items-start gap-6">
                            <div className="bg-primary p-4 rounded-xl text-black">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Our Location</h3>
                                <p className="text-lg">9 Purani Bazar, Unnao,</p>
                                <p className="text-lg">Uttar Pradesh 209801</p>
                            </div>
                        </div>

                        <div className={`glass-card p-8 flex items-start gap-6 bg-green-500/10 border-green-500/30`}>
                            <div className="bg-green-500 p-4 rounded-xl text-black">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">WhatsApp Inquiry</h3>
                                <p className="text-lg">Chat with our experts instantly</p>
                                <a href="https://wa.me/918090090051" target="_blank" rel="noreferrer" className="text-green-500 font-bold hover:underline">Start Chat</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass p-10 relative overflow-hidden">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center h-full py-10 text-center animate-in fade-in zoom-in duration-500">
                                <CheckCircle2 size={80} className="text-green-500 mb-6" />
                                <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-secondary mb-8">Hum aapko agle 5 minute mein call karenge.<br />Aapka dhanyawad!</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="btn-primary"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-black/40 border border-glass rounded-lg px-4 py-3 outline-none focus:border-primary transition-all"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Phone</label>
                                            <input
                                                required
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-black/40 border border-glass rounded-lg px-4 py-3 outline-none focus:border-primary transition-all"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Issue Type</label>
                                        <select
                                            value={formData.issue}
                                            onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                                            className="w-full bg-black/40 border border-glass rounded-lg px-4 py-3 outline-none focus:border-primary transition-all"
                                        >
                                            <option>Inverter Repair</option>
                                            <option>Battery Service</option>
                                            <option>Stabilizer Fault</option>
                                            <option>New Purchase</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message</label>
                                        <textarea
                                            required
                                            rows="5"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-black/40 border border-glass rounded-lg px-4 py-3 outline-none focus:border-primary transition-all"
                                            placeholder="Tell us about the problem..."
                                        ></textarea>
                                    </div>
                                    <button
                                        disabled={status === 'sending'}
                                        type="submit"
                                        className="btn-primary w-full justify-center text-lg gap-3"
                                    >
                                        {status === 'sending' ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                                Sending...
                                            </div>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Send Inquiry
                                            </>
                                        )}
                                    </button>
                                    {status === 'error' && (
                                        <p className="text-red-500 text-center text-sm">Koi dikkat aa gayi. Kripya 8090090051 par call karein.</p>
                                    )}
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
