import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/teacher/buttons';
import InvoiceStatus from '@/app/ui/teacher/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import {fetchFilteredClass} from '@/app/lib/api'

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Link from 'next/link';

export default async function InvoicesCard({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  const classrooms = await fetchFilteredClass(currentPage)
  return (
    // <div className="rounded-lg bg-gray-50 p-4 md:pt-0">
    //   <Grid numItemsSm={2} numItemsLg={30} className="gap-6">
    //     {invoices?.map((invoice) => (
    //       <div
    //         key={invoice.id}
    //         className="mt-4 w-full rounded-md bg-white p-4"
    //       >
    //         <div className="flex items-center justify-between border-b pb-4">
    //           <div>
    //             <div className="mb-2 flex items-center">
    //               <Image
    //                 src={invoice.image_url}
    //                 className="mr-2 rounded-full"
    //                 width={28}
    //                 height={28}
    //                 alt={`${invoice.name}'s profile picture`}
    //               />
    //               <p>{invoice.name}</p>
    //             </div>
    //             <p className="text-sm text-gray-500">{invoice.email}</p>
    //           </div>
    //           <InvoiceStatus status={invoice.status} />
    //         </div>
    //         <div className="flex w-full items-center justify-between pt-4">
    //           <div>
    //             <p className="text-xl font-medium">
    //               {formatCurrency(invoice.amount)}
    //             </p>
    //             <p>{formatDateToLocal(invoice.date)}</p>
    //           </div>
    //           <div className="flex justify-end gap-2">
    //             <UpdateInvoice id={invoice.id} />
    //             <DeleteInvoice id={invoice.id} />
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Grid>
    // </div>
    
    <div className="rounded-lg bg-gray-50 p-4 md:pt-0">
      <Grid numItemsSm={2} numItemsLg={30} className="gap-6">
        {classrooms?.map((schollClass) => (
          <div
            key={schollClass.id}
            className="mt-4 w-full rounded-md bg-white p-4 cursor-pointer transition-transform transform hover:shadow-md hover:bg-blue-100"
          >
            <div className="flex items-center justify-between border-b border-black pb-4">
              <div>
                <div className="mb-2 flex items-center">
                  <p>{schollClass.nome}</p>
                </div>
                <p className="text-sm text-gray-500">{schollClass.turno}</p>
              </div>
              <InvoiceStatus status={schollClass.status} />
            </div>
            <div className="flex w-full items-center justify-between pt-4">
              <div>
                {/* <p className="text-xl font-medium">
                  {(schollClass.serie)}° Ano
                </p> */}
                <p>{formatDateToLocal(schollClass.ano_letivo.data_inicio)}</p>
              </div>
              <div className="flex justify-end gap-2">
                <UpdateInvoice id={schollClass.id} />
                <DeleteInvoice id={schollClass.id} />
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </div>

  );
}
