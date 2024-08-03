'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
	AtSymbolIcon,
	KeyIcon,
	CalendarDaysIcon,
	PhotoIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createTeacher } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} };

  const [state, dispatch] = useFormState(createTeacher, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nome Completo
          </label>

					<div className="relative">
						<input
								id="name"
								name="name"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
								defaultValue=""
								aria-describedby="customer-error"
								placeholder="Adicione o nome do professor"
								minLength={3}
								maxLength={100}
							></input>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
					</div> 
        </div>

        <div id="customer-error" aria-live="polite" aria-atomic="true">
					{state.errors?.name &&
						state.errors.name.map((error: string) => (
							<p className="mt-2 text-sm text-red-500" key={error}>
								{error}
							</p>
						))}
      	</div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type='email'
                placeholder="Informe seu email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
								minLength={3}
								maxLength={100}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

				<div id="customer-error" aria-live="polite" aria-atomic="true">
					{state.errors?.email &&
						state.errors.email.map((error: string) => (
							<p className="mt-2 text-sm text-red-500" key={error}>
								{error}
							</p>
						))}
      	</div>

				<div className="mb-4">
          <label htmlFor="dateOfBirth" className="mb-2 block text-sm font-medium">
            Data de Nascimento
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type='date'
                placeholder="Informe seu email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

				<div id="customer-error" aria-live="polite" aria-atomic="true">
					{state.errors?.dateOfBirth &&
						state.errors.dateOfBirth.map((error: string) => (
							<p className="mt-2 text-sm text-red-500" key={error}>
								{error}
							</p>
						))}
      	</div>

				<div className="mb-4">
          <label htmlFor="senha" className="mb-2 block text-sm font-medium">
            Senha
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="password"
                name="password"
                type='password'
                placeholder="Informe sua senha "
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
								minLength={6	}
								maxLength={60}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
				
				<div className="mb-4 bg-white">
          <label htmlFor="profileImage" className="mb-2 block text-sm font-medium">
            Foto
          </label>
          <div className="relative mt-2 rounded-md ">
            <div className="relative">
              <input
                id="profileImage"
                name="profileImage"
                type='file'
								accept="image/*"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
			</div>
			
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Criar Professor</Button>
      </div>
    </form>
  );
}