import { EyeIcon, PlusIcon, TrashIcon,UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteTeahcer } from '@/app/lib/actions';

export function CreateTeacher() {
  return (
    <Link
      href="/dashboard/teacher/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Criar Professor</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function ToViewTeacher({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/teacher/${id}`}
      className="rounded-md border p-2 hover:bg-gray-50"
    >
      <EyeIcon className="w-5" />
    </Link>
  );
}

export function DeleteTeacher({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteTeahcer.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-50">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function AllocateTeacher({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/teacher/${id}/allocate`}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      title='Alocar professores a essa turma'
    >
      <span className="hidden md:block">Alocar Professor</span>{' '}
      <UsersIcon className="h-5 md:ml-4" />
    </Link> 
  );
}