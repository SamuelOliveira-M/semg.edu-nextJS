
import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/teacher/buttons';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchInvoicesPages } from '@/app/lib/data';
import Cart from '@/app/ui/class/cards';

export default async function PlaygroundPage() {
  
  return (
    <>
      <div className="w-full">
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 mb-4">
          <Search placeholder="Search invoices..." />
          <CreateInvoice />
        </div>
        <div>
          <Suspense fallback={<InvoicesTableSkeleton />}>
            <Cart/>
          </Suspense>
        </div>  
      </div>
    </>
  );
}
