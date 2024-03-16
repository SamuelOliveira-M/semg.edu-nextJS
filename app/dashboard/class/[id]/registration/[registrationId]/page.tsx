import ListDescription from "@/app/ui/studant/list-description"; 
import LinhaGrade from "@/app/ui/studant/table-records";


export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id;   

  return (
    <main>

      <ListDescription id={id}></ListDescription>
      
      <h2 className="mb-6 text-xl md:text-1xl"><strong>Redimento</strong></h2>
      <LinhaGrade id={id}></LinhaGrade>
      
      <td className="whitespace-nowrap py-3 pl-6 pr-3">    
      </td>
    </main>
  )  
}

