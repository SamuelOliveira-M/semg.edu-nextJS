'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createClass } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} };

  const [state, dispatch] = useFormState(createClass, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <div className="mb-4">
          <label htmlFor="serie" className="mb-2 block text-sm font-medium">
            Seríe
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="serie"
                name="serie"
                type="number"
                step="1.0"
                min={6}
                max={9}
                placeholder="Ex: 9º, 8º ,7º ... "
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="nome" className="mb-2 block text-sm font-medium">
            Indentificação da Turma
          </label>

					<div className="relative">
						<input
								id="nome"
								name="nome"
								className="peer block rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
								defaultValue=""
								aria-describedby="customer-error"
								placeholder="Ex: A, B, C ..."
								minLength={1}
								maxLength={1}
							></input>
					</div> 
        </div>

        <div className="mb-4">
          <label htmlFor="turno" className="mb-2 block text-sm font-medium">
            Turno
          </label>
          <div className="relative">
            <select
              id="turno"
              name="turno"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="customer-error"
            >

              <option value="manhã">
                Manhã
              </option>
              <option value="tarde">
                Tarde
              </option>
  
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="mb-2 block text-sm font-medium">
            Status
          </label>
          <div className="relative">
            <select
              id="status"
              name="status"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="aberta">
                Em andamento
              </option>
              <option value="concluido">
                Concluido
              </option>
              
            
              
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/class"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Criar</Button>
      </div>
    </form>
  );
}