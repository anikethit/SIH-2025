import { useState, useEffect } from "react";

const AarogyaMitraWebsite = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-900 to-emerald-900 text-white">
       {/* Navbar */}
       <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-green-900/95 backdrop-blur-md shadow-xl border-b border-green-700/50"
            : "bg-transparent"
        }`}
       >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1
                className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-300 cursor-pointer"
                onClick={() => scrollToSection("hero")}
              >
                🏥 Aarogya Mitra
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white hover:text-lime-300 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("problems")}
                className="text-white hover:text-lime-300 transition-colors duration-200 font-medium"
              >
                Challenges
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white hover:text-lime-300 transition-colors duration-200 font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-white hover:text-lime-300 transition-colors duration-200 font-medium"
              >
                How It Works
              </button>
              <a
                href="https://www.chatbase.co/61gnKk7x40Nrz5BX30Ka1/help"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-lime-500 to-green-600 text-white font-bold rounded-xl hover:from-lime-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-lime-500/25 transform hover:scale-105"
              >
                Try Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-lime-300 focus:outline-none focus:text-lime-300 transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-green-900/95 backdrop-blur-md rounded-lg mt-2 border border-green-700/50">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block px-3 py-2 text-white hover:text-lime-300 hover:bg-green-800/50 rounded-md transition-all duration-200 w-full text-left font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("problems")}
                  className="block px-3 py-2 text-white hover:text-lime-300 hover:bg-green-800/50 rounded-md transition-all duration-200 w-full text-left font-medium"
                >
                  Challenges
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="block px-3 py-2 text-white hover:text-lime-300 hover:bg-green-800/50 rounded-md transition-all duration-200 w-full text-left font-medium"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="block px-3 py-2 text-white hover:text-lime-300 hover:bg-green-800/50 rounded-md transition-all duration-200 w-full text-left font-medium"
                >
                  How It Works
                </button>
                <a
                  href="https://www.chatbase.co/61gnKk7x40Nrz5BX30Ka1/help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 mt-2 bg-gradient-to-r from-lime-500 to-green-600 text-white font-bold rounded-md hover:from-lime-600 hover:to-green-700 transition-all duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Try Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-green-900 to-emerald-900 to-teal-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>
        
        {/* Floating Medical Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-6xl text-white/10 animate-bounce">🏥</div>
          <div className="absolute top-1/3 right-1/3 text-4xl text-white/10 animate-bounce animation-delay-1000">💊</div>
          <div className="absolute bottom-1/4 left-1/3 text-5xl text-white/10 animate-bounce animation-delay-2000">🩺</div>
          <div className="absolute bottom-1/3 right-1/4 text-4xl text-white/10 animate-bounce animation-delay-3000">❤️</div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-200 to-emerald-300 mb-6 leading-tight">
              Aarogya Mitra
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-lime-400 to-emerald-400 mx-auto mb-8"></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed font-light">
            Revolutionary AI-powered healthcare assistance<br />
            <span className="text-lime-300 font-semibold">for every village in India</span>
          </p>
          
          <div className="space-y-6">
            <a 
              href="https://www.chatbase.co/61gnKk7x40Nrz5BX30Ka1/help" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-lime-500 to-green-600 text-white text-xl font-bold rounded-2xl hover:from-lime-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-lime-500/25 transform hover:scale-105 hover:-translate-y-2"
            >
              <span className="mr-3">🤖</span>
              Start Your Health Journey
            </a>   
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-lg">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Available 24/7
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                10+ Languages
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Voice Enabled
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-24 px-6 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div  className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              The Healthcare Crisis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Rural India faces unprecedented healthcare challenges that demand immediate attention
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🌍",
                title: "Language Barriers",
                desc: "Healthcare information remains trapped in English while communities speak 700+ local languages",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: "⚡",
                title: "Critical Delays",
                desc: "Life-saving health alerts reach remote villages days or weeks too late, costing precious lives",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "📱",
                title: "Information Desert",
                desc: "Limited internet and no healthcare professionals leave communities vulnerable to misinformation",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: "🏔️",
                title: "Geographic Isolation",
                desc: "Nearest hospitals are hours away, making preventive care and emergency response nearly impossible",
                color: "from-blue-500 to-cyan-500"
              }
            ].map((problem, index) => (
              <div key={index} className="group">
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-700/50 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${problem.color}`}></div>
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {problem.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white">{problem.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">{problem.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section  id="features" className="py-24 px-6 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology meets compassionate healthcare
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🗣️",
                title: "Voice-First Interface",
                desc: "Natural conversations in your mother tongue with advanced speech recognition",
                gradient: "from-purple-400 to-pink-400",
                bgGradient: "from-gray-800/30 to-gray-700/30"
              },
              {
                icon: "🌐",
                title: "Multi-Language AI",
                desc: "Fluent in 10+ Indian languages with cultural context understanding",
                gradient: "from-blue-400 to-cyan-400",
                bgGradient: "from-gray-800/30 to-gray-700/30"
              },
              {
                icon: "🚨",
                title: "Smart Alerts",
                desc: "Real-time disease outbreak notifications and preventive measures",
                gradient: "from-red-400 to-orange-400",
                bgGradient: "from-gray-800/30 to-gray-700/30"
              },
              {
                icon: "💉",
                title: "Vaccination Tracker",
                desc: "Never miss crucial immunizations with intelligent reminders",
                gradient: "from-green-400 to-emerald-400",
                bgGradient: "from-gray-800/30 to-gray-700/30"
              },
              {
                icon: "📶",
                title: "Offline Ready",
                desc: "Essential health guidance even without internet connectivity",
                gradient: "from-indigo-400 to-purple-400",
                bgGradient: "from-gray-800/30 to-gray-700/30"
              },
              {
                icon: "🎯",
                title: "Hyper-Local",
                desc: "Location-specific health recommendations and nearby facility mapping",
                gradient: "from-teal-400 to-blue-400",
                bgGradient: "from-gray-800/30 to-gray-700/30"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className={`relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700/50`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-3xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section  id="how-it-works"  className="py-24 px-6 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-300">
              Simple. Powerful. Life-Saving.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three steps to transform healthcare access in your community
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid lg:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Connect Instantly",
                  desc: "Click and start chatting - no apps, no registration, no barriers",
                  color: "from-lime-500 to-green-500"
                },
                {
                  step: "02", 
                  title: "Speak Naturally",
                  desc: "Describe symptoms in your language using voice or text",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: "03",
                  title: "Get Expert Guidance",
                  desc: "Receive instant, reliable health advice tailored to your needs",
                  color: "from-emerald-500 to-teal-500"
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className={`mx-auto w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                    <span className="text-2xl font-black text-white">{step.step}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-sm mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a 
              href="https://www.chatbase.co/61gnKk7x40Nrz5BX30Ka1/help" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-lime-500 to-green-600 text-white text-xl font-bold rounded-2xl hover:from-lime-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-lime-500/25 transform hover:scale-105"
            >
              <span className="mr-3">🚀</span>
              Experience Aarogya Mitra
            </a>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-green-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-300">
                🏥 Aarogya Mitra
              </h4>
              <p className="text-green-100 mb-4">
                Making healthcare accessible to everyone, everywhere, in every language.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4 text-lime-300">Quick Links</h5>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block text-green-100 hover:text-lime-300 transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("problems")}
                  className="block text-green-100 hover:text-lime-300 transition-colors duration-200"
                >
                  Challenges
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="block text-green-100 hover:text-lime-300 transition-colors duration-200"
                >
                  Features
                </button>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4 text-lime-300">Services</h5>
              <div className="space-y-2">
                <p className="text-green-100">AI Health Assessment</p>
                <p className="text-green-100">Symptom Checker</p>
                <p className="text-green-100">Medicine Information</p>
                <p className="text-green-100">Healthcare Directory</p>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4 text-lime-300">Languages</h5>
              <div className="space-y-2">
                <p className="text-green-100">Hindi • हिंदी</p>
                <p className="text-green-100">Bengali • বাংলা</p>
                <p className="text-green-100">English • English</p>
                <p className="text-green-100">Odia • ଓଡ଼ିଆ</p>

              </div>
            </div>
          </div>
          
          <div className="border-t border-green-700 pt-8 text-center">
            <p className="text-green-100">
              © 2025 Aarogya Mitra. Empowering rural healthcare through technology. 
              <span className="block mt-2 text-sm">
                This is an AI-powered healthcare assistant. Always consult a qualified doctor for medical advice.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AarogyaMitraWebsite;