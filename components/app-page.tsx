'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Page() {
  return (
    <section className="relative min-h-[500px] h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/placeholder.svg?height=1080&width=1920"
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
  )
}