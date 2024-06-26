'use client';

import { Teacher, SchollClass,Subject } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { allocationTeacher, createRegistration } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import {
  UserCircleIcon,
  PresentationChartBarIcon,
  BookOpenIcon,
  
} from '@heroicons/react/24/outline';

export default function FormAllocationTeacher({ teachers,dataClass,subjects }: { teachers:Teacher[], dataClass:SchollClass, subjects:Subject[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(allocationTeacher, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="classId" className="mb-2 block text-sm font-medium">
            Turma
          </label>

					<div className="relative">
						<input
								id="nome"
								name="nome"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                value={dataClass.nome}
                readOnly
								aria-describedby="customer-error"
								placeholder="Adicione o nome do professor"
								minLength={3}
								maxLength={100}
							></input>
            <PresentationChartBarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
					</div> 
        </div>
        
        <input type="hidden" name="classId" value={dataClass.id} />

        <div className="mb-4">
          <label htmlFor="professorId" className="mb-2 block text-sm font-medium">
            Professores
          </label>

					<div className="relative">
            <select
                id="professorId"
                name="professorId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="customer-error"
              >
                {teachers.map((teacher, index) => (
                  
                  <option key = {teacher.id} value={teacher.id}> 
                    {teacher.nome}
                  </option>
                ))}
              </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
					</div> 
        </div>

        <div className="mb-4">
          <label htmlFor="subjectId" className="mb-2 block text-sm font-medium">
            Disciplina
          </label>

					<div className="relative">
            <select
                id="subjectId"
                name="subjectId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="customer-error"
              >
                {subjects.map((subject, index) => (
                  
                  <option key = {subject.id} value={subject.id}> 
                    {subject.nome}
                  </option>
                ))}
              </select>
            <BookOpenIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
					</div> 
        </div>
        
        <div className={`fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg transition-opacity duration-300 ${state.message ? 'opacity-100' : 'opacity-0 hidden'}`} role="alert">
          <strong className="font-bold">Erros:</strong>
          <ul className="mt-2">
            <li className="text-sm">{state.message}</li>
          </ul>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href={`/dashboard/class/${dataClass.id}`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Adicionar Professor</Button>
      </div>
    </form>
  );
}