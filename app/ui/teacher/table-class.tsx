import Image from 'next/image';
import { UpdateClass, DeleteClass } from '@/app/ui/teacher/buttons';
import InvoiceStatus from '@/app/ui/teacher/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';
import { fetchRegistrationById } from '@/app/lib/api';

export default async function InvoicesTable({
  id,
}: {
  id: string; 
}) {
  const matriculas = await fetchRegistrationById(id);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {matriculas?.map((matricula) => (
              <div
                key={matricula.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={matricula.aluno.url_image}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${matricula.aluno.nome}'s profile picture`}
                      />
                      <p>{matricula.aluno.nome}</p>
                    </div>
                    <p className="text-sm text-gray-500">{matricula.aluno.cpf}</p>
                  </div>
                  <InvoiceStatus status={matricula.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    {/* <p className="text-xl font-medium">
                      {(invoice.amount)}
                    </p> */}
                    <p>{formatDateToLocal(matricula.aluno.data_nascimento)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateClass id={matricula.id} />
                    <DeleteClass id={matricula.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Aluno
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cpf
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Localidade
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date de Nascimento
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {matriculas?.map((matricula) => (
                <tr
                  key={matricula.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={matricula.aluno.url_image}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${matricula.numero_matricula}'s profile picture`}
                      />
                      <p>{matricula.aluno.nome}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {matricula.aluno.cpf}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {matricula.aluno.municipio_nascimento}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(matricula.aluno.data_nascimento)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={matricula.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateClass id={matricula.id} />
                      <DeleteClass id={matricula.id} />
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
