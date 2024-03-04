import Pagination from '@/app/ui/teacher/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/teacher/table-teachers';
import { CreateInvoice } from '@/app/ui/teacher/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';


export default async function Page() {
  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense  fallback={<InvoicesTableSkeleton />}>
        <Table />
      </Suspense>

      {/* Colocar Paginação  */}
      
    </div>
  );
}