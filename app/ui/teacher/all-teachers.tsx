import Image from 'next/image';
import { DeleteTeacher, CreateTeacher } from '@/app/ui/teacher/buttons';
import { reqTeachers } from '@/app/lib/api';
import { ProfilePlaceholder } from '@/app/ui/ProfilePlaceholder';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default async function AllTeacher() {

  const teachers = await reqTeachers();

  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-8">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Professores
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6 overflow-y-auto max-h-96">
        {Array.isArray(teachers) && teachers.length > 0 ? (
          teachers.map((teacher, i) => {
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
                  <div className="mr-4 shrink-0">
                    {teacher.url_image ? (
                      <Image
                        src={teacher.url_image}
                        alt={`Foto de ${teacher.nome}`}
                        className="rounded-full"
                        width={32}
                        height={32}
                      />
                    ) : (
                      <ProfilePlaceholder />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {teacher.nome}
                    </p>
                    <p className="truncate hidden text-sm text-gray-500 sm:block">
                      {teacher.email}
                    </p>
                  </div>
                </Link>
                <DeleteTeacher id={teacher.id} />
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 py-4">Nenhum professor encontrado.</p>
        )}
        </div>
        <div className="flex justify-end">
          <div className="flex items-center pb-2 pt-6">
            <CreateTeacher />
          </div>
        </div>
      </div>
    </div>
  );

}
