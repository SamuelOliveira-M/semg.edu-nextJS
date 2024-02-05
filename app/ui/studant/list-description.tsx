import { Grid } from "@tremor/react"
import { studantProfile } from "@/app/lib/api"
import {
	formatDateToBirth,
	formatlocality,
	formatCpf,
	formatText
} from "@/app/lib/utils"

export default async function ListDescription({ id }: {id:string}){

	const profileDate =  await studantProfile(id)
		
	return(
		<dl className="w-full mb-10 list-none ">
			<Grid numItemsSm={2} numItemsLg={30} className="gap-6">
				<div className="list-item flex-basis-50 border-b ">
					<dt>Nome:</dt>
					<dd className="pl-2 text-sm">
						{ formatText(profileDate.aluno.nome) }
					</dd>
				</div>
				<div className="list-item flex-basis-50 border-b ">
					<dt>Data Nascimento::</dt>
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
					<dt>Cpf:</dt>
					<dd className="pl-2 text-sm">
						{formatCpf(profileDate.aluno.cpf)}
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
						{profileDate.turma.ano_letivo.data_inicio}
					</dd>
				</div>
			</Grid>
		</dl>
	)
}


      