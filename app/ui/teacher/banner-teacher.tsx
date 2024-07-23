import { reqTeacher } from "@/app/lib/api"
import { formatText } from "@/app/lib/utils"
import { Suspense } from "react";
import ProfilePicture from "@/app/ui/profile-picture";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default async function BannerTeacher({ id }: {id:string}){

	const profileDate =  await reqTeacher(id)
  const img:string = profileDate.url_image

	return(
		<>
			<div className="bg-gray-50 shadow-lg p-4 rounded-lg mb-8 flex justify-center sm:justify-between">
				
				<div className="flex flex-col sm:flex-row items-center p-4">
					<div className="mr-2">
						<Suspense fallback={<p>....</p>}>
							<ProfilePicture imageUrl={img}/>
						</Suspense>
					</div>
					
					<div className="">
						<h1 className="text-2xl font-bold text-center sm:text-start">{ formatText(profileDate.nome) }</h1>
						<div className="flex justify-center sm:justify-start">
							<EnvelopeIcon className="w-5 mr-1 text-gray-500"></EnvelopeIcon>
							<p className="text-sm">{profileDate.email} </p>
						</div>
					</div>

				</div> 
				<div className="hidden lg:block flex-shrink-0 ml-4 ">
        <Image 
          src="/arvore.png" 
          alt="Imagem da turma" 
          width={120}
          height={120}
        />
      </div>
			</div>
		</>
	)
}