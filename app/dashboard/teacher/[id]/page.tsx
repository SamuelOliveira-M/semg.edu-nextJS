import ListDescription from "@/app/ui/teacher/list-description"; 
import InvoicesCard from "@/app/ui/class/cards";
import SchoolClassCard from "@/app/ui/teacher/teacher-classses-cards";

export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id;   

  return (
    <>
    <h1>Tela Com todos os alunos e as disciplinas da quele profesor na quela turma </h1>
    </>
  )  
}

