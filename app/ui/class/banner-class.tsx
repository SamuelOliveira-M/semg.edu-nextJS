import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

import Image from 'next/image';
import { SchollClass } from '@/app/lib/definitions';
import { readClassUniqueFetch } from '@/app/lib/api';

export default async function BannerClass({id}:{id:string}) {

  const turma = await readClassUniqueFetch(id)

  return (

    <div className="class-card bg-blue-700 p-8 rounded-lg shadow-lg max-w mx-auto flex">
      <div className=" flex items-center flex-1 mt-2 ">
        <div>
          <h1 className="text-2xl mb-4 text-center sm:text-start  text-white font-semibold"><strong>{turma.nome}</strong></h1>
          <h3 className="text-lg mb-2 text-center sm:text-start text-white">Joaquim Antônio de Araújo</h3>      
        </div>
      </div>
      <div className="hidden lg:block flex-shrink-0 ml-4 ">
        <Image 
          src="/sala3.png" 
          alt="Imagem da turma" 
          width={150}
          height={180}
        />
      </div>
    </div>
  );
}
