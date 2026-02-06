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

// --- Services Page Content ---

const ServicesHero = () => (
  <section className="relative py-16 md:py-20 bg-gradient-to-br from-brand-green to-brand-forest overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 right-10">
        <span className="material-icons-outlined text-[200px] text-white">handyman</span>
      </div>
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold tracking-wide uppercase mb-6">
          <span className="material-icons-outlined text-sm">verified</span>
          Tecnología de Vanguardia
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          Soluciones a tu medida, no solo aplicaciones.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
          Tú nos cuentas el problema, nosotros diseñamos el protocolo. Utilizamos tecnología de vanguardia para garantizar un hogar libre de invasores.
        </p>
      </div>
    </div>
  </section>
);

const ServicesMatrix = () => {
  const services = [
    {
      icon: 'pest_control',
      title: 'Control de Insectos',
      emotional: 'Recupera la higiene de tu cocina.',
      technical: 'Uso de micro-encapsulados y cebos de alta atracción.',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: 'cruelty_free',
      title: 'Protección contra Roedores',
      emotional: 'Silencio y salud en cada rincón.',
      technical: 'Métodos mecánicos y físicos sin riesgos para mascotas.',
      color: 'bg-amber-500',
      lightColor: 'bg-amber-50',
      textColor: 'text-amber-600',
    },
    {
      icon: 'air',
      title: 'Sanitización de Espacios',
      emotional: 'Respira aire puro y seguro.',
      technical: 'Termonebulización de amplio espectro (Grado Hospitalario).',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      icon: 'shield',
      title: 'Barrera Preventiva',
      emotional: 'Blindaje total antes de la invasión.',
      technical: 'Aspersión perimetral manual para zonas críticas.',
      color: 'bg-brand-green',
      lightColor: 'bg-green-50',
      textColor: 'text-brand-green',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-green text-xs font-bold tracking-wide uppercase mb-4">
            <span className="material-icons-outlined text-sm">category</span>
            Matriz de Soluciones
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Identifica tu problema, nosotros lo resolvemos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada servicio está diseñado para atacar el problema desde la raíz, con la promesa de devolverte la tranquilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header */}
              <div className={`${service.color} p-6 flex items-center gap-4`}>
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="material-icons-outlined text-white text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Emotional Promise */}
                <div className={`${service.lightColor} rounded-xl p-4`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`material-icons-outlined ${service.textColor} text-sm`}>favorite</span>
                    <span className={`text-xs font-bold ${service.textColor} uppercase tracking-wide`}>Promesa</span>
                  </div>
                  <p className="text-gray-800 font-medium text-lg italic">"{service.emotional}"</p>
                </div>
                
                {/* Technical Backup */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-icons-outlined text-gray-500 text-sm">science</span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Respaldo Técnico</span>
                  </div>
                  <p className="text-gray-600">{service.technical}</p>
                </div>
              </div>
              
              {/* CTA */}
              <div className="px-6 pb-6">
                <Link 
                  to="/#contacto"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${service.lightColor} ${service.textColor} hover:opacity-80`}
                >
                  Solicitar este servicio
                  <span className="material-icons-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceLevels = () => {
  const levels = [
    {
      id: 'preventivo',
      icon: 'shield',
      title: 'Servicio Preventivo',
      subtitle: 'El Escudo',
      trigger: 'Quiero que mi casa siga siendo mi santuario.',
      includes: 'Aspersión manual en áreas perimetrales sin presencia de plagas.',
      color: 'brand-green',
      bgGradient: 'from-green-500 to-brand-green',
    },
    {
      id: 'correctivo',
      icon: 'build',
      title: 'Servicio Correctivo',
      subtitle: 'La Solución Profunda',
      trigger: 'He visto actividad y necesito ayuda urgente.',
      includes: 'Inspección visual, evaluación de infestación y métodos de profundidad.',
      color: 'amber-600',
      bgGradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 'desinfeccion',
      icon: 'sanitizer',
      title: 'Limpieza y Desinfección',
      subtitle: 'Grado Bioseguridad',
      trigger: 'Busco un entorno 100% libre de virus y bacterias.',
      includes: 'Eliminación de patógenos en cocinas, oficinas y áreas de proceso.',
      color: 'purple-600',
      bgGradient: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold tracking-wide uppercase mb-4">
            <span className="material-icons-outlined text-sm">layers</span>
            Niveles de Servicio
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Comparativa Rápida
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige el nivel de intervención que necesitas según tu situación.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-4 bg-gray-900 text-white">
            <div className="p-4 font-bold">Nivel de Servicio</div>
            <div className="p-4 font-bold text-center">Cuándo lo necesitas</div>
            <div className="p-4 font-bold text-center">Qué incluye</div>
            <div className="p-4 font-bold text-center"></div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {levels.map((level) => (
              <div key={level.id} className="grid grid-cols-4 items-center">
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span className={`material-icons-outlined text-${level.color}`}>{level.icon}</span>
                    <div>
                      <p className="font-bold text-gray-900">{level.id === 'desinfeccion' ? 'Desinfección' : level.title.split(' ')[1]}</p>
                      <p className="text-xs text-gray-500">{level.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center text-gray-600 text-sm">
                  "{level.trigger}"
                </div>
                <div className="p-4 text-center text-gray-600 text-sm">
                  {level.includes}
                </div>
                <div className="p-4 text-center">
                  <Link 
                    to="/#contacto"
                    className={`inline-flex items-center gap-1 px-4 py-2 bg-${level.color}/10 text-${level.color} rounded-lg font-bold text-sm hover:opacity-80 transition-all`}
                  >
                    Cotizar
                    <span className="material-icons-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 max-w-md mx-auto">
          {levels.map((level) => (
            <div key={level.id} className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <span className={`material-icons-outlined text-${level.color}`}>{level.icon}</span>
                <div>
                  <p className="font-bold text-gray-900">{level.id === 'desinfeccion' ? 'Desinfección' : level.title.split(' ')[1]}</p>
                  <p className="text-xs text-gray-500">{level.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2 italic">"{level.trigger}"</p>
              <p className="text-gray-500 text-xs mb-3">{level.includes}</p>
              <Link 
                to="/#contacto"
                className={`w-full flex items-center justify-center gap-1 px-4 py-2 bg-gradient-to-r ${level.bgGradient} text-white rounded-lg font-bold text-sm`}
              >
                Cotizar
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => (
  <section className="py-16 md:py-20 bg-gray-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
          ¿Cómo trabajamos?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Un proceso simple y efectivo para garantizar resultados.
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {[
          { step: '1', icon: 'call', title: 'Contacto', desc: 'Cuéntanos tu problema' },
          { step: '2', icon: 'search', title: 'Diagnóstico', desc: 'Inspección gratuita' },
          { step: '3', icon: 'water_drop', title: 'Aplicación', desc: 'Tratamiento especializado' },
          { step: '4', icon: 'verified', title: 'Garantía', desc: 'Seguimiento y respaldo' },
        ].map((item, index) => (
          <div key={index} className="text-center relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[60px] font-black text-white/5 leading-none select-none">
              {item.step}
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-green/20 rounded-full flex items-center justify-center">
                <span className="material-icons-outlined text-brand-green text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GuaranteeSection = () => (
  <section className="py-16 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-green to-brand-forest rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <span className="material-icons-outlined text-[200px] text-white">workspace_premium</span>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            <span className="material-icons-outlined text-white text-5xl">verified_user</span>
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Garantía de Satisfacción
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Todos nuestros servicios incluyen garantía por escrito. Si el problema persiste dentro del período de garantía, regresamos sin costo adicional.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span className="material-icons-outlined text-white text-sm">check_circle</span>
                <span className="text-white text-sm font-medium">Garantía por escrito</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span className="material-icons-outlined text-white text-sm">check_circle</span>
                <span className="text-white text-sm font-medium">Seguimiento incluido</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span className="material-icons-outlined text-white text-sm">check_circle</span>
                <span className="text-white text-sm font-medium">Certificado oficial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CallToAction = () => (
  <section className="py-16 md:py-20 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
        ¿Listo para eliminar el problema?
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Contáctanos hoy y recibe un diagnóstico gratuito. Nuestros especialistas diseñarán el protocolo perfecto para tu situación.
      </p>
      <Link 
        to="/#contacto" 
        className="inline-block px-8 py-4 bg-brand-green hover:bg-brand-forest text-white rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
      >
        Solicitar Diagnóstico Gratis
      </Link>
    </div>
  </section>
);

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesMatrix />
      <ServiceLevels />
      <ProcessSection />
      <GuaranteeSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
