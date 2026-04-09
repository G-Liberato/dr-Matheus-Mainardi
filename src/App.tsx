/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  X,
  ChevronRight,
  MapPin,
  Clock
} from 'lucide-react';

const EXPERT_DATA = {
  name: "Dr. Matheus Mainardi",
  profession: "Especialista em Lentes em Resina",
  city: "Goianésia - GO",
  whatsapp: "https://wa.me/5562984761355",
  instagram: "https://www.instagram.com/dr.matheusmainardi/",
};

const IMAGES = {
  hero: "https://i.imgur.com/FJkAjVs.png",
  expert: "https://i.imgur.com/6ltEBIY.jpeg",
  results: [
    "https://i.imgur.com/JtBo7cP.jpeg",
    "https://i.imgur.com/z15LzLo.jpeg",
    "https://i.imgur.com/ePwAArU.jpeg",
    "https://i.imgur.com/5IBlX6n.jpeg",
    "https://i.imgur.com/ZZTLoHv.jpeg",
    "https://i.imgur.com/8X8oFVQ.jpeg",
    "https://i.imgur.com/RTdJNUI.jpeg",
    "https://i.imgur.com/IWayrF8.jpeg",
    "https://i.imgur.com/gW7NmVV.jpeg",
    "https://i.imgur.com/YP6Rt9G.jpeg",
  ]
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const CTAButton = ({ className = "", text = "Agendar primeira consulta gratuita no WhatsApp", gold = false }) => (
    <a 
      href={EXPERT_DATA.whatsapp} 
      target="_blank" 
      rel="noopener noreferrer"
      className={gold ? `btn-gold ${className}` : `btn-premium ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );

  return (
    <div className="min-h-screen selection:bg-premium-gold selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-bg via-premium-bg/40 to-transparent" />
        </div>

        <div className="relative z-10 px-6 pb-12 max-w-lg mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-premium-gold font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
              {EXPERT_DATA.city}
            </span>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] mb-6">
              Eu sou <span className="italic">{EXPERT_DATA.name}</span>, transformo sorrisos com arte e precisão.
            </h1>
            <p className="text-lg text-premium-ink/70 mb-8 leading-relaxed">
              Especialista em Lentes em Resina, focado em devolver sua autoestima com um sorriso natural e harmônico.
            </p>
            
            <div className="space-y-4">
              <CTAButton />
              <p className="text-center text-xs text-premium-ink/50 flex items-center justify-center gap-2">
                <Clock className="w-3 h-3" /> Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="section-padding bg-white">
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={IMAGES.expert} 
                alt="Dr. Matheus Mainardi em atendimento"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl">
                <p className="text-sm italic font-serif">
                  "Minha missão é elevar a confiança de cada paciente através de um sorriso que transparece sua melhor versão."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-serif">Excelência e <span className="italic">Humanização</span></h2>
              <p className="text-premium-ink/80 leading-relaxed">
                Diferente de clínicas corporativas, meu atendimento é 100% focado em você. Cada detalhe das suas lentes é planejado para respeitar a anatomia do seu rosto e a naturalidade que você busca.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Planejamento digital personalizado",
                  "Resinas de alta performance e durabilidade",
                  "Procedimento indolor e minimamente invasivo",
                  "Acompanhamento próximo em todas as etapas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-premium-gold shrink-0 mt-0.5" />
                    <span className="text-premium-ink/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="section-padding">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Resultados <span className="italic">Reais</span></h2>
            <p className="text-premium-ink/60">Toque na imagem para ampliar e ver os detalhes.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {IMAGES.results.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedImage(img)}
                className="aspect-square rounded-2xl overflow-hidden cursor-zoom-in group relative"
              >
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Sparkles className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] text-center mt-6 text-premium-ink/40 uppercase tracking-widest">
            Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="section-padding bg-premium-ink text-premium-bg">
        <div className="max-w-lg mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Por que <span className="italic text-premium-gold">confiar</span> em mim?</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Star className="w-6 h-6" />,
                title: "Avaliação Honesta",
                desc: "Não vendo procedimentos, entrego soluções reais para o seu caso específico."
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Atendimento Direto",
                desc: "Você fala diretamente comigo, sem intermediários ou burocracia de clínicas."
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Foco no Natural",
                desc: "Minha técnica prioriza a harmonia facial, evitando aquele aspecto artificial."
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Referência em Goianésia",
                desc: "Anos de experiência transformando sorrisos na nossa região."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 border border-premium-bg/10 rounded-3xl bg-white/5"
              >
                <div className="text-premium-gold mb-4">{card.icon}</div>
                <h3 className="text-xl font-serif mb-2">{card.title}</h3>
                <p className="text-premium-bg/60 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="section-padding text-center">
        <div className="max-w-lg mx-auto space-y-8">
          <div className="inline-block p-3 bg-premium-gold/10 rounded-full">
            <Sparkles className="text-premium-gold w-6 h-6" />
          </div>
          <h2 className="text-3xl font-serif">Seu novo sorriso começa com uma conversa sem compromisso.</h2>
          <p className="text-premium-ink/70">A primeira consulta é totalmente gratuita para que possamos avaliar seu caso com calma.</p>
          <CTAButton gold />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="section-padding bg-white">
        <div className="max-w-lg mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Jornada do seu <span className="italic">Novo Sorriso</span></h2>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "WhatsApp",
                desc: "Clique no botão e me envie uma mensagem. Vamos agendar o melhor horário para você."
              },
              {
                step: "02",
                title: "Agendamento",
                desc: "Confirmamos sua consulta gratuita em meu consultório em Goianésia."
              },
              {
                step: "03",
                title: "Avaliação",
                desc: "Analisamos seu sorriso e criamos o planejamento perfeito para suas lentes."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <span className="text-4xl font-serif text-premium-gold/30 font-bold">{item.step}</span>
                <div>
                  <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                  <p className="text-premium-ink/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-premium-bg rounded-3xl border border-premium-gold/20 text-center">
            <p className="text-sm font-medium text-premium-gold uppercase tracking-widest mb-2">Lembre-se</p>
            <p className="text-premium-ink/80 italic">"A primeira consulta é gratuita e você não tem nenhuma obrigação de fechar o tratamento."</p>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="section-padding bg-premium-ink text-premium-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-premium-gold/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-premium-gold/10 blur-[100px] rounded-full" />
        
        <div className="max-w-lg mx-auto text-center relative z-10">
          <h2 className="text-5xl font-serif mb-8 leading-tight">
            Pronto para <span className="italic text-premium-gold">sorrir</span> com confiança?
          </h2>
          <p className="text-lg text-premium-bg/70 mb-12">
            Não deixe para depois a transformação que você merece hoje.
          </p>
          <div className="space-y-6">
            <CTAButton gold className="w-full py-6 text-lg" />
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-premium-ink bg-premium-bg/20 flex items-center justify-center text-[10px]">
                    <Star className="w-3 h-3 text-premium-gold fill-premium-gold" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-premium-bg/50 uppercase tracking-widest">Pacientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 border-t border-premium-ink/5 text-center">
        <div className="max-w-lg mx-auto space-y-6">
          <h3 className="font-serif text-2xl">{EXPERT_DATA.name}</h3>
          <p className="text-sm text-premium-ink/50 uppercase tracking-[0.2em]">
            {EXPERT_DATA.profession} • {EXPERT_DATA.city}
          </p>
          
          <div className="flex justify-center gap-4">
            <a 
              href={EXPERT_DATA.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-premium-ink/10 flex items-center justify-center hover:bg-premium-ink hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={EXPERT_DATA.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-premium-ink/10 flex items-center justify-center hover:bg-premium-ink hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-[10px] text-premium-ink/30 pt-8">
            © {new Date().getFullYear()} {EXPERT_DATA.name}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-premium-ink/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Resultado ampliado"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
