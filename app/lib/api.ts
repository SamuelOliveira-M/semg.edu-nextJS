import { unstable_noStore as noStore } from 'next/cache';
import {
  RegistrationTable,
  SchollClassTable,
  SubjectOfGrade,
} from './definitions';

export async function login(email:string) {

  const res = await fetch('http://localhost:3333/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email}),
  });

  const data = await res.json();

  return data;
}




export async function   POST(email:string) {

  const res = await fetch('http://localhost:3333/professo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email}),
  });

  const data = await res.json();

  return data;
}


const ITEMS_PER_PAGE = 14
export async function fetchFilteredClass(
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const schoolClass = await fetch('http://localhost:3333/class', {
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
    const res = await fetch(`http://localhost:3333/studante/${id}`, {
      method: 'GET',
    });
  
    const data:RegistrationTable= await res.json();
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function uniqueFetchRegistrationById(id:string){
  try{
    const res = await fetch(`http://localhost:3333/profile/${id}`, {
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
    const res = await fetch(`http://localhost:3333/profile/${id}`, {
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
    const res = await fetch(`http://localhost:3333/avaliacao/${id}`, {
      method: 'GET',
    });
  
    const data:SubjectOfGrade[] = await res.json();
    
    return data;
  
  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}