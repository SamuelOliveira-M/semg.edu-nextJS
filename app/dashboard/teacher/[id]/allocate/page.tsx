
import FormAllocationTeacher from '@/app/ui/teacher/form-alocation-teacher';
import Breadcrumbs from '@/app/ui/teacher/breadcrumbs';
import { readClassUniqueFetch, readSubjects, reqTeachers } from '@/app/lib/api'; 

export default async function Page({ params }: { params: { id: string } }) {
  const classId = params.id

  const allTeachers = await reqTeachers();
  const dataClass = await readClassUniqueFetch(classId)
  const allSubjects = await readSubjects(classId)

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Turma', href: `/dashboard/class/${classId}` },
          {
            label: 'Alocar Professor',
            href: `/dashboard/teacher/${classId}/allocate`,
            active: true,
          },
        ]}
      />
      <FormAllocationTeacher teachers={allTeachers} dataClass={dataClass} subjects={allSubjects}/>
    </main>
  );
}