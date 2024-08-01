import Image from 'next/image';
import { fetchRegistrationById } from '@/app/lib/api';
import { lusitana } from '../fonts';
import clsx from 'clsx';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { formatDateToBirth, formatText } from '@/app/lib/utils';
import { CreateMatricula } from './buttons';
import { ProfilePlaceholder } from '../ProfilePlaceholder';

export default async function TableRegistration({
  id,
}: {
  id: string; 
}) {
  const matriculas = await fetchRegistrationById(id);

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Alunos
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white py-1 ">
          {matriculas.map((studant,i) => {
            return (
              <Link 
              key={studant.id}
              href={`/dashboard/studant/registration/${studant.aluno.id}`}
              >
                <div
                  key={studant.id}
                  className={clsx(
                    'flex flex-row items-center justify-between p-4 hover:shadow-md',
                    {
                      'border-t': i !== 0,
                    },
                  )}
                >
                  <div className="flex items-center">
                    {studant.aluno.url_image ? (
                      <Image
                        src={studant.aluno.url_image}
                        alt={`${studant.aluno.nome}'s profile picture`}
                        className="mr-4 rounded-full"
                        width={32}
                        height={32}
                      />
                    ) : (
                      <ProfilePlaceholder />
                    )}
                    
                   
                    <div className="min-w-0 ml-2">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {formatText(studant.aluno.nome)}
                      </p>
                      <p className="hidden text-sm text-gray-500 sm:block">
                        {formatDateToBirth(studant.aluno.data_nascimento)}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                  >
                    {formatText(studant.aluno.municipio_nascimento)}
                  </p>  
                </div>
              </Link>
            );
          })}
        </div>
        <div className='flex justify-between'>
          <div className="flex items-center pb-2 pt-6">
            <ArrowPathIcon className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
          </div>
          <div className='flex items-center pb-2 pt-6'>
            <CreateMatricula turmaId={id}/>
          </div>
        </div>
      </div>
    </div>
  );
}
