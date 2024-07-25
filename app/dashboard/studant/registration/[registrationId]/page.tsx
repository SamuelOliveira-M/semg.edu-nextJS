import ListDescription from "@/app/ui/studant/list-description"; 
import LinhaGrade from "@/app/ui/studant/table-records";
import BannerStudant from "@/app/ui/studant/banner-studant";
import { studantProfile } from "@/app/lib/api"

export default async function Page({ params }: { params: { registrationId: string } }) {
  
  const id = params.registrationId

	const profileDate =  await studantProfile(id)

  return (
    <main>
      
      <BannerStudant profileDate={profileDate}></BannerStudant>

      <ListDescription personalData={profileDate}></ListDescription>
      
      <h2 className="mb-6 text-xl md:text-1xl"><strong>Redimento</strong></h2>
      <LinhaGrade id={id}></LinhaGrade>
      
      <td className="whitespace-nowrap py-3 pl-6 pr-3">    
      </td>
    </main>
  )  
}

