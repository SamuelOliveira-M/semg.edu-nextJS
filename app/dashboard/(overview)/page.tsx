import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { Suspense } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';
import AllTeacher from '@/app/ui/teacher/all-teachers';

import { 
  RevenueChartSkeleton,
  LatestInvoicesSkeleton, 
  CardsSkeleton 
} from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
      </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <AllTeacher />
        </Suspense>
      </div>
    </main>
  );
}
