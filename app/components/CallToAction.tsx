import { FC } from 'react';
import Link from 'next/link';

const CallToAction: FC = () => {
  return (
    <section id="call-to-action" className="py-12 bg-white text-center">
      <h2 className="text-4xl font-bold text-black mb-6">
        Prêt à organiser votre prochain événement ou réunion ?
      </h2>
      <Link  className="inline-block mt-4 px-8 py-3  bg-black text-white font-semibold rounded hover:bg-gray-800" href="/reservation">
       
          Réservez maintenant

      </Link>
    </section>
  );
};

export default CallToAction;
