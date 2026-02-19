import React from 'react';
import { Link } from 'react-router-dom';
import { trackCTA } from '../lib/tracking';
// --- Shared Components ---

const TopBar = () => (
  <div className="bg-brand-green text-white py-2 text-sm hidden md:block">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-icons-outlined text-base">phone</span>
          <span className="font-semibold">ATENCIÓN A CLIENTES:</span>
          <a href="tel:5546329117" className="hover:underline">554632 9117</a>
          <span>|</span>
          <a href="tel:5570297410" className="hover:underline">557029 7410</a>
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
    { label: 'INICIO', href: '/' },
    { label: 'QUIÉNES SOMOS', href: '/nosotros' },
    { label: 'SERVICIOS', href: '/servicios' },
    { label: 'PLAGAS', href: '/plagas' },
    { label: 'CONTACTO', href: '/contacto' },
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
        
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.includes('#') ? (
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
      
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2 animate-fadeIn shadow-lg">
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.includes('#') ? (
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
        </div>
      )}
    </header>
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
            <li><Link to="/servicios" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Control Preventivo</Link></li>
            <li><Link to="/servicios" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Eliminación Total y Urgente</Link></li>
            <li><Link to="/servicios" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Desinfección Profesional</Link></li>
            <li><Link to="/servicios" className="text-gray-400 hover:text-brand-green transition-colors text-sm">Rescate de Madera</Link></li>
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

// --- Plagas Page Content (Diseño Minimalista) ---

const PlagasHero = () => (
  <section className="relative py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
          ¿En dónde encontraste el problema?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          Dinos en qué parte de tu casa o negocio viste a los bichitos. Te explicaremos cómo los eliminamos de raíz, de forma súper segura y sin complicaciones, para que recuperes tu tranquilidad.
        </p>
        
        {/* Iconos de anclaje visual */}
        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border-2 border-orange-300 flex items-center justify-center">
              <span className="material-icons-outlined text-2xl text-orange-500">restaurant</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">Cocina y Alimentos</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border-2 border-red-300 flex items-center justify-center">
              <span className="material-icons-outlined text-2xl text-red-500">bed</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">Habitaciones y Descanso</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border-2 border-purple-300 flex items-center justify-center">
              <span className="material-icons-outlined text-2xl text-purple-500">inventory_2</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">Bodegas y Estructuras</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border-2 border-green-300 flex items-center justify-center">
              <span className="material-icons-outlined text-2xl text-green-500">park</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">Patios y Exteriores</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);


// Plague Card Component - Diseño Minimalista
interface PlagaCardProps {
  name: string;
  subtitle: string;
  symptom: string;
  risk: string;
  riskTag: string;
  solution: string;
  ctaText: string;
  ctaMsg: string;
  icon?: string;
  borderColor: string;
  tagBg: string;
  tagText: string;
}

const PlagaCard: React.FC<PlagaCardProps> = ({ 
  name, subtitle, symptom, risk, riskTag, solution, ctaText, ctaMsg, borderColor, tagBg, tagText 
}) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow border-t-4 ${borderColor}`}>
    {/* Header */}
    <div className="p-5 pb-4">
      <div>
        <h3 className="font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
    
    {/* Content */}
    <div className="px-5 pb-5 space-y-4">
      {/* Síntoma */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="material-icons-outlined text-gray-400 text-sm">search</span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">¿Cómo saber si las tienes?</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{symptom}</p>
      </div>
      
      {/* Riesgo */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="material-icons-outlined text-gray-400 text-sm">warning_amber</span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">¿Por qué son un problema?</span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagBg} ${tagText}`}>
            {riskTag}
          </span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{risk}</p>
      </div>
      
      {/* Solución */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="material-icons-outlined text-brand-green text-sm">check_circle</span>
          <span className="text-xs font-semibold text-brand-green uppercase tracking-wide">Nuestra solución</span>
        </div>
        <p className="text-brand-forest text-sm leading-relaxed font-medium">{solution}</p>
      </div>
    </div>
    
    {/* CTA - WhatsApp */}
    <div className="px-5 pb-5">
      <a 
        href={`https://wa.me/5520872132?text=${encodeURIComponent(ctaMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCTA(`plaga_${name.toLowerCase().replace(/\s+/g, '_')}`, 'plagas')}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm transition-all bg-amber-500 text-white hover:bg-amber-600"
      >
        <span className="material-icons-outlined text-sm">chat</span> {ctaText}
      </a>
    </div>
  </div>
);

// Category Section Component - Diseño Limpio
interface CategorySectionProps {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  accentColor: string;
  plagas: PlagaCardProps[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ id, icon, title, subtitle, accentColor, plagas }) => (
  <section id={id} className="py-12 md:py-16">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-12 h-12 rounded-xl border-2 ${accentColor} flex items-center justify-center`}>
          <span className={`material-icons-outlined text-2xl ${accentColor.replace('border-', 'text-').replace('-300', '-500')}`}>{icon}</span>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
      </div>
      
      {/* Plagas Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plagas.map((plaga, index) => (
          <PlagaCard key={index} {...plaga} />
        ))}
      </div>
    </div>
  </section>
);

const PlagasSections = () => {
  const categories: CategorySectionProps[] = [
    {
      id: 'cocina',
      icon: 'kitchen',
      title: 'Invasores de Cocina y Alimentos',
      subtitle: 'Protegemos tu comida y la higiene de tu familia.',
      accentColor: 'border-orange-300',
      plagas: [
        {
          name: 'Cucarachas',
          subtitle: 'El riesgo invisible en tu cocina',
          symptom: '¿Ves manchitas en las esquinas, notas un olor raro o salen corriendo cuando prendes la luz de noche?',
          risk: 'Contaminan tu comida con bacterias muy peligrosas y se multiplican rapidísimo (¡una sola puede tener 400 crías!).',
          riskTag: 'Riesgo de Higiene',
          solution: 'Usamos un gel inteligente y cero tóxico. Ellas mismas se lo llevan a su escondite, eliminando el nido completo desde el primer día, no solo a las que ves por encimita.',
          ctaText: '¡Quiero eliminar las cucarachas!',
          ctaMsg: 'Hola, vi cucarachas en mi espacio y necesito ayuda urgente.',
          icon: 'pest_control',
          borderColor: 'border-t-orange-400',
          tagBg: 'bg-orange-50',
          tagText: 'text-orange-600',
        },
        {
          name: 'Hormigas',
          subtitle: 'Invasión silenciosa y organizada',
          symptom: '¿Hay caminitos de hormigas cerca del azúcar, la comida o saliendo de los contactos de la luz?',
          risk: '¡Pueden ser millones! Echan a perder tus alimentos y hasta pueden dañar tus aparatos eléctricos.',
          riskTag: 'Riesgo de Higiene',
          solution: 'Aplicamos un producto especial que las hormiguitas obreras llevan de regreso a su casa, acabando con el problema de raíz (desde la reina).',
          ctaText: '¡Quiero eliminar las hormigas!',
          ctaMsg: 'Hola, tengo un problema de hormigas y necesito ayuda.',
          icon: 'bug_report',
          borderColor: 'border-t-orange-400',
          tagBg: 'bg-orange-50',
          tagText: 'text-orange-600',
        },
        {
          name: 'Moscas',
          subtitle: 'Adiós a la suciedad',
          symptom: '¿No te dejan en paz cerca de la basura o mientras preparas de comer?',
          risk: 'Son portadoras de muchísimas bacterias y ensucian tus superficies cada vez que se paran en ellas.',
          riskTag: 'Riesgo de Higiene',
          solution: 'Colocamos trampas de luz súper discretas y tratamientos seguros para que desaparezcan de tu vista y de tu comida.',
          ctaText: '¡Quiero eliminar las moscas!',
          ctaMsg: 'Hola, tengo un problema de moscas y necesito ayuda.',
          icon: 'flight',
          borderColor: 'border-t-orange-400',
          tagBg: 'bg-orange-50',
          tagText: 'text-orange-600',
        },
      ],
    },
    {
      id: 'descanso',
      icon: 'hotel',
      title: 'Amenazas al Descanso y la Salud',
      subtitle: 'Cuidamos tu sueño y la salud de los que más amas.',
      accentColor: 'border-red-300',
      plagas: [
        {
          name: 'Chinches de Cama',
          subtitle: 'El enemigo nocturno',
          symptom: '¿Amaneces con piquetes en hilera, ves manchitas de sangre en tus sábanas o puntitos negros en el colchón?',
          risk: 'No se van con remedios caseros, se esconden súper bien y te roban la paz a la hora de dormir.',
          riskTag: 'Riesgo de Salud',
          solution: 'Aplicamos un tratamiento detallado en cada grieta, base y costura para acabar con ellas. ¡Vuelve a dormir tranquilo, garantizado!',
          ctaText: '¡Quiero volver a dormir en paz!',
          ctaMsg: 'Hola, creo que tengo chinches de cama y necesito ayuda urgente.',
          icon: 'bed',
          borderColor: 'border-t-red-400',
          tagBg: 'bg-red-50',
          tagText: 'text-red-600',
        },
        {
          name: 'Pulgas',
          subtitle: 'Protegemos a tus mascotas',
          symptom: '¿Tus perritos o gatitos se rascan mucho o te han picado en los tobillos?',
          risk: 'Se reproducen a lo loco, dejando sus huevecillos en tus alfombras o sillones, y transmiten parásitos.',
          riskTag: 'Riesgo de Salud',
          solution: 'Fumigamos tus espacios de forma segura para cortar su ciclo (para que no nazcan más) y te damos tips fáciles para cuidar a tus mascotas.',
          ctaText: '¡Quiero eliminar las pulgas!',
          ctaMsg: 'Hola, tengo un problema de pulgas y necesito ayuda.',
          icon: 'pets',
          borderColor: 'border-t-red-400',
          tagBg: 'bg-red-50',
          tagText: 'text-red-600',
        },
        {
          name: 'Alacranes',
          subtitle: 'Protección vital para tu familia',
          symptom: '¿Has visto alguno en lugares oscuros, cerca del baño o en zonas húmedas?',
          risk: 'Su picadura es muy peligrosa, sobre todo para niños chiquitos y adultos mayores.',
          riskTag: 'Riesgo de Salud',
          solution: 'Creamos un escudo protector alrededor de tu casa y sellamos las entradas para que no puedan pasar.',
          ctaText: '¡Quiero protegerme de los alacranes!',
          ctaMsg: 'Hola, he visto alacranes en mi casa y necesito protección urgente.',
          icon: 'coronavirus',
          borderColor: 'border-t-red-400',
          tagBg: 'bg-red-50',
          tagText: 'text-red-600',
        },
      ],
    },
    {
      id: 'estructura',
      icon: 'foundation',
      title: 'Destructores de Patrimonio',
      subtitle: 'Cuidamos tus muebles, tu casa y tu inversión.',
      accentColor: 'border-purple-300',
      plagas: [
        {
          name: 'Roedores',
          subtitle: 'Ratas y Ratones',
          symptom: '¿Escuchas ruiditos en el techo por la noche, encuentras cables mordidos o bolitas negras (excremento)?',
          risk: 'Ensucian todo, rompen tus cosas y pueden causar cortocircuitos al morder cables.',
          riskTag: 'Riesgo Estructural',
          solution: 'Usamos trampas seguras (¡sin riesgo para tus mascotas!) y tapamos los huecos por donde entran para que no regresen jamás.',
          ctaText: '¡Quiero eliminar los roedores!',
          ctaMsg: 'Hola, tengo un problema de roedores y necesito ayuda urgente.',
          icon: 'cruelty_free',
          borderColor: 'border-t-purple-400',
          tagBg: 'bg-purple-50',
          tagText: 'text-purple-600',
        },
        {
          name: 'Termitas',
          subtitle: 'El enemigo silencioso de tu casa',
          symptom: '¿Ves caminitos de tierra en la pared, madera que suena hueca o alitas transparentes en el piso?',
          risk: 'Se comen la madera por dentro. Pueden dañar la estructura de tu casa o negocio sin que te des cuenta.',
          riskTag: 'Riesgo Estructural',
          solution: 'Aplicamos un tratamiento directo para salvar tu madera y creamos una barrera para proteger tu casa por muchos años.',
          ctaText: '¡Quiero eliminar las termitas!',
          ctaMsg: 'Hola, creo que tengo termitas y necesito una evaluación urgente.',
          icon: 'carpenter',
          borderColor: 'border-t-purple-400',
          tagBg: 'bg-purple-50',
          tagText: 'text-purple-600',
        },
        {
          name: 'Polilla de Madera',
          subtitle: 'Cuidamos tus muebles',
          symptom: '¿Notaste hoyitos en tus muebles de madera o un polvito fino en el piso?',
          risk: 'Destruyen tus muebles favoritos, vigas y puertas desde adentro.',
          riskTag: 'Riesgo Estructural',
          solution: 'Inyectamos el producto justo donde se necesita para salvar tu patrimonio y tus recuerdos.',
          ctaText: '¡Quiero salvar mis muebles!',
          ctaMsg: 'Hola, tengo polilla en mis muebles de madera y necesito ayuda.',
          icon: 'chair',
          borderColor: 'border-t-purple-400',
          tagBg: 'bg-purple-50',
          tagText: 'text-purple-600',
        },
      ],
    },
    {
      id: 'exteriores',
      icon: 'park',
      title: 'Amenazas en Patios y Exteriores',
      subtitle: 'Disfruta de tu jardín, terraza o estacionamiento sin molestias.',
      accentColor: 'border-green-300',
      plagas: [
        {
          name: 'Mosquitos',
          subtitle: 'Tu patio libre de picaduras',
          symptom: '¿Tienes charquitos de agua cerca o simplemente no puedes salir al patio sin que te piquen?',
          risk: 'Además de ser muy molestos, pueden contagiar enfermedades como el Dengue.',
          riskTag: 'Riesgo de Salud',
          solution: 'Aplicamos una niebla protectora en todo tu jardín y te ayudamos a identificar los lugares donde nacen para eliminarlos.',
          ctaText: '¡Quiero mi patio sin mosquitos!',
          ctaMsg: 'Hola, tengo un problema de mosquitos en mi patio y necesito ayuda.',
          icon: 'flight',
          borderColor: 'border-t-green-500',
          tagBg: 'bg-green-50',
          tagText: 'text-green-700',
        },
        {
          name: 'Avispas y Abejas',
          subtitle: 'Retiro seguro de panales',
          symptom: '¿Viste un panal en el techo, un árbol o la barda de tu casa?',
          risk: 'Sus picaduras duelen mucho y pueden ser peligrosas si alguien en casa es alérgico.',
          riskTag: 'Riesgo de Salud',
          solution: 'Retiramos el nido con muchísimo cuidado y aplicamos un repelente para que no vuelvan. (¡Siempre reubicamos a las abejas de forma responsable!).',
          ctaText: '¡Quiero retirar un panal de forma segura!',
          ctaMsg: 'Hola, tengo un panal de avispas/abejas y necesito que lo retiren de forma segura.',
          icon: 'hive',
          borderColor: 'border-t-green-500',
          tagBg: 'bg-green-50',
          tagText: 'text-green-700',
        },
        {
          name: 'Garrapatas',
          subtitle: 'Jardín libre de parásitos',
          symptom: '¿Tus mascotas salieron al jardín y regresaron con garrapatas o las viste caminando por las paredes?',
          risk: 'Transmiten enfermedades complicadas tanto a tus perritos como a tu familia.',
          riskTag: 'Riesgo de Salud',
          solution: 'Rociamos el pasto y las paredes de afuera con un producto súper seguro para que tu jardín vuelva a ser zona libre de parásitos.',
          ctaText: '¡Quiero un jardín libre de garrapatas!',
          ctaMsg: 'Hola, tengo un problema de garrapatas en mi jardín y necesito ayuda.',
          icon: 'bug_report',
          borderColor: 'border-t-green-500',
          tagBg: 'bg-green-50',
          tagText: 'text-green-700',
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {categories.map((category, index) => (
        <div key={index} className={index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
          <CategorySection {...category} />
        </div>
      ))}
    </div>
  );
};

const EmergencyCTA = () => (
  <section className="py-12 md:py-16 bg-white border-t border-gray-100">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="material-icons-outlined text-red-500 text-3xl">warning</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          ¿Tienes una emergencia y necesitas ayuda YA?
        </h2>
        <p className="text-gray-600 mb-6">
          Si la situación se salió de control, la plaga es masiva o necesitas que vayamos urgentísimo, escríbenos o llámanos ahora mismo. ¡Te contestamos en menos de 15 minutos!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/5520872132?text=Hola%2C%20tengo%20una%20emergencia%20y%20necesito%20que%20venga%20un%20experto%20lo%20antes%20posible."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTA('emergencia_whatsapp', 'plagas')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-green text-white rounded-lg font-bold transition-all hover:bg-brand-forest"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="material-icons-outlined text-sm">warning</span> WhatsApp Urgente
          </a>
          <a
            href="tel:5520872132"
            onClick={() => trackCTA('emergencia_llamar', 'plagas')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-bold transition-all hover:bg-gray-200"
          >
            <span className="material-icons-outlined text-sm">phone</span> Llamar Ahora
          </a>
        </div>
      </div>
    </div>
  </section>
);


export function PlagasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PlagasHero />
      <PlagasSections />
      <EmergencyCTA />
      <Footer />
    </div>
  );
}
