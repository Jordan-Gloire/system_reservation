// pages/about.tsx
"use client";
import * as React from "react";
import Header from '../../components/Header';
import TeamMember from '../../components/TeamMember';
import Image from 'next/image';
import '../../styles/animations.css';


const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-900 text-gray-100 min-h-screen px-4 md:px-10 lg:px-20 py-16 ">
        {/* Image illustrative en arrière-plan */}
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/workspace-bg.jpg" 
            alt="Background workspace" 
            layout="fill" 
            objectFit="cover" 
            objectPosition="center"
          />
        </div>

        {/* Titre principal avec animation */}
        <header className="text-center mb-16 relative z-10 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">À Propos de ReserVite</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez notre mission, nos valeurs et notre équipe passionnée, dédiée à simplifier vos réservations d'espaces.
          </p>
        </header>

        {/* Section d'introduction avec un cercle décoratif */}
        <section className="relative z-10 mb-20 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Qui sommes-nous ?</h2>
            <p className="text-gray-300 leading-relaxed">
              ReserVite est une plateforme moderne de réservation d'espaces, conçue pour faciliter 
              l'accès aux salles de coworking, salles de conférence, et espaces événementiels. 
              Nous simplifions le processus de réservation pour répondre aux besoins des entreprises 
              et des particuliers en quête de lieux flexibles et pratiques.
            </p>
          </div>
          {/* <div className="w-96 h-96 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center shadow-lg overflow-hidden">
            <Image 
              src="/illustrative-circle.jpg" 
              alt="Illustration" 
              width={280} 
              height={280} 
              className=""
            />
          </div> */}
        </section>

        {/* Section mission avec un fond et une animation de fade-in */}
        <section className="relative z-10 mb-16 p-10 bg-gray-800 rounded-lg shadow-md animate-slideIn">
          <h2 className="text-3xl font-semibold mb-4">Notre Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Chez ReserVite, notre mission est de rendre la réservation d'espaces simple et accessible à tous. 
            Nous nous engageons à fournir une expérience utilisateur fluide et à offrir des espaces de qualité 
            pour aider nos clients à réaliser leurs projets et événements dans un cadre inspirant.
          </p>
        </section>

        {/* Valeurs avec des icônes pour un visuel plus vivant */}
        <section className="relative z-10 mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">Nos Valeurs</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {[
              { title: 'Simplicité', desc: 'Rendre la réservation rapide et facile pour tous.' },
              { title: 'Flexibilité', desc: 'Offrir des espaces variés pour chaque besoin.' },
              { title: 'Accessibilité', desc: 'Permettre à chacun de réserver un espace.' }
            ].map((value, idx) => (
              <div key={idx} className="w-64 p-6 bg-gray-800 rounded-lg shadow-md text-center transform transition hover:scale-105">
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Présentation de l'équipe avec un effet de zoom au survol */}
        <section className="relative z-10 mb-20 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-50">Rencontrez notre Équipe</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            ReserVite est une équipe passionnée d'experts en technologie et en gestion d'espaces 
            qui se consacrent à offrir une expérience de réservation optimale.
          </p>
          <div className="flex flex-wrap gap-8 justify-center">
            <TeamMember
              name="Juste GOUMA"
              role="CEO & Fondatrice"
              description="Juste est une visionnaire avec des années d'expérience dans la gestion d'espaces collaboratifs."
              imageSrc="/eunice-bazs.jpg"
            />
            <TeamMember
              name="Jordan Gloire"
              role="CTO & Développeur Principal"
              description="Jordan est un expert en technologies web, passionné par l'innovation et la simplicité."
              imageSrc="/eunice-bazs.jpg"
            />
            <TeamMember
              name="Eunice BAZ'S"
              role="Responsable du Support Client"
              description="Eunice garantit une assistance rapide et amicale pour chaque client de ReserVite."
              imageSrc="/eunice-bazs.jpg"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
