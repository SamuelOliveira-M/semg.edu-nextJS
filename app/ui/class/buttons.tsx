import { PencilIcon, PlusIcon, TrashIcon,EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';


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
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
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

export function DeleteMatricula(
  { turmaId,
    matriculaId 
  }: { matriculaId: string, turmaId:string}) {
  
    const deleteInvoiceWithId = deleteInvoice.bind(null, matriculaId);
  
    return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-50">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}



