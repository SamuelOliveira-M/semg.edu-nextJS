import Image from 'next/image';
import { ToViewTeacher, DeleteTeacher } from '@/app/ui/teacher/buttons';
import { formatDateToBirth } from '@/app/lib/utils';
import { reqTeachers } from '@/app/lib/api';
import { ArrowPathIcon } from '@heroicons/react/24/outline'; 
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import { CreateTeacher } from '@/app/ui/teacher/buttons';

export default async function AllTeacher() {
 
  const teachers = await reqTeachers();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Professores
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {teachers.map((teacher, i) => {
            return (
              <div
                key={teacher.id}
                className={clsx(
                  'grid grid-cols-[auto_1fr_auto] items-center py-4',
                  {
                    'border-t': i !== 0,
                  }
                )}
              >
                <Link
                  href={`/dashboard/teacher/${teacher.id}`}
                  className="flex items-center col-span-2 p-2 hover:bg-gray-50"
                >
                  <Image
                    src={teacher.url_image}
                    alt={`${teacher.nome}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {teacher.nome}
                      
                    </p>
                    <p className="truncate hidden text-sm text-gray-500 sm:block">
                      {teacher.email}
                    </p>
                  </div>
                </Link>
                <div className="flex justify-end p-2">
                  <DeleteTeacher id={teacher.id} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center pb-2 pt-6">
            <ArrowPathIcon className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500">Updated just now</h3>
          </div>
          <div className="flex items-center pb-2 pt-6">
            <CreateTeacher />
          </div>
        </div>
      </div>
    </div>
  );
  
}
