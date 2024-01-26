import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
import { SchollClassTable } from './definitions';



export async function POST(email:string) {

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