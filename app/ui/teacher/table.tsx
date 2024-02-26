import Image from 'next/image';
import { ToViewTeacher, DeleteClass } from '@/app/ui/teacher/buttons';
import { formatDateToBirth, formatCpf } from '@/app/lib/utils';
import { reqTeachers } from '@/app/lib/api';
 
export default async function InvoicesTable() {
  
  const teachers = await reqTeachers();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
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
                      <DeleteClass id={teacher.id} />
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
