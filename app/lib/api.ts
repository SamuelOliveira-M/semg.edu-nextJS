import { unstable_noStore as noStore } from 'next/cache';
import {
  RegistrationTable,
  SchollClassTable,
  SubjectOfGrade,
  Teacher,
  SubjectOfTeacher,
  TeacherClasses,
  IDataStatistics,
  ICalendar,
  StudantPerformanceSheet,
  CreateTeacherType,
  CreateClassType,
  Studant,
  SchollClass,
  Subject,
  CreateStudantType,
  ResponseApi,
} from './definitions';



export async function login(email:string) {

  const res = await fetch(`${process.env.API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email}),
  });

  const data = await res.json();

  return data;
}




export async function POST(email:string,senha:string) {
  try{
    const res = await fetch(`${process.env.API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email,senha}),
    });

    const data = await res.json();
    return data;
  }  
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}


export async function fetchFilteredClass() {
  
  noStore();
  
  try {
    const schoolClass = await fetch(`${process.env.API_URL}/class`, {
      method: 'GET',
    });
    
    const data:SchollClassTable[] = await schoolClass.json();
    return (data);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchRegistrationById(id:string){
  noStore()
  try{
    const res = await fetch(`${process.env.API_URL}/studantee/${id}`, {
      method: 'GET',
    });
  
    const data:RegistrationTable[]= await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function uniqueFetchRegistrationById(id:string){
  try{
    const res = await fetch(`${process.env.API_URL}/profile/${id}`, {
      method: 'GET',
    });
    
    const data1 = await res.json();
    const data:RegistrationTable = data1[0]

    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function studantProfile(id:string){
  noStore();
  try{
    const res = await fetch(`${process.env.API_URL}/profile/${id}`, {
      method: 'GET',
    });
  
    const data:RegistrationTable = await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function allStudants(){
  noStore()
  try{
    const res = await fetch(`${process.env.API_URL}/studants`, {
      method: 'GET',
    });
  
    const data:Studant[] = await res.json();
    console.log(data)
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Erro desconhecido, tente mais tarde !');
  }
}

export async function studantProfileNotes(id:string){
  try{
    const res = await fetch(`${process.env.API_URL}/avaliacaos/${id}`, {
      method: 'GET',
    });
  
    const data:StudantPerformanceSheet = await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function reqTeachers(){
  noStore()
  try{
    const res = await fetch(`${process.env.API_URL}/teacherstt`, {
      method: 'GET',
    });
  
    const data:Teacher[] = await res.json();
    
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function reqTeacher(id:string){
  try{
    const res = await fetch(`${process.env.API_URL}/teacherProfile/${id}`, {
      method: 'GET',
    });
  
    const data:Teacher = await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function readSubjects(){
  try{
    const res = await fetch(`${process.env.API_URL}/subjects`, {
      method: 'GET',
    });
  
    const data:Subject[] = await res.json();
    return data;
    
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}


export async function reqSubjectAndTeacher(id:string){
  try{
    const res = await fetch(`${process.env.API_URL}/teachers-subjects/${id}`, {
      method: 'GET',
    });
  
    const data:SubjectOfTeacher[] = await res.json();
    console.log(data)
    return data;
    
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function test(id:string){
  try{
    const res = await fetch(`${process.env.API_URL}/tumasdoprofessorrr/${id}`, {
      method: 'GET',
    });
  
    const data:TeacherClasses[]= await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function getStatistics() {
  noStore()
  try{
    const res = await fetch(`${process.env.API_URL}/getStatistics`, {
      method: 'GET',
    });
  
    const data:IDataStatistics= await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchCreateTeacher(formDataToSend:CreateTeacherType, profileImage:any) {
  noStore()
  var formData = new FormData();

  formData.append('file', profileImage);
  formData.append('data', JSON.stringify(formDataToSend));
  
  console.log(formData)

  try{
    const res = await fetch(`${process.env.API_URL}/create/professor`, {
      method: 'POST',
      body: formData
    });
  
    const data= await res.json();
    console.log(data)
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function deleteTeacherFetch(id:string){
  noStore();
  try{
    const res = await fetch(`${process.env.API_URL}/remove/teacher/${id}`, {
      method: 'DELETE',
    });
    
    const data= await res.json();
    console.log(data)
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function deleteStudantFetch(id:string){
  try{
    const res = await fetch(`${process.env.API_URL}/remove/studant/${id}`, {
      method: 'DELETE',
    });
  
    const data= await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}


export async function getCalendar(classId:string) {
  try{
    const res = await fetch(`${process.env.API_URL}/calendar/${classId}`, {
      method: 'GET',
    });
  
    const data:ICalendar[]= await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchCreateClass(dataClass:CreateClassType, cod_inep:any) {
  noStore()
  try{
    const res = await fetch(`${process.env.API_URL}/create/turma/${cod_inep}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataClass),
    });
  
    const data = await res.json();
    console.log(data +' ss')
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function deleteClassFetch(id:string){
  try{
    const res = await fetch(`${process.env.API_URL}/remove/class/${id}`, {
      method: 'DELETE',
    });
  
    const data= await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function readClassUniqueFetch(id:string){
  noStore()
  try{
    const res = await fetch(`${process.env.API_URL}/class/${id}`, {
      method: 'GET',
    });
  
    const data:SchollClass = await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}


export async function readNoRegistration(){
  noStore()
  try{
    const res = await fetch(`${process.env.API_URL}/studant/noClasses`, {
      method: 'GET',
    });
  
    const data:Studant[]= await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}


export async function fetchCreateRegistration(dataRegistration:any) {

  try{
    const res = await fetch(`${process.env.API_URL}/matricular`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRegistration),
    });

  
    const data = await res.json();
    console.log(data)
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function AllocationTeacher(dataRegistration:any) {
  noStore()
  try{
    const res = await fetch(`${process.env.API_URL}/allocation/teacher`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRegistration),
    });
  
    const data = await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchCreateStudant(formDataToSend:CreateStudantType, profileImage:any):Promise<ResponseApi> {
  noStore()
  var formData = new FormData();

  formData.append('file', profileImage);
  formData.append('data', JSON.stringify(formDataToSend));
  
  try{
    const res = await fetch(`${process.env.API_URL}/aluno/create`, {
      method: 'POST',
      body: formData
    });
  
    const data = await res.json();
    console.log(data)
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}
