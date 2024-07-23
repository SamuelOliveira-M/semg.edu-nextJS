import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';  
import { reqSubjectAndTeacher } from '@/app/lib/api';
import clsx from 'clsx';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { AllocateTeacher } from '../teacher/buttons';

export default async function TableTeachersSubjects({
  id,
}: {
  id: string; 
}) { 
  
  const SubjectAndTeacher = await reqSubjectAndTeacher(id);
  console.log(SubjectAndTeacher)
  return (

    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Professores
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white py-1">
          {SubjectAndTeacher.map((data,i) => {
            return (
              <Link 
              key={data.professor.id}
              href={`/dashboard/teacher/${data.professor.id}`}
              >  
                <div
                  key={data.professor.id}
                  className={clsx(
                    'grid grid-cols-[2fr_1fr] lg:grid-cols-auto',
                    {
                      'border-t': i !== 0,
                    },
                  )}
                >
                  <div className="flex items-center m-1">
                    <Image
                      src={data.professor.url_image}
                      alt={`${data.professor.nome}'s profile picture`}
                      className="mr-4 rounded-full"
                      width={32}
                      height={32}
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {data.professor.nome.substring(0, 20)}
                        <span className='text-xs hidden sm:inline sm:text-base'>
                          {data.professor.nome.substring(18, 60)}
                        </span>
                      </p>

                      <p className="truncate hidden text-sm text-gray-500 sm:block">
                        {data.professor.email}
                      </p>
                    </div>
                  </div>
                  <div className='p-2 text-start sm:text-right overflow-auto'>
                    {data.professor.disciplinasTurmas.map((disciplina) => {
                      return (
                        <p
                          className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                          key={disciplina.disciplina.id} // Lembre-se de adicionar uma chave única para cada elemento na lista
                        >
                          {disciplina.disciplina.nome}
                        </p>
                      );
                    })}
                  </div>
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
            <AllocateTeacher id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
}
