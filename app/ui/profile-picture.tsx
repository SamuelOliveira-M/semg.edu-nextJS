import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';


export default function ProfilePicture({ imageUrl }: { imageUrl: string }) {
  return (
    
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <Image
        src={imageUrl}
        width={125}  
        height={200}
        className="hidden md:block rounded-full"  // Adicione a classe "rounded-full" para tornar a imagem redonda
        alt="SEMG.edu company logo desktop version"
      />
      <Image
        src={imageUrl}
        width={170}  
        height={100}
        className="block md:hidden rounded-full"  // Adicione a classe "rounded-full" para tornar a imagem redonda
        alt="SEMG.edu company logo desktop version"      
      />
    </div>
  );
}