import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import Header from '../../components/Header'

type Service = {
  title: string;
  description: string;
  imageUrl: string;
};

const services: Service[] = [
  {
    title: 'Salles de Fête et d’Événements',
    description: 'Des espaces élégants pour vos événements spéciaux.',
    imageUrl: '/fete.jpg', // Assurez-vous d'utiliser des photos en noir et blanc
  },
  {
    title: 'Espaces de Coworking',
    description: 'Un environnement inspirant pour travailler.',
    imageUrl: '/coworking.jpg',
  },
  {
    title: 'Installations Sportives',
    description: 'Des équipements sportifs modernes.',
    imageUrl: '/sportTop.jpg',
  },
  {
    title: 'Studios Créatifs',
    description: 'Des espaces créatifs pour les artistes.',
    imageUrl: '/studio.jpg',
  },
  {
    title: 'Espaces de Bien-être',
    description: 'Détente et relaxation garanties.',
    imageUrl: '/bienetre.jpg',
  },
  {
    title: 'Espaces Extérieurs',
    description: 'Profitez de nos magnifiques espaces extérieurs.',
    imageUrl: '/exterieur.jpg',
  },
];

const Services: FC = () => {
  return (
    <>
    <Header/>
        <section id="services" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-8">Nos Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover "
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link className="inline-block mt-8 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800" href="/services">
          
            Voir tous les services
          
        </Link>
      </div>
    </section>
    </>
    
  );
};

export default Services;
