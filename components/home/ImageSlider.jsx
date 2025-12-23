import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageSlider.css';

const images = [
    {
        url: '/assets/slider1.png',
        title: 'Exide & Luminous Authorized Dealer',
        desc: 'Unnao\'s most trusted battery and inverter shop.'
    },
    {
        url: '/assets/slider2.png',
        title: 'Expert Repair Services',
        desc: 'Quick and reliable repair for all types of inverters.'
    },
    {
        url: '/assets/slider3.png',
        title: 'Solar Solutions',
        desc: 'Go green with our advanced solar inverter systems.'
    }
];

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);

    return (
        <div className="slider">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`slide ${index === current ? 'active' : ''}`}
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${img.url})` }}
                >
                    {index === current && (
                        <div className="slide-content">
                            <h1 className="animate-up">{img.title}</h1>
                            <p className="animate-up delay-1">{img.desc}</p>
                            <button className="btn-primary animate-up delay-2">Explore Services</button>
                        </div>
                    )}
                </div>
            ))}
            <button className="slider-btn prev" onClick={prevSlide}><ChevronLeft size={30} /></button>
            <button className="slider-btn next" onClick={nextSlide}><ChevronRight size={30} /></button>
            <div className="dots">
                {images.map((_, i) => (
                    <span key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)}></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
