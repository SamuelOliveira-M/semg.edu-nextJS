import { UpdateClass, DeleteClass } from '@/app/ui/class/buttons';
import InvoiceStatus from '@/app/ui/teacher/status';
import { formatDateToLocal } from '@/app/lib/utils';
import {test} from '@/app/lib/api'

import { Grid } from '@tremor/react';
import Link from 'next/link';

export default async function SchoolClassCard({id}:{id:string}) {
  
  const teacherClasses = await test(id)
  return (
    <div className="rounded-lg bg-gray-50 p-4 md:pt-0">
      <Grid numItemsSm={2} numItemsLg={30} className="gap-6">
        {teacherClasses.map((schoolClass) => (
          <Link 
            key={schoolClass.turma.id}
            href={`/dashboard/class/${schoolClass.turma.id}`}
          >
            <div
              key={schoolClass.turma.id}
              className="mt-4 w-full rounded-md bg-white p-4 cursor-pointer transition-transform transform hover:shadow-md hover:bg-blue-100"
            >
              <div className="flex items-center justify-between border-b border-black pb-4">
                <div>
                  <div className="mb-2 flex items-center">
                    <p>{schoolClass.turma.nome}</p>
                  </div>
                  <p className="text-sm text-gray-500">{schoolClass.turma.turno}</p>
                </div>
                <InvoiceStatus status={schoolClass.turma.status} />
              </div>
              <div className="flex w-full items-center justify-between pt-4">
                <div>
                  <p>{formatDateToLocal(schoolClass.turma.ano_letivo.data_inicio)}</p>
                </div>
                <div className="flex justify-end gap-2">
                  <UpdateClass id={schoolClass.turma.id} />
                  <DeleteClass id={schoolClass.turma.id} />
                </div>
              </div>
            </div>
          </Link>  
        ))}
      </Grid>
    </div>
  );
}
