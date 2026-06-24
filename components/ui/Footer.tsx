import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* ── Main Footer ── */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center font-heading font-extrabold text-lg text-white" aria-hidden="true">
                C
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-tight">
                  Colegio CCP
                </span>
                <span className="text-[10px] tracking-widest uppercase text-white/50">
                  Método STEM
                </span>
              </div>
            </div>
            <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
              Formamos líderes con valores cristianos, innovación a través del
              método STEM y mente abierta al futuro. Crecer con propósito es
              nuestra razón de ser.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="bg-white/10 p-2.5 rounded-full hover:bg-secondary transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={18} aria-hidden="true" />
              </Link>
              <Link
                href="#"
                className="bg-white/10 p-2.5 rounded-full hover:bg-secondary transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} aria-hidden="true" />
              </Link>
              <Link
                href="#"
                className="bg-white/10 p-2.5 rounded-full hover:bg-secondary transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Enlaces rápidos">
            <h3 className="font-heading font-semibold text-secondary text-sm tracking-widest uppercase mb-5">
              Enlaces Rápidos
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/nosotros"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/proyecto-educativo"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Proyecto Educativo
                </Link>
              </li>
              <li>
                <Link
                  href="/admisiones"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Admisiones
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-secondary text-sm tracking-widest uppercase mb-5">
              Contacto
            </h3>
            <address className="not-italic text-white/60 flex flex-col gap-3 text-sm">
              <p>Calle Principal #123</p>
              <p>Ciudad, Colombia</p>
              <p>
                <a href="tel:+573000000000" className="hover:text-white transition-colors">
                  +57 300 000 0000
                </a>
              </p>
              <p>
                <a href="mailto:info@colegioccp.edu.co" className="hover:text-white transition-colors">
                  info@colegioccp.edu.co
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Colegio Cristiano Psicopedagógico. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Políticas de Privacidad
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
