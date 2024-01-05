import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src={'/logo.png'}
        width={300}  
        height={300}
        className="hidden md:block"
        alt="SEMG.edu company logo desktop version"
      />
      <Image
            src={'/logo.png'}
            width={170}  
            height={100}
            className="block md:hidden"
            alt="SEMG.edu company logo desktop version"      
          />
    </div>
  );
}
