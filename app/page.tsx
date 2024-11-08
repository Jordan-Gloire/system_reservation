import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Header from './components/Header'
import { HowItWorksComponent } from '@/components/app-components-how-it-works'
import { Testimonials } from './components/Testimonials';
import CallToAction from './components/CallToAction';
export default function HeroSection() {
  return (
   <>
    <Header/>
    <section className="relative min-h-[500px] h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <Image
        src="https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Espaces de travail variés"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      
      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Contenu de la bannière */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6 md:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Réservez facilement des espaces pour tous vos besoins
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8">
          Du coworking aux événements, tout est à portée de clic !
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-3">
          <Link href="/reservation">
            Réservez dès maintenant
          </Link>
        </Button>
      </div>
    </section>
    <HowItWorksComponent/>
    <Testimonials />
    <CallToAction />
   </>
  )
}