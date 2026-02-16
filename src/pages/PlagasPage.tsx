import React from 'react';
import { Link } from 'react-router-dom';

// --- Shared Components ---

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
            Nosotros sí podemos. Protegiendo hogares y empresas desde 2017.
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
              <span className="text-gray-400">55 7029 7410 | 55 4632 9117</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <a href="https://wa.me/5520872132" className="text-gray-400 hover:text-brand-green transition-colors">55 2087 2132</a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="material-icons-outlined text-brand-green text-base">mail</span>
              <a href="mailto:contacto@fumigatron.com.mx" className="text-gray-400 hover:text-brand-green transition-colors">contacto@fumigatron.com.mx</a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <span className="material-icons-outlined text-brand-green text-base">schedule</span>
              <span className="text-gray-400">Lun - Vie: 9:00am a 6:00pm</span>
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
          ¿En qué área detectaste la amenaza?
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          Selecciona la zona afectada. Identifica los síntomas de la plaga y descubre nuestro protocolo exacto (MIP) para erradicarla de raíz y recuperar la seguridad de tu espacio.
        </p>
        
        {/* Iconos de anclaje visual */}
        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border-2 border-orange-300 flex items-center justify-center">
              <span className="material-icons-outlined text-orange-500 text-2xl">kitchen</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">Cocina y Alimentos</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border-2 border-red-300 flex items-center justify-center">
              <span className="material-icons-outlined text-red-500 text-2xl">hotel</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">Habitaciones y Descanso</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border-2 border-purple-300 flex items-center justify-center">
              <span className="material-icons-outlined text-purple-500 text-2xl">foundation</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">Estructuras y Bodegas</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full border-2 border-green-300 flex items-center justify-center">
              <span className="material-icons-outlined text-green-600 text-2xl">park</span>
            </div>
            <span className="text-xs text-gray-500 font-medium">Exteriores y Perímetros</span>
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
  icon?: string;
  borderColor: string;
  tagBg: string;
  tagText: string;
}

