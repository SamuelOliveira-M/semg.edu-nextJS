import Form from "@/app/ui/studant/create-form"
import Breadcrumbs from '@/app/ui/studant/breadcrumbs';
import { readNoRegistration,readClassUniqueFetch } from '@/app/lib/api';

export default async function Page({ params }: { params: { id: string } }) {
  const classId = params.id

  const allStudants = await readNoRegistration();
  const dataClass = await readClassUniqueFetch(classId)

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Turma', href: `/dashboard/class/${classId}` },
          {
            label: 'Adicionar alunos a turma',
            href: `/dashboard/class/${classId}/matricula/create`,
            active: true,
          },
        ]}
      />
      <Form studants={allStudants} dataClass={dataClass}/>
    </main>
  )  
}

