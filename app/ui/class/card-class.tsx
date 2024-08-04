import { UpdateClass, DeleteClass } from '@/app/ui/class/buttons';
import InvoiceStatus from '@/app/ui/teacher/status';
import { formatDateToLocal } from '@/app/lib/utils';
import { Grid } from '@tremor/react';
import Link from 'next/link';
import { SchollClassTable } from '@/app/lib/definitions';

export default async function CardClass({classrooms}:{classrooms:SchollClassTable[]}) {
  
  return (
    <div className="rounded-lg bg-gray-50 p-4 md:pt-0">
      <Grid numItemsSm={2} numItemsLg={30} className="gap-6">
        {classrooms?.map((schoolClass) => (
          <div
            key={schoolClass.id}
            className="mt-4 w-full rounded-md bg-white p-4 cursor-pointer transition-transform transform hover:shadow-md hover:bg-blue-100"
          >
            <Link 
              key={schoolClass.id}
              href={`/dashboard/class/${schoolClass.id}`}
            >
              <div className="flex items-center justify-between border-b border-black pb-4">
                <div>
                  <div className="mb-2 flex items-center">
                    <p>{schoolClass.nome}</p>
                  </div>
                  <p className="text-sm text-gray-500">{schoolClass.turno}</p>
                </div>
                <InvoiceStatus status={schoolClass.status} />
              </div>
            </Link>
            <div className="flex w-full items-center justify-between pt-4">
              <Link 
                key={schoolClass.id}
                href={`/dashboard/class/${schoolClass.id}`}
              >
                <div>
                  <p>{formatDateToLocal(schoolClass.ano_letivo.data_inicio)}</p>
                </div>
              </Link>
              <div className="flex justify-end gap-2">
                <UpdateClass id={schoolClass.id} />
                <DeleteClass id={schoolClass.id} />
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
}
