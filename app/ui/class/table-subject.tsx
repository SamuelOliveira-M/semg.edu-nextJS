import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';  
import { reqSubjectAndTeacher } from '@/app/lib/api';
import clsx from 'clsx';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function TableSubject({
  id,
}: {
  id: string; 
}) { 
  
  const SubjectAndTeacher = await reqSubjectAndTeacher(id);
  
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Professores
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        
        <div className="bg-white py-1">
          {SubjectAndTeacher.disciplinasTurmas.map((teacher,i) => {
            return (
              <Link 
              key={teacher.professor.id}
              href={`/dashboard/class/${teacher.professor.id}`}
              >  
                <div
                  key={teacher.professor.id}
                  className={clsx(
                    'flex flex-row items-center justify-between p-4 hover:shadow-md',
                    {
                      'border-t': i !== 0,
                    },
                  )}
                >
                  <div className="flex items-center">
                    <Image
                      src={teacher.professor.url_image}
                      alt={`${teacher.professor.nome}'s profile picture`}
                      className="mr-4 rounded-full"
                      width={32}
                      height={32}
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {teacher.professor.nome}
                      </p>
                      <p className="hidden text-sm text-gray-500 sm:block">
                        {teacher.professor.email}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                  >
                    {teacher.disciplina.nome}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
