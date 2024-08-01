import {
	formatDateToBirth,
	formatlocality,
	formatText,
	formatDateToLocal
} from "@/app/lib/utils"

import { StudantTable } from "@/app/lib/definitions"

export default async function ListDescription({ personalData }: {personalData:StudantTable}){

	return(
		<>
			<dl className="w-full p-6 mb-10 list-none ">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Data Nascimento:</dt>
						<dd className="text-sm">
						{formatDateToBirth(personalData.data_nascimento)}
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Naturalidade:</dt>
						<dd className="text-sm">
							{formatlocality(
								personalData.municipio_nascimento,
								personalData.uf_nascimento
							)}
						</dd>
					</div>
					
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Localidade:</dt>
						<dd className="text-sm">
							{formatText(personalData.address.rua)} 
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Nome do pai:</dt>
						<dd className="text-sm">
							{formatText(personalData.responsavel.nome_pai)}
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Nome da mãe:</dt>
						<dd className="text-sm">
							{formatText(personalData.responsavel.nome_mae)} 
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Matrícula:</dt>
						<dd className="text-sm">
							{personalData.matricula.numero_matricula ?  (personalData.matricula.numero_matricula):('Sem matricula')}
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Turma:</dt>
						<dd className="text-sm">
							{personalData.matricula.turma.nome}
						</dd>
					</div>
					<div className="list-item flex-basis-50 ">
						<dt className="font-bold">Ano Letivo:</dt>
						<dd className="text-sm">
							{formatDateToLocal(personalData.matricula.turma.ano_letivo.data_inicio)}
						</dd>
					</div>
				</div>
			</dl>
		</>
	)
}


      