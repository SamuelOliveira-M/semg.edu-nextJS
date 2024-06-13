
import Form from '@/app/ui/teacher/create-form';
import Breadcrumbs from '@/app/ui/teacher/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Professores', href: '/dashboard/teacher' },
          {
            label: 'Criar professor',
            href: '/dashboard/teacher/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}