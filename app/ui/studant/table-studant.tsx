import Image from 'next/image';
import { allStudants } from '@/app/lib/api';
import { lusitana } from '../fonts';
import clsx from 'clsx';
import { ArrowPathIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { formatDateToBirth, formatText } from '@/app/lib/utils';
import { CreateMatricula, DeleteStudant, ToViewStudant } from './buttons';
import { ProfilePlaceholder } from '../ProfilePlaceholder';
import { Studant } from '@/app/lib/definitions';
import { DeleteStudantModel } from './modal';

export default async function TableStudant({studants}:{studants:Studant[]}) {
  
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {studants?.map((studant) => (
              <div
                key={studant.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{studant.nome}</p>
                    </div>
                    <p className="text-sm text-gray-500">{studant.cpf}</p>
                  </div>
                  <div>
                  {studant.url_image ? (
                      <Image
                        src={studant.url_image}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${studant.nome}'s profile picture`}
                      />
                    ) : (
                      <ProfilePlaceholder />
                    )}
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-sm">
                    {formatDateToBirth(studant.data_nascimento)}
                    </p>
                  </div>

                  <div className="flex justify-end gap-2">
                    <ToViewStudant id={studant.id} />
                    <DeleteStudantModel id={studant.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
         
          <table className="w-hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nome
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nome da Mãe
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
              {studants?.map((studant) => (
                <tr
                  key={studant.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                    {studant.url_image ? (
                      <Image
                        src={studant.url_image}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${studant.nome}'s profile picture`}
                      />
                    ) : (
                      <div className='w-15 h-30'>
                        <ProfilePlaceholder />
                      </div>
                    )}
                      <p>{studant.nome}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    { studant.responsavel.nome_mae }                    
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToBirth(studant.data_nascimento)}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ToViewStudant id={studant.id} />
                      <DeleteStudantModel id={studant.id} />
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
