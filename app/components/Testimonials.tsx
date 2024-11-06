"use client";
import { FC, useState } from 'react';
import Image from 'next/image';

type Testimonial = {
  quote: string;
  author: string;
  imageUrl: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Un service rapide et efficace. J'ai pu réserver une salle pour mon mariage en quelques clics !",
    author: "Marie D.",
    imageUrl: "/marie.jpg",
  },
  {
    quote: "Coworking super pratique avec Bookify, je recommande.",
    author: "Paul M.",
    imageUrl: "/paul.jpg",
  },
  {
    quote: "Facile à utiliser, les rappels sont très utiles.",
    author: "Sophie B.",
    imageUrl: "/sophie.jpg",
  },
];

const Testimonials: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-black mb-8">Ce que nos clients disent de nous</h2>
      <div className="relative max-w-lg mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <Image
            src={testimonials[currentIndex].imageUrl}
            alt={testimonials[currentIndex].author}
            width={80}
            height={80}
            className="mx-auto rounded-full mb-4"
          />
          <p className="text-xl italic text-gray-700">&quot;{testimonials[currentIndex].quote}&quot;</p>
          <p className="mt-4 text-lg font-semibold text-black">– {testimonials[currentIndex].author}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={handlePrev} className="text-black hover:text-gray-600">
            &lt; Précédent
          </button>
          <button onClick={handleNext} className="text-black hover:text-gray-600">
            Suivant &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
