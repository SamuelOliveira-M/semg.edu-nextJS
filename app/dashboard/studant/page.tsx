import Search from '@/app/ui/search';
import TableStudant from '@/app/ui/studant/table-studant';
import { CreateTeacher } from '@/app/ui/teacher/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { CreateStudant } from '@/app/ui/studant/buttons';
import { allStudants } from '@/app/lib/api';


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string,
    page?: string,
  },
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const studants = await allStudants(query);

  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Alunos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Pesquisar Professores..." />
        <CreateStudant />
      </div>
      <Suspense  fallback={<InvoicesTableSkeleton />}>
        <TableStudant studants={studants} />
      </Suspense>

      {/* Colocar Paginação  */}
      
    </div>
  );
}