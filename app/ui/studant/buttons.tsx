import { UserGroupIcon, EyeIcon, TrashIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteStudant, deleteTeahcer } from '@/app/lib/actions';

export function CreateMatricula({turmaId}:{turmaId:string}) {
  return (
    <Link
      href={`/dashboard/class/${turmaId}/matricula/create`}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Vincular Alunos</span>{' '}
      <UserGroupIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function CreateStudant() {
  return (
    <Link
      href={`/dashboard/studant/create`}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Adicionar Aluno</span>{' '}
      <UserGroupIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function ToViewStudant({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/studant/registration/${id}`}
      className="rounded-md border p-2 hover:bg-gray-50"
    >
      <EyeIcon className="w-5" />
    </Link>
  );
}

export function DeleteStudant({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteStudant.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-50">
        <span className="sr-only sm:hidden">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
