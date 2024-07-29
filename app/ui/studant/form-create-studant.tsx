'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  UserCircleIcon,
	CalendarDaysIcon,
	PhotoIcon,
  IdentificationIcon,
  MapPinIcon,
  GlobeAmericasIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createStudant } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { lusitana } from '@/app/ui/fonts';

export default function FormCreateStudant({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {},successMessage:null };

  const [state, dispatch] = useFormState(createStudant, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6 w-full ">
        
        <h1 className={`${lusitana.className} text-xl mb-4`}>Informações do Aluno:</h1>
        
        <div className='grid grid-cols-2 gap-4 mb-4 '>        
          <div className="mb-4">
            <label htmlFor="studantName" className="mb-2 block text-sm font-medium">
              Nome do aluno <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <input
                  id="studantName"
                  name="studantName"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="customer-error"
                  placeholder="Adicione o nome do professor"
                  minLength={3}
                  maxLength={100}
                  required
                ></input>
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div> 
          </div>

          <div className="mb-4">
            <label htmlFor="cpf" className="mb-2 block text-sm font-medium">
              Cpf
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="cpf"
                  name="cpf"
                  type='text'
                  placeholder="000.000.000-00"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  minLength={11}
                  maxLength={11}
                />
                <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              <div id="customer-error" aria-live="polite" aria-atomic="true">
					      {state.errors?.cpf &&
						    state.errors.cpf.map((error: string) => (
							    <p className="mt-2 text-sm text-red-500" key={error}>
								    {error}
							    </p>
						    ))}
      	      </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="mb-2 block text-sm font-medium">
              Data de Nascimento <span className="text-red-500">*</span>
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
              <div id="customer-error" aria-live="polite" aria-atomic="true">
					      {state.errors?.dateOfBirth &&
						    state.errors.dateOfBirth.map((error: string) => (
							    <p className="mt-2 text-sm text-red-500" key={error}>
								    {error}
							    </p>
						    ))}
      	      </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="ufBirth" className="mb-2 block text-sm font-medium">
              Estado De Nascimento - UF <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="ufBirth"
                  name="ufBirth"
                  type='text'
                  placeholder="Informe sua senha "
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                  minLength={2}
                  maxLength={2}
                />
                <GlobeAmericasIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="cityOfBirth" className="mb-2 block text-sm font-medium">
              Municipio de Nascimento <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="cityOfBirth"
                  name="cityOfBirth"
                  type='text'
                  placeholder="Informe sua senha "
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  minLength={2}
                  maxLength={60}
                />
                <GlobeAmericasIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>				
          <div className="mb-4 ">
            <label htmlFor="profileImage" className="mb-2 block text-sm font-medium">
              Foto
            </label>
            <div className="relative mt-2 rounded-md bg-white ">
              <div className="relative">
                <input
                  id="profileImage"
                  name="profileImage"
                  type='file'
                  accept="image/*"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
        </div>

        <h1 className={`${lusitana.className} text-xl mb-4 `}>Informações de Endereço:</h1>
        
        <div className='grid grid-cols-2 gap-4 mb-4 '>
          <div className="mb-4">
            <label htmlFor="cep" className="mb-2 block text-sm font-medium">
              Cep
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="cep"
                  name="cep"
                  type='text'
                  placeholder="Informe sua senha "
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  minLength={6}
                  maxLength={60}
                />
                <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="locality" className="mb-2 block text-sm font-medium">
              localidade <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <input
                  required
                  id="locality"
                  name="locality"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="customer-error"
                  placeholder="Adicione o nome do professor"
                  minLength={3}
                  maxLength={100}
                  
                ></input>
              <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div> 
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="mb-2 block text-sm font-medium">
              Cidade <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative"> 
                <input
                  id="city"
                  name="city"
                  type='text'
                  placeholder=""
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                  minLength={3}
                  maxLength={100}
                />
                <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
        </div>

        <div className="mb-4">
          <label htmlFor="uf" className="mb-2 block text-sm font-medium">
            Estado <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="uf"
                name="uf"
                type='text'
                placeholder="Informe seu email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>

      <h1 className={`${lusitana.className} text-xl mb-4`}>Informações dos Responsáveis:</h1>
        <div className="grid grid-cols-2 gap-4 mb-4" >          
        <div className="mb-4">
            <label htmlFor="motherName" className="mb-2 block text-sm font-medium">
              Nome do Mãe <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <input
                  required
                  id="motherName"
                  name="motherName"
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
          <div className="mb-4">
            <label htmlFor="fatherName" className="mb-2 block text-sm font-medium">
              Nome do Pai
            </label>

            <div className="relative">
              <input
                  id="fatherName"
                  name="fatherName"
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
          
          <div className="mb-4">
            <label htmlFor="firstPhone" className="mb-2 block text-sm font-medium">
              Telefone 1
            </label>

            <div className="relative">
              <input
                  id="firstPhone"
                  name="firstPhone"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="customer-error"
                  placeholder="Adicione o nome do professor"
                  minLength={11}
                  maxLength={11}
                ></input>
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div> 
            <div id="customer-error" aria-live="polite" aria-atomic="true">
					      {state.errors?.firstPhone &&
						    state.errors.firstPhone.map((error: string) => (
							    <p className="mt-2 text-sm text-red-500" key={error}>
								    {error}
							    </p>
						    ))}
      	      </div>
          </div>
          <div className="mb-4">
            <label htmlFor="secondPhone" className="mb-2 block text-sm font-medium">
              Telefone 2
            </label>

            <div className="relative">
              <input
                  id="secondPhone"
                  name="secondPhone"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  aria-describedby="customer-error"
                  placeholder="Adicione o nome do professor"
                  minLength={11}
                  maxLength={11}
                ></input>
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
            <div id="customer-error" aria-live="polite" aria-atomic="true">
					      {state.errors?.secondPhone &&
						    state.errors.secondPhone.map((error: string) => (
							    <p className="mt-2 text-sm text-red-500" key={error}>
								    {error}
							    </p>
						    ))}
      	      </div> 
          </div> 
        </div>
			</div>
      {state.successMessage && (
        <div className={`top-4 right-4 fixed border bg-green-100 border-green-400 text-green-700 px-4 py-3 rounded shadow-lg transition-opacity duration-100 ${state.successMessage ? 'opacity-100' : 'opacity-0 hidden'}`} role="alert">
          <strong className="font-bold">Sucesso:</strong>
          <ul className="mt-2">
            <li className="text-sm">{state.successMessage}</li>
          </ul>
        </div>
      )}
      {state.message && (
        <div className={`top-4 right-4 fixed  border bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded shadow-lg transition-opacity duration-100 ${state.message ? 'opacity-100' : 'opacity-0 hidden'}`} role="alert">
          <strong className="font-bold">Erros:</strong>
          <ul className="mt-2">
            <li className="text-sm">{state.message}</li>
          </ul>
        </div>
      )}

      
      
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/studant"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Criar Aluno</Button>
      </div>
    </form>
  );
}