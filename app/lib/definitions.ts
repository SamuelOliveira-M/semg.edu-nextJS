
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
  cpf: string 
  email: string
  senha: string
  data_nascimento: Date  
  url_image:string  
}

export type SubjectOfTeacher = {
  disciplinasTurmas:[{
    professor:Teacher,
    disciplina: Disciplina
  }
  ]
}

export type TeacherClasses = {
  professor:Teacher,
  disciplinasTurmas:[{
    turma: SchollClass
  }]
}
