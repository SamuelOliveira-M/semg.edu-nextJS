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
  CreateTeacherType
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
  try{
    const res = await fetch(`${process.env.API_URL}/remove/teacher/${id}`, {
      method: 'DELETE',
    });
  
    const data= await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}