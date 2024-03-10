import { Grid } from "@tremor/react"
import { reqTeacher } from "@/app/lib/api"
import {
	formatDateToBirth,
	formatlocality,
	formatCpf,
	formatText,
	formatDateToLocal
} from "@/app/lib/utils"
import { Suspense } from "react";
import ProfilePicture from "@/app/ui/profile-picture";
import notFound from "@/app/dashboard/teacher/[id]/edit/not-found";

export default async function ListDescription({ id }: {id:string}){

	const profileTeacher =  await reqTeacher(id)
  
	
	if (!profileTeacher) {
    notFound();
  }

	return(
		<>
			<div className="flex justify-end items-center">
        <Suspense fallback={<p>....</p>}>
          <ProfilePicture imageUrl={profileTeacher.url_image}/>
        </Suspense>
      </div>

			<dl className="w-full mb-10 list-none ">
				<Grid numItemsSm={2} numItemsLg={30} className="gap-6">
					<div className="list-item flex-basis-50 border-b ">
						<dt>Nome:</dt>
						<dd className="pl-2 text-sm">
							{ formatText(profileTeacher.nome) }
						</dd>
					</div>
					<div className="list-item flex-basis-50 border-b ">
						<dt>Data Nascimento:</dt>
						<dd className="pl-2 text-sm">
						{formatDateToBirth(profileTeacher.data_nascimento)}
						</dd>
					</div>
					<div className="list-item flex-basis-50 border-b ">
						<dt>Matrícula:</dt>
						<dd className="pl-2 text-sm">
							{profileTeacher.email}
						</dd>
					</div>
					<div className="list-item flex-basis-50 border-b ">
						<dt>Cpf:</dt>
						<dd className="pl-2 text-sm">
							{formatCpf(profileTeacher.cpf)}
						</dd>
					</div>
				</Grid>
			</dl>
		</>
	)
}


      