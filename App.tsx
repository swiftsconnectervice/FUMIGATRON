
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { trackCTA } from './src/lib/tracking';

// --- Helper Components ---

const SectionHeading: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className={`h-1 w-16 bg-brand-green rounded-full mt-4 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

const FeatureCard: React.FC<{ icon: string; title: string; desc: string; color: string; isPopular?: boolean }> = ({ icon, title, desc, color, isPopular }) => (
  <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
    {isPopular && (
      <span className="absolute -top-3 right-6 bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
        Popular
      </span>
    )}
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${color}`}>
      <span className="material-icons-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-lg font-bold mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

// --- Main Components ---

const TopBar = () => (
  <div className="bg-brand-green text-white py-2 text-sm hidden md:block">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-icons-outlined text-base">phone</span>
          <span className="font-semibold">ATENCIÓN A CLIENTES:</span>
          <a href="tel:5570297410" className="hover:underline">557029 7410</a>
          <span>|</span>
          <a href="tel:5546329117" className="hover:underline">554632 9117</a>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span className="font-semibold">WHATSAPP:</span>
          <a href="https://wa.me/5520872132" className="hover:underline">55 2087 2132</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-white/70 text-xs">Síguenos:</span>
        <a href="https://www.facebook.com/fumigalex" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="https://www.instagram.com/fumigalex/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://www.tiktok.com/@fumigatron" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="TikTok">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
        </a>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const navLinks = [
    { label: 'INICIO', href: '/', isRoute: true },
    { label: 'QUIÉNES SOMOS', href: '/nosotros', isRoute: true },
    { label: 'SERVICIOS', href: '/servicios', isRoute: true },
    { label: 'PLAGAS', href: '/plagas', isRoute: true },
    { label: 'CONTACTO', href: '/contacto', isRoute: true },
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <TopBar />
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-display font-black text-xl md:text-2xl tracking-tight text-brand-green">
            FUMIGATRO<span className="text-brand-forest">N</span>
          </span>
          <span className="text-[10px] md:text-xs text-gray-500 italic -mt-1">Nosotros sí podemos</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link 
                key={link.label}
                to={link.href} 
                className="text-sm font-semibold text-gray-700 hover:text-brand-green transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-green after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ) : (
              <a 
                key={link.label}
                href={link.href} 
                className="text-sm font-semibold text-gray-700 hover:text-brand-green transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-green after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          <span className="material-icons-outlined text-2xl text-gray-700">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2 animate-fadeIn shadow-lg">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link 
                key={link.label}
                to={link.href} 
                className="block py-3 px-4 text-sm font-semibold text-gray-700 hover:text-brand-green hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a 
                key={link.label}
                href={link.href} 
                className="block py-3 px-4 text-sm font-semibold text-gray-700 hover:text-brand-green hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          ))}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a href="tel:5570297410" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="material-icons-outlined text-brand-green">phone</span>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase">Atención a clientes</p>
                <p className="font-bold text-sm">557029 7410</p>
              </div>
            </a>
            <a href="https://wa.me/5520872132" className="flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <span className="material-icons-outlined text-brand-green">chat</span>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase">WhatsApp</p>
                <p className="font-bold text-sm">55 2087 2132</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative py-10 md:py-16 lg:py-20 overflow-hidden bg-white">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="fade-in space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-green text-xs font-bold tracking-wide uppercase">
          <span className="material-icons-outlined text-sm">location_on</span>
          Cobertura inmediata en CDMX y Edo. Méx.
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight italic">
          Erradicación de Plagas con Precisión y Cero Riesgos.
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
          Especialistas en fumigación, control de plagas y desinfección con protocolos adaptados a tu entorno. <span className="font-bold text-gray-900">Resultados garantizados desde la primera visita.</span>
        </p>
        <div className="flex flex-col gap-3 max-w-xl">
          <div className="flex items-start gap-3 bg-green-50 rounded-xl p-4">
            <span className="material-icons-outlined text-brand-green mt-0.5">check_circle</span>
            <div>
              <p className="font-bold text-gray-900 text-sm md:text-base">Para tu Hogar</p>
              <p className="text-gray-600 text-sm">Fórmulas 100% seguras para niños y mascotas.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-green-50 rounded-xl p-4">
            <span className="material-icons-outlined text-brand-green mt-0.5">check_circle</span>
            <div>
              <p className="font-bold text-gray-900 text-sm md:text-base">Para tu Empresa</p>
              <p className="text-gray-600 text-sm">Cumplimiento normativo estricto (clínicas, restaurantes, oficinas).</p>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <a
            href="https://wa.me/5520872132?text=Hola%2C%20estaba%20viendo%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20y%20precios%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTA('hero_especialista', 'inicio')}
            className="inline-block px-6 sm:px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-lg"
          >
            Hablar con un Especialista ahora
          </a>
        </div>
      </div>
      
      <div className="relative fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop" 
            alt="Familia feliz en su hogar protegido" 
            className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
          />
          {/* Stats Card */}
          <div className="absolute -bottom-4 left-4 md:bottom-6 md:left-6 bg-brand-green text-white p-4 md:p-5 rounded-xl shadow-xl">
            <p className="text-2xl md:text-3xl font-black">+15,000</p>
            <p className="text-xs md:text-sm opacity-90">Hogares protegidos</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <div className="bg-gray-50 py-12 border-y border-gray-100">
    <div className="container mx-auto px-4 text-center">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Tecnología biológica respaldada por:</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
        <img src="/images/Bayer.png" alt="Bayer" className="h-10 md:h-14 object-contain opacity-60 hover:opacity-100 transition-opacity" />
        <img src="/images/bell.png" alt="Bell Labs" className="h-10 md:h-14 object-contain opacity-60 hover:opacity-100 transition-opacity" />
        <img src="/images/allister.png" alt="Allister" className="h-10 md:h-14 object-contain opacity-60 hover:opacity-100 transition-opacity" />
        <img src="/images/agromundo.png" alt="Agromundo" className="h-10 md:h-14 object-contain opacity-60 hover:opacity-100 transition-opacity" />
        <img src="/images/bird.png" alt="Bird" className="h-10 md:h-14 object-contain opacity-60 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </div>
);

const BenefitsAndTestimonials = () => (
  <section>
    {/* Benefits Section - Green Background */}
    <div className="bg-brand-green py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center text-white">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons-outlined text-3xl">home</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Libres de plagas en 1 visita</h3>
            <p className="text-lg md:text-xl opacity-90">Aplicamos métodos innovadores y efectivos</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons-outlined text-3xl">health_and_safety</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Prevención contra enfermedades</h3>
            <p className="text-lg md:text-xl opacity-90">Desinfección de alto nivel que neutraliza virus y bacterias al contacto.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons-outlined text-3xl">verified_user</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Garantía y reporte por escrito</h3>
            <p className="text-lg md:text-xl opacity-90">Contamos con licencia sanitaria.</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Dual CTA Section */}
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">¿Cómo podemos ayudarte?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Selecciona la opción que mejor se adapte a tus necesidades y te atenderemos de inmediato.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Hogar / B2C */}
          <div className="bg-green-50 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center border border-green-100">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-icons-outlined text-4xl text-brand-green">home</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Para tu Hogar</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Protege a tu familia con productos 100% seguros para niños y mascotas. Evaluación urgente sin compromiso.
            </p>
            <a
              href="https://wa.me/5520872132?text=Hola%20Fumigatron.%20Tengo%20un%20problema%20de%20plagas%20en%20mi%20hogar%20y%20necesito%20una%20evaluaci%C3%B3n%20urgente.%20%C2%BFMe%20pueden%20ayudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA('dual_cta_hogar', 'inicio')}
              className="inline-flex items-center gap-2 px-6 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-lg mt-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Solicitar ayuda urgente para mi casa
            </a>
          </div>

          {/* Empresas / B2B */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center border border-gray-200">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <span className="material-icons-outlined text-4xl text-blue-700">business</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Para tu Empresa</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Soluciones de cumplimiento normativo para clínicas, restaurantes, oficinas y más. Certificación con validez oficial.
            </p>
            <a
              href="https://wa.me/5520872132?text=Hola%20Fumigatron.%20Represento%20a%20una%20empresa%2Fnegocio%20y%20requiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20control%20de%20plagas%20y%20cumplimiento%20normativo."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA('dual_cta_empresa', 'inicio')}
              className="inline-flex items-center gap-2 px-6 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-lg mt-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Cotizar servicio corporativo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-gray-50 py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg relative pt-14">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" 
              alt="Elena R." 
              className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            "Había intentado de todo para las cucarachas y nada funcionaba. Vinieron ellos y en una sola sesión el problema desapareció. ¡Por fin puedo dormir tranquila!"
          </p>
          <p className="font-bold text-brand-green">Elena R.</p>
        </div>
        
        {/* Testimonial 2 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg relative pt-14">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
              alt="Ricardo M." 
              className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            "Lo que más me gustó es que no huele a nada. Tengo dos gatos y un bebé, y me explicaron perfectamente por qué era seguro para ellos."
          </p>
          <p className="font-bold text-brand-green">Ricardo M.</p>
        </div>
        
        {/* Testimonial 3 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg relative pt-14">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
              alt="Javier T." 
              className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            "Puntuales y muy profesionales. Me entregaron mi certificado de fumigación válido para mi negocio ante las autoridades sanitarias."
          </p>
          <p className="font-bold text-brand-green">Javier T. (Dueño de Restaurante)</p>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSteps = () => (
  <section className="bg-brand-forest py-16 md:py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
          Tu espacio libre de plagas en 3 pasos sencillos
        </h2>
        <div className="h-1 w-16 bg-emerald-400 rounded-full mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto">
        {/* Paso 1 */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="absolute -top-4 left-6 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Paso 1
          </div>
          <div className="text-4xl mb-5 mt-2"><span className="material-icons-outlined text-emerald-400 text-4xl">smartphone</span></div>
          <h3 className="text-lg font-bold text-white mb-3">Diagnóstico por WhatsApp</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Escríbenos o envíanos una foto de tu problema. Un experto evaluará tu nivel de riesgo y te dará una cotización exacta en minutos, sin compromisos.
          </p>
        </div>

        {/* Paso 2 */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="absolute -top-4 left-6 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Paso 2
          </div>
          <div className="text-4xl mb-5 mt-2"><span className="material-icons-outlined text-emerald-400 text-4xl">gps_fixed</span></div>
          <h3 className="text-lg font-bold text-white mb-3">Intervención Precisa</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Nuestros técnicos acuden con puntualidad y aplican un tratamiento de grado alimenticio de forma rápida y segura, sin que tengas que abandonar el lugar por horas.
          </p>
        </div>

        {/* Paso 3 */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="absolute -top-4 left-6 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Paso 3
          </div>
          <div className="text-4xl mb-5 mt-2"><span className="material-icons-outlined text-emerald-400 text-4xl">verified_user</span></div>
          <h3 className="text-lg font-bold text-white mb-3">Certificación y Licencia Sanitaria</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            El problema queda resuelto desde la primera visita. Te entregamos tu garantía por escrito, recomendaciones de prevención y tu certificado de sanidad avalado por Cofepris.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="https://wa.me/5520872132?text=Hola%20Fumigatron.%20Quiero%20empezar%20con%20el%20diagn%C3%B3stico%20de%20mi%20problema%20de%20plagas."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCTA('pasos_diagnostico', 'inicio')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold text-base transition-all hover:scale-105 shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Quiero empezar el Paso 1 ahora
        </a>
      </div>
    </div>
  </section>
);

const ComparisonTable = () => {
  const rows = [
    {
      benefit: 'Velocidad de Resultados',
      us: 'Servicios focalizados. Resultados inmediatos.',
      others: 'Múltiples visitas (hasta 3 o más). Tratan el síntoma, no las anidaciones, alargando tu problema.',
    },
    {
      benefit: 'Enfoque del Tratamiento',
      us: 'Analizamos el origen y evitamos que regresen. Prevención a largo plazo.',
      others: 'Reactivo. Solo matan lo que ves hoy. El problema vuelve en semanas.',
    },
    {
      benefit: 'Seguridad y Productos',
      us: 'Dosis mínimas y responsables. Fórmulas biodegradables avanzadas.',
      others: 'Exceso de toxicidad. Riesgo de intoxicación por químicos baratos.',
    },
    {
      benefit: 'Nivel de Experiencia',
      us: 'Asesores certificados. Expertos en Manejo Integral de Plagas (MIP).',
      others: 'Prueba y error. Basado en "tutoriales de Google" o remedios caseros.',
    },
    {
      benefit: 'Respaldo y Tranquilidad',
      us: 'Somos tu aliado estratégico. Contamos con técnicos especializados.',
      others: 'Sin respaldo y sin soluciones concretas, pierdes tu dinero y tu tiempo.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            ¿Por qué elegir a un Asesor Profesional?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            El verdadero costo de las soluciones temporales es la salud de tu familia y la reputación de tu negocio.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-[1fr_1.3fr_1.3fr] bg-gray-800 text-white">
            <div className="p-5 font-bold text-sm">Lo que realmente necesitas</div>
            <div className="p-5 font-bold text-sm text-center bg-brand-green/90"><span className="material-icons-outlined text-sm align-middle mr-1">verified_user</span> FUMIGATRON — Tu Socio Experto</div>
            <div className="p-5 font-bold text-sm text-center"><span className="material-icons-outlined text-sm align-middle mr-1">cancel</span> Servicios Tradicionales</div>
          </div>
          <div className="divide-y divide-gray-100">
            {rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-[1fr_1.3fr_1.3fr] ${i % 2 === 1 ? 'bg-gray-50' : ''}`}>
                <div className="p-5 font-semibold text-gray-900 text-sm flex items-start">{row.benefit}</div>
                <div className="p-5 text-sm text-gray-700 bg-green-50/50 border-x border-green-100">{row.us}</div>
                <div className="p-5 text-sm text-gray-500">{row.others}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {rows.map((row, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="bg-gray-800 text-white px-4 py-3 font-semibold text-sm">{row.benefit}</div>
              <div className="p-4 bg-green-50 border-b border-green-100">
                <p className="text-xs font-bold text-brand-green mb-1"><span className="material-icons-outlined text-xs align-middle mr-1">verified_user</span> FUMIGATRON</p>
                <p className="text-sm text-gray-700">{row.us}</p>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-gray-400 mb-1"><span className="material-icons-outlined text-xs align-middle mr-1">cancel</span> Servicios Tradicionales</p>
                <p className="text-sm text-gray-500">{row.others}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeading title="Por qué somos la opción segura para su hogar" />
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon="thermostat"
          title="DIAGNÓSTICO TÉRMICO"
          desc="No adivinamos dónde está el nido. Usamos cámaras térmicas para detectar la actividad biológica detrás de sus muros sin romper nada."
          color="bg-blue-50 text-blue-600"
        />
        <FeatureCard 
          icon="science"
          isPopular={true}
          title="LA BOMBA INTELIGENTE"
          desc="Micro-aspersión de moléculas activas que solo afectan el sistema nervioso de los insectos. Totalmente inocuo para humanos y mamíferos."
          color="bg-green-50 text-brand-green"
        />
        <FeatureCard 
          icon="shield"
          title="ESCUDO 30 DÍAS"
          desc="Nuestro producto crea una barrera invisible que sigue trabajando. Si una plaga intenta entrar en los próximos 30 días, será eliminada."
          color="bg-purple-50 text-purple-600"
        />
      </div>
    </div>
  </section>
);

const ServiceDetails = () => (
  <section className="py-24 bg-gray-50 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 relative group">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="/images/especialistasenlodificl.jpg" 
              alt="Especialistas en control" 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">Especialistas de lo complejo</h2>
          <p className="text-gray-600 text-lg">
            Mientras otros solo rocían químicos, nosotros estudiamos el ciclo reproductivo y atacamos el problema de raíz de las plagas más resistentes.
          </p>
          
          <ul className="space-y-6">
            {[
              { t: 'Chinches de Cama', d: 'Tratamiento térmico + químico. Garantía por escrito.' },
              { t: 'Cucaracha Alemana', d: 'Gel de atracción hormonal. Eliminación de nidos ocultos.' },
              { t: 'Roedores', d: 'Estaciones de cebo seguras para mascotas.' }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="material-icons-outlined text-brand-green mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold text-gray-900">{item.t}</h4>
                  <p className="text-sm text-gray-500">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
          
          <Link to="/servicios" className="inline-flex items-center gap-2 text-brand-green font-bold hover:gap-4 transition-all group pt-4">
            CONOCE NUESTRA METODOLOGÍA
            <span className="material-icons-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  
  const faqs = [
    {
      question: '¿Tengo que salir de mi casa durante la fumigación?',
      answer: 'En la mayoría de nuestros tratamientos residenciales no es necesario, ya que usamos productos de nulo olor y baja toxicidad.'
    },
    {
      question: '¿Es peligroso para mis mascotas?',
      answer: 'No, utilizamos métodos de aplicación focalizados y productos que, una vez secos (15-30 min), son totalmente inofensivos para perros y gatos.'
    },
    {
      question: '¿Cuánto tiempo dura el efecto?',
      answer: 'Nuestras barreras residuales tienen una efectividad de hasta 3 a 6 meses, dependiendo del entorno y la higiene del lugar.'
    },
    {
      question: '¿Entregan certificado para negocios?',
      answer: 'Sí, entregamos constancia de servicio con validez oficial para inspecciones oficiales.'
    }
  ];
  
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-10 md:mb-14">
          FAQ
        </h2>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left"
              >
                <span className="font-medium text-gray-900 text-sm md:text-base pr-4">{faq.question}</span>
                <span className={`material-icons-outlined text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-5 md:pb-6 text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ObjectionKiller = () => (
  <section className="bg-brand-forest py-20 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-10 opacity-10">
      <span className="material-icons-outlined text-[120px] text-white">local_laundry_service</span>
    </div>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-6">¿Tengo que lavar todo después?</h2>
        <p className="text-green-50 text-xl leading-relaxed">
          <span className="font-bold text-white underline decoration-green-400">No.</span> Nuestra tecnología de micro-aspersión en frío no mancha muebles, no moja telas y es inolora. Puede reingresar a su hogar y continuar su vida normal tan solo 40 minutos después del servicio.
        </p>
      </div>
      <a href="#contacto" onClick={() => trackCTA('objection_agendar', 'inicio')} className="shrink-0 bg-white text-brand-forest hover:bg-green-50 px-10 py-5 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
        Agendar Cita Sin Estrés
      </a>
    </div>
  </section>
);

const MapSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <SectionHeading 
        title="Llegamos a donde usted esté" 
        subtitle="Cobertura total en las 16 alcaldías de la CDMX y municipios del Estado de México (Naucalpan, Tlalnepantla, Ecatepec, Neza, Huixquilucan)."
      />
      
      <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-[280px] sm:h-[350px] md:h-[450px] bg-gray-100 border-4 md:border-8 border-white">
        <iframe 
          title="Fumigatron Ubicación"
          src="https://maps.google.com/maps?q=19.538723330398547,-99.18204677655439&z=18&output=embed" 
          className="absolute inset-0 w-full h-full border-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/95 backdrop-blur-sm p-3 md:p-5 rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 max-w-[220px] md:max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-icons-outlined text-brand-green">location_on</span>
            <p className="font-bold text-gray-900 text-sm">Nuestra Oficina</p>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            C. Colima 20, Hab Valle Ceylan, 54150 Tlalnepantla, Méx.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="material-icons-outlined text-brand-green text-sm">shield</span>
            <p className="text-xs text-gray-500">Base central de operaciones. Cobertura a toda la CDMX y Estado de México.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [clientType, setClientType] = useState<'hogar' | 'empresa'>('hogar');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; service?: string }>({});

  const testimonials = {
    hogar: {
      quote: '"Excelente servicio, llegaron puntual y explicaron todo el proceso. Adiós cucarachas."',
      author: '— María G. (Polanco)',
    },
    empresa: {
      quote: '"Puntuales y muy profesionales. Me entregaron mi certificado de fumigación válido para mi negocio ante las autoridades sanitarias."',
      author: '— Javier T. (Dueño de Restaurante)',
    },
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!formData.service || formData.service === 'Seleccione una opción...') {
      newErrors.service = 'Seleccione un tipo de plaga';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');
    try {
      const { createLead } = await import('./src/lib/leads');
      await createLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        service: formData.service
      });
      setStatus('success');
      setFormData({ name: '', phone: '', service: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="md:w-5/12 bg-gray-900 text-white p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-black mb-4">Recibir Diagnóstico sin Costo</h2>
              <p className="text-gray-400 mb-10">Déjenos sus datos. Un especialista le contactará en menos de 15 minutos para darle un presupuesto preliminar.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                     <span className="material-icons-outlined">phone</span>
                  </div>
                  <span className="font-bold text-lg">55 2087 2132</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                     <span className="material-icons-outlined">mail</span>
                  </div>
                  <span className="text-gray-300">servicios@fumigatron.com.mx</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300">
               <p className="text-sm italic text-gray-300 mb-4">{testimonials[clientType].quote}</p>
               <p className="text-xs font-bold text-brand-green">{testimonials[clientType].author}</p>
            </div>
          </div>
          
          <div className="md:w-7/12 p-6 sm:p-10 lg:p-14">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="material-icons-outlined text-brand-green text-3xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Enviada!</h3>
                <p className="text-gray-500 mb-6">Un especialista le contactará en breve.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-brand-green font-bold hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                    <span className="material-icons-outlined text-sm">error</span>
                    No se pudo enviar. Por favor intente de nuevo.
                  </div>
                )}
                
                <div className="grid gap-6">
                  {/* Client Type Selector */}
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">¿Para quién es el servicio?</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setClientType('hogar')}
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all border-2 ${
                          clientType === 'hogar'
                            ? 'border-brand-green bg-green-50 text-brand-green'
                            : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300'
                        }`}
                      >
                        <span className="material-icons-outlined text-sm">home</span> Para mi Hogar
                      </button>
                      <button
                        type="button"
                        onClick={() => setClientType('empresa')}
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all border-2 ${
                          clientType === 'empresa'
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300'
                        }`}
                      >
                        <span className="material-icons-outlined text-sm">business</span> Para mi Empresa
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Tu Nombre</label>
                    <input 
                      type="text" 
                      placeholder="Ej. Juan Pérez" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-gray-50 border-transparent focus:border-brand-green focus:ring-0 rounded-xl px-5 py-4 transition-all ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Teléfono / WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="55 XXXX XXXX" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-gray-50 border-transparent focus:border-brand-green focus:ring-0 rounded-xl px-5 py-4 transition-all ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Tipo de Plaga</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full bg-gray-50 border-transparent focus:border-brand-green focus:ring-0 rounded-xl px-5 py-4 transition-all appearance-none ${errors.service ? 'border-red-500' : ''}`}
                    >
                      <option>Seleccione una opción...</option>
                      <option value="Cucarachas">Cucarachas</option>
                      <option value="Chinches">Chinches</option>
                      <option value="Roedores">Roedores</option>
                      <option value="Otro">Otro / No estoy seguro</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-green hover:bg-brand-forest text-white py-5 rounded-xl font-bold text-lg shadow-xl shadow-green-100 transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'ENVIANDO...' : 'RECIBIR DIAGNÓSTICO SIN COSTO'}
                </button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                   <span className="material-icons-outlined text-sm">lock</span> Tus datos están seguros. Garantía de solución desde la 1ª visita.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-950 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      {/* 4 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">
        {/* Column 1: Identity */}
        <div>
          <div className="mb-4">
            <span className="font-display font-black text-2xl tracking-tighter">
              FUMIGATRO<span className="text-brand-green">N</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Nosotros sí podemos. Protegiendo hogares y empresas desde 2010.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/fumigalex" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/fumigalex/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@fumigatron" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-green transition-colors" aria-label="TikTok">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="font-bold text-white mb-4">Servicios</h4>
          <ul className="space-y-3">
            <li><Link to="/servicios" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Control de Insectos</Link></li>
            <li><Link to="/servicios" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Protección contra Roedores</Link></li>
            <li><Link to="/servicios" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Sanitización de Espacios</Link></li>
            <li><Link to="/servicios" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Barrera Preventiva</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="font-bold text-white mb-4">Contacto Directo</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm">
              <span className="material-icons-outlined text-brand-green text-base">phone</span>
              <span className="text-gray-400">55 4632 9117 | 55 7029 7410</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <a href="https://wa.me/5520872132" className="text-gray-400 hover:text-brand-green transition-colors">55 2087 2132</a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="material-icons-outlined text-brand-green text-base">mail</span>
              <a href="mailto:servicios@fumigatron.com.mx" className="text-gray-400 hover:text-brand-green transition-colors">servicios@fumigatron.com.mx</a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="material-icons-outlined text-brand-green text-base">schedule</span>
              <span className="text-gray-400">Lun - Sab: 9:00am a 6:00pm</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Coverage */}
        <div>
          <h4 className="font-bold text-white mb-4">Zonas de Servicio</h4>
          <ul className="space-y-3">
            <li><span className="text-gray-400 text-sm">Fumigaciones en CDMX</span></li>
            <li><span className="text-gray-400 text-sm">Fumigaciones en Estado de México</span></li>
            <li><span className="text-gray-400 text-sm">Fumigaciones en Querétaro y Puebla</span></li>
          </ul>
          <Link to="/contacto" className="inline-flex items-center gap-1 text-brand-green text-sm font-semibold mt-4 hover:underline">
            Ver todas nuestras 45+ zonas
            <span className="material-icons-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">© 2026 Fumigatron SA de CV. Todos los derechos reservados.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Aviso de Privacidad</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <BenefitsAndTestimonials />
      <Testimonials />
      <ProcessSteps />
      <ComparisonTable />
      <ServiceDetails />
      <FAQ />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
