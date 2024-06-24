'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { CreateStudantType } from './definitions';
import { CreateTeacherType,CreateClassType } from './definitions';
import {
  fetchCreateTeacher,
  deleteTeacherFetch,
  deleteClassFetch,
  fetchCreateClass,
  fetchCreateRegistration,
  AllocationTeacher,
  deleteStudantFetch,
  fetchCreateStudant,
} from './api';

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

const FormSchemaRegistration = z.object({
  classId:z.string(),
  alunoId: z.string(),
  status: z.string(),
});

const FormSchemaStudant = z.object({
  id: z.string(),
  studantName: z.string().min(3).max(80),
  dateOfBirth: z.string(),
  cityOfBirth: z.string(),
  ufBirth: z.string(),
  cpf: z.string(),
  locality: z.string(),
	city: z.string(),
  uf: z.string(),
  cep: z.string(),
  fatherName: z.string(),
  motherName: z.string(),
  firstPhone: z.string(),
  secondPhone:z.string(),
  profileImage:z.any()
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

export type StateRegistration = {
  errors?: {
    status?: string[];
    alunoId?: string[];
  };
  message?: string | null;
};

export type StateStudant = {
  errors?: {
    studantName?: string[];
    dateOfBirth?: string[];
    cityOfBirth?: string[]; 
  	ufBirth?: string[];
  	cpf?: string[];
  	locality?: string[];
		fatherName?: string[];
  	motherName?: string[];
  	firstPhone?: string[];
  	secondPhone?:string[];
  };
  message?: string | null ;
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

export async function deleteTeahcer(id: string) {
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
  const validatedFields = dataClassValidate.safeParse({
    serie: formData.get('serie'),
    nome: formData.get('nome'),
    turno: formData.get('turno'),
    status: formData.get('status'),
  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  let { serie, nome, turno,status} = validatedFields.data;
  nome = nome.toUpperCase()
  const serie1 = Number(serie)

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

export async function deleteClass(id: string) {
  try {
    const teacherRemove  = await deleteClassFetch(id)
    revalidatePath('/dashboard/class');
    return { message: 'Turma removido.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete teacher.' };
  }
}



export async function createRegistration(prevState: StateRegistration, formData: FormData) {
  const validatedFields = FormSchemaRegistration.safeParse({
    classId: formData.get('classId'),
    alunoId: formData.get('alunoId'),
    status: formData.get('status'),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const {alunoId,status,classId} = validatedFields.data;
  const codigoInep = '22110666' 
  console.log(status)
  const dataRegistration =  { 
    
    "status": status,
    "escola":codigoInep,
    "idTurma":classId,
    "alunoId":alunoId
  }

 
  // // Insert data into the database
  try {
    await fetchCreateRegistration(dataRegistration)
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  // // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath(`/dashboard/class/${classId}`);
  redirect(`/dashboard/class/${classId}`);
}


export async function allocationTeacher(prevState: StateClass, formData: FormData) {
  
  const validatedFields = {
    classId: formData.get('classId'),
    professorId: formData.get('professorId'),
    subjectId: formData.get('subjectId'),
  };
  
  const { classId, professorId, subjectId} = validatedFields;
  
  const dataAllocation =  { 
  'classId':classId,
  'teacherId':professorId,
  'subjectId':subjectId,
  }
  console.log(dataAllocation)
  // // Insert data into the database
  try {
    await AllocationTeacher(dataAllocation)
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

export async function deleteStudant(id: string) {
  try {
    const teacherRemove  = await deleteStudantFetch(id)
    revalidatePath('/dashboard/studant');
    return { message: 'Professor removido.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete teacher.' };
  }
}

const newSchemaStudant = FormSchemaStudant.omit({ id: true});
 
export async function createStudant(prevState: StateStudant, formData: FormData) {
  // Validate form using Zod
  const validatedFields = newSchemaStudant.safeParse({
    studantName: formData.get('studantName'),
    dateOfBirth: formData.get('dateOfBirth'),
    cityOfBirth:formData.get('cityOfBirth'),  
  	ufBirth: formData.get('ufBirth'),
  	cpf: formData.get('cpf'),
  	locality: formData.get('locality'),
		city: formData.get('city'),
    uf: formData.get('uf'),
    cep: formData.get('cep'),
    fatherName: formData.get('fatherName'),
    motherName: formData.get('motherName'),
    firstPhone: formData.get('firstPhone'),
    secondPhone: formData.get('secondPhone'),
    profileImage: formData.get('profileImage')
  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
 
  const { 
		studantName,
		dateOfBirth,
		cityOfBirth,
		ufBirth,
		cpf,
		locality,
		city,
		uf,
		cep,
		fatherName,
		motherName,
		firstPhone,
		secondPhone,
		profileImage,
	
	} = validatedFields.data;
  
	const dataStudant:CreateStudantType = {
    dataStudent: {
      nome: studantName,
      data_nascimento: dateOfBirth,
      municipio_nascimento: cityOfBirth,
      uf_nascimento: ufBirth,
      cpf: cpf
    },
    dataAddress: {
      rua: locality,
      cidade: city,
      estado: uf,
      cep: cep
    },
    dataResponsibile: {
      nome_pai: fatherName,
      nome_mae: motherName,
      telefone_secundario:secondPhone,
      telefone: firstPhone
    }
  }
  // // Insert data into the database
  try {
    const studants = await fetchCreateStudant(dataStudant,profileImage)
    
    if(typeof studants === 'object' ){
      return { message: `${studants.message}`,}
    }

    if(!studants.data){

      
      let errorMessageString = "";

      for (const student of studants) {
        if (student.error) {
          errorMessageString += `${student.message},\n`;
        }
      } 

      return {
        message: `${errorMessageString}`,
      }
    }

      // // Revalidate the cache for the invoices page and redirect the user.
    revalidatePath('/dashboard/studant');
    redirect('/dashboard/studant');
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 

}