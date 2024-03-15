import Image from 'next/image';
import { ToViewTeacher, DeleteTeacher } from '@/app/ui/teacher/buttons';
import { formatDateToBirth, formatCpf } from '@/app/lib/utils';
import { reqTeachers } from '@/app/lib/api';
 
export default async function TeacherTable() {
  
  const teachers = await reqTeachers();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {teachers?.map((teacher) => (
              <div
                key={teacher.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{teacher.nome}</p>
                    </div>
                    <p className="text-sm text-gray-500">{teacher.email}</p>
                  </div>
                  <div>
                  <Image
                        src={teacher.url_image}
                        className="mr-2 rounded-full"
                        width={60}
                        height={60}
                        alt={`${teacher.nome}'s profile picture`}
                      />
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-sm">
                    {formatDateToBirth(teacher.data_nascimento)}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                  <ToViewTeacher id={teacher.id} />
                  <DeleteTeacher id={teacher.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nome
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cpf
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Data de Nascimento
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {teachers?.map((teacher) => (
                <tr
                  key={teacher.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={teacher.url_image}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${teacher.nome}'s profile picture`}
                      />
                      <p>{teacher.nome}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {teacher.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCpf(teacher.cpf)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToBirth(teacher.data_nascimento)}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ToViewTeacher id={teacher.id} />
                      <DeleteTeacher id={teacher.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
