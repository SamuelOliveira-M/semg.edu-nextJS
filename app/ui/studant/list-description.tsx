import { Grid } from "@tremor/react"
import { studantProfile } from "@/app/lib/api"
import {
	formatDateToBirth,
	formatlocality,
	formatCpf,
	formatText,
	formatDateToLocal
} from "@/app/lib/utils"
import { Suspense } from "react";
import ProfilePicture from "@/app/ui/profile-picture";
import BannerStudant from "./banner-studant";

export default async function ListDescription({ id }: {id:string}){

	const profileDate =  await studantProfile(id)

	return(
		<>
				
			<BannerStudant profileDate={profileDate}></BannerStudant>

			<dl className="w-full p-6 mb-10 list-none ">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Data Nascimento:</dt>
						<dd className="text-sm">
						{formatDateToBirth(profileDate.aluno.data_nascimento)}
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Naturalidade:</dt>
						<dd className="text-sm">
							{formatlocality(
								profileDate.aluno.municipio_nascimento,
								profileDate.aluno.uf_nascimento
							)}
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Matrícula:</dt>
						<dd className="text-sm">
							{profileDate.numero_matricula}
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Localidade:</dt>
						<dd className="text-sm">
							{formatText(profileDate.aluno.address.rua)} 
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Nome do pai:</dt>
						<dd className="text-sm">
							{formatText(profileDate.aluno.responsavel.nome_pai)}
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Nome da mãe:</dt>
						<dd className="text-sm">
							{formatText(profileDate.aluno.responsavel.nome_mae)} 
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Turma:</dt>
						<dd className="text-sm">
							{profileDate.turma.nome}
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Ano Letivo:</dt>
						<dd className="text-sm">
							{formatDateToLocal(profileDate.turma.ano_letivo.data_inicio)}
						</dd>
					</div>
				</div>
			</dl>
		</>
	)
}


      