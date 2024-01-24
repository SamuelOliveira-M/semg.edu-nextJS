
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';

import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/teacher/buttons';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchInvoicesPages } from '@/app/lib/data';
import Cart from '@/app/ui/class/cards';

const website = [
  { name: '/home', value: 1230 },
  { name: '/contact', value: 751 },
  { name: '/gallery', value: 471 },
  { name: '/august-discount-offer', value: 280 },
  { name: '/case-studies', value: 78 }
];

const shop = [
  { name: '/home', value: 453 },
  { name: '/imprint', value: 351 },
  { name: '/shop', value: 271 },
  { name: '/pricing', value: 191 }
];

const app = [
  { name: '/shop', value: 789 },
  { name: '/product-features', value: 676 },
  { name: '/about', value: 564 },
  { name: '/login', value: 234 },
  { name: '/downloads', value: 191 }
];

const data = [
  {
    category: 'Website',
    stat: '10,234',
    data: website
  },
  {
    category: 'Online Shop',
    stat: '12,543',
    data: shop
  },
  {
    category: 'Mobile App',
    stat: '2,543',
    data: app
  }
];

export default async function PlaygroundPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);


  return (
    <>
      <div className="w-full">
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 mb-4">
          <Search placeholder="Search invoices..." />
          <CreateInvoice />
        </div>
        <div>
          <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
            <Cart query={query} currentPage={currentPage} />
          </Suspense>
        </div>  
      </div>
    </>
  );
}
