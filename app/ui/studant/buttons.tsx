'use client'
import { UserGroupIcon, EyeIcon, TrashIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteStudant, deleteTeahcer } from '@/app/lib/actions';
import Form from './create-form';
import { useState } from 'react';
import { ToastMessage } from './toast-message';

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


export function ToViewStudant({ id, matricula }: { id: string, matricula: boolean }) {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  const handleClose = () => {
    setShowComponent(false);
  };

  if (matricula) {
    return (
      <Link
        href={`/dashboard/studant/registration/${id}`}
        className="rounded-md border p-2 hover:bg-gray-50"
      >
        <EyeIcon className="w-5" />
      </Link>
    );
  }

  return (
    <>
      <button
        className="rounded-md border p-2 hover:bg-gray-50"
        onClick={handleClick}
      >
        <EyeIcon className="w-5" />
      </button>
      {showComponent && (
        <div className="fixed inset-0 flex items-start justify-end m-10">
          <div
            id="toast-warning"
            className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
              </svg>
              <span className="sr-only">Warning icon</span>
            </div>
            <div className="ms-3 text-sm font-normal break-words whitespace-normal">
              O aluno não está matriculado em nenhuma disciplina.
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-warning"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function LongProfilePlaceholder() {
  return (
    <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
        </svg>
        <span className="sr-only">Warning icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">Improve password difficulty.</div>
      <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
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
