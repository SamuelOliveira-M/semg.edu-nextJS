import Image from 'next/image';
// import logoSemgEdu from '@/public/SEMGEDU-Logo-Large.png'
import logoSemgEdu from '@/public/SEMGEDU-Logo-Small.png'
import logoSemgEduLarge from '@/public/SEMGEDU-Logo-Large.png'


export default function AcmeLogo() {
  return (    
      <Image
        src={logoSemgEdu}
        className="p-4"
        alt="SEMG.edu company logo desktop version"
      />
  );
}

export function AcmeLogoLarge() {
  return (    
      <Image
        src={logoSemgEduLarge}
        width={300}  
        height={300}
        className="p-4"
        alt="SEMG.edu company logo desktop version"
      />
  );
}

