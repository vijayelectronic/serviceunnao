import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import VoiceAgent from './components/voice/VoiceAgent';
import WhatsAppButton from './components/ui/WhatsAppButton';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const SpecializedRepair = lazy(() => import('./pages/SpecializedRepair'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));

// Brand SEO Pages
const MicrotekRepair = lazy(() => import('./pages/brands/MicrotekRepair'));
const LuminousRepair = lazy(() => import('./pages/brands/LuminousRepair'));
const SuKamRepair = lazy(() => import('./pages/brands/SuKamRepair'));
const ExideRepair = lazy(() => import('./pages/brands/ExideRepair'));
const AmaronRepair = lazy(() => import('./pages/brands/AmaronRepair'));
const APCDeltaRepair = lazy(() => import('./pages/brands/APCDeltaRepair'));

// Service SEO Pages
const ServoRepair = lazy(() => import('./pages/services/ServoRepair'));
const VoltageRepair = lazy(() => import('./pages/services/VoltageRepair'));
const BatteryReplacement = lazy(() => import('./pages/services/BatteryReplacement'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main>
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/repair" element={<SpecializedRepair />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />

                {/* Brand Routes */}
                <Route path="/microtek-inverter-repair-unnao" element={<MicrotekRepair />} />
                <Route path="/luminous-inverter-repair-unnao" element={<LuminousRepair />} />
                <Route path="/su-kam-inverter-repair-unnao" element={<SuKamRepair />} />
                <Route path="/exide-inverter-repair-unnao" element={<ExideRepair />} />
                <Route path="/amaron-inverter-repair-unnao" element={<AmaronRepair />} />
                <Route path="/apc-delta-ups-repair-unnao" element={<APCDeltaRepair />} />

                {/* Technical Service Routes */}
                <Route path="/servo-stabilizer-repair-unnao" element={<ServoRepair />} />
                <Route path="/voltage-stabilizer-repair-unnao" element={<VoltageRepair />} />
                <Route path="/inverter-battery-replacement-unnao" element={<BatteryReplacement />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <VoiceAgent />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
