// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.



export type User = {
  id: string;
  nome: string;
  email: string;
  senha: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};
export type SchollClassTable = {
  id: string;
  nome: string;
  serie: number;
  status:string;
  turno: string;
  ano_letivo: SchollClassYear;
  matriculas:RegistrationTable[];
   
};

export type SchollClassYear = {
  data_inicio:string
}

export type RegistrationTable = {
  id: string;
  numero_matricula: string;
  status: string;
  escolaId:string;
  turmaId: string;
  alunoId: studant;
  aluno:studant
};

export type studant = {
  nome : string
	data_nascimento: Date
	municipio_nascimento: string
  uf_nascimento: string
	cpf: string
  url_image:string
  responsavelId:string
  addressId:string
}






export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
