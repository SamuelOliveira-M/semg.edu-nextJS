import TableStudant from '@/app/ui/studant/table-studant';
import TableSubject from'@/app/ui/class/table-subject'
import { Suspense } from 'react';
import { fetchRegistrationById } from '@/app/lib/api';
import { notFound } from 'next/navigation';
import BannerClass from '@/app/ui/class/banner-class';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';


export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id; 

  const schoolClass = await fetchRegistrationById(id)
  console.log(schoolClass)

  if (!schoolClass) {
    notFound();
  }

  return (
    <div>	
      <BannerClass/>
      
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