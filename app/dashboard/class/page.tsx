
import Search from '@/app/ui/search';
import { CreateClass } from '@/app/ui/class/buttons';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import CardClass from '@/app/ui/class/card-class';
import { fetchFilteredClass } from '@/app/lib/api';

export default async function PlaygroundPage({
  searchParams,
}: {
  searchParams?: {
    query?: string,
    page?: string,
  },
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const Allclassrooms = await fetchFilteredClass(query)

  return (
    <>
      <div className="w-full">
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 mb-4">
          <Search placeholder="Search invoices..." />
          <CreateClass />
        </div>
        <div>
          <Suspense fallback={<InvoicesTableSkeleton />}>
            <CardClass classrooms={ Allclassrooms }/>
          </Suspense>
        </div>  
      </div>
    </>
  );
}
