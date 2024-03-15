import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

import Image from 'next/image';

export default async function BannerClass() {

  return (

    <div className="class-card bg-blue-900 p-8 rounded-lg shadow-md max-w mx-auto flex">
      <div className="flex-1 mt-2">
        <div>
        <h1 className="text-2xl mb-4 text-white font-semibold"><strong>8º ano B - Manhã - 2024</strong></h1>
        <h3 className="text-lg mb-2 text-white">Joaquim Antônio de Araújo</h3>      
        </div>
      </div>
      <div className="hidden lg:block flex-shrink-0 ml-4 ">
        <Image 
          src="/sala3.png" 
          alt="Imagem da turma" 
          width={170}
          height={200}
        />
      </div>
    </div>
  );
}
