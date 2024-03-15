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
import notFound from "@/app/dashboard/teacher/[id]/edit/not-found";

export default async function ListDescription({ id }: {id:string}){

	const profileDate =  await studantProfile(id)
  const img:string = profileDate.aluno.url_image

	if (!profileDate) {
    notFound();
  }

	return(
		<>
			<div className="flex flex-col sm:flex-row items-center m-8 ">
        <Suspense fallback={<p>....</p>}>
          <ProfilePicture imageUrl={img}/>
        </Suspense>
				<div>
					<h1 className="text-2xl mb-1  font-bold">{ formatText(profileDate.aluno.nome) } Oliveira de Moura</h1>
					<p className="text-sm">{formatCpf(profileDate.aluno.cpf)} </p>
				</div>
      </div>

			<dl className="w-full mb-10 list-none ">
				<Grid numItemsSm={2} numItemsLg={30} className="gap-6">
					<div className="list-item flex-basis-50 border-b ">
						<dt>Data Nascimento:</dt>
						<dd className="pl-2 text-sm">
						{formatDateToBirth(profileDate.aluno.data_nascimento)}
						</dd>
					</div>
					<div className="list-item flex-basis-50 border-b ">
						<dt>Naturalidade:</dt>
						<dd className="pl-2 text-sm">
							{formatlocality(
								profileDate.aluno.municipio_nascimento,
								profileDate.aluno.uf_nascimento
							)}
						</dd>
					</div>
					<div className="list-item flex-basis-50 border-b ">
						<dt>Matrícula:</dt>
						<dd className="pl-2 text-sm">
							{profileDate.numero_matricula}
						</dd>
					</div>
					<div className="list-item flex-basis-50 border-b ">
						<dt>Localidade:</dt>
						<dd className="pl-2 text-sm">
							{formatText(profileDate.aluno.address.rua)} 
						</dd>
					</div>
					<div className="list-item flex-basis-50 border-b ">
						<dt>Nome do pai:</dt>
						<dd className="pl-2 text-sm">
							{formatText(profileDate.aluno.responsavel.nome_pai)}
						</dd>
					</div>
					<div className="list-item flex-basis-50 border-b ">
						<dt>Nome da mãe:</dt>
						<dd className="pl-2 text-sm">
							{formatText(profileDate.aluno.responsavel.nome_mae)} 
						</dd>
					</div>
					<div className="list-item flex-basis-50 border-b ">
						<dt>Turma:</dt>
						<dd className="pl-2 text-sm">
							{profileDate.turma.nome}
						</dd>
					</div>
					<div className="list-item flex-basis-50 border-b ">
						<dt>Ano Letivo:</dt>
						<dd className="pl-2 text-sm">
							{formatDateToLocal(profileDate.turma.ano_letivo.data_inicio)}
						</dd>
					</div>
				</Grid>
			</dl>
		</>
	)
}


      