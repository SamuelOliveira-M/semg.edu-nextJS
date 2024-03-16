import { reqTeacher } from "@/app/lib/api"
import { formatText } from "@/app/lib/utils"
import { Suspense } from "react";
import ProfilePicture from "@/app/ui/profile-picture";
import notFound from "@/app/dashboard/teacher/[id]/edit/not-found";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Grid } from '@tremor/react';

export default async function BannerTeacher({ id }: {id:string}){

	const profileDate =  await reqTeacher(id)
  const img:string = profileDate.url_image

	if (!profileDate) {
    notFound();
  }

	return(
		<>
			<div className="bg-gray-50 shadow-lg p-4 rounded-lg mb-8 flex flex-col sm:flex-row border-r-2">
				<div className="flex flex-col sm:flex-row items-center p-4 border-r-0 sm:border-r">
					<Suspense fallback={<p>....</p>}>
						<ProfilePicture imageUrl={img}/>
					</Suspense>
					<div className="ml-8">
						<h1 className="text-2xl mb-1  font-bold">{ formatText(profileDate.nome) } Oliveira de Moura</h1>
						<p className="text-sm">{profileDate.email} </p>
						<EnvelopeIcon className="w-5 text-gray-500"></EnvelopeIcon>
					</div>
				</div> 
			</div>
		</>
	)
}