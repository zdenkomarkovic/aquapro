"use client";

import { motion } from "framer-motion";
import { services, whyChooseUs, statistics, testimonials } from "@/constants";
import {
  Clock,
  Settings,
  Bath,
  Wrench,
  Droplet,
  Shield,
  Network,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Zap,
  Award,
  Clock3,
  Star,
  Quote,
  Users,
  Target,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
  {
    clock: Clock,
    settings: Settings,
    bath: Bath,
    wrench: Wrench,
    droplet: Droplet,
    pipette: Droplet,
    shield: Shield,
    network: Network,
  };

const StatCard = ({
  number,
  suffix,
  label,
  index,
}: {
  number: number;
  suffix: string;
  label: string;
  index: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const icons = [Users, Award, Target, Clock];
  const IconComponent = icons[index] || Users;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
        <IconComponent className="w-10 h-10 text-primary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {inView && (
          <CountUp end={number} duration={2.5} suffix={suffix} separator="," />
        )}
      </div>
      <p className="text-lg md:text-xl text-primary-foreground/90">{label}</p>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4"
        style={{
          backgroundImage: "url(/hero1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm"></div> */}

        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              AquaPro Servis
            </h1>
            <p className="text-xl md:text-3xl text-white mb-4 font-semibold drop-shadow-md">
              Brzo • Pouzdano • Efikasno
            </p>
            <p className="text-lg md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
              Profesionalne vodoinstalaterske usluge u Beogradu
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="tel:+381638257281">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Phone className="w-6 h-6" />
                063/825-7281
              </motion.button>
            </Link>
            <Link href="viber://chat?number=+381638257281">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <MessageCircle className="w-6 h-6" />
                Viber
              </motion.button>
            </Link>
            <Link href="https://wa.me/381638257281" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" backdrop-blur-sm rounded-2xl p-3 md:p-8 max-w-2xl mx-auto "
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                Hitne Intervencije 0-24
              </h3>
            </div>
            <p className="text-lg md:text-2xl font-bold text-primary">
              Dostupni smo non-stop za sve hitne slučajeve!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Naše Usluge</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nudimo kompletan spektar vodoinstalaterskih usluga
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Settings;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={`/${index + 1}.jpg`}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 right-3 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/90">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-white">Brojevi Govore Umesto Nas</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Pogledajte naša dostignuća i razumećete zašto nas biraju
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="o-nama" className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Zašto Izabrati AquaPro Servis?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vaš pouzdan partner za sve vodoinstalaterske potrebe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const icons = [Zap, Award, CheckCircle, Clock3];
              const IconComponent = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-background rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
              Dodatne Pogodnosti
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Iskusni majstori",
                "Besplatna procena posla",
                "Konkurentne cene",
                "Viber i WhatsApp podrška",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Šta Naši Klijenti Kažu</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zadovoljstvo naših klijenata je naš najveći uspeh
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary relative">
                  <CardHeader>
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <CardTitle className="text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-sm flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {testimonial.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="kontakt"
        className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Imate Problem sa Instalacijama?</h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Kontaktirajte nas odmah i rešićemo vaš problem brzo i efikasno!
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <Link href="tel:+381638257281">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-4 rounded-full text-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Phone className="w-6 h-6" />
                  063/825-7281
                </motion.button>
              </Link>

              <Link href="viber://chat?number=+381638257281">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <MessageCircle className="w-6 h-6" />
                  Viber
                </motion.button>
              </Link>

              <Link href="https://wa.me/381638257281" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-full text-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </motion.button>
              </Link>
            </div>
            <Link
              href="mailto:aqvaproservis@gmail.com"
              className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>aqvaproservis@gmail.com</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
