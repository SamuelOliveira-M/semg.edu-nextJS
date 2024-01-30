import Pagination from '@/app/ui/teacher/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/teacher/table-class';
import { CreateInvoice } from '@/app/ui/teacher/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
// import { fetchInvoiceById } from '@/app/lib/api';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id; 

  // const schoolClass = await fetchInvoiceById(id)

  // if (!schoolClass) {
  //   notFound();
  // }

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table id = {id} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} />   */}
      </div>
    </div>
  );
}