const PlagaCard: React.FC<PlagaCardProps> = ({ 
  name, subtitle, symptom, risk, riskTag, solution, borderColor, tagBg, tagText 
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
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">El Síntoma</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{symptom}</p>
      </div>
      
      {/* Riesgo */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="material-icons-outlined text-gray-400 text-sm">warning_amber</span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Riesgo Real</span>
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
          <span className="text-xs font-semibold text-brand-green uppercase tracking-wide">Nuestra Solución</span>
        </div>
        <p className="text-brand-forest text-sm leading-relaxed font-medium">{solution}</p>
      </div>
    </div>
    
    {/* CTA - WhatsApp Hiper-Personalizado */}
    <div className="px-5 pb-5">
      <a 
        href={`https://wa.me/5520872132?text=${encodeURIComponent(`Hola, detecté los síntomas de ${name} y necesito un diagnóstico urgente.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm transition-all bg-amber-500 text-white hover:bg-amber-600"
      >
        <span className="material-icons-outlined text-sm">chat</span> Cotizar control de {name}
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
      subtitle: 'Riesgos de higiene que amenazan tu hogar',
      accentColor: 'border-orange-300',
      plagas: [
        {
          name: 'Cucarachas',
          subtitle: 'El riesgo invisible en tu cocina',
          symptom: '¿Encuentras manchas pequeñas en las esquinas, un olor extraño o las ves correr al encender la luz?',
          risk: 'Transmiten más de 30 tipos de bacterias, incluyendo Salmonella y E. coli. Una sola hembra puede producir hasta 400 crías.',
          riskTag: 'Riesgo de Higiene',
          solution: 'Protocolo de gel de atracción hormonal que elimina el nido completo, no solo las que ves. Resultados desde la primera aplicación.',
          icon: 'pest_control',
          borderColor: 'border-t-orange-400',
          tagBg: 'bg-orange-50',
          tagText: 'text-orange-600',
        },
        {
          name: 'Hormigas',
          subtitle: 'Invasión silenciosa y organizada',
          symptom: '¿Ves filas de hormigas cerca de alimentos, azúcar o en grietas de paredes y pisos?',
          risk: 'Las colonias pueden tener millones de individuos. Contaminan alimentos y algunas especies dañan instalaciones eléctricas.',
          riskTag: 'Riesgo de Higiene',
          solution: 'Cebos de transferencia que las obreras llevan al nido, eliminando la colonia desde la reina.',
          icon: 'bug_report',
          borderColor: 'border-t-orange-400',
          tagBg: 'bg-orange-50',
          tagText: 'text-orange-600',
        },
        {
          name: 'Moscas',
          subtitle: 'Vectores de enfermedades',
          symptom: '¿Hay moscas rondando la cocina, botes de basura o áreas de preparación de alimentos?',
          risk: 'Pueden transmitir más de 100 patógenos diferentes. Vomitan enzimas sobre los alimentos antes de consumirlos.',
          riskTag: 'Riesgo de Higiene',
          solution: 'Control integrado con trampas UV, tratamiento larvicida y eliminación de focos de reproducción.',
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
      title: 'Amenazas al Descanso y Salud',
      subtitle: 'Riesgos que afectan tu bienestar y el de tu familia',
      accentColor: 'border-red-300',
      plagas: [
        {
          name: 'Chinches de Cama',
          subtitle: 'El enemigo nocturno',
          symptom: '¿Despiertas con picaduras en línea, manchas de sangre en sábanas o puntos negros en el colchón?',
          risk: 'Pueden sobrevivir meses sin alimentarse. Las soluciones caseras suelen ser inútiles. Se esconden en costuras y enchufes.',
          riskTag: 'Riesgo de Salud',
          solution: 'Protocolo de micro-inyección en grietas y sellado de puntos de refugio. Garantía por escrito.',
          icon: 'bed',
          borderColor: 'border-t-red-400',
          tagBg: 'bg-red-50',
          tagText: 'text-red-600',
        },
        {
          name: 'Pulgas',
          subtitle: 'No solo afectan a tus mascotas',
          symptom: '¿Tus mascotas se rascan constantemente? ¿Tienes picaduras en tobillos y piernas?',
          risk: 'Transmiten parásitos y enfermedades. Una sola pulga pone hasta 50 huevos diarios que caen en alfombras y muebles.',
          riskTag: 'Riesgo de Salud',
          solution: 'Tratamiento integral: fumigación de espacios + recomendaciones para mascotas. Rompemos el ciclo reproductivo.',
          icon: 'pets',
          borderColor: 'border-t-red-400',
          tagBg: 'bg-red-50',
          tagText: 'text-red-600',
        },
        {
          name: 'Alacranes',
          subtitle: 'Peligro real para tu familia',
          symptom: '¿Has visto alacranes en rincones oscuros, baños o cerca de áreas húmedas?',
          risk: 'El piquete puede ser mortal, especialmente en niños y adultos mayores. Son nocturnos y se esconden durante el día.',
          riskTag: 'Riesgo de Salud',
          solution: 'Aspersión perimetral + sellado de accesos. Creamos una barrera protectora alrededor de tu hogar.',
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
      subtitle: 'Riesgos estructurales que dañan tu propiedad',
      accentColor: 'border-purple-300',
      plagas: [
        {
          name: 'Roedores',
          subtitle: 'Silencio y salud en cada rincón',
          symptom: '¿Escuchas ruidos en paredes o techo por la noche? ¿Encuentras excrementos pequeños o cables roídos?',
          risk: 'Transmiten Leptospirosis y Hantavirus. Pueden causar incendios al roer cables eléctricos. Se reproducen exponencialmente.',
          riskTag: 'Riesgo Estructural',
          solution: 'Métodos mecánicos y estaciones de cebo seguras para mascotas. Sellado de accesos para evitar reinfestación.',
          icon: 'cruelty_free',
          borderColor: 'border-t-purple-400',
          tagBg: 'bg-purple-50',
          tagText: 'text-purple-600',
        },
        {
          name: 'Termitas',
          subtitle: 'El enemigo silencioso de la madera',
          symptom: '¿Ves pequeños túneles de barro en paredes? ¿La madera suena hueca al golpearla? ¿Encuentras alas transparentes?',
          risk: 'Pueden destruir la estructura de una casa en pocos años sin que lo notes. Trabajan 24/7 desde el interior.',
          riskTag: 'Riesgo Estructural',
          solution: 'Inyección de termiticida en suelo y madera afectada. Sistema de monitoreo para prevención continua.',
          icon: 'carpenter',
          borderColor: 'border-t-purple-400',
          tagBg: 'bg-purple-50',
          tagText: 'text-purple-600',
        },
        {
          name: 'Polilla de Madera',
          subtitle: 'Carcoma que destruye muebles',
          symptom: '¿Ves pequeños agujeros en muebles de madera? ¿Encuentras polvillo fino debajo de ellos?',
          risk: 'Puede destruir muebles antiguos, vigas y estructuras de madera. El daño es interno y progresivo.',
          riskTag: 'Riesgo Estructural',
          solution: 'Tratamiento con inyección directa y fumigación localizada. Protegemos tu patrimonio y recuerdos.',
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
      title: 'Amenazas en Exteriores y Perímetros',
      subtitle: 'Jardines, patios, estacionamientos y áreas abiertas',
      accentColor: 'border-green-300',
      plagas: [
        {
          name: 'Mosquitos',
          subtitle: 'Vectores de enfermedades graves',
          symptom: '¿Hay zonas con agua estancada, jardines húmedos o áreas donde los mosquitos no te dejan estar?',
          risk: 'Transmiten Dengue, Zika y Chikungunya. Se reproducen en cualquier recipiente con agua estancada.',
          riskTag: 'Riesgo de Salud',
          solution: 'Nebulización perimetral + eliminación de criaderos. Barrera protectora de larga duración para exteriores.',
          icon: 'flight',
          borderColor: 'border-t-green-500',
          tagBg: 'bg-green-50',
          tagText: 'text-green-700',
        },
        {
          name: 'Avispas y Abejas',
          subtitle: 'Nidos peligrosos en tu perímetro',
          symptom: '¿Detectas panales en techos, árboles, bardas o esquinas de tu propiedad?',
          risk: 'Las picaduras pueden causar reacciones alérgicas graves (anafilaxia). Los nidos crecen rápidamente.',
          riskTag: 'Riesgo de Salud',
          solution: 'Retiro seguro de nidos y aplicación de repelente perimetral. Reubicación responsable cuando es posible.',
          icon: 'hive',
          borderColor: 'border-t-green-500',
          tagBg: 'bg-green-50',
          tagText: 'text-green-700',
        },
        {
          name: 'Garrapatas',
          subtitle: 'Parásitos en jardines y áreas verdes',
          symptom: '¿Tus mascotas traen garrapatas del jardín? ¿Has encontrado garrapatas en muros o vegetación?',
          risk: 'Transmiten la enfermedad de Lyme y Ehrlichiosis. Se adhieren a humanos y animales para alimentarse.',
          riskTag: 'Riesgo de Salud',
          solution: 'Aspersión de áreas verdes y perímetros con producto residual. Control en zonas de tránsito de mascotas.',
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
          <span className="material-icons-outlined text-red-500 text-2xl">emergency</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          ¿Emergencia de plagas?
        </h2>
        <p className="text-gray-600 mb-6">
          Si tienes una infestación severa o necesitas atención urgente, contáctanos ahora. Respondemos en menos de 15 minutos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="https://wa.me/5520872132?text=Hola%2C%20tengo%20una%20emergencia%20de%20plagas%20y%20necesito%20atenci%C3%B3n%20urgente.%20%C2%BFPueden%20enviar%20a%20un%20especialista%20lo%20antes%20posible%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-green text-white rounded-lg font-bold transition-all hover:bg-brand-forest"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Urgente
          </a>
          <a 
            href="tel:5520872132"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-bold transition-all hover:bg-gray-200"
          >
            <span className="material-icons-outlined text-xl">phone</span>
            Llamar Ahora
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
