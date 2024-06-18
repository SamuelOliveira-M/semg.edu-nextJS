'use client';

import { Studant, SchollClass } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createRegistration } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import {
  UserCircleIcon,
  PresentationChartBarIcon,
  ClockIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

export default function Form({ studants,dataClass }: { studants: Studant[], dataClass:SchollClass }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createRegistration, initialState);
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
          <label htmlFor="alunoId" className="mb-2 block text-sm font-medium">
            Alunos
          </label>

					<div className="relative">
            <select
                id="alunoId"
                name="alunoId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="customer-error"
              >
                {studants.map((studant, index) => (
                  
                  <option key = {studant.id} value={studant.id}> 
                    {studant.nome}
                  </option>
                ))}
              </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
					</div> 
        </div>
    
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="desligado"
                  name="status"
                  type="radio"
                  value="desligado"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="desligado"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Desligado <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="ativo"
                  name="status"
                  type="radio"
                  value="ativo"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="ativo"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Ativo <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/class"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Adicionar a Turma</Button>
      </div>
    </form>
  );
}