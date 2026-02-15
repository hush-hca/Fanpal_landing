
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Twitter, 
  Github, 
  Globe, 
  Users, 
  Zap, 
  Database, 
  Share2, 
  BarChart, 
  MessageSquare,
  Sparkles,
  Menu,
  X,
  Check
} from 'lucide-react';
import { PERSONAS, PRICING_PLANS } from './constants';
import PersonaDemo from './components/PersonaDemo';
import Icon from './components/Icon';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-point rounded-lg flex items-center justify-center">
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="font-teko text-3xl tracking-wide text-slate-900">FANPAL</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-[#FF567E] transition-colors">Features</a>
            <a href="#demo" className="hover:text-[#FF567E] transition-colors">Demo</a>
            <a href="#pricing" className="hover:text-[#FF567E] transition-colors">Pricing</a>
            <a href="#b2b" className="hover:text-[#FF567E] transition-colors">Enterprise</a>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full p-6 shadow-xl border-t border-slate-100 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4 text-lg font-teko tracking-widest text-slate-700">
              <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#demo" onClick={() => setIsMenuOpen(false)}>Demo</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#b2b" onClick={() => setIsMenuOpen(false)}>Enterprise</a>
              <button className="bg-gradient-point text-white px-6 py-3 rounded-xl mt-4">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/50 border border-slate-200 px-3 py-1 rounded-full mb-6">
              <span className="bg-[#FF567E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">New</span>
              <span className="text-slate-600 text-sm font-medium italic">"Never Fan Alone"</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-teko leading-[0.9] text-slate-900 mb-6">
              Revitalize Your <span className="text-gradient-point">Minor Genre</span> Fandom.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Fanpal provides instant 'reactions' and 'content' for classic and niche series. Keep your IP momentum alive with an AI-powered fandom mate that truly understands lore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-point text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl">
                Create My AI Mate <ChevronRight size={20} />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                Enterprise B2B Plan
              </button>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/64/64`} alt="user" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                ))}
              </div>
              <p className="text-slate-500 text-sm">Join <span className="font-bold text-slate-900 italic">2,500+</span> fans breathing oxygen into dead series.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-point blur-[100px] opacity-20 -z-10 rounded-full"></div>
            <div className="bg-white/40 backdrop-blur-sm border border-white p-4 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="bg-slate-900 rounded-2xl p-6 h-[450px] flex flex-col justify-end text-white overflow-hidden relative">
                 <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <img src="https://picsum.photos/seed/anime/800/800" className="w-full h-full object-cover" />
                 </div>
                 <div className="relative z-10 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-full bg-gradient-point"></div>
                       <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-[#FF567E]">Lore Master AI</p>
                          <p className="text-[10px] text-white/60">@Fanpal_Oxygen</p>
                       </div>
                    </div>
                    <p className="text-sm italic">"The foreshadowing in Episode 22 of Slam Dunk literally hits different in 2024. Who else noticed the way Sakuragi looked at the court? 🏀✨ #SlamDunk #ClassicAnime"</p>
                 </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-10 right-10 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="bg-pink-100 text-[#FF567E] p-2 rounded-lg">
                  <Share2 size={16} />
                </div>
                <div className="text-xs font-bold text-slate-800">Auto-X Posting</div>
              </div>
              <div className="absolute bottom-20 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="bg-blue-100 text-[#3781F4] p-2 rounded-lg">
                  <Database size={16} />
                </div>
                <div className="text-xs font-bold text-slate-800">RAG Lore Engine</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-teko text-slate-900 mb-4">Core Implementation Strategy</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our AI doesn't just translate—it learns slang, genre-specific terminology, and real-time trends from Reddit, Twitter, and beyond.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 text-[#FF567E]">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-teko text-slate-900 mb-3">Persona Customization</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Define your AI’s personality: Hype-man, Analyst, Theorist, or Creative Prompt Generator. Our AI adapts its tone to match your fandom's specific vibe.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 text-[#3781F4]">
                <Database size={32} />
              </div>
              <h3 className="text-2xl font-teko text-slate-900 mb-3">RAG Lore Engine</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Powered by proprietary RAG technology, Fanpal databases original settings and episodes to prevent 'OOC' (Out of Character) moments or lore errors.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 text-slate-900">
                <Twitter size={32} />
              </div>
              <h3 className="text-2xl font-teko text-slate-900 mb-3">X Integration</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Your AI mate isn't just a chatbot; it reacts to mentions, retweets, and likes independently, maintaining a vibrant presence on the X ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <div className="bg-slate-50/50">
        <PersonaDemo />
      </div>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-teko text-slate-900 mb-4">Subscription Tiers</h2>
            <p className="text-slate-500">Pick the level of "Oxygen" your fandom needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`p-10 rounded-[2.5rem] border transition-all duration-300 ${
                  plan.recommended 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105' 
                  : 'bg-white text-slate-900 border-slate-100 hover:shadow-xl'
                }`}
              >
                {plan.recommended && (
                  <span className="bg-gradient-point text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-6 inline-block">Recommended</span>
                )}
                <h3 className="text-3xl font-teko mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold">{plan.price.split('/')[0]}</span>
                  <span className={plan.recommended ? 'text-slate-400' : 'text-slate-500'}>
                    /{plan.price.split('/')[1]}
                  </span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <div className={`p-1 rounded-full ${plan.recommended ? 'bg-white/10' : 'bg-slate-100'}`}>
                        <Check size={14} className={plan.recommended ? 'text-[#FF567E]' : 'text-slate-900'} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.recommended 
                  ? 'bg-gradient-point text-white hover:brightness-110' 
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section id="b2b" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Zap className="w-full h-full text-[#3781F4]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-teko mb-6">SaaS for Studios & IP Holders</h2>
              <p className="text-slate-400 text-lg mb-8">
                Your IP may have concluded, but your fandom must stay alive. Deploy a fleet of AI accounts during release hiatuses to provide virtual momentum.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-[#FF567E]/20 p-3 rounded-2xl h-fit">
                    <BarChart className="text-[#FF567E]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Insight Dashboard</h4>
                    <p className="text-slate-400 text-sm">Real-time reports derived from AI-user dialogue: most mentioned characters, desired plot developments, etc.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#3781F4]/20 p-3 rounded-2xl h-fit">
                    <MessageSquare className="text-[#3781F4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Risk-Free Testing</h4>
                    <p className="text-slate-400 text-sm">Strategically tease settings or character designs through AI accounts ("Leaks") to gather authentic fan sentiment.</p>
                  </div>
                </div>
              </div>

              <button className="mt-12 bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
                Request B2B Demo <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 space-y-4">
                 <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-point"></div>
                 </div>
                 <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Fandom Retention</p>
                 <p className="text-3xl font-teko">94% Retention</p>
                 <p className="text-[10px] text-slate-500">During long hiatus periods compared to 40% organic retention.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 space-y-4 mt-8">
                 <Icon name="Users" className="text-[#3781F4]" size={32} />
                 <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Fan Engagement</p>
                 <p className="text-3xl font-teko">5x Active Posts</p>
                 <p className="text-[10px] text-slate-500">Increase in organic community discussion via AI seed topics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-point rounded-lg flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <span className="font-teko text-3xl tracking-wide text-slate-900">FANPAL</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                The one-of-a-kind AI Fandom Mate. Revitalizing dormant IPs and empowering minor genre fans across the globe.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#FF567E] transition-colors cursor-pointer">
                  <Twitter size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#FF567E] transition-colors cursor-pointer">
                  <Github size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#FF567E] transition-colors cursor-pointer">
                  <Globe size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Lore Engine Docs</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Twitter API Integration</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Affiliate Program</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">IP Licensing</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Brand Assets</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-100 flex flex-col md:row justify-between items-center gap-4 text-xs text-slate-400">
            <p>&copy; 2024 Fanpal (Fandom Oxygen). All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
