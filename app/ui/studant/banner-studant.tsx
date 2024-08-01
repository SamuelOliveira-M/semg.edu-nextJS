import { formatText } from "@/app/lib/utils"
import { Suspense } from "react";
import ProfilePicture from "@/app/ui/profile-picture";
import { StudantTable } from "@/app/lib/definitions";
import { formatCpf } from "@/app/lib/utils";
import { LongProfilePlaceholder } from "../ProfilePlaceholder";

export default async function BannerStudant({ profileDate }: {profileDate:StudantTable}){

	
	if(!profileDate || !profileDate.url_image){
		return (
			<div className="pt-4 pb-4 pr-10 pl-10 mb-8 bg-blue-300 rounded-lg flex flex-col lg:flex-row justify-between items-center">
				<div className="mb-4 lg:pt-0 text-center md:text-start">
					<h1 className="text-2xl mb-1  font-bold">{ formatText(profileDate.nome) }</h1>
					<p className="text-sm">{formatCpf(profileDate.cpf)} </p>
				</div>
				<Suspense fallback={<p>....</p>}>
					<LongProfilePlaceholder/>
				</Suspense>
			</div> 
		)
	}
	return(
		<>
			<div className="pt-4 pb-4 pr-10 pl-10 mb-8 bg-blue-300 rounded-lg flex flex-col lg:flex-row justify-between items-center">
				<div className="mb-4 lg:pt-0 text-center md:text-start">
					<h1 className="text-2xl mb-1  font-bold">{ formatText(profileDate.nome) }</h1>
					<p className="text-sm">{formatCpf(profileDate.cpf)} </p>
				</div>
				<Suspense fallback={<p>....</p>}>
					<ProfilePicture imageUrl={profileDate.url_image}/>
				</Suspense>
			</div> 
		</>
	)
}