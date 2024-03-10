import ListDescription from "@/app/ui/teacher/list-description"; 
import InvoicesCard from "@/app/ui/class/cards";
import SchoolClassCard from "@/app/ui/teacher/teacher-classses-cards";

export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id;   

  return (
    <main>

      <h2 className="mb-6 text-xl md:text-1xl"><strong>Perfil do Professor</strong></h2>
      <ListDescription id={id}></ListDescription>
      
      <h2 className="mb-6 text-xl md:text-1xl"><strong>Turmas</strong></h2>
      <SchoolClassCard id={id}></SchoolClassCard>
      
      
      <td className="whitespace-nowrap py-3 pl-6 pr-3">    
      </td>
    </main>
  )  
}

