import { PencilIcon, PlusIcon, TrashIcon,EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteClass, } from '@/app/lib/actions';


export function UpdateClass({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/teacher/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-50"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteClass({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteClass.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-50">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function UpdateMatricula(
  { turmaId,
    matriculaId
  }: { matriculaId: string, turmaId:string}) {
  
    return (
    <Link
      href={`/dashboard/class/${matriculaId}/registration/${turmaId}`}
      className="rounded-md border p-2 hover:bg-gray-50"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}


export function CreateClass() {
  return (
    <Link
      href="/dashboard/class/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Criar Turma</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
