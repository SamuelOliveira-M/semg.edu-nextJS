import Form from '@/app/ui/teacher/edit-form';
import Breadcrumbs from '@/app/ui/teacher/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id; 
  
  

  return (
    <p>s</p>
  );
}