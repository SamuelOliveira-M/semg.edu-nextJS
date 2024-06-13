
import Search from '@/app/ui/search';
import { CreateClass } from '@/app/ui/teacher/buttons';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import CardClass from '@/app/ui/class/card-class';

export default async function PlaygroundPage() {
  
  return (
    <>
      <div className="w-full">
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 mb-4">
          <Search placeholder="Search invoices..." />
          <CreateClass />
        </div>
        <div>
          <Suspense fallback={<InvoicesTableSkeleton />}>
            <CardClass/>
          </Suspense>
        </div>  
      </div>
    </>
  );
}
