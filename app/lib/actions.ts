'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres'; 
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { Teacher } from './definitions';
import { CreateTeacherType,CreateClassType } from './definitions';
import { fetchCreateTeacher } from './api';
import { deleteTeacherFetch } from './api';
import { fetchCreateClass } from './api';

const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(3).max(100),
  email: z.string({
    invalid_type_error: 'Please select a customer.',
  }).max(80),
  dateOfBirth: z.string(),
  password: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  
   profileImage:z.any()
});

const FormSchemaClass = z.object({
  id: z.string(),
  serie: z.string(),
  nome: z.string().min(1).max(1),
  turno: z.string(),
  status: z.string(),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    dateOfBirth?: string[];
    profileImage?:string[]
    password?:string[]
  };
  message?: string | null;
};

export type StateClass = {
  errors?: {
    serie?: string[];
    nome?: string[];
    turno?: string[];
    status?:string[]
    
  };
  message?: string | null;
};


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}


const CreateTeacher = FormSchema.omit({ id: true});
 

export async function createTeacher(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateTeacher.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    dateOfBirth: formData.get('dateOfBirth'),
    profileImage: formData.get('profileImage'),
    password:formData.get('password'),

  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
 
  const { name, email, dateOfBirth,password,profileImage} = validatedFields.data;
  // const dateOfBirthteste = new Date(dateOfBirth)
  
  const dataTeacher:CreateTeacherType =  { 
  nome:name,
  email,
  data_nascimento:dateOfBirth,
  senha:password
  }

 
  // // Insert data into the database
  try {
    await fetchCreateTeacher(dataTeacher,profileImage)
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  // // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/teacher');
  redirect('/dashboard/teacher');
}

// const UpdateInvoice = FormSchema.omit({ id: true, date: true });
 
// // ...

// export async function updateInvoice(
//   id: string,
//   prevState: State,
//   formData: FormData,
// ) {
//   const validatedFields = UpdateInvoice.safeParse({
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   });
 
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Missing Fields. Failed to Update Invoice.',
//     };
//   }
 
//   const { customerId, amount, status } = validatedFields.data;
//   const amountInCents = amount * 100;
 
//   try {
//     await sql`
//       UPDATE invoices
//       SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
//       WHERE id = ${id}
//     `;
//   } catch (error) {
//     return { message: 'Database Error: Failed to Update Invoice.' };
//   }
 
//   revalidatePath('/dashboard/invoices');
//   redirect('/dashboard/invoices');
// }

export async function deleteInvoice(id: string) {
  console.log(id)
  try {
    const teacherRemove  = await deleteTeacherFetch(id)
    console.log(teacherRemove)
    revalidatePath('/dashboard/teacher');
    return { message: 'Professor removido.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete teacher.' };
  }
}



const dataClassValidate = FormSchemaClass.omit({ id: true});

export async function createClass(prevState: StateClass, formData: FormData) {
  // Validate form using Zod
  console.log(typeof(formData.get('serie')))
  const validatedFields = dataClassValidate.safeParse({
    serie: formData.get('serie'),
    nome: formData.get('nome'),
    turno: formData.get('turno'),
    status: formData.get('status'),
  });
  console.log(validatedFields.error)
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
 console.log('oi')
  let { serie, nome, turno,status} = validatedFields.data;
  nome = nome.toUpperCase()
  const serie1 = Number(serie)
console.log(serie1)
console.log(status)

  const dataClass:CreateClassType =  { 
  serie:serie1,
  nome:nome,
  turno:turno,
  status:status
  }

  const codigoInep = 22110666 
 
  // // Insert data into the database
  try {
    await fetchCreateClass(dataClass,codigoInep)
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  // // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/class');
  redirect('/dashboard/class');
}
