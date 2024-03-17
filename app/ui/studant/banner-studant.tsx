import { formatText } from "@/app/lib/utils"
import { Suspense } from "react";
import ProfilePicture from "@/app/ui/profile-picture";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { RegistrationTable } from "@/app/lib/definitions";
import { formatCpf } from "@/app/lib/utils";

export default async function BannerStudant({ profileDate }: {profileDate:RegistrationTable}){

	const img:string = profileDate.aluno.url_image

	return(
		<>
			<div className="pt-4 pb-4 pr-10 pl-10 mb-8 bg-gray-50 shadow-lg rounded-lg  flex justify-between items-center ">
				<div>
					<h1 className="text-2xl mb-1  font-bold">{ formatText(profileDate.aluno.nome) } Oliveira de Moura</h1>
					<p className="text-sm">{formatCpf(profileDate.aluno.cpf)} </p>
				</div>
				<Suspense fallback={<p>....</p>}>
					<ProfilePicture imageUrl={img}/>
				</Suspense>
			</div> 
		</>
	)
}