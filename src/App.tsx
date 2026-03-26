/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  AirVent, 
  Building2, 
  Flame, 
  Settings, 
  Mail, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Zap,
  MapPin,
  CheckCircle2
} from "lucide-react";

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-display font-bold mb-4 ${light ? 'text-primary' : 'text-white'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const NeonButton = ({ children, className = "", primary = false, href }: { children: React.ReactNode, className?: string, primary?: boolean, href?: string }) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 242, 255, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all duration-300 ${
        primary 
          ? "bg-primary text-dark neon-border" 
          : "bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
      } ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

const SolutionCard = ({ icon: Icon, title, description, image }: { icon: any, title: string, description: string, image: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="glass-card rounded-2xl overflow-hidden group border-primary/20 hover:border-primary/50 transition-colors"
  >
    <div className="h-48 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
      <div className="absolute bottom-4 left-4 p-2 bg-primary/20 backdrop-blur-md rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
    <div className="p-6 text-center lg:text-left">
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const ProcessCard = ({ number, title, description, image }: { number: string, title: string, description: string, image: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="glass-card rounded-2xl p-6 border-primary/20 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
      <span className="text-8xl font-display font-black text-primary">{number}</span>
    </div>
    <div className="mb-6 h-40 rounded-xl overflow-hidden border border-white/10">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="text-center lg:text-left">
      <h3 className="text-2xl font-display font-bold mb-4 text-primary">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed relative z-10">{description}</p>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div className="bg-mist" />
      
      {/* Top Info Bar */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-primary/10 backdrop-blur-md border border-primary/30 px-6 py-2 rounded-full flex items-center gap-2"
        >
          <Zap className="w-6 h-6 md:w-4 md:h-4 text-primary fill-primary animate-pulse shrink-0" />
          <span className="text-[10px] md:text-sm font-medium text-primary tracking-wider uppercase text-center">
            500+ residências e empresas atendidas na grande Florianópolis
          </span>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Primer Climatização: <br className="hidden md:block" />
              <span className="text-primary neon-text">Sua Excelência em Conforto,</span> <br className="hidden md:block" />
              Nossa Precisão Digital.
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Transformamos engenharia climática em experiências de bem-estar para sua casa ou negócio. 
              As melhores soluções em Ar Condicionado Premium e Aquecimento a Gás para Florianópolis e região.
            </p>
            <NeonButton primary href="https://api.whatsapp.com/send?phone=5548998461681&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20por%20favor.">
              Solicite seu Orçamento Gratuito <ChevronRight className="w-5 h-5" />
            </NeonButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative group"
          >
            {/* LED Sanca Glow Effect */}
            <div className="absolute -inset-1 bg-primary/30 blur-2xl rounded-[2rem] opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a1a]">
              {/* Main Hero Image - Luxury Modern Living Room with Dark Tones */}
              <motion.img 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                src="https://i.imgur.com/h6Gtoux.jpeg" 
                alt="Sala de estar moderna e luxuosa com climatização Primer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay for Blue LED Atmosphere - Stronger Blue Sanca */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-black/60 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-4 bg-primary/40 blur-md pointer-events-none" />
              
              {/* Vertical LED Slat Effect Simulation - Matching the right side of the image */}
              <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-primary/10 to-transparent border-r-4 border-primary/20 pointer-events-none" />

              {/* Advanced Cyan Air Flow Effect - Now covering the full area */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -100, x: -150, opacity: 0, scaleX: 0.5, rotate: -15 }}
                    animate={{ 
                      y: [0, 800], 
                      x: [(i - 4.5) * 50, (i - 4.5) * 100, (i - 4.5) * 150],
                      opacity: [0, 0.6, 0],
                      scaleX: [0.5, 2.5, 1],
                      rotate: [-15, 10, -10]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      delay: i * 0.5,
                      ease: "easeOut"
                    }}
                    className="absolute left-1/2 w-80 h-48 bg-gradient-to-b from-primary/40 via-primary/10 to-transparent blur-3xl rounded-full"
                    style={{ 
                      marginLeft: `${(i - 4.5) * 40}px`,
                      filter: "drop-shadow(0 0 30px rgba(0, 242, 255, 0.5))"
                    }}
                  />
                ))}
                
                {/* Subtle floating particles across the whole image */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    initial={{ y: Math.random() * 500, x: Math.random() * 500 - 250, opacity: 0 }}
                    animate={{ 
                      y: [null, Math.random() * 800],
                      x: [null, Math.random() * 600 - 300],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{ 
                      duration: 10 + Math.random() * 5, 
                      repeat: Infinity, 
                      delay: Math.random() * 5 
                    }}
                    className="absolute left-1/2 w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
                  />
                ))}
              </div>

              {/* Warm Lamp Light Contrast Simulation - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl border-primary/40 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <AirVent className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Tecnologia</p>
                  <p className="text-sm font-bold text-white">Fluxo Inteligente</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <p className="text-gray-500 uppercase tracking-widest text-[10px] md:text-xs font-bold md:whitespace-nowrap text-center md:text-left">
            Impulsionando os melhores ambientes com marcas líderes:
          </p>
          <div className="flex-1 overflow-hidden relative">
            <motion.div 
              className="flex gap-12 md:gap-24 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...["PHILCO", "GREE", "DAIKIN", "FUJITSU", "SAMSUNG", "LG", "AGRATTO"], ...["PHILCO", "GREE", "DAIKIN", "FUJITSU", "SAMSUNG", "LG", "AGRATTO"]].map((brand, idx) => (
                <span 
                  key={`${brand}-${idx}`} 
                  className="text-xl md:text-2xl font-display font-black text-white hover:text-primary transition-colors cursor-default opacity-60 hover:opacity-100"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Conforto térmico e eficiência energética para todos os tipos de projeto.">
            Soluções Completas para Qualquer Espaço
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SolutionCard 
              icon={AirVent}
              title="Ar Condicionado Residencial"
              description="Conforto térmico e ar puro projetados para o seu lar."
              image="https://i.imgur.com/doCyks9.png"
            />
            <SolutionCard 
              icon={Building2}
              title="Ar Condicionado Comercial"
              description="Climatização inteligente e alta eficiência para aumentar a produtividade."
              image="https://i.imgur.com/53qfamM.png"
            />
            <SolutionCard 
              icon={Flame}
              title="Aquecimento a Gás"
              description="Água quente sempre disponível e aquecimento central para máximo conforto."
              image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=300"
            />
            <SolutionCard 
              icon={Settings}
              title="Infraestrutura de Climatização"
              description="Projetos técnicos complexos e instalações sob medida."
              image="https://i.imgur.com/mJWEDLz.png"
            />
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="pt-8 pb-16 md:py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Manutenção Preventiva: <br className="hidden md:block" />
              <span className="text-primary">A chave para longevidade e saúde.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A manutenção regular é a chave para evitar problemas graves no futuro. 
              Nossos técnicos não apenas solucionam, mas previnem interrupções, 
              garantindo a máxima eficiência e durabilidade do seu sistema.
            </p>
            <NeonButton href="https://api.whatsapp.com/send?phone=5548998461681&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20por%20favor.">
              Solicite um Orçamento <ChevronRight className="w-5 h-5" />
            </NeonButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10"
          >
            <img 
              src="https://i.imgur.com/AI9Aftj.png" 
              alt="Técnico de Manutenção Profissional" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Nossa metodologia garante resultados superiores em cada etapa do seu projeto.">
            Como Garantimos Sua Solução Perfeita
          </SectionTitle>
          <div className="grid lg:grid-cols-3 gap-8">
            <ProcessCard 
              number=""
              title="PROJETO"
              description="Um sistema HVAC personalizado começa com um design especializado. Na Primer, seu projeto é liderado por profissionais experientes em climatização residencial, comercial e industrial, garantindo precisão e eficiência ideais."
              image="https://i.imgur.com/Pn47PuD.png"
            />
            <ProcessCard 
              number=""
              title="INSTALAÇÃO"
              description="Implementação perfeita de unidades, acessórios e controles. Nossos técnicos aplicam técnicas avançadas derivadas de um planejamento detalhado do projeto, garantindo o melhor desempenho e longevidade do seu equipamento premium."
              image="https://i.imgur.com/hHeXJgq.png"
            />
            <ProcessCard 
              number=""
              title="MANUTENÇÃO"
              description="Previna paradas inesperadas quando você mais precisa de conforto. A Primer oferece serviços de manutenção abrangentes, aderindo a procedimentos rigorosos e padrões PMOC, para manter seu sistema funcionando sem falhas."
              image="https://i.imgur.com/405vZqc.png"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Ainda tem dúvidas?</h2>
            <p className="text-primary text-xl font-medium neon-text">Entre em contato agora mesmo.</p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden glass-card border-primary/30 flex flex-col md:block h-auto md:h-[500px]">
            {/* Map Container */}
            <div className="h-[250px] md:h-full relative">
              {/* Real Google Maps Embed */}
              <iframe 
                src="https://maps.google.com/maps?q=Servid%C3%A3o%20Sagu%C3%A1%2C%20199%20-%20Ingleses%20do%20Rio%20Vermelho%2C%20Florian%C3%B3polis%20-%20SC%2C%2088058-313&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              
              {/* Map Overlay for better integration */}
              <div className="absolute inset-0 pointer-events-none border-4 border-primary/10 rounded-3xl" />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Servid%C3%A3o+Sagu%C3%A1,+199+-+Ingleses+do+Rio+Vermelho,+Florian%C3%B3polis+-+SC,+88058-313" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-primary text-dark px-4 py-2 rounded-lg text-xs font-bold shadow-neon hover:scale-105 transition-transform"
              >
                VER NO GOOGLE MAPS
              </a>
            </div>

            {/* Contact Info Bar */}
            <div className="relative md:absolute md:bottom-0 md:left-0 w-full p-6 md:p-10 bg-dark/80 backdrop-blur-xl border-t border-primary/20">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <a href="mailto:primerclimatizacao@gmail.com" className="flex flex-col md:flex-row items-center gap-4 group text-center md:text-left">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:text-dark transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                    <p className="text-sm md:text-base font-medium">primerclimatizacao@gmail.com</p>
                  </div>
                </a>
                <a href="tel:5548998461681" className="flex flex-col md:flex-row items-center gap-4 group text-center md:text-left">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:text-dark transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Telefone</p>
                    <p className="text-sm md:text-base font-medium">(48) 99846-1681</p>
                  </div>
                </a>
                <a 
                  href="https://api.whatsapp.com/send?phone=5548998461681&text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20por%20favor." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col md:flex-row items-center gap-4 group text-center md:text-left"
                >
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:text-dark transition-all">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">WhatsApp</p>
                    <p className="text-sm md:text-base font-medium">(48) 99846-1681</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-2 mb-6">
            <AirVent className="w-6 h-6 text-primary" />
            <span className="text-xl font-display font-bold tracking-tighter">PRIMER</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Primer Climatização. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
