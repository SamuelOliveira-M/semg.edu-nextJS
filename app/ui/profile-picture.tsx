import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';


export default function ProfilePicture({ imageUrl }: { imageUrl: string }) {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white mr-10 mb-4`}
    >
      <Image
        src={imageUrl}
        width={100}  
        height={200}
        className="hidden md:block"
        alt="SEMG.edu company logo desktop version"
      />
      <Image
            src={imageUrl}
            width={170}  
            height={100}
            className="block md:hidden"
            alt="SEMG.edu company logo desktop version"      
          />
    </div>
  );
}