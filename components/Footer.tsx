"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
      className="bg-background border-t-2 border-primary/20 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/android-chrome-192x192.png"
                alt="AquaPro Servis Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Link>
            <h3 className="text-2xl font-bold text-primary mb-4 text-left">
              AquaPro Servis
            </h3>
            <p className="text-muted-foreground mb-4">
              Profesionalne vodoinstalaterske usluge u Beogradu. Brzo, pouzdano
              i efikasno.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Hitne intervencije 0-24</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-4 text-left">
              Kontakt
            </h4>
            <div className="space-y-3">
              <Link
                href="tel:+381638257281"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>063/825-7281</span>
              </Link>
              <Link
                href="mailto:aqvaproservis@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>aqvaproservis@gmail.com</span>
              </Link>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Beograd</span>
              </div>
              <div className="pt-2 space-y-2">
                <Link
                  href="viber://chat?number=+381638257281"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                  <span>Viber</span>
                </Link>
                <Link
                  href="https://wa.me/381638257281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span>WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-4 text-left">
              Brzi Linkovi
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block hover:text-primary transition-colors"
              >
                Početna
              </Link>
              <Link
                href="/#usluge"
                className="block hover:text-primary transition-colors"
              >
                Usluge
              </Link>

              <Link
                href="/#kontakt"
                className="block hover:text-primary transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-2 md:gap-10 border-t-[1px] border-primary/20 pt-6">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} AquaPro Servis. Sva prava
            zadržana.
          </p>
          <a
            href="https://www.manikamwebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            izrada sajta:{" "}
            <span className="font-bold text-primary">ManikamWebSolutions</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
