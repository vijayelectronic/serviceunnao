import React, { useEffect, useState, useRef } from 'react';
import { Mic, X, Phone, BrainCircuit, AlertCircle } from 'lucide-react';
import { agentConfig } from '../../config/agentConfig';
import './VoiceAgent.css';

const VoiceAgent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const [showKeyAlert, setShowKeyAlert] = useState(false);
    const [status, setStatus] = useState("Awaiting command...");
    const [aiResponse, setAiResponse] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    const synthesisRef = useRef(window.speechSynthesis);
    const recognitionRef = useRef(null);

    // Initial Welcome and Recognition Setup
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.lang = 'hi-IN';

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                handleUserQuery(transcript);
            };
            recognitionRef.current.onend = () => setIsListening(false);
        }

        const welcome = () => {
            setIsVisible(true);
            speak(`Namaste! Main Vijay Electronics Unnao ka Advanced AI Consultant hoon. Hum pichle 30 saalon se Purani Bazar mein inverters aur stabilizers ki expert repairing kar rahe hain. Bataiye, aaj main aapki kya madad kar sakta hoon?`);
        };

        const timer = setTimeout(welcome, 2000);
        return () => {
            clearTimeout(timer);
            if (synthesisRef.current) synthesisRef.current.cancel();
        };
    }, []);

    // Check for OpenRouter Key
    useEffect(() => {
        const hasKey = agentConfig.openRouterKey && agentConfig.openRouterKey !== "";
        if (!hasKey) {
            setShowKeyAlert(true);
        } else {
            setShowKeyAlert(false);
            // Initialize chat history with the system prompt
            setChatHistory([
                { role: "system", content: agentConfig.persona + "\nKnowledge Base: " + JSON.stringify(agentConfig.knowledgeBase) },
                { role: "assistant", content: "Theek hai. Main Vijay Electronics ke expert consultant ke taur par tayyar hoon. Bataiye, inverter ya battery mein kya problem hai?" }
            ]);
        }
    }, [agentConfig.openRouterKey]);

    const speak = (text) => {
        if (!synthesisRef.current) return;
        synthesisRef.current.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = synthesisRef.current.getVoices();
        const voice = voices.find(v => v.lang.includes('hi-IN')) || voices.find(v => v.lang.includes('en-IN')) || voices[0];
        if (voice) utterance.voice = voice;
        utterance.rate = 1.0;
        utterance.onstart = () => {
            setIsSpeaking(true);
            setIsThinking(false);
            setStatus("AI IS SPEAKING...");
        };
        utterance.onend = () => {
            setIsSpeaking(false);
            setStatus("WAITING FOR YOU...");
            if (isVisible) setTimeout(startListening, 800);
        };
        synthesisRef.current.speak(utterance);
        setAiResponse(text);
    };

    const startListening = () => {
        if (recognitionRef.current && !isListening && !isSpeaking && !isThinking) {
            try {
                recognitionRef.current.start();
                setIsListening(true);
                setStatus("LISTENING TO YOU...");
            } catch (e) {
                console.error(e);
            }
        }
    };

    const handleUserQuery = async (query) => {
        if (showKeyAlert) {
            speak("Kripya OpenRouter API key check karein.");
            return;
        }
        setIsListening(false);
        setIsThinking(true);
        setStatus("AI BRAIN THINKING...");

        const newMessages = [...chatHistory, { role: "user", content: query }];
        setChatHistory(newMessages);

        try {
            const response = await fetch(`${agentConfig.baseUrl}/chat/completions`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${agentConfig.openRouterKey}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": window.location.origin,
                    "X-Title": "Vijay Electronics AI Brain"
                },
                body: JSON.stringify({
                    model: agentConfig.model,
                    messages: newMessages
                })
            });

            if (!response.ok) {
                if (response.status === 429) {
                    throw new Error("Abhi OpenRouter par bahut bhid hai (Rate Limit). Kripya 1 minute baad koshish karein.");
                }
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error?.message || `API Error: ${response.status}`);
            }

            const data = await response.json();
            const aiText = data.choices[0].message.content.replace(/\*/g, '').trim();

            setChatHistory(prev => [...prev, { role: "assistant", content: aiText }]);
            speak(aiText);
        } catch (error) {
            console.error("OpenRouter Error:", error);
            const msg = error.message || "Connection issue";
            if (msg.includes("429")) {
                speak("Abhi OpenRouter par traffic jyada hai. Kripya ek minute baad dobara koshish karein.");
            } else if (msg.includes("API Key")) {
                speak("API Key mein problem hai. Kripya agentConfig check karein.");
            } else {
                speak("Maaf kijiyega, connection mein dikkat hai. Aap direct 8090090051 par call kar sakte hain.");
            }
        }
    };

    return (
        <div className={`voice-agent-advanced ${isVisible ? 'visible' : ''}`}>
            {showKeyAlert && isVisible && (
                <div className="api-key-warning">
                    <AlertCircle size={16} />
                    <span>OpenRouter API Key missing. Check <code>agentConfig.js</code></span>
                </div>
            )}
            {!isVisible ? (
                <button className="adv-trigger glass" onClick={() => setIsVisible(true)}>
                    <BrainCircuit className="brain-icon" /><div className="brain-waves"></div>
                </button>
            ) : (
                <div className="adv-container glass">
                    <div className="adv-glow"></div>
                    <button className="adv-close" onClick={() => setIsVisible(false)}><X size={18} /></button>
                    <div className="adv-header">
                        <div className={`brain-orb ${isSpeaking ? 'speaking' : ''} ${isListening ? 'listening' : ''} ${isThinking ? 'thinking' : ''}`}>
                            <BrainCircuit size={32} />
                        </div>
                        <div className="adv-info">
                            <h3>VIJAY ELECTRONICS AI</h3>
                            <p className="adv-status">{status}</p>
                        </div>
                    </div>
                    <div className="adv-main">
                        {isThinking ? (
                            <div className="brain-processing"><div className="dot-pulse"></div><p>Thinking...</p></div>
                        ) : isSpeaking ? (
                            <div className="voice-waves-container">{[...Array(5)].map((_, i) => <div key={i} className="v-wave"></div>)}</div>
                        ) : (
                            <div className="adv-response-area"><p className="adv-text">{aiResponse || "Puchiye..."}</p></div>
                        )}
                    </div>
                    <div className="adv-controls">
                        {!isSpeaking && !isThinking && (
                            <button className={`mic-btn-main ${isListening ? 'active' : ''}`} onClick={startListening}><Mic size={24} /></button>
                        )}
                        <div className="quick-actions">
                            <a href="tel:8090090051" className="action-pill"><Phone size={14} /> Call Now</a>
                            <div className="action-pill" onClick={() => handleUserQuery("Shop location aur contact details bataiye.")}>Details</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VoiceAgent;
