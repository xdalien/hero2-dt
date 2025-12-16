import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Star, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden relative font-sans">
      
      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes hang {
          0% { transform: rotate(10deg); }
          50% { transform: rotate(5deg); }
          100% { transform: rotate(10deg); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-hang { animation: hang 4s ease-in-out infinite; transform-origin: top left; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
      `}</style>

      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-64 h-64 md:w-96 md:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* LEFT COLUMN: Animated Icon (On top for mobile visually if desired, but here we keep icon left/top) */}
        <div className={`order-1 lg:order-1 flex justify-center lg:justify-end transition-all duration-1000 transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative group perspective-1000">
            {/* Glass Card Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white/60 backdrop-blur-2xl rounded-[3rem] shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] border border-white/80 flex items-center justify-center overflow-visible">
              
              {/* Floating Composition */}
              <div className="animate-float relative z-20 w-full h-full flex items-center justify-center p-8">
                {!imageError ? (
                  <img 
                      src="https://drive.google.com/thumbnail?id=1tOyuR1YpzJdafQYqY3nuf5GGXUu9n0hV&sz=w1000" 
                      alt="Sales Logo" 
                      className="w-full h-full object-contain drop-shadow-2xl"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="text-center text-slate-400 font-medium">
                    <Sparkles className="w-12 h-12 mx-auto mb-2 text-slate-300" />
                    <span>Image not found</span>
                    <br/>
                    <span className="text-xs">Drive link blocked</span>
                  </div>
                )}
              </div>
              
              {/* Floating abstract shapes for depth */}
              <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Text Content */}
        <div className="order-2 lg:order-2 text-center lg:text-left z-20">
          
          <div className={`fade-in-up ${isLoaded ? 'visible' : ''}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-sm font-bold tracking-wide border border-blue-200 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              #1 Sales Tool for Dealers
            </span>
          </div>

          <h1 className={`fade-in-up delay-100 ${isLoaded ? 'visible' : ''} text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight`}>
            Turn Leads into <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">
              Closed Deals
            </span>
          </h1>

          <p className={`fade-in-up delay-200 ${isLoaded ? 'visible' : ''} text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium`}>
            Streamline your workflow with the DealerTeam Sales App. 
            Automate follow-ups, track inventory, and sign contracts—all in one place.
          </p>

          <div className={`fade-in-up delay-300 ${isLoaded ? 'visible' : ''} flex flex-col sm:flex-row gap-4 justify-center lg:justify-start`}>
            {/* Primary Button - Updated Style to be Pill-shaped and more polished */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-full transition-all shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 overflow-hidden transform hover:-translate-y-0.5">
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
            
            {/* Secondary Button - Updated to match pill shape */}
            <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-full border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              View Demo
            </button>
          </div>

          {/* Social Proof / Trust Indicators */}
          <div className={`fade-in-up delay-400 ${isLoaded ? 'visible' : ''} mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8`}>
             <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">Trusted by top dealerships</div>
             <div className="flex flex-row flex-nowrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 overflow-x-auto md:overflow-hidden pb-2 md:pb-0">
                {/* Client 1: Redding Motors */}
                <div className="flex items-center gap-2 font-bold text-slate-700 whitespace-nowrap">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Redding Motors</span>
                </div>
                {/* Client 2: Shasta Motors */}
                <div className="flex items-center gap-2 font-bold text-slate-700 whitespace-nowrap">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Shasta Motors</span>
                </div>
                {/* Client 3: US Drive Pro */}
                <div className="flex items-center gap-2 font-bold text-slate-700 whitespace-nowrap">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>US Drive Pro</span>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function App() {
  return <HeroSection />;
}