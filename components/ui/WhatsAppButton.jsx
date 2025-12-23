import React from 'react';
import { MessageCircle } from 'lucide-react';
import { agentConfig } from '../../config/agentConfig';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const handleWhatsApp = () => {
        const msg = encodeURIComponent("Namaste Vijay Electronics! Main aapki website se aaya hoon aur mujhe inverter/stabilizer service ki jaankari chahiye.");
        window.open(`https://wa.me/91${agentConfig.phone}?text=${msg}`, '_blank');
    };

    return (
        <button className="whatsapp-floating-btn" onClick={handleWhatsApp} title="Chat on WhatsApp">
            <MessageCircle size={32} />
            <span className="btn-label">Chat with Us</span>
        </button>
    );
};

export default WhatsAppButton;
