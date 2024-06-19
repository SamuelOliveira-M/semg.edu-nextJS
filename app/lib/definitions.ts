
export type SchollClass = {
  id:string
  nome: string
  serie: number
  turno: string
  status:string
  escolaId: string
  ano_letivoId: string
  ano_letivo: SchollClassYear;
}

export type CreateClassType = {
  serie: number
  nome: string 
  turno: string
  status: string
}

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
  id:string
  data_inicio:string
}

export type RegistrationTable = {
  id: string;
  numero_matricula: string;
  status: string;
  escolaId:string;
  turmaId: string;
  alunoId: string;
  aluno:Studant
  turma: SchollClass
};

export type Studant = {
  id:string
  nome : string
	data_nascimento: Date
	municipio_nascimento: string
  uf_nascimento: string
	cpf: string
  url_image:string
  responsavelId:string
  addressId:string
  responsavel:Responsible
  address:Address
  
}

export type RegistrationList = {
  id: string;
  numero_matricula: string;
  status: string;
  escolaId:string;
  turmaId: string;
  alunoId: string;
  aluno:Studant
}

export type Responsible = {
  id:string,
  nome_pai: string,
	nome_mae: string,
	telefone: number,
	telefone_secundario: void
}

export type Address = {
  id:string,
  rua:string ,
  cidade:string,
  estado:string,
  cep: string
}
export type Note = {
  id:string
	nota:number
	mes:number
  recuperacao:boolean
	disciplinaId: string
	matriculaId: string
	disciplina: Disciplina
}

export type DisciplinaNotas ={
  materia: string;
  [mes: number]: { nota: number; recuperacao: boolean };
}
export type Media = {
  media:number
  quantidadeNotas:number
}

export type SubjectOfGrade = {
  materia: string;
  aprovacao:string;
  marco: number;
  abril: number;
  maio: number;
  junho: number;
  recup1: number;
  agosto: number;
  setembro: number;
  outubro: number;
  novembro: number;
  recup2: number;
  media: number;
	provaFinal: number;
}

export type Avaliacao = {
  id: string,
  tipo: string,
  nota: number,
  mes: number,
  semestre: number
}

export type Disciplina = {
  id:string,
  nome:string ,
  carga_horaria:number
}

export type Teacher = {
  id: string      
  nome: string
  cpf?: string 
  email: string
  senha: string
  data_nascimento: Date  
  url_image:string  
}
export type CreateTeacherType = {
  nome: string
  cpf?: string 
  email: string
  senha: string
  data_nascimento: string
  // file: object
}

export type SubjectOfTeacher = {
  professor:{
    id: string,
    nome: string,
    email:string,
    url_image:string,
    disciplinasTurmas:[{
      disciplina: {
        id: string,
        nome:string
      }   
    }]
  },
}

export type Subject = {
  id: string
  nome: string
  carga_horaria: number
}

export type TeacherClasses = {
  turma: SchollClass
}

export type IDataStatistics = {
  studantAll: number,
	teacherAll:number,
	schollClassAll:number,
	dropout:number
};


export type ICalendar = { 
  calendario: {
    diaSemana: string,
    aulas: [
      {
        lotacao: {
          professor: {
            nome: string
          },
          disciplina: {
            nome: string
          }
        },
        horario: {
          horarioInicio: string,
          horarioFim: string
        }
      }
    ]
  }
}

export type StudantPerformanceSheet = {
  redimento: [
		{
			id: string,
			nome: string,
      avaliacao: [
        {
          id: string | null,
          nota: number,
          mes: number,
          semestre: string | null,
          tipo: string | null
        }
      ],
      media: number,
      status:string
    }
  ]
};




export type User = {
  id:string
	nome: string,
	senha: string
	isAdmin:boolean
	accessToken : string
	idRefreshToken: string,
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



