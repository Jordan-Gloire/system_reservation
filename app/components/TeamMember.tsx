// components/TeamMember.tsx
import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, imageSrc }) => {
  return (
    <div className="text-center max-w-xs">
      <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
        <Image src={imageSrc} alt={`Photo de ${name}`} layout="fill" objectFit="cover" />
      </div>
      <h3 className="text-xl font-semibold text-gray-50">{name}</h3>
      <p className="text-gray-400 text-sm">{role}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
};

export default TeamMember;
