
import React, { useState, useRef, useEffect } from 'react';
import { PERSONAS } from '../constants';
import { PersonaType, ChatMessage } from '../types';
import { chatWithPersona } from '../services/geminiService';
import { Send, Loader2 } from 'lucide-react';

const PersonaDemo: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState(PERSONAS[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await chatWithPersona(input, selectedPersona.type, history as any);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <section id="demo" className="py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-teko text-slate-900 mb-4">Talk to Your Mate</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience the "Oxygen" for your favorite series. Pick a persona and start the conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[600px]">
          {/* Persona Selection */}
          <div className="md:col-span-4 bg-slate-50 p-6 border-r border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-4 uppercase tracking-wider text-sm">Choose Persona</h3>
            <div className="space-y-3">
              {PERSONAS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPersona(p);
                    setMessages([]); // Clear chat when switching persona
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    selectedPersona.id === p.id 
                    ? 'bg-white shadow-md border-l-4 border-[#FF567E]' 
                    : 'hover:bg-white/50 border-l-4 border-transparent'
                  }`}
                >
                  <p className="font-bold text-slate-900">{p.name}</p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">{p.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="md:col-span-8 flex flex-col h-[600px]">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-slate-600">Active: {selectedPersona.name}</span>
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30"
            >
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mb-4">
                    <Send size={24} className="text-slate-400" />
                  </div>
                  <p className="text-sm">Say something about your favorite anime or game!</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    m.role === 'user' 
                    ? 'bg-[#3781F4] text-white rounded-tr-none' 
                    : 'bg-white shadow-sm border border-slate-100 text-slate-800 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2 text-slate-400">
                    <Loader2 className="animate-spin" size={16} />
                    <span className="text-sm italic">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={`Talk to ${selectedPersona.name}...`}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#3781F4]/20 transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={loading}
                  className="bg-[#3781F4] text-white p-3 rounded-xl hover:bg-[#2a6fd9] transition-colors disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaDemo;
