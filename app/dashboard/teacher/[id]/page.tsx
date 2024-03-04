import LatestInvoices from '@/app/ui/dashboard/latest-teacher';
import { Suspense } from 'react';
import Card from '@/app/ui/teacher/cards'; 


export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id;

	return(
		<div className="">	
			<Card/>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
				<Suspense>
					<LatestInvoices />
				</Suspense>
				<Suspense>
					<LatestInvoices />
				</Suspense>
			</div>
    </div>
	)
}
