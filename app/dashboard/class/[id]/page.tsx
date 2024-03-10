import TableStudant from '@/app/ui/studant/table-studant';
import TableSubject from'@/app/ui/class/table-subject'
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchRegistrationById } from '@/app/lib/api';
import { notFound } from 'next/navigation';
import Card from '@/app/ui/teacher/cards'; 
import { Grid } from '@tremor/react';
import { lusitana } from '@/app/ui/fonts';

import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import LatestInvoices from '@/app/ui/dashboard/latest-teacher';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';

export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id; 

  const schoolClass = await fetchRegistrationById(id)
  console.log(schoolClass)

  if (!schoolClass) {
    notFound();
  }

  return (
    <div className="">	
      <Card/>
      
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <TableStudant id={id} />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <TableSubject id={id} />
        </Suspense>
      </div>
      
      
      
      
      
      {/* <div className="tremor-Grid-root grid grid-cols-1 sm:grid-cols-2 gap-6 ">
      
        <div>
          <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Alunos
          </h2>
          <Suspense fallback={<InvoicesTableSkeleton />}>
            <TableStudant id={id} />
          </Suspense>
        </div>
        <div className="">
          <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Professores
          </h2>
          <Suspense fallback={<InvoicesTableSkeleton />}>
            <TableSubject id={id} />
          </Suspense>
        </div>  
      </div>  */}
    </div>
  );
}