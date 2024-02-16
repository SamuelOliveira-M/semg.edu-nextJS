import { Suspense } from "react";
import ProfilePicture from "@/app/ui/profile-picture";
import { uniqueFetchRegistrationById } from "@/app/lib/api";
import notFound from "@/app/dashboard/teacher/[id]/edit/not-found";
import TableRecord from "@/app/ui/studant/table-record";
import ListDescription from "@/app/ui/studant/list-description"; 

export default async function Page({ params }: { params: { id: string } }) {
  
  const id = params.id;   

  return (
    <main>

      <h2 className="mb-6 text-xl md:text-1xl"><strong>Dados Pessoais</strong></h2>
      <ListDescription id={id}></ListDescription>
      
      <h2 className="mb-6 text-xl md:text-1xl"><strong>Redimento</strong></h2>
      <TableRecord id={id}></TableRecord>
      
      <td className="whitespace-nowrap py-3 pl-6 pr-3">    
      </td>
    </main>
  )  
}